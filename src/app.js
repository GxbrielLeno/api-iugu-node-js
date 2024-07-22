const { google } = require('googleapis');
const { JWT } = require('google-auth-library');
const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { GoogleAuth } = require('google-auth-library');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Configuração do CORS
const corsOptions = {
  origin: '*', // Permitir todos os origens, ajuste conforme necessário
};

app.use(cors(corsOptions));

// Configurações
const planilhaSheet = process.env.PLANILHA;
const iuguApiKey = process.env.KEY_IUGU;

const credentials = {
  type: "service_account",
  project_id: process.env.PROJETOID,
  private_key_id: process.env.KEYID,
  private_key: process.env.KEYPRIVADEGOOGLE.replace(/\\n/g, '\n'),
  client_email: process.env.EMAILCLIENT,
  client_id: process.env.CLIENTID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/nodeplanilha%40upis-planilha.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// Configuração do cliente JWT
const client = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Rotas
app.post('/realizar-pagamento-pix', realizarPagamentoPix);
app.post('/realizar-pagamento-cartao', realizarPagamentoCartao);
app.post('/gerar-boleto', gerarBoleto);
app.get('/verificar-faturas', verificarFaturasRoute); // Rota para verificar faturas
app.post('/adicionar-dados-aluno', adicionarDadosAluno); // Nova rota para adicionar dados de aluno


// Funções de Rota
async function realizarPagamentoPix(req, res) {
  try {
    const { valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco, id } = req.body;
    const order_id = uuidv4();
    const pagamentoPix = {
      payer: {
        address: {
          zip_code: CEP,
          street: bairro,
          number: numero,
          city: cidade,
          state: estado,
          country: "BR",
          complement: "Opcional",
          district: endereco
        },
        cpf_cnpj: cpfAluno,
        name: nomeAluno + " " + sobrenomeAluno,
        email: emailAluno
      },
      items: [
        {
          description: nomeCurso,
          quantity: 1,
          price_cents: valorCursoCentavos
        }
      ],
      payable_with: ["pix"],
      email: "gabrielleno.p@gmail.com",
      due_date: new Date(),
      order_id: order_id
    };

    const response = await axios.post('https://api.iugu.com/v1/invoices', pagamentoPix, {
      headers: {
        'Authorization': `Basic ${Buffer.from(iuguApiKey).toString('base64')}`,
      },
    });

    res.status(200).json({ message: 'Pagamento Pix realizado com sucesso', data: response.data });
  } catch (error) {
    console.error('Erro ao realizar pagamento Pix:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao realizar pagamento Pix' });
  }
}

async function realizarPagamentoCartao(req, res) {
  try {
    const { number, cvv, nomecartao, mescartao, anocartao, valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco, id } = req.body;
    const order_id = uuidv4();
    const tokenDePagamento = await obterTokenDePagamento({ number, cvv, nomecartao, mescartao, anocartao });
    const base64Token = Buffer.from(iuguApiKey).toString('base64');

    const requestData = {
      payer: {
        address: {
          zip_code: CEP,
          street: bairro,
          number: numero,
          city: cidade,
          state: estado,
          country: "BR",
          complement: "Opcional",
          district: endereco
        },
        cpf_cnpj: cpfAluno,
        name: nomeAluno + ' ' + sobrenomeAluno,
        phone: telefoneAluno
      },
      items: [
        {
          description: "aaa",
          quantity: 1,
          price_cents: valorCursoCentavos
        }
      ],
      token: tokenDePagamento, // Usa o token de pagamento obtido
      order_id: order_id,
      email: emailAluno
    };

    const response = await axios.post('https://api.iugu.com/v1/charge', requestData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Token}`
      }
    });

    res.status(200).json({ message: 'Pagamento com cartão realizado com sucesso', data: response.data });
  } catch (error) {
    console.error('Erro ao fazer a cobrança:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao fazer a cobrança' });
  }
}

// Função para obter o token de pagamento
function obterTokenDePagamento(cartao) {
  const options = {
    method: 'POST',
    url: 'https://api.iugu.com/v1/payment_token',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    data: {
      data: {
        number: cartao.number,
        verification_value: cartao.cvv,
        first_name: cartao.nomecartao,
        last_name: 'opcional',
        month: cartao.mescartao,
        year: cartao.anocartao
      },
      test: false,
      method: 'credit_card',
      account_id: '59AD826E75FA462192EED494A4FC6955'
    }
  };

  return axios.request(options)
    .then(response => {
      return response.data.id; // Retorna o ID do token de pagamento
    })
    .catch(error => {
      throw new Error('Erro ao obter o token de pagamento: ' + error);
    });
}

async function gerarBoleto(req, res) {
  try {
    const { valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco } = req.body;
    const order_id = uuidv4();
    const boletoData = {
      items: [
        {
          description: nomeCurso,
          quantity: 1,
          price_cents: valorCursoCentavos
        }
      ],
      payer: {
        address: {
          zip_code: CEP,
          street: endereco,
          number: numero,
          district: bairro,
          city: cidade,
          state: estado,
          country: "BR",
          complement: "Opcional"
        },
        cpf_cnpj: cpfAluno,
        name: nomeAluno + " " + sobrenomeAluno,
        email: emailAluno,
        phone: telefoneAluno
      },
      method: "bank_slip",
      order_id: order_id,
      email: emailAluno
    };

    const response = await axios.post('https://api.iugu.com/v1/charge', boletoData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(iuguApiKey).toString('base64')}`
      }
    });

    res.status(200).json({ message: 'Boleto gerado com sucesso', data: response.data });
  } catch (error) {
    console.error('Erro ao gerar boleto:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao gerar boleto' });
  }
}

// Função de Rota: Verificar Faturas
async function verificarFaturasRoute(req, res) {
  try {
    const iuguIds = await obterIuguIdsDaPlanilha();

    if (iuguIds.length > 0) {
      console.log('IDs para verificação:', iuguIds);

      const sheets = google.sheets({ version: 'v4', auth: client });

      for (const iuguId of iuguIds) {
        const options = {
          method: 'GET',
          url: `https://api.iugu.com/v1/invoices/${iuguId}?api_token=${iuguApiKey}`,
          timeout: 10000,
          headers: { accept: 'application/json' }
        };

        const iuguResponse = await axios.request(options);
        console.log(`Status da fatura ${iuguId}: ${iuguResponse.data.status}`);

        // Encontrar a linha correspondente ao iuguId
        const range = 'Sheet1!A1:A'; // Supondo que a coluna A contém os IDs
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: planilhaSheet,
          range: range,
        });

        const rows = response.data.values || [];
        const rowIndex = rows.findIndex(row => row[0] === iuguId);

        if (rowIndex !== -1) {
          // Atualiza o campo "status" na linha correspondente
          const rowNumber = rowIndex + 1; // Ajusta o número da linha para o índice correto
          const statusRange = `Sheet1!R${rowNumber}`; // Coluna R para status

          await sheets.spreadsheets.values.update({
            spreadsheetId: planilhaSheet,
            range: statusRange,
            valueInputOption: 'RAW',
            requestBody: {
              values: [[iuguResponse.data.status]],
            },
          });

          console.log(`Status da fatura ${iuguId} atualizado com sucesso`);
        } else {
          console.log(`ID ${iuguId} não encontrado na planilha`);
        }

        // Adiciona um atraso entre as requisições, se necessário
        await delay(10000); // Aguarda 3 segundos antes da próxima iteração
      }

      console.log('Verificação de faturas concluída com sucesso');
      res.status(200).json({ message: 'Verificação de faturas concluída com sucesso' });
    } else {
      console.log('Nenhum iuguId encontrado para verificar na API da Iugu');
      res.status(200).json({ message: 'Nenhum iuguId encontrado para verificar na API da Iugu' });
    }
  } catch (error) {
    console.error('Erro ao verificar faturas:', error);
    res.status(500).json({ error: 'Erro ao verificar faturas' });
  }
}

// Função de Serviço: Obter iuguIds da Planilha
async function obterIuguIdsDaPlanilha() {
  try {
    const sheets = google.sheets({ version: 'v4', auth: client });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: planilhaSheet,
      range: 'Sheet1!A2:A', // Assumindo que a coluna A contém os IDs
    });

    if (response.data.values.length > 0) {
      const iuguIds = response.data.values.map(row => row[0]); // Obtém os IDs da primeira coluna
      return iuguIds;
    } else {
      console.log('Nenhum iuguId encontrado na planilha');
      return [];
    }
  } catch (error) {
    console.error('Erro ao obter iuguIds da planilha:', error);
    return [];
  }
}

async function adicionarDadosAluno(req, res) {
  try {
    const { iuguId, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, valorCursoCentavos, CEP, bairro, cidade, estado, numero, endereco, formaDePagamento, formaIngresso } = req.body;

    // Validação dos dados recebidos
    if (!iuguId || !nomeAluno || !sobrenomeAluno || !emailAluno) {
      return res.status(400).json({ error: 'Dados obrigatórios não fornecidos.' });
    }

    const sheets = google.sheets({ version: 'v4', auth: client });

    // Define o intervalo da planilha onde os dados serão inseridos
    const range = 'Sheet1!A34'; // Ajuste o intervalo conforme necessário

    // Monta o corpo da requisição
    const valores = [
      [iuguId, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, valorCursoCentavos, CEP, bairro, cidade, estado, numero, endereco, new Date().toISOString(), formaDePagamento, formaIngresso, 'Pagamento Pendente',]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: planilhaSheet,
      range: range,
      valueInputOption: 'RAW',
      requestBody: {
        values: valores,
      },
    });

    return res.status(200).json({ message: 'Dados do aluno adicionados com sucesso!', response });
  } catch (error) {
    console.error('Erro ao adicionar dados do aluno:', error);
    return res.status(500).json({ error: 'Erro ao adicionar dados do aluno.' });
  }
}

// Função de serviço para adicionar um atraso
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Variável de controle para verificar se uma verificação está em andamento
let verificaFaturasEmAndamento = false;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


setInterval(verificarFaturasRoute, 7200000);

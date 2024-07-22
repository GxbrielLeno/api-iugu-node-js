"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
require('dotenv').config();
var axios = require('axios');
var cors = require('cors');
var _require = require('uuid'),
  uuidv4 = _require.v4;
var app = express();
var PORT = process.env.PORT;

// Middleware para JSON
app.use(express.json());

// Configuração do CORS
var corsOptions = {
  origin: '*' // Origem permitida
};
app.use(cors(corsOptions));

// Configurações
var planilhaSheet = process.env.PLANILHA;
var iuguApiKey = process.env.KEY_IUGU;
var intervaloDeVerificacao = 30000; // 30 segundos

// Rotas
app.post('/realizar-pagamento-pix', realizarPagamentoPix);
app.post('/realizar-pagamento-cartao', realizarPagamentoCartao);
app.post('/gerar-boleto', gerarBoleto);

// Funções de Rota
function realizarPagamentoPix(_x, _x2) {
  return _realizarPagamentoPix.apply(this, arguments);
}
function _realizarPagamentoPix() {
  _realizarPagamentoPix = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco, id, order_id, pagamentoPix, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, valorCursoCentavos = _req$body.valorCursoCentavos, nomeAluno = _req$body.nomeAluno, sobrenomeAluno = _req$body.sobrenomeAluno, emailAluno = _req$body.emailAluno, telefoneAluno = _req$body.telefoneAluno, cpfAluno = _req$body.cpfAluno, nomeCurso = _req$body.nomeCurso, CEP = _req$body.CEP, bairro = _req$body.bairro, cidade = _req$body.cidade, estado = _req$body.estado, numero = _req$body.numero, endereco = _req$body.endereco, id = _req$body.id;
          order_id = uuidv4();
          pagamentoPix = {
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
            items: [{
              description: nomeCurso,
              quantity: 1,
              price_cents: valorCursoCentavos
            }],
            payable_with: ["pix"],
            email: "gabrielleno.p@gmail.com",
            due_date: new Date(),
            order_id: order_id
          };
          _context.next = 6;
          return axios.post('https://api.iugu.com/v1/invoices', pagamentoPix, {
            headers: {
              'Authorization': "Basic ".concat(Buffer.from(iuguApiKey).toString('base64'))
            }
          });
        case 6:
          response = _context.sent;
          res.status(200).json({
            message: 'Pagamento Pix realizado com sucesso',
            data: response.data
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Erro ao realizar pagamento Pix:', _context.t0.response ? _context.t0.response.data : _context.t0.message);
          res.status(500).json({
            error: 'Erro ao realizar pagamento Pix'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _realizarPagamentoPix.apply(this, arguments);
}
function realizarPagamentoCartao(_x3, _x4) {
  return _realizarPagamentoCartao.apply(this, arguments);
} // Função para obter o token de pagamento
function _realizarPagamentoCartao() {
  _realizarPagamentoCartao = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, number, cvv, nomecartao, mescartao, anocartao, valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco, id, order_id, tokenDePagamento, base64Token, requestData, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, number = _req$body2.number, cvv = _req$body2.cvv, nomecartao = _req$body2.nomecartao, mescartao = _req$body2.mescartao, anocartao = _req$body2.anocartao, valorCursoCentavos = _req$body2.valorCursoCentavos, nomeAluno = _req$body2.nomeAluno, sobrenomeAluno = _req$body2.sobrenomeAluno, emailAluno = _req$body2.emailAluno, telefoneAluno = _req$body2.telefoneAluno, cpfAluno = _req$body2.cpfAluno, nomeCurso = _req$body2.nomeCurso, CEP = _req$body2.CEP, bairro = _req$body2.bairro, cidade = _req$body2.cidade, estado = _req$body2.estado, numero = _req$body2.numero, endereco = _req$body2.endereco, id = _req$body2.id;
          order_id = uuidv4();
          _context2.next = 5;
          return obterTokenDePagamento({
            number: number,
            cvv: cvv,
            nomecartao: nomecartao,
            mescartao: mescartao,
            anocartao: anocartao
          });
        case 5:
          tokenDePagamento = _context2.sent;
          base64Token = Buffer.from(iuguApiKey).toString('base64');
          requestData = {
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
            items: [{
              description: "aaa",
              quantity: 1,
              price_cents: valorCursoCentavos
            }],
            token: tokenDePagamento,
            // Usa o token de pagamento obtido
            order_id: order_id,
            email: emailAluno
          };
          _context2.next = 10;
          return axios.post('https://api.iugu.com/v1/charge', requestData, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Basic ".concat(base64Token)
            }
          });
        case 10:
          response = _context2.sent;
          res.status(200).json({
            message: 'Pagamento com cartão realizado com sucesso',
            data: response.data
          });
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.error('Erro ao fazer a cobrança:', _context2.t0.response ? _context2.t0.response.data : _context2.t0.message);
          res.status(500).json({
            error: 'Erro ao fazer a cobrança'
          });
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _realizarPagamentoCartao.apply(this, arguments);
}
function obterTokenDePagamento(cartao) {
  var options = {
    method: 'POST',
    url: 'https://api.iugu.com/v1/payment_token',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
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
  return axios.request(options).then(function (response) {
    return response.data.id; // Retorna o ID do token de pagamento
  })["catch"](function (error) {
    throw new Error('Erro ao obter o token de pagamento: ' + error);
  });
}
function gerarBoleto(_x5, _x6) {
  return _gerarBoleto.apply(this, arguments);
} // Funções de Serviço
function _gerarBoleto() {
  _gerarBoleto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, valorCursoCentavos, nomeAluno, sobrenomeAluno, emailAluno, telefoneAluno, cpfAluno, nomeCurso, CEP, bairro, cidade, estado, numero, endereco, order_id, boletoData, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, valorCursoCentavos = _req$body3.valorCursoCentavos, nomeAluno = _req$body3.nomeAluno, sobrenomeAluno = _req$body3.sobrenomeAluno, emailAluno = _req$body3.emailAluno, telefoneAluno = _req$body3.telefoneAluno, cpfAluno = _req$body3.cpfAluno, nomeCurso = _req$body3.nomeCurso, CEP = _req$body3.CEP, bairro = _req$body3.bairro, cidade = _req$body3.cidade, estado = _req$body3.estado, numero = _req$body3.numero, endereco = _req$body3.endereco;
          order_id = uuidv4();
          boletoData = {
            items: [{
              description: nomeCurso,
              quantity: 1,
              price_cents: valorCursoCentavos
            }],
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
          _context3.next = 6;
          return axios.post('https://api.iugu.com/v1/charge', boletoData, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Basic ".concat(Buffer.from(iuguApiKey).toString('base64'))
            }
          });
        case 6:
          response = _context3.sent;
          res.status(200).json({
            message: 'Boleto gerado com sucesso',
            data: response.data
          });
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('Erro ao gerar boleto:', _context3.t0.response ? _context3.t0.response.data : _context3.t0.message);
          res.status(500).json({
            error: 'Erro ao gerar boleto'
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _gerarBoleto.apply(this, arguments);
}
function obterIuguIdsDaPlanilha() {
  return _obterIuguIdsDaPlanilha.apply(this, arguments);
} // Função de Serviço: Verificar Faturas
// Função de Serviço: Verificar Faturas
// Função de serviço para adicionar um atraso
function _obterIuguIdsDaPlanilha() {
  _obterIuguIdsDaPlanilha = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response, iuguIds;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return axios.get(planilhaSheet);
        case 3:
          response = _context4.sent;
          if (!(response.data.length > 0)) {
            _context4.next = 9;
            break;
          }
          iuguIds = response.data.map(function (entry) {
            return entry.iuguId;
          });
          return _context4.abrupt("return", iuguIds);
        case 9:
          console.log('Nenhum iuguId encontrado na planilha');
          return _context4.abrupt("return", []);
        case 11:
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.error('Erro ao obter iuguIds da planilha:', _context4.t0);
          return _context4.abrupt("return", []);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return _obterIuguIdsDaPlanilha.apply(this, arguments);
}
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

// Variável de controle para verificar se uma verificação está em andamento
var verificaFaturasEmAndamento = false;

// Função de Serviço: Verificar Faturas
function verificarFaturas() {
  return _verificarFaturas.apply(this, arguments);
} // Iniciar o servidor
function _verificarFaturas() {
  _verificarFaturas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var iuguIds, _iterator, _step, iuguId, options, iuguResponse;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          if (!verificaFaturasEmAndamento) {
            _context5.next = 4;
            break;
          }
          console.log('Já existe uma verificação de faturas em andamento. Aguardando...');
          return _context5.abrupt("return");
        case 4:
          // Marca que uma verificação está em andamento
          verificaFaturasEmAndamento = true;
          _context5.next = 7;
          return obterIuguIdsDaPlanilha();
        case 7:
          iuguIds = _context5.sent;
          if (!(iuguIds.length > 0)) {
            _context5.next = 37;
            break;
          }
          console.log('IDs para verificação:', iuguIds); // Log dos IDs
          _iterator = _createForOfIteratorHelper(iuguIds);
          _context5.prev = 11;
          _iterator.s();
        case 13:
          if ((_step = _iterator.n()).done) {
            _context5.next = 27;
            break;
          }
          iuguId = _step.value;
          options = {
            method: 'GET',
            url: "https://api.iugu.com/v1/invoices/".concat(iuguId, "?api_token=762BC8CE765223D7E5732B49D307E9165B37001DC19831B81F584B1A370BAE43"),
            headers: {
              accept: 'application/json'
            }
          };
          _context5.next = 18;
          return axios.request(options);
        case 18:
          iuguResponse = _context5.sent;
          console.log("Status da fatura ".concat(iuguId, ": ").concat(iuguResponse.data.status));

          // Atualiza o campo "status" na planilha com o valor retornado pela API
          _context5.next = 22;
          return axios.put("".concat(planilhaSheet, "/iuguId/").concat(iuguId), {
            data: {
              status: iuguResponse.data.status
            }
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 22:
          console.log("Status da fatura ".concat(iuguId, " atualizado com sucesso"));

          // Adiciona um atraso entre as requisições, se necessário
          _context5.next = 25;
          return delay(3000);
        case 25:
          _context5.next = 13;
          break;
        case 27:
          _context5.next = 32;
          break;
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](11);
          _iterator.e(_context5.t0);
        case 32:
          _context5.prev = 32;
          _iterator.f();
          return _context5.finish(32);
        case 35:
          _context5.next = 38;
          break;
        case 37:
          console.log('Nenhum iuguId encontrado para verificar na API da Iugu');
        case 38:
          _context5.next = 43;
          break;
        case 40:
          _context5.prev = 40;
          _context5.t1 = _context5["catch"](0);
          console.error('Erro ao verificar faturas:', _context5.t1);
          // Aqui você pode adicionar tratamento de erro se necessário
        case 43:
          _context5.prev = 43;
          // Marca que a verificação foi concluída
          verificaFaturasEmAndamento = false;
          return _context5.finish(43);
        case 46:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 40, 43, 46], [11, 29, 32, 35]]);
  }));
  return _verificarFaturas.apply(this, arguments);
}
app.listen(PORT, function () {
  console.log("Servidor rodando na porta ".concat(PORT));
});

// Iniciar a primeira verificação de faturas
verificarFaturas();

// Agendar verificação de faturas com intervalo
setInterval(function () {
  if (!verificaFaturasEmAndamento) {
    verificarFaturas();
  }
}, intervaloDeVerificacao);
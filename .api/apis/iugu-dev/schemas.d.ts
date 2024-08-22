declare const ConsultaQrcodeEstTico: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly qr_code_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["qr_code_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly qr_code_id: {
                    readonly type: "string";
                    readonly examples: readonly ["055960038F4C4FD38913C29CA6BF1072"];
                };
                readonly qr_code_payload: {
                    readonly type: "string";
                    readonly examples: readonly ["00020126580014br.gov.bcb.pix01367514dfb7-d01d-40d6-9175-f5f16dd000775204000053039865802BR5925IUGU INSTITUICAO DE PAGAM6009Sao Paulo62250521A5nyprE3ocnbnbhxwj11O6304EA9C"];
                };
                readonly qr_code_pix_key: {
                    readonly type: "string";
                    readonly examples: readonly ["7514dfb7-d01d-40d6-9175-f5f16dd00077"];
                };
                readonly qr_code_amount_cents: {};
                readonly qr_code: {
                    readonly type: "string";
                    readonly examples: readonly ["https://faturas.iugu.com/static_qr_code/055960038F4C4FD38913C29CA6BF1072"];
                };
                readonly qr_code_description: {};
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CriaOQrcodeEstTico: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount_cents: {
                readonly type: "string";
                readonly description: "Valor do QR Code em centavos. Caso não seja informado um é criado um QR Code que o cliente final pode escolher qual valor seja pago.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Opcional com até 25 carácteres.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly qr_code_id: {
                    readonly type: "string";
                    readonly examples: readonly ["055960038F4C4FD38913C29CA6BF1072"];
                };
                readonly qr_code_payload: {
                    readonly type: "string";
                    readonly examples: readonly ["00020126580014br.gov.bcb.pix01367514dfb7-d01d-40d6-9175-f5f16dd000775204000053039865802BR5925IUGU INSTITUICAO DE PAGAM6009Sao Paulo62250521A5nyprE3ocnbnbhxwj11O6304EA9C"];
                };
                readonly qr_code_pix_key: {
                    readonly type: "string";
                    readonly examples: readonly ["7514dfb7-d01d-40d6-9175-f5f16dd00077"];
                };
                readonly qr_code_amount_cents: {};
                readonly qr_code: {
                    readonly type: "string";
                    readonly examples: readonly ["https://faturas.iugu.com/static_qr_code/055960038F4C4FD38913C29CA6BF1072"];
                };
                readonly qr_code_description: {};
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListagemQrcodeEstatico: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start: {
                readonly type: "integer";
                readonly description: "Indica quantos registros pular do início da pesquisa, usado para paginação.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "Limita o número de registros retornados em até 100, que é o padrão de retorno desta chamada. Também utilizado em paginação.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly qr_code_id: {
                                readonly type: "string";
                                readonly examples: readonly ["055960038F4C4FD38913C29CA6BF1072"];
                            };
                            readonly qr_code_payload: {
                                readonly type: "string";
                                readonly examples: readonly ["00020126580014br.gov.bcb.pix01367514dfb7-d01d-40d6-9175-f5f16dd000775204000053039865802BR5925IUGU INSTITUICAO DE PAGAM6009Sao Paulo62250521A5nyprE3ocnbnbhxwj11O6304EA9C"];
                            };
                            readonly qr_code_pix_key: {
                                readonly type: "string";
                                readonly examples: readonly ["7514dfb7-d01d-40d6-9175-f5f16dd00077"];
                            };
                            readonly qr_code_amount_cents: {};
                            readonly qr_code: {
                                readonly type: "string";
                                readonly examples: readonly ["https://faturas.iugu.com/static_qr_code/055960038F4C4FD38913C29CA6BF1072"];
                            };
                            readonly qr_code_description: {};
                        };
                    };
                };
                readonly totalItems: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { ConsultaQrcodeEstTico, CriaOQrcodeEstTico, ListagemQrcodeEstatico };

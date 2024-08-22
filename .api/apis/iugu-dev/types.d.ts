import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type ConsultaQrcodeEstTicoMetadataParam = FromSchema<typeof schemas.ConsultaQrcodeEstTico.metadata>;
export type ConsultaQrcodeEstTicoResponse200 = FromSchema<typeof schemas.ConsultaQrcodeEstTico.response['200']>;
export type CriaOQrcodeEstTicoBodyParam = FromSchema<typeof schemas.CriaOQrcodeEstTico.body>;
export type CriaOQrcodeEstTicoResponse200 = FromSchema<typeof schemas.CriaOQrcodeEstTico.response['200']>;
export type ListagemQrcodeEstaticoBodyParam = FromSchema<typeof schemas.ListagemQrcodeEstatico.body>;
export type ListagemQrcodeEstaticoResponse200 = FromSchema<typeof schemas.ListagemQrcodeEstatico.response['200']>;

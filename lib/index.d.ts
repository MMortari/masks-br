/**
 * Limpa a string que já esta formatado
 * @example
 * cleanMask('596.369.851-48')
 * // returns 59636985148
 * @param {string} value
 */
export declare const cleanMask: (value: string) => string;
/**
 * Limpa a string que já esta formatado pela máscara de dinheiro
 * @example
 * cleanMoneyMask('R$ 1.150,12')
 * // returns 1150.12
 * @param {string} value
 */
export declare const cleanMoneyMask: (value: string) => number;
/**
 * Máscara de CPF
 * @example
 * cpfMask('59636985148')
 * // returns 596.369.851-48
 * @param {string} value Valor que será transformado em CPF
 */
export declare const cpfMask: (value: string | number) => string;
/**
 * Máscara de RG
 * @example
 * rgMask('698554859')
 * // returns 69.855.485-9
 * @param {string} value Valor que será transformado em RG
 */
export declare const rgMask: (value: string | number) => string;
/**
 * Máscara de CNPJ
 * @example
 * cnpjMask('34234234234234')
 * // returns 34.234.234/2342-34
 * @param {string} value Valor que será transformado em CNPJ
 */
export declare const cnpjMask: (value: string | number) => string;
/**
 * Máscara de Celular
 * @example
 * celularMask('11958625974')
 * // returns (11) 95862-5974
 *
 * celularMask('1195862597')
 * // returns (11) 9586-2597
 * @param {string} value Valor que será transformado em Celular
 */
export declare const celularMask: (value: string | number) => string;
/**
 * Máscara de Telefone
 * @example
 * telefoneMask('1195862597')
 * // returns (11) 9586-2597
 * @param {string} value Valor que será transformado em Telefone
 */
export declare const telefoneMask: (value: string | number) => string;
/**
 * Máscara de CEP
 * @example
 * cepMask('06985596')
 * // returns 06985-596
 * @param {string} value Valor que será transformado em CEP
 */
export declare const cepMask: (value: string | number) => string;
/**
 * Máscara de Número
 * @example
 * numeroMask(123456.789)
 * // returns 123.456,789
 * @param {string} value Valor com máscara de Número
 */
export declare const numeroMask: (initialValue: string | number, config?: {
    minimumFractionDigits: number;
}) => string;
/**
 * Máscara de Porcentagem
 * @example
 * porcentagemMask(26.95)
 * // returns 26,95%
 * @param {string} value Valor com máscara de Porcentagem
 */
export declare const porcentagemMask: (initialValue: string | number) => string;
/**
 * Máscara de Dinheiro
 * @example
 * dinheiroMask(123456.78)
 * // returns R$ 123.456,78
 * @param {string} value Valor com máscara de Dinheiro
 */
export declare const dinheiroMask: (initialValue: number | string, options?: DinheiroMaskConfig | undefined) => string;
interface DinheiroMaskConfig {
    currency?: string;
    locale?: string;
}
/**
 * Máscara de Cartão
 * @example
 * cardMask(1234567891234567)
 * // returns '1234 5678 9123 4567'
 * @param {string} value Valor com máscara
 */
export declare const cardMask: (initialValue: string | number) => string;
export {};

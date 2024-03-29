/**
 * Limpa a string que já esta formatado
 * @example
 * cleanMask('596.369.851-48')
 * // returns 59636985148
 * @param {string} value
 */
export const cleanMask = (value: string): string => {
  return String(value).replace(/[.\-() /]/g, '');
};

/**
 * Limpa a string que já esta formatado pela máscara de dinheiro
 * @example
 * cleanMoneyMask('R$ 1.150,12')
 * // returns 1150.12
 * @param {string} value
 */
export const cleanMoneyMask = (value: string): number => {
  return parseFloat(
    String(value)
      .replace(/[R$.\-() /]/g, '')
      .replace(',', '.')
  );
};

/**
 * Máscara de CPF
 * @example
 * cpfMask('59636985148')
 * // returns 596.369.851-48
 * @param {string} value Valor que será transformado em CPF
 */
export const cpfMask = (value: string | number): string => {
  const ret = String(value);

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

/**
 * Máscara de RG
 * @example
 * rgMask('698554859')
 * // returns 69.855.485-9
 * @param {string} value Valor que será transformado em RG
 */
export const rgMask = (value: string | number): string => {
  const ret = String(value);

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1');
};

/**
 * Máscara de CNPJ
 * @example
 * cnpjMask('34234234234234')
 * // returns 34.234.234/2342-34
 * @param {string} value Valor que será transformado em CNPJ
 */
export const cnpjMask = (value: string | number): string => {
  const ret = String(value);

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

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
export const celularMask = (value: string | number): string => {
  const ret = String(value);

  if ((ret && ret.length <= 10) || ret.length === 14) {
    return telefoneMask(ret);
  }

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

/**
 * Máscara de Telefone
 * @example
 * telefoneMask('1195862597')
 * // returns (11) 9586-2597
 * @param {string} value Valor que será transformado em Telefone
 */
export const telefoneMask = (value: string | number): string => {
  const ret = String(value);

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

/**
 * Máscara de CEP
 * @example
 * cepMask('06985596')
 * // returns 06985-596
 * @param {string} value Valor que será transformado em CEP
 */
export const cepMask = (value: string | number): string => {
  const ret = String(value);

  return ret
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})(\d)/, '$1');
};

/**
 * Máscara de Número
 * @example
 * numeroMask(123456.789)
 * // returns 123.456,789
 * @param {string} value Valor com máscara de Número
 */
export const numeroMask = (initialValue: string | number, config: { minimumFractionDigits: number } = { minimumFractionDigits: 2 }): string => {
  const value = initialValue ? Number(initialValue) : 0;

  return new Intl.NumberFormat('pt-BR', { ...config, style: 'decimal' }).format(value);
};

/**
 * Máscara de Porcentagem
 * @example
 * porcentagemMask(26.95)
 * // returns 26,95%
 * @param {string} value Valor com máscara de Porcentagem
 */
export const porcentagemMask = (initialValue: string | number): string => {
  const value = initialValue ? Number(initialValue) : 0;

  return `${numeroMask(value)}%`;
};

/**
 * Máscara de Dinheiro
 * @example
 * dinheiroMask(123456.78)
 * // returns R$ 123.456,78
 * @param {string} value Valor com máscara de Dinheiro
 */
export const dinheiroMask = (initialValue: number | string, options?: DinheiroMaskConfig) => {
  const opts = {
    currency: 'BRL',
    ...options,
    style: 'currency',
    locale: undefined,
  };
  const locale = options?.locale || 'pt-BR';

  const value = initialValue ? Number(initialValue) : 0;

  return new Intl.NumberFormat(locale, opts).format(value);
};

interface DinheiroMaskConfig {
  currency?: string;
  locale?: string;
}

/**
 * Máscara de Cartão
 * @example
 * cardMask(1234567891234567)
 * // returns '1234 5678 9123 4567'
 * @param {string} value
 */
export const cardMask = (initialValue: string | number): string => {
  return String(initialValue)
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/( \d{4})(\d)/, '$1 $2')
    .replace(/( \d{4})(\d)/, '$1 $2');
};

/**
 * Máscara de boleto
 * @exampe
 * bankslipMask('33290001151283004769711002180906987700000010000')
 * // returns '33290.00115 12830.047697 11002.180906 9 87700000010000'
 */
export const bankslipMask = (initialValue: string | number): string => {
  return String(initialValue).replace(/^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d{1})(\d{14})$/, '$1.$2 $3.$4 $5.$6 $7 $8');
};

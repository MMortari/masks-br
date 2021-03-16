"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardMask = exports.dinheiroMask = exports.porcentagemMask = exports.numeroMask = exports.cepMask = exports.telefoneMask = exports.celularMask = exports.cnpjMask = exports.rgMask = exports.cpfMask = exports.cleanMoneyMask = exports.cleanMask = void 0;
/**
 * Limpa a string que já esta formatado
 * @example
 * cleanMask('596.369.851-48')
 * // returns 59636985148
 * @param {string} value
 */
exports.cleanMask = function (value) {
    return String(value).replace(/[.\-() /]/g, '');
};
/**
 * Limpa a string que já esta formatado pela máscara de dinheiro
 * @example
 * cleanMoneyMask('R$ 1.150,12')
 * // returns 1150.12
 * @param {string} value
 */
exports.cleanMoneyMask = function (value) {
    return parseFloat(String(value)
        .replace(/[R$.\-() /]/g, '')
        .replace(',', '.'));
};
/**
 * Máscara de CPF
 * @example
 * cpfMask('59636985148')
 * // returns 596.369.851-48
 * @param {string} value Valor que será transformado em CPF
 */
exports.cpfMask = function (value) {
    var ret = String(value);
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
exports.rgMask = function (value) {
    var ret = String(value);
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
exports.cnpjMask = function (value) {
    var ret = String(value);
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
exports.celularMask = function (value) {
    var ret = String(value);
    if ((ret && ret.length <= 10) || ret.length === 14) {
        return exports.telefoneMask(ret);
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
exports.telefoneMask = function (value) {
    var ret = String(value);
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
exports.cepMask = function (value) {
    var ret = String(value);
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
exports.numeroMask = function (initialValue, config) {
    if (config === void 0) { config = { minimumFractionDigits: 2 }; }
    var value = initialValue ? Number(initialValue) : 0;
    return new Intl.NumberFormat('pt-BR', __assign(__assign({}, config), { style: 'decimal' })).format(value);
};
/**
 * Máscara de Porcentagem
 * @example
 * porcentagemMask(26.95)
 * // returns 26,95%
 * @param {string} value Valor com máscara de Porcentagem
 */
exports.porcentagemMask = function (initialValue) {
    var value = initialValue ? Number(initialValue) : 0;
    return exports.numeroMask(value) + "%";
};
/**
 * Máscara de Dinheiro
 * @example
 * dinheiroMask(123456.78)
 * // returns R$ 123.456,78
 * @param {string} value Valor com máscara de Dinheiro
 */
exports.dinheiroMask = function (initialValue, options) {
    var opts = __assign(__assign({ currency: 'BRL' }, options), { style: 'currency', locale: undefined });
    var locale = (options === null || options === void 0 ? void 0 : options.locale) || 'pt-BR';
    var value = initialValue ? Number(initialValue) : 0;
    return new Intl.NumberFormat(locale, opts).format(value);
};
/**
 * Máscara de Cartão
 * @example
 * cardMask(1234567891234567)
 * // returns '1234 5678 9123 4567'
 * @param {string} value Valor com máscara
 */
exports.cardMask = function (initialValue) {
    return String(initialValue)
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/( \d{4})(\d)/, '$1 $2')
        .replace(/( \d{4})(\d)/, '$1 $2');
};

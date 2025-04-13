import * as errors from './errors/index.js';
export default class Validation {
    _v;
    _name;
    constructor(v, name) {
        this._v = v;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get v() {
        return this._v;
    }
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.MissingArgError} Error whenever data is missing.
     */
    isDefined() {
        const { v, name } = this;
        if (v === undefined || v === null)
            throw new errors.MissingArgError(name);
        return this;
    }
    /**
     * Validate if element is typeof object
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isObject() {
        const { v, name } = this;
        if (typeof v !== 'object' || Array.isArray(v)) {
            throw new errors.IncorrectArgTypeError(`${name} should be a object`);
        }
        return this;
    }
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isString() {
        const { v, name } = this;
        if (typeof v !== 'string') {
            throw new errors.IncorrectArgTypeError(`${name} should be a string`);
        }
        return this;
    }
    /**
     * Validate if element is typeof number
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumber() {
        const { v, name } = this;
        if (typeof v !== 'number')
            throw new errors.IncorrectArgTypeError(`${name} should be number`);
        return this;
    }
    /**
     * Validate if element is typeof boolean
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isBoolean() {
        const { v, name } = this;
        if (typeof v !== 'boolean')
            throw new errors.IncorrectArgTypeError(`${name} should be boolean`);
        return this;
    }
    /**
     * Validate if element is typeof array
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new errors.IncorrectArgTypeError(`${name} should be array`);
        return this;
    }
    /**
     * Validate if element has children, which are typeof string
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isStringArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new errors.IncorrectArgTypeError(`${name} should be array`);
        if (value.length === 0)
            return this;
        value.forEach((e) => {
            if (typeof e !== 'string')
                throw new errors.IncorrectArgTypeError(`${name}' elements are not typeof string`);
        });
        return this;
    }
    /**
     * Validate if element has children, which are typeof number
     * Require param: array of numbers.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumberArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new errors.IncorrectArgTypeError(`${name} should be array`);
        if (value.length === 0)
            return this;
        value.forEach((e) => {
            if (typeof e !== 'number')
                throw new errors.IncorrectArgTypeError(`${name}' elements are not typeof number`);
        });
        return this;
    }
    /**
     * Validate if element's length is smaller than x and bigger than y
     * Require param: string.
     * @param max Max allowed length.
     * @param min Minimum allowed length.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect length.
     */
    hasLength(max, min) {
        const { v, name } = this;
        const value = v;
        if (min) {
            if (value.length < min || value.length > max)
                throw new errors.IncorrectArgLengthError(name, min, max);
        }
        else {
            if (value.length > max)
                throw new errors.IncorrectArgLengthError(name, min, max);
        }
        return this;
    }
    /**
     * Validate if element's length is bigger than x
     * Require param: string.
     * @param length Minimum length.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is incorrect length.
     */
    hasMinLength(length) {
        const { v, name } = this;
        const value = v;
        if (value.length < length)
            throw new errors.ElementTooShortError(name, length);
        return this;
    }
    /**
     * Validate if element is smaller than x and bigger than y
     * Require param: number.
     * @param max Max allowed size.
     * @param min Min allowed size.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect size.
     */
    isBetween(max, min) {
        const { v, name } = this;
        const value = v;
        if (min) {
            if (value < min || value > max)
                throw new errors.IncorrectArgLengthError(name, min, max);
        }
        else {
            if (value > max)
                throw new errors.IncorrectArgLengthError(name, min, max);
        }
        return this;
    }
    /**
     * Validate if element is inside enum
     * Require param: any.
     * @param enumTarget Enum to compare param against.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isPartOfEnum(enumTarget) {
        const { v, name } = this;
        const value = v;
        const keys = Object.values(enumTarget);
        if (!keys.includes(value))
            throw new errors.IncorrectArgTypeError(`${name} has incorrect type`);
        return this;
    }
    /**
     * Validate if element is compatible with regex
     * Require param: any.
     * @param regex Regex to validate.
     * @param error Error message to throw.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is not valid with regex.
     */
    isRegexCompatible(regex, error) {
        const { v } = this;
        const value = v;
        if (!regex.test(value))
            throw new errors.IncorrectArgTypeError(error);
        return this;
    }
    /**
     * Validate if element has more children than x
     * Require param: array of strings.
     * @param amount Minimum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is too short.
     */
    minElements(amount) {
        const { v, name } = this;
        const value = v;
        if (value.length < amount)
            throw new errors.ElementTooShortError(name, amount);
        return this;
    }
    /**
     * Validate if element has fewer children than x
     * Require param: array of strings.
     * @param amount Maximum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooLongError} Error whenever data is too long.
     */
    maxElements(amount) {
        const { v, name } = this;
        const value = v;
        if (value.length > amount)
            throw new errors.ElementTooLongError(name, amount);
        return this;
    }
}

export default class Validation {
    private readonly _v;
    private readonly _name;
    constructor(v: unknown, name: string);
    get name(): string;
    get v(): unknown;
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.MissingArgError} Error whenever data is missing.
     */
    isDefined(): this;
    /**
     * Validate if element is typeof object
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isObject(): this;
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isString(): this;
    /**
     * Validate if element is typeof number
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumber(): this;
    /**
     * Validate if element is typeof array
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isArray(): this;
    /**
     * Validate if element has children, which are typeof string
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isStringArray(): this;
    /**
     * Validate if element has children, which are typeof number
     * Require param: array of numbers.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumberArray(): this;
    /**
     * Validate if element's length is smaller than x and bigger than y
     * Require param: string.
     * @param max Max allowed length.
     * @param min Minimum allowed length.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect length.
     */
    hasLength(max: number, min?: number): this;
    /**
     * Validate if element's length is bigger than x
     * Require param: string.
     * @param length Minimum length.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is incorrect length.
     */
    hasMinLength(length: number): this;
    /**
     * Validate if element is smaller than x and bigger than y
     * Require param: number.
     * @param max Max allowed size.
     * @param min Min allowed size.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect size.
     */
    isBetween(max: number, min?: number): this;
    /**
     * Validate if element is inside enum
     * Require param: any.
     * @param enumTarget Enum to compare param against.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isPartOfEnum(enumTarget: Record<string, string>): this;
    /**
     * Validate if element is compatible with regex
     * Require param: any.
     * @param regex Regex to validate.
     * @param error Error message to throw.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is not valid with regex.
     */
    isRegexCompatible(regex: RegExp, error: string): this;
    /**
     * Validate if element has more children than x
     * Require param: array of strings.
     * @param amount Minimum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is too short.
     */
    minElements(amount: number): this;
    /**
     * Validate if element has fewer children than x
     * Require param: array of strings.
     * @param amount Maximum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooLongError} Error whenever data is too long.
     */
    maxElements(amount: number): this;
}

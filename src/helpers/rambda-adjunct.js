import { anyPass, isEmpty, isNil } from "rambda";

export const isNilOrIsEmpty = anyPass([isNil, isEmpty])
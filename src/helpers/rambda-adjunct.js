import { anyPass, compose, isEmpty, isNil, not } from 'rambda';

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const isNotNilOrEmpty = compose(not, isNilOrEmpty)
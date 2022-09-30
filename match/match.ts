export const match = <R>(tests: [boolean, R][]): R => tests.filter(([test])=>test).map(([_,value])=>value)[0];


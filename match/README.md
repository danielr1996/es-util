# match
glorified switch to create some kind of pattern matching for typescript

Provided an array of test/value tuples `[<boolean expression>, <value>]` `match`checks every tuple to see if the condition is met and returns the value from the first matching tuple. To provide a default value specify `[true, 'zero']` as the last tuple.

```ts
import {match} from "https://raw.githubusercontent.com/danielr1996/match/main/match.ts";

// Calculate Dynamic because otherwise typescript does static analysis and tells you that some conditions can never be met
const v = (1+1).toString()

console.log(match([
    [v === '1', 'one'],
    [v === '2', 'two'],
    [true, 'zero'],
])); //two

```

Specify a type to match like `match<string>([...])` to constrain the type if it cannot be infered.

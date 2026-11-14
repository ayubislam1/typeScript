# TypeScript Assignment

Solutions to the TypeScript coding problems and two blog posts on core TypeScript concepts.

## Files

| File | Description |
| --- | --- |
| `solutions.ts` | All coding solutions in one file, with explicit parameter and return types |
| `type-narrowing.md` | Blog: narrowing union types with `typeof`, `instanceof` and `in` |
| `generics-with-promises.md` | Blog: how generics work and how they type `Promise<T>` responses |

## Functions and Classes in `solutions.ts`

- `multiplyValue`: multiplies a number, using `2` as the default multiplier
- `processInput`: handles `string`, `number` or `boolean` input by narrowing with `typeof`
- `formatCoordinate`: formats a `[latitude, longitude, location]` tuple
- `concatenateArrays`: merges any number of arrays of the same type
- `Course` / `getPopularCourses`: returns published courses that meet a minimum student count
- `pluckValues`: picks one property from every object in an array
- `Employee` / `Manager`: class inheritance with `protected` and `private` members
- `validateAgeAsync`: resolves or rejects a `Promise<string>` based on age

## Type Check

```bash
npx tsc --noEmit --strict --target esnext solutions.ts
```

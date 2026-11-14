# TypeScript-এ Generics আর `Promise<T>`

## Introduction

একই function দিয়ে number এর array আর string এর array দুটোই চালাতে চাই এখন প্রতিটার জন্য আলাদা function লেখা বিরক্তিকর আর `any` দিলে তো TypeScript এর কোনো লাভই থাকে না। এখানেই Generics কাজে আসে Generic হলো type এর একটা খালি জায়গা যেখানে function call করার সময় আসল type টা বসে

## Generics কীভাবে কাজ করে

```ts
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = firstItem(["Rakib", "Sadia"]); // string | undefined
const firstScore = firstItem([90, 85]); // number | undefined
```

`T` মানে যে type আসবে সেটাই, TypeScript argument দেখে নিজেই `T` বুঝে নেয়। আমার `concatenateArrays` function টাও এভাবেই লেখা

## `Promise<T>` দিয়ে

`Promise<T>` নিজেও একটা generic আর এখানে `T` মানে Promise শেষ হলে কোন type এর value পাবো। এজন্যই আমার `validateAgeAsync` return করে `Promise<string>`, API call এ এটা সবচেয়ে বেশি কাজে লাগে

```ts
type User = { name: string };

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

const user = await getData<User>("/api/user");
```

এখন `user.name` যে string সেটা TypeScript জানে তাই editor ও autocomplete দেখায়। তবে server যদি ভুল data পাঠায় TypeScript সেটা ধরতে পারবে না ওটা নিজেকেই চেক করতে হবে।

## Conclusion

Generics দিয়ে একবার লিখে অনেক type এ ব্যবহার করা যায় আর `Promise<T>` থাকায় await করার পরও জানি হাতে কী আছে। মানে কম code লিখে বেশি নিরাপদ থাকা যায়

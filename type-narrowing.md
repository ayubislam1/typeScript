# TypeScript-এ Type Narrowing

## Introduction

একটা variable যদি `string | number` হয় তাহলে TypeScript সরাসরি string-এর method চালাতে দেয় না কারণ সে নিশ্চিত না value টা আসলে কী Type narrowing মানে একটা check দিয়ে TypeScript কে বলে দেওয়া যে এখানে এটা string। আমার assignment এর `processInput` লিখতে গিয়ে এটা কাজে লেগেছে এটা করার তিনটা সহজ উপায় আছে।

## `typeof` দিয়ে

string number বা boolean চেক করতে `typeof` লাগে

```ts
function formatPrice(price: string | number): string {
  if (typeof price === "string") {
    return price.trim();
  }
  return price.toFixed(2);
}
```

if এর ভেতরে `price` এখন string আর if থেকে বের হলে বাকি থাকে শুধু number তাই `toFixed()` চালাতে কোনো error আসে না।

## `instanceof` দিয়ে

class এর object হলে `typeof` শুধু `"object"` বলে তখন লাগে `instanceof`। এটা দেখে value টা কোন class থেকে বানানো হয়েছে

```ts
function toDateLabel(value: Date | string): string {
  if (value instanceof Date) {
    return value.toDateString();
  }
  return value;
}
```

## `in` দিয়ে

সাধারণ object এর তো কোনো class নেই তাই `in` দিয়ে দেখি property টা আছে কিনা

```ts
type Card = { cardNumber: string };
type Bkash = { bkashNumber: string };

function getAccount(payment: Card | Bkash): string {
  if ("cardNumber" in payment) {
    return payment.cardNumber;
  }
  return payment.bkashNumber;
}
```

`cardNumber` থাকলে এটা কার্ড না থাকলে বিকাশ।

## Conclusion

Narrowing এর জন্য আসলে নতুন কিছু শিখতে হয় না JavaScript এ যে check গুলো এমনিতেই লিখি TypeScript সেটা দেখেই type বুঝে নেয়। সহজ হিসাব হলো সাধারণ type এ `typeof` class এ `instanceof` আর object এ `in`

export {};

class Person {
  // コンストラクタの引数にアクセス修飾子をつけるとフィールドの初期化まで自動でやってくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me);

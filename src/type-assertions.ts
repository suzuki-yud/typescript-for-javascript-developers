export {};

let name: any = 'Ham';

// let length = name.length as number;
let length = (name as string).length; // best method
// let length = (<string>name).length;

// length = 'foo';

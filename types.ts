// console.log('This content is from typescript');

//Types

// let myString1: string;
// let myString2: string;
// let myString3: string;
// myString1 = 'Welcome to the string';
// myString2 = 'This is conatineted string';
// myString3 = 'Thirumala Srikanth Hayagreeva Charya'.slice(0, 10);
// console.log(myString1+myString2);
// console.log(myString3);

// let myNum1: number;
// let myNum2: number;
// myNum2 = 4.4;
// myNum1 = 0xf00d;
// console.log(myNum1 + myNum2);

// let myBool:boolean;
// myBool = true;
// console.log(myBool);

// let myVar: any;
// myVar = 'srikanth';
// console.log(myVar);

// Arrays Decleration type-1

// let myStringArray: string[];
// myStringArray = ['Raghupati', 'Raghava', 'Raja', 'Ram'];
// console.log(myStringArray);

// let myNumArray: number[];
// myNumArray = [1, 2, 3, 4, 5, 6];
// console.log(myNumArray);

// let myBooArray: boolean[];
// myBooArray = [true, false];
// console.log(myBooArray);

// Array Decleration type-2

// let myStringArray: Array<string>;
// myStringArray = ['Patitha', 'Pavana', 'Sita', 'Ram'];
// console.log(myStringArray);

// let myNumArray: Array<number>;
// myNumArray = [1, 2, 3, 4, 5, 6];
// console.log(myNumArray);

// let myBooArray: Array<boolean>;
// myBooArray = [true, false];
// console.log(myBooArray);

// Tuple - Array with defined number of elements and types

// let myStringNumTuple: [string, number, boolean];
// myStringNumTuple = ['srikanth', 1993, true];
// console.log(myStringNumTuple);

// Void and Null

// let myVoid1: void;
// let myVoid2: void;
// myVoid1 = null;
// myVoid2 = undefined;
// console.log(myVoid1);
// console.log(myVoid2);

// let myNull1: null;
// let myNull2: null;
// myNull1 = null;
// myNull2 = undefined;
// console.log(myNull1);
// console.log(myNull2);

// let myUndefined1: null;
// let myUndefined2: null;
// myUndefined1 = null;
// myUndefined2 = undefined;
// console.log(myUndefined1);
// console.log(myUndefined2);

// Functions tyoe-1

// function getSum(num1: number, num2: number):number {
//     return num1 + num2;
// }
// console.log(getSum(4, 5));

//Functions type-2

// let mySum = function(num3: any, num4: any):any {

//     if (typeof num3 === 'string') {
//         num3 = parseInt(num3);
//     }
//     if (typeof num4 === 'string') {
//         num4 = parseInt(num4);
//     }

//     return num3 + num4;
// }
// console.log(mySum(10, 20));

// Function type-3

// function getName(firstName: string, lastName?: string):string {
//     if (lastName === undefined) {
//         return firstName;
//     }
//     return firstName +' '+lastName;
// }
// console.log(getName('Srikanth', 'Hayagreeva'));
// console.log(getName('Sriramana'));

// Void Function

// function myVoid(): void {
//     return;
// }
// myVoid();

// Interfaces

// function showTodo(todo: {title: string, text: string}){
//     console.log(todo.title+': '+todo.text);
// }
// let myTodo = {title: 'Trash', text: 'Take Out Trash'}
// showTodo(myTodo);

// interface Todo {

//     title: string;
//     text: string;
// }

// function showTodo(todo: Todo) {
//     console.log(todo.title+': '+todo.text);
// }
// let myTodo = {title: 'Rama', text: 'Ideal Human'}
// showTodo(myTodo);

// Classes

// class User{
//     public name: string;
//     private email: string;
//     protected age: number;

//     constructor(name: string, email: string, age: number){
//         this.name = name;
//         this.email = email;
//         this.age = age;

//         console.log('user Added With Name: '+this.name);
//     }
// }

// let Ram = new User('Raja Ram', 'Ram@gmail.com', 27);

// console.log(Ram.name);  // Accessible Both Inside and Outside of a Function.
// console.log(Ram.email); // Accessible Only Inside of a Function.
// console.log(Ram.age);   // Accessible Only When Inherited.

// Inheritence

// interface UserInterface {
//     name: string;
//     email: string;
//     age: number;
//     register();
//     payInvoice();
// }

// class User implements UserInterface{
//     name: string;
//     email: string;
//     age: number;

//     constructor(name: string, email: string, age: number){
//         this.name = name;
//         this.email = email;
//         this.age = age;

//         console.log('user Added With Name: '+this.name);
//     }
//     register() {
//         console.log(this.name+' is now regisgtered');
//     }
//     payInvoice(){
//         console.log(this.name+'Paid Invoice');
//     }
// }

// class Member extends User{
//     id: number;

//     constructor(id: number, name: string, email: string, age: number) {
//         super(name, email, age);
//         this.id = id;
//     }
//     payInvoice(){
//         super.payInvoice()
//     }
// }

// let Krishna: User = new Member(1, 'Sri Krishna', 'Krishna@gmail.com', 28);
// Krishna.register();
// Krishna.payInvoice();


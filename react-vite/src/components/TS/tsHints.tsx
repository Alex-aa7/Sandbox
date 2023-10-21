// ----------   СПИСКИ: переменное кол-во элементов, типы одинаковые
const arrOfStrings: string[] = [];

const arrOfStrings2 = ["a", "b"];
let el0 = arrOfStrings2[0]; // получаем первый элемент
let el2 = arrOfStrings2.pop(); // возвращает последний элемент

const arrOfStrings3: string[][] = [];
arrOfStrings3.push(["a"]);

const arrOfMix: (string | number)[] = ["a", 1];

// через псевдоним
type MyType = string | number;
const arrOfMix2: MyType[] = [];

const arrOfNum: number[] = [];
const arrOfNum2: Array<number> = [];

// ----------    КОРТЕЖИ (typle): фикс кол-во элементов, типы могут отличаться. Подходит для csv.
const TypleOfMix: [string, string, boolean, number][] = [
  ["a", "b", true, 1],
  ["c", "d", false, 0],
];

// через псевдоним
type TypleOfMix2 = [string, string, boolean, number];
const typle2: TypleOfMix2[] = [
  ["a", "b", true, 1],
  ["c", "d", false, 0],
];

// ---------------   ОБЪЕКТЫ (typle): фикс кол-во элементов, типы могут отличаться. Подходит для csv.
const obj: {
  a: string;
  b: number;
  c: boolean;
} = { a: "1", b: 2, c: true };

// через псевдоним
type MyObj = {
  a: string;
  b: number;
  c: boolean;
};

const obj2: MyObj = { a: "1", b: 2, c: true };
const obj3: object = {}; // прокатит, но не рекомендуется. Слишком неконкретно.

// через интерфейс
interface MyObject {
  a: string;
  b: number;
  c?: boolean; // ?  -  опционально
  print?: () => number; // метод. так хорошо
  // print1():number; //  так писать не рекомендуется. Старый синтаксис. обязательное. ? не пройдет
}

interface MyObject2 {
  a: string;
  b: number;
  c: string;
  [key: string]: string | number;
}

const obj4: MyObject2 = { a: " ", b: 2, c: "s", fsdfsf: 22, sdf: "asdfsdf" };
obj4.b = 33;

// ОБЪЕДИНЕНИЕ интерфейсов. С типами то же самое
interface IPerson_88 {
  name: string;
}
interface IPerson_88 {
  age: number;
}
interface IAccount_88 {
  email: string;
  login: string;
  active: boolean;
}

interface IDeveloper extends IPerson_88, IAccount_88 {
  skills: string[];
  level?: string;
}
const jonh_88: IDeveloper = {
  name: "John",
  age: 40,
  email: "",
  login: "",
  active: false,
  skills: ["JS", "TS"],
};

// ------------------------  ОБЪЕДИНЕНИЕ типов. С типами то же самое

type Person_77={
  name: string,
}
type Account_77={
  login: string;
  password: string;
}
type User_77= Person_77 & Account_77;

const arrayOfUsers: User_77[]=[];


// --------------   ТИПИЗАЦИЯ ФУНКЦИЙ  ----------------
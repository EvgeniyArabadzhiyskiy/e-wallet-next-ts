"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

// Пример обобщенного компонента
interface Props<T, K> {
  data: T[];
  userCity: K;
}

function MyComponent<
  T extends { id: number; name: string },
  K extends { city: string }
>(props: Props<T, K>) {
  return (
    <>
      <h2>{props.userCity.city}</h2>
      <div>
        {props.data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}

// Пример использования компонента
interface Item {
  id: number;
  name: string;
}
interface Local {
  city: string;
}

const items: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const city: Local = { city: "Kiev" };

const App = () => {
  return <MyComponent<Item, Local> data={items} userCity={city} />;
};

export default function PageCurrency() {
  // const isDesctop = useMedia("(min-width: 768px)", false);

  // if (isDesctop) {
  //     redirect("/")

  // }

  return (
    <>
      <Link href="/">HOME</Link>
      <App />
      {/* {isDesctop && <h1>Page Currency</h1>} */}
    </>
  );
}

// interface IUser<T> {
//   user: T
// }

// interface Admin extends Person {
//   role: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// interface User  extends Person {
//   email: string;
// }

// const user: User = {
//   email: "poly@mail.com",
//   name: "Poly",
//   age: 35,
// }

// function generic<T extends Person>(params: T ): T   {

//   const result: T =  params
//  return result

// }

// const res = generic<User>(user)

interface Animal {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  age: number;
  meow(): void;
}

interface Dog {
  name: string;
  age: number;
  owner: string;
  bark: () => void;
}

interface IProp<T> {
  pets: T;
}

const cat: Cat = {
  name: "Whiskers",
  age: 5,
  meow() {
    console.log("Meow!");
  },
};

const dog: Dog = {
  name: "Roy",
  age: 5,
  owner: "Poly",
  bark: () => {
    console.log("Woof!");
  },
};

const pig = {
  // name: "Piatachok",
  age: 15,
  location: "wood",
  owner: "Poly",
  meow() {
    console.log("Meow!");
  },
  bark: () => {
    console.log("Woof!");
  },
  hru: () => {
    console.log("Hru-Hry!");
  },
};

interface Mouse<T> {
  name: string;
  age: number;
  mouse: T[];
}

const user = {
  userName: "Poly",
  userAge: 555,
  mouse: [{ name: "Djon", age: 34 }],
};

interface AllProps {
  // name: string;
  // age: number;
  [field: string]: any
}

// {name: string; age: number}
// {string: any; string: any}

interface IProps<T> {
  userName: string;
  userAge: number;
  mouse: Array<T>;
}



function processAnimal<T extends AllProps>(p: IProps<T>): void {
  // const prop = {
  //   userName: "string",
  //   userAge: 555,
  //   mouse: [{ name: "Djon", age: 34 }],
  // };
  // p.
  // console.log("props.userName:", p.userAge);
  console.log("props.userAge:", p.mouse.map((s) => s.age).join(''));
}

processAnimal(user);

// function processAnimal<T extends Animal>(animal: T): void {
//   console.log("animal.name:", animal.name);
//   console.log("animal.age:", animal.age);

// }

// processAnimal(cat);

// function processAnimal(animal: Cat): void {
//   console.log(animal.name);
//   console.log(animal.age);
//   console.log(animal.meow());

// }

// processAnimal(cat);

//==================================================
// function processAnimal(animal: Animal): void {
//   if ("meow" in animal) {
//     const cat = animal as Cat;
//     cat.meow();
//   }
//   if ("bark" in animal) {
//     const dog = animal as Dog;
//     dog.bark();
//   }
// }

// processAnimal(dog);

//==================================================

// function getRandomIndex<T>(items: T[]) {
//   const randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// const elem1 = getRandomIndex([1, 2, 3, 4, 5]);
// console.log("elem1:", elem1);

// const elem2 = getRandomIndex(["Djon", "Poly", "Mango", "Kiwi"]);
// console.log("elem2:", elem2);

//====================================================

interface IValue {
  // name: string;
  // age: number;
  // city: string;
  // isOpen: boolean;
  // [3]: number;
  [key: string]: string;
}

type Rec = Record<string, string | number | boolean>;
// type Rec = {
//   [key: string]: string | number | boolean;
// };

const myObject = {
  name: "Poly",
  arr: [7, 4, 5],
  age: 32,
  city: "lviv",
  isOpen: true,
  [3]: "144",
};

function getValue<T extends object, K extends keyof T>(params: T, key: K) {
  const res = params[key];
  // console.log("res:", res);

  return res;
}

const r1 = getValue(myObject, "city");

function getKey<O extends object, K extends keyof O>(obj: O, value: O[K]) {
  const keys = Object.keys(obj);

  const key = (keys as Array<K>).find((k) => obj[k] === value);
  return key || null;
}

const key = getKey(myObject, 32);

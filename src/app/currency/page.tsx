"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

// Пример обобщенного компонента
interface Props<T> {
  data: T[];
}

function MyComponent<T extends { id: number; name: string; }>(props: Props<T>) {
  return (
    <div>
      {props.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

// Пример использования компонента
interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const App = () => {
  return <MyComponent<Item> data={items} />;
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

// interface Animal {
//   name: string;
//   age: number;
// }

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
  pets: T
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
  name: "Piatachok",
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



function processAnimal<T>(animal: Cat): T {

  const cat = {
    name: "Tom",
    age: 6,
    meow() {
      console.log("Meow");
      
    },
    
  } as T
  return cat 
}

processAnimal<Cat>(cat);

// processAnimal({pets: [dog, cat, pig]});

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

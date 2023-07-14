"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

export default function PageCurrency() {
  // const isDesctop = useMedia("(min-width: 768px)", false);

  // if (isDesctop) {
  //     redirect("/")
    
  // }

  return (
    <>
      <Link href="/">HOME</Link>
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

interface Cat extends Animal {
  meow(): void;
}

function processAnimal<T extends Animal & Cat>(animal: T): void {
  const ddd = animal.meow()
  console.log(`Name: ${animal.name}`);
  console.log(`Age: ${animal.age}`);
}

const cat: Cat = {
  name: "Whiskers",
  age: 5,
  meow() {
    console.log("Meow!");
  },
};

processAnimal(cat);
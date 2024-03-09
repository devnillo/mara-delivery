"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function HeaderComponent() {
  let [menuState, setMenuState] = useState(false);

  // let nav = document.getElementById('nav');
  const nav = useRef();
  return (
    <header className="bg-primary h-20 flex items-center justify-between fixed top-0 w-screen pr-4">
      <div className="logo flex items-center font-semibold text-white">
        <img
          className="min-w-[4rem] w-[14vw] max-w-[5rem] rounded-full"
          src="1.png"
          alt="sdasda"
        />
        <h1>MARA DELIVERY</h1>
      </div>
      <nav
        ref={nav}
        id="nav"
        className=" transition-all text-white mr-4 max-sm:text-black max-sm:bg-white max-sm:absolute max-sm:w-screen max-sm:p-5 max-sm:text-center ] top-[100%] left-[100%]"
      >
        <ul className=" flex gap-8 max-sm:text-2xl max-sm:flex-col">
          <li className="">
            <a href="">Cadastro</a>
          </li>
          <li className="">
            <a href="">Contatos</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
          <li>
            <a href="">Demonstração</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          if (nav.current.style.left === "100%") {
            nav.current.style.left = "0px";
          } else {
            nav.current.style.left = "100%";
          }
        }}
        className="bg-white p-2 rounded-full mr-2 hidden max-sm:block"
      >
        MENU
      </button>
    </header>
  );
}

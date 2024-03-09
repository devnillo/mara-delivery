import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import ContactFlutuantComponent from "./components/ContactFlutuantComponent";
export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="mt-20 overflow-x-hidden">
        <section className="bg-primary flex min-h-[75vh]">
          <div className="left w-[50vw] flex flex-col justify-center">
            <h2 className="pl-[5%] text-white font-semibold text-[4vw]">
              Você está com fome?
            </h2>
            <p className="pl-[5%] text-white text-[2vw]">
              Aqui você acha os melhores lanches!
            </p>
            <div className="searchArea mx-auto w-[90%] bg-white p-8 rounded-xl flex justify-between items-center mt-4">
              <input
                className=" w-[68%] p-2 bg-slate-200 placeholder:text-gray-600 focus:outline-primary"
                type="text"
                placeholder="Cidade, Loja, Lanche"
              />
              <button className="w-[30%] p-2 bg-primary1 text-white font-semibold">
                Buscar
              </button>
            </div>
          </div>
          <div className="right w-[50vw] flex justify-center items-center overflow-hidden">
            <img
              className=" w-[30vw] min-w-[18rem]"
              src="food.png"
              alt="prato com macarrão"
            />
          </div>
        </section>
        <section className="px-3 py-4">
          <h2 className="font-semibold text-3xl my-4">Junte-se à nós</h2>
          <div className="content w-[100vw] flex">
            <div className="leftContent w-[50%] flex justify-center items-center">
              <div className="">
                <p className="text-[3vw] text-center font-bold">
                  Solução de venda online com site e deshboard!
                </p>
              </div>
            </div>
            <div className="rightContent w-[50vw] flex justify-center">
              <img className="w-[70%] h-auto" src="/cell.png" alt="madsad" />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-[3vw] font-semibold text-center">
            Quais os principais recursos do <span className="text-primary">MARA DELIVERY</span>?
          </h2>
          <div className="content p-4">
            <div className="cards flex gap-4 flex-1">
              <div className="card bg-gray-100 border-2 p-2 rounded-2xl border-gray-300 flex flex-col items-center gap-4">
                <img src="/cardImg.webp" alt="aaaaaaaaaa" />
                <h3 className="text-[150%] text-center font-semibold">
                  CARDÁPIO DIGITAL INTERATIVO
                </h3>
                <p className="text-center">
                  Receba todos os pedidos através de um cardápio digital
                  totalmente personalizado.
                </p>
                <button className="bg-primary p-2 font-semibold text-white w-[90%]">
                  SAIBA MAIS
                </button>
              </div>
              <div className="card bg-gray-100 border-2 p-2 rounded-2xl border-gray-300 flex flex-col items-center gap-4">
                <img src="/cardImg.webp" alt="aaaaaaaaaa" />
                <h3 className="text-[150%] text-center font-semibold">
                  CARDÁPIO DIGITAL INTERATIVO
                </h3>
                <p className="text-center">
                  Receba todos os pedidos através de um cardápio digital
                  totalmente personalizado.
                </p>
                <button className="bg-primary p-2 font-semibold text-white w-[90%]">
                  SAIBA MAIS
                </button>
              </div>
              <div className="card bg-gray-100 border-2 p-2 rounded-2xl border-gray-300 flex flex-col items-center gap-4">
                <img src="/cardImg.webp" alt="aaaaaaaaaa" />
                <h3 className="text-[150%] text-center font-semibold">
                  CARDÁPIO DIGITAL INTERATIVO
                </h3>
                <p className="text-center">
                  Receba todos os pedidos através de um cardápio digital
                  totalmente personalizado.
                </p>
                <button className="bg-primary p-2 font-semibold text-white w-[90%]">
                  SAIBA MAIS
                </button>
              </div>
              <div className="card bg-gray-100 border-2 p-2 rounded-2xl border-gray-300 flex flex-col items-center gap-4">
                <img src="/cardImg.webp" alt="aaaaaaaaaa" />
                <h3 className="text-[150%] text-center font-semibold">
                  CARDÁPIO DIGITAL INTERATIVO
                </h3>
                <p className="text-center">
                  Receba todos os pedidos através de um cardápio digital
                  totalmente personalizado.
                </p>
                <button className="bg-primary p-2 font-semibold text-white w-[90%]">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactFlutuantComponent />
    </>
  );
}

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
        
      </main>

      <ContactFlutuantComponent />
    </>
  );
}

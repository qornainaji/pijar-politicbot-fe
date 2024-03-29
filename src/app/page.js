import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-[20px] lg:p-24 bg-white text-black text-[24px]">
      <Image
            id="AwanBiru"
            src="/images/CloudBlueUpper.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={600}
            height={600}
            className="absolute top-10 -left-[130px] lg:-left-20 overflow-hidden"
            // className="absolute bottom-3  lg:-right-[200px] overflow-clip"
          />

          <Image
            id="KotakMerah"
            src="/images/RectangleRedRight.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={50}
            height={0}
            className="absolute lg:w-[100px] top-[110px] right-10 lg:right-[100px] overflow-hidden animate-bounce"
          />

          <Image
            id="AwanMerah"
            src="/images/CloudRedLower.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={150}
            height={6}
            className="absolute lg:w-[300px] bottom-3 right-0 overflow-clip"
          />
          <Image
            id="PanahUngu"
            src="/images/ArrowPurple.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={30}
            height={6}
            className="absolute lg:w-[50px] bottom-[110px] left-20 lg:left-72 overflow-clip animate-spin"
          />
      {/* <Navbar /> */}
      <div className="z-10 lg:w-xl max-w-3xl w-full items-center justify-center flex flex-col  space-y-12">
        <div>
          <Image
            id="BingungMemilih"
            src="/images/Logo-BingungMemilih_1.svg"
            alt="Logo"
            // width={416}
            // height={100}
            width={600}
            height={600}
            className=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-center">
          Buat kamu yang masih galau 01, 02, atau 03. Tentukan Pilihanmu dari kepribadian dan harapanmu
          </h1>
        </div>
        <div>
          <p className="">
            <button className="text-xl lg:text-[28px] px-6 py-2 bg-purple font-semibold text-white ring-4 ring-black hover:scale-[110%] hover:rotate-2 transition-all">
              <Link className="" href="./disclaimer">Mulai</Link>
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

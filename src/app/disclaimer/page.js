import Navbar from "../components/navbar/navbar";
import Image from "next/image";

export default function Disclaimer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-[20px] lg:p-24 bg-white text-black text-[24px]">
      {/* <Image
            id="AwanBiru"
            src="/images/CloudBlueUpper.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={300}
            height={600}
            className="absolute top-20 lg:top-[130px] -left-[100px] lg:w-[400px] lg:-left-20 overflow-hidden invisible lg:visible "
            // className="absolute bottom-3  lg:-right-[200px] overflow-clip"
          /> */}

          <Image
            id="KotakMerah"
            src="/images/RectangleRedRight.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={50}
            height={0}
            className="absolute lg:w-[100px] top-20 lg:top-[150px] right-10 lg:right-[100px] overflow-hidden animate-bounce"
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
      <Navbar />
      <div className="z-10 lg:w-xl max-w-3xl w-full items-center justify-center flex flex-col  space-y-12">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-lg lg:text-2xl font-bold text-center">
          Bingung memilih adalah inisiatif buat bantu kalian yang mash belum nentuin pilihan presidenmu.
          </h1>
          <h1 className="text-lg lg:text-2xl font-bold text-center">
          BingungMemilih menggunakan Keerdasan Buatan (Ai) buat cocokin harapan kamu dengan capres yang sesuai sama harapan itu
          </h1>
          <h1 className="text-lg lg:text-2xl font-bold text-center">
          Cukup jawab 3 pertanyaan, kurang dari 1 menit, kamu udah tau jawabannya
          </h1>
        </div>
        <div>
          <p className="">
            <button className="text-xl lg:text-[28px] px-6 py-2 bg-purple font-semibold text-white ring-4 ring-black hover:scale-[110%] hover:rotate-2 transition-all">
              <a className="" href="/form-harapan">Mulai</a>
            </button>
          </p>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 p-4">
        <p className="">
          <button className=" lg:w-[200px] text-sm lg:text-[28px] px-6 py-2 bg-[#828282] font-semibold text-white ring-4 ring-black hover:scale-[110%] hover:rotate-2 transition-all">
            <a className="" >Siapa Yang Bikin Nih?</a>
          </button>
        </p>
      </div>
    </main>
  );
}
'use client'
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from "../components/navbar/navbar";
import Image from "next/image";

export default function Pembahasan() {
    //   const router = useRouter();
    //   const { answer } = router.query;
    //   const { answer } = router.isReady ? router.query : {};
    const [answer, setAnswer] = useState('');
    const [prompt, setPrompt] = useState('');

    useEffect(() => {
        // Retrieve data from local storage
        const storedAnswer = localStorage.getItem('answerData');
        const storedPrompt = localStorage.getItem('promptData');

        // Handle the answer data as needed
        console.log('Prompt data:', storedPrompt);
        console.log('Answer data:', storedAnswer);

        setPrompt(storedPrompt.replace(/^"|"$/g, ''));
        setAnswer(storedAnswer.replace(/^"|"$/g, '').replace(/\\n/g, '\n').replace(/\\"/g, '"'));
        // Optionally, you can clear the data from local storage after retrieving it
        // localStorage.removeItem('answerData');
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-[20px] py-24 lg:p-24 bg-white text-black">
            {/* <h1>{prompt}</h1>
            <p>{answer}</p> */}
            <Image
            id="KotakMerah"
            src="/images/RectangleRedRight.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={50}
            height={0}
            className="absolute lg:w-[100px] top-[80px] lg:top-[150px] right-10 lg:right-[100px] overflow-hidden animate-bounce"
          />

          {/* <Image
            id="AwanMerah"
            src="/images/CloudRedLower.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={150}
            height={6}
            className="absolute lg:w-[300px] -bottom-[70px] lg:bottom-2 right-0 overflow-clip"
          />
          <Image
            id="PanahUngu"
            src="/images/ArrowPurple.svg"
            alt="ornament"
            // width={416}
            // height={100}
            width={30}
            height={6}
            className="absolute lg:w-[50px] -bottom-[40px] lg:bottom-[30px] left-20 lg:left-72 overflow-clip "
          /> */}
            <Navbar />
            <div className="z-10 max-w-3xl w-full items-center justify-center flex flex-col  space-y-6">
                <div className=''>
                    <h1 className="text-xl lg:text-2xl font-bold text-center">
                        Laporan Lengkap:
                    </h1>
                </div>
                {/* Card */}
                {/* <div className='flex flex-row font-bold justify-center items-center'>
                    <div className=''>
                        <div className='bg-black text-white px-[47px] py-[20px] text-center'>
                            <p>Apa Yang Kamu Harapkan</p>
                        </div>
                        <div className='ring-2  ring-black px-[47px] py-[20px]'>
                            <p>{prompt}</p>
                        </div>
                    </div>
                    <div className=''>
                        
                        <div className='bg-black text-white px-[47px] py-[20px] text-center'>
                            <p>Apa Yang Capres Kamu Bakal Kasih</p>
                        </div>
                        <div className='ring-2 ring-black px-[47px] py-[20px]'>
                            <p>{answer}</p> 
                        </div>
                    </div>
                </div> */}
                <div className='overflow-auto'>
                    <table className='w-full table-auto h-[500px] '>
                        <thead>
                            <tr className=' text-white text-center text-xl lg:text-2xl'>
                                <th className='bg-blue w-1/2 p-2 lg:px-[47px] lg:py-[20px]'>Apa Yang Kamu Harapkan</th>
                                <th className='bg-red w-1/2 p-2 lg:px-[47px] lg:py-[20px]'>Apa Yang Capres Kamu Bakal Kasih</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                {/* Render prompt and answer data in table cells */}
                                <td className='text-[14px] lg:text-2xl w-1/2 p-2 lg:px-[47px] lg:py-[20px] ring-black ring-2 ring-inset font-bold text-center overflow-auto'>{prompt}</td>
                                <td className='text-[14px] lg:text-2xl w-1/2 ring-black ring-2 ring-inset whitespace-pre-line'>
                                    {/* {answer} */}
                                    <textarea readOnly rows={4} value={answer} className='p-4 w-full h-[98%] resize-none focus:outline-none' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

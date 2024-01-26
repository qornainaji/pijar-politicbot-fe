'use client'
// import { Form, Input, Select } from 'antd';
// import { ConfigProvider, Form, Input, Select } from 'antd';

// const { TextArea } = Input;

// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// require('dotenv').config();
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navbar from "../components/navbar/navbar";
import Image from "next/image";


export default function FormHarapan() {
    const [prompt, setPrompt] = useState('');
    const [charCount, setCharCount] = useState(0);
    const maxWordCount = 1000;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setPrompt(inputText);

        // Count the number of words
        // const words = inputText.split(/\s+/);
        // const currentWordCount = words.length;
        // setWordCount(currentWordCount); 

        // Count the number of characters
        setCharCount(inputText.length)
    };

    const handleLanjut = async (e) => {
        e.preventDefault(); 

        if (!prompt.trim()) {
            setError('Tolong isi harapan kamu!');
            return;
        }
        
        try {
            // console.log(prompt);
            setLoading(true);
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'politic-bot/', {
                request: prompt,
            });

            console.log(response.data); // Handle the response from the backend as needed
            // // router.push('/pembahasan');
            // router.push({
            //     // pathname: '/pembahasan',
            //     query: { answer: response.data.message },
            
            // })
            localStorage.setItem('promptData', JSON.stringify(prompt));
            localStorage.setItem('answerData', JSON.stringify(response.data.message));
            
            router.push('./pembahasan');
            // await router.push({
            //     pathname: '/pembahasan',
            //     query: { answer: response.data.message },
            
            // })
            // if (response && response.data) {
            //     router.push({
            //         pathname: '/pembahasan',
            //         query: { answer: response.data.message },
            //     });
            // }
        } catch (error) {
            console.error('Error:', error);
            if (axios.isAxiosError(error) && error.code === 'ERR_NETWORK') {
                console.error('Network Error. Please check your internet connection.');
            } else {
                console.error('An error occurred while processing the request.');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-[20px] lg:p-24 bg-white text-black text-[24px]">
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
            className="absolute lg:w-[50px] bottom-[30px] left-20 lg:left-72 overflow-clip "
          />
            <Navbar />
            <div className="z-10 max-w-3xl w-full items-center justify-center flex flex-col space-y-4 lg:space-y-12">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-xl lg:text-2xl font-bold text-center">
                        Pertama, Ceritain Harapan Kamu!
                    </h1>
                    <h1 className="text-xl lg:text-2xl font-bold text-center">
                        Apa yang kamu inginkan buat Indonesia?
                    </h1>
                </div>
                <div className="w-full text-xl lg:text-2xl items-center justify-center flex flex-col space-y-3">
                    <p className=" font-normal">Ketik aja bebas, AI kami bakal yang menganalisis.</p>
                    {/* <ConfigProvider
                        // theme={{
                        //     token: {
                        //         // Seed Token
                        //         colorPrimary: '#48A516',
                        //     },
                        // }}
                    > */}
                    {/* <Form
                            name='prompt'
                            style={{ width: '100%' }}
                            layout='vertical'
                            autoComplete='off'
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label = 'Prompt User'
                                // name='doc_major'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tolong isi harapan kamu!',
                                    },
                                ]}
                            >
                                <TextArea placeholder='Materi tentang ...' autoSize={{ minRows: 3, maxRows: 3 }} />
                            </Form.Item>
                        </Form> */}
                    {/* </ConfigProvider> */}
                    <form className=" w-full">
                        <textarea
                            className="text-xl lg:text-2xl w-full p-4 border border-gray-300 rounded-md bg-[#F3F3F3] focus:ring-4 focus:ring-purple-500 focus:outline-none resize-none"
                            placeholder="Aku ingin ..."
                            rows={5}
                            value={prompt}
                            // onChange={(e) => setPrompt(e.target.value)}
                            onChange={handleInputChange}
                            maxLength={1000}
                            required

                        ></textarea>
                    </form>
                    {error && <p className=" text-red ">{error}</p>}
                    <p className="text-[#8D8D8D] w-full text-right text-[18px]">
                        {charCount} / {maxWordCount} kata
                    </p>
                </div>
                <div>
                    <p className="">
                        <button
                            className="lg:w-[200px] text-sm lg:text-[28px] px-6 py-2 bg-purple font-semibold text-white ring-4 ring-black hover:scale-[110%] hover:rotate-2 transition-all disabled:bg-blue disabled:cursor-not-allowed"
                            onClick={handleLanjut}
                            disabled={loading}
                        // href="/pembahasan"
                        >
                            {/* Lanjut */}
                            {loading ? 'Ditunggu ya ...' : 'Lanjut'}
                        </button>
                    </p>
                </div>
            </div>
        </main>
    )
}
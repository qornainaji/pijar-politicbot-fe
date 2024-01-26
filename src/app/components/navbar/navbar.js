import Link from 'next/link';
import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="bg-white px-4 pt-6 lg:px-0 lg:py-6 text-white fixed w-full top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo (Clickable to Navigate Home) */}
                <Link href="/">
                    {/* <p className="text-2xl font-bold cursor-pointer">
                        Your Logo
                    </p> */}
                    <Image
                        id="BingungMemilih"
                        src="/images/Logo-BingungMemilih_1.svg"
                        alt="Logo"
                        // width={416}
                        // height={100}
                        width={300}
                        height={300}
                        className="w-[150px] lg:w-[300px]"
                    />
                </Link>

                {/* Add more navigation links as needed */}
                {/* <div className="space-x-4">
                    <Link href="/about">
                        <p className="hover:text-gray-300">About</p>
                    </Link>
                    <Link href="/contact">
                        <p className="hover:text-gray-300">Contact</p>
                    </Link>
                </div> */}
            </div>
        </nav>
    )
}
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "BingungMemilih",
  description: "Tentukan Pilihanmu dari kepribadian dan harapanmu.",
  icons: {
    icon:['/favicon.ico'],
    apple:['/apple-touch-icon.png'],
    shorcut:['/apple-touch-icon.png']
  },
  manifest : '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

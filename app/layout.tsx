import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SignupAccount from "./components/signup";
import AllArticleComponent from "./components/allarticle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SignupAccount/> */}
        <AllArticleComponent />
      </body>
    </html>
  );
}

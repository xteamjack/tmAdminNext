import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DigiHire - Admin Portal",
  description: "Next Gen Hiring Solutions for Next Gen Talent",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed inset-0 z-[-1]" />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}

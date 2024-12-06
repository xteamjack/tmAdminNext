import MobileNav from "@/app/(root)/_components/mobile-nav";
import Sidebar from "@/app/(root)/_components/sidebar";
import { LoggedIn } from "@/data/loggedIn";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = LoggedIn;
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/app/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        <div className="layout-container-content">{children}</div>
      </div>
    </main>
  );
}

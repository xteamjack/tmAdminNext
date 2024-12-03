import Sidebar from "@/components/common/sidebar";
import { LoggedIn } from "@/data/loggedIn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar user={LoggedIn} />
      <main>{children}</main>
    </>
  );
}

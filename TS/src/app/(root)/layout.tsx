export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Sidebar
      <main>{children}</main>
    </>
  );
}

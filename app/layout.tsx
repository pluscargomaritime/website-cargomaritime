import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Maritime",
  description: "Global Lines & Trading PLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

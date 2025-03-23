import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big O Notation Guesser",
  description: "ทดสอบความรู้เรื่องความซับซ้อนเชิงเวลาของอัลกอริทึม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

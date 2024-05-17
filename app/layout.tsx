import { Work_Sans } from "next/font/google";
import "./globals.css";

const font = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Koolify",
  description:
    "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}

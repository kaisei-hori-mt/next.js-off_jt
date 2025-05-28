import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { UserProvider } from "./context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-cyan-500">
          <p>AppName</p>
          <nav className="ml-3">
            <ul>
              <li>
                <Link href="/">ホーム</Link>
              </li>
              <li>
                <Link href="/memos">ページ1</Link>
              </li>
            </ul>
          </nav>
        </header>

        <UserProvider>{children}</UserProvider>

        <footer className="bg-cyan-500">
          <p>© 2025 My Memo App</p>
        </footer>
      </body>
    </html>
  );
}

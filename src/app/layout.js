import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB Clone",
  description: "IMDb, or the Internet Movie Database, is an extensive online database that provides information about films, television programs, home videos, video games, and streaming content online. It includes details like cast, crew, plot summaries, trivia, ratings, and reviews submitted by users. IMDb is widely used to research movies and TV shows and is a popular resource for film enthusiasts and industry professionals alike. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";



export const metadata = {
  title: "IMDB Clone",
  description: "IMDb, or the Internet Movie Database, is an extensive online database that provides information about films, television programs, home videos, video games, and streaming content online. It includes details like cast, crew, plot summaries, trivia, ratings, and reviews submitted by users. IMDb is widely used to research movies and TV shows and is a popular resource for film enthusiasts and industry professionals alike. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import { Montserrat } from "next/font/google";
import "./globals.css";
import PageNav from "./ui/PageNav";
import { RecipeContextProvider } from "./ui/recipeContext";
import { Toaster } from "react-hot-toast";
import Search from "./ui/Search";
import Footer from "./ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} antialiased flex flex-col min-h-dvh`}
      >
        <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            duration: 3000,
          }}
        />
        <header className="z-10 fixed mt-4 w-full">
          <PageNav />
          <div className="sm:hidden">
            <Search />
          </div>
        </header>

        <main className="mt-32 flex-1 lg:w-[1024px] lg:mx-auto">
          <RecipeContextProvider>
            {children}
          </RecipeContextProvider>
        </main>

        <footer className="flex items-center justify-center border-t py-8 mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

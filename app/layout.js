import { Montserrat } from "next/font/google";
import "./globals.css";
import PageNav from "./ui/PageNav";
import { RecipeContextProvider } from "./ui/recipeContext";
// import { Toaster } from "react-hot-toast";
import Search from "./ui/Search";
import Footer from "./ui/Footer";
import { Suspense } from "react";
import AvailableSearchQuery from "./ui/AvailableSearchQuery";

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
        {/* <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            duration: 3000,
          }}
        /> */}

        <RecipeContextProvider>
          <header className="z-10 fixed mt-4 w-full">
            <PageNav />
            <Suspense fallback={ <div>loading...</div> }>
              <div className="sm:hidden">
                <Search />
                {/* <div className="flex justify-end mr-8 mt-2">
                  <AvailableSearchQuery />
                </div> */}
              </div>
            </Suspense>
          </header>
          <main className="pt-40 flex-1 lg:w-[1024px] lg:mx-auto">
            {children}
          </main>
        </RecipeContextProvider>

        <footer className="flex items-center justify-center border-t py-8 mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

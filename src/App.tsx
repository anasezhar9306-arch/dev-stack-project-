import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Components/Banner"
import Cards from "./Components/Cards/Cards"
import Nav from "./Components/Nav"
import type { Icard } from "./Components/Types/Type";
import Footer from "./Components/Footer";


const cardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch('/Data.json');
  const data = await res.json();
  return data
}

function App() {

  const cardsPromise = cardsFetch();

  return (
    <>
      <ToastContainer />
      <Nav />
      <Banner />

      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-fuchsia-200 border-t-[#D81B7E] rounded-full animate-spin"></div>
        </div>
      }>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>

      <Footer />
      <div className="divider max-w-6xl mx-auto px-4"></div>

      <div className="text-gray-400 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between mt-10 mb-12">
        <p className="text-center md:text-start">© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-6 justify-center md:justify-end">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>

    </>
  )
}

export default App

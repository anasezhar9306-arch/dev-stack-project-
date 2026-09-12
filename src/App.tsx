import { Suspense } from "react";
import Banner from "./Components/Banner"
import Cards from "./Components/Cards/Cards"
import Nav from "./Components/Nav"
import type { Icard } from "./Components/Types/Type";


const cardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch('/Data.json');
  const data = await res.json();
  return data
}

function App() {

  const cardsPromise = cardsFetch();

  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>


    </>
  )
}

export default App

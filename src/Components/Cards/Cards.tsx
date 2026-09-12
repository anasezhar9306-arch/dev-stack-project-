import { use } from "react";
import SelectedCDS from "./SelectedCDS";
import UnselectedCDS from "./UnselectedCDS";
import type { Icard } from "../Types/Type";

interface CardsProps {
    cardsPromise: Promise<Icard[]>
}

const Cards = ({ cardsPromise }: CardsProps) => {

    const cards = use(cardsPromise)
    console.log(cards)

    return (
        <div className="px-4 max-w-6xl mx-auto mt-5 md:mt-7 ">
            <div className="text-center md:text-start">
                <h2 className="text-3xl md:text-4xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                <UnselectedCDS cards={cards} />
                <SelectedCDS />
            </div>
        </div>
    );
};

export default Cards;
import { use, useState } from "react";
import SelectedCDS from "./SelectedCDS";
import UnselectedCDS from "./UnselectedCDS";
import type { Icard } from "../Types/Type";
import { toast } from "react-toastify";

interface CardsProps {
    cardsPromise: Promise<Icard[]>
}

const Cards = ({ cardsPromise }: CardsProps) => {

    const cards = use(cardsPromise)
    console.log(cards)

    const [selectedCards, setSelectedCards] = useState<Icard[]>([])

    const addToStack = (card: Icard) => {
        const alreadySelected = selectedCards.some(
            (selectedCard) => selectedCard.id === card.id
        );
        if (alreadySelected) {
            toast.warning(`${card.name} is already in your stack!`);
            return;
        }

        setSelectedCards([...selectedCards, card]);
        toast.success(`${card.name} added to your stack!`);
    }

    const removeFromStack = (id: string) => {

        const removedCard = selectedCards.find((card) => card.id === id);
        setSelectedCards(selectedCards.filter((card) => card.id !== id));
        if (removedCard) {
            toast.info(`${removedCard.name} removed from your stack!`);
        }
    }

    const removeAll = () => {

        if (selectedCards.length === 0) {
            return;
        }
        setSelectedCards([]);
        toast.info("All technologies removed from your stack!");
    };

    return (
        <div className="px-4 max-w-6xl mx-auto mt-5 md:mt-7 ">
            <div className="text-center md:text-start mb-11">
                <h2 className="text-3xl md:text-4xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="flex-1">
                    <UnselectedCDS
                        cards={cards}
                        addToStack={addToStack}
                        selectedCards={selectedCards} />
                </div>
                <div className="w-full md:w-60">
                    <SelectedCDS
                        selectedCards={selectedCards}
                        removeFromStack={removeFromStack}
                        removeAll={removeAll} />
                </div>

            </div>
        </div>
    );
};

export default Cards;
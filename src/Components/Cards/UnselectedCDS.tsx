import type { Icard } from "../Types/Type";


const UnselectedCDS = ({ cards, addToStack, selectedCards }: { cards: Icard[], addToStack: (card: Icard) => void, selectedCards: Icard[] }) => {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            cards.map((card) => {

                const isSelected = selectedCards.some(
                    (selectedCard) => selectedCard.id === card.id
                )


                return <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 h-full bg-white hover:shadow-lg" key={card.id}>
                    <div className="flex justify-between">
                        <img src={card.icon} alt="" className="w-8 h-8 object-contain" />
                        <button className="rounded-3xl px-2 font-mono bg-fuchsia-100 text-[#D81B7E]">{card.badge}</button>
                    </div>
                    <h2 className="font-bold">{card.name}</h2>
                    <p className="min-h-[80px]">{card.description}</p>
                    <div className="flex items-center justify-between gap-1">
                        <button className="rounded-md bg-fuchsia-100 px-3.5 py-0.5 font-mono text-[#D81B7E]">
                            {card.category}
                        </button>

                        <p className="text-sm whitespace-nowrap">
                            {card.difficulty}
                        </p>

                        <p className="text-sm whitespace-nowrap">
                            ⭐{card.rating}
                        </p>
                    </div>

                    <button
                        onClick={() => addToStack(card)}
                        disabled={isSelected}
                        className={`w-full mt-auto rounded-md font-semibold bg-fuchsia-100 
                                   hover:shadow-2xl hover:scale-105 py-1.5 ${isSelected
                                ? "text-green-600 cursor-not-allowed"
                                : "text-[#D81B7E] hover:text-black"}`}>
                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>

                </div>
            })
        }
    </div>


};

export default UnselectedCDS;
import type { Icard } from "../Types/Type";


const UnselectedCDS = ({ cards, addToStack, selectedCards }: { cards: Icard[], addToStack: (card: Icard) => void, selectedCards: Icard[] }) => {
    return <div className="mt-8 md:mt-11 mb-3.5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            cards.map((card) => {

                const isSelected = selectedCards.some(
                    (selectedCard) => selectedCard.id === card.id
                )


                return <div className="border-2 border-[#de4695] rounded-2xl p-5 flex flex-col gap-4 h-full bg-white hover:bg-[#de4695] hover:shadow-2xl hover:scale-105" key={card.id}>
                    <div className="flex justify-between">
                        <img src={card.icon} alt="" className="w-8 h-8 object-contain" />
                        <button className="rounded-3xl px-2 font-mono bg-fuchsia-100 text-[#D81B7E]">{card.badge}</button>
                    </div>
                    <h2 className="font-bold">{card.name}</h2>
                    <p className="min-h-[80px]">{card.description}</p>
                    <div className="flex justify-between gap-3.5">
                        <button className="rounded-md bg-fuchsia-100 px-3.5 py-0.5 font-mono text-[#D81B7E]">{card.category}</button>
                        <p>{card.difficulty}</p>
                        <p>⭐{card.rating}</p>

                    </div>

                    <button
                        onClick={() => addToStack(card)}
                        disabled={isSelected}
                        className={`w-full rounded-md font-semibold bg-fuchsia-100 
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
import type { Icard } from "../Types/Type";


const SelectedCDS = ({ selectedCards, removeFromStack, removeAll }: { selectedCards: Icard[], removeFromStack: (id: string) => void, removeAll: () => void }) => {
    return (
        <div className="border-2 rounded-2xl mt-3.5 md:mt-11 p-3 mb-3 flex flex-col gap-2.5">
            <h2 className="font-bold">Your Stack</h2>
            <p>Technology Selected</p>
            <div className="border">
                {
                    selectedCards.length === 0 ? <p>Your stack is empty</p> : selectedCards.map((card) => (
                        <div key={card.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src={card.icon}
                                    alt={card.name}
                                    className="w-6 h-6 object-contain"
                                />
                                <div>
                                    <p>{card.name}</p>
                                    <p className="text-sm text-gray-500">{card.category}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromStack(card.id)}
                                className="text-red-500 font-bold"> ✕ </button>
                        </div>
                    ))
                }
            </div>
            <div>
                <button
                    onClick={removeAll}
                    className="border-2 rounded-md border-red-500 text-red-500 bg-white py-1 w-full">Remove All</button>
            </div>
        </div>
    );
};

export default SelectedCDS;
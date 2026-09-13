import type { Icard } from "../Types/Type";


const SelectedCDS = ({ selectedCards }: { selectedCards: Icard[] }) => {
    return (
        <div className="border-2 rounded-2xl mt-3.5 md:mt-11 p-3 mb-3 flex flex-col gap-2.5">
            <h2 className="font-bold">Your Stack</h2>
            <p>Technology Selected</p>
            <div className="border">
                <p>Your stack is empty</p>
            </div>
            <div>
                <button className="border-2 rounded-md border-red-500 text-red-500 bg-white py-1 w-full">Remove All</button>
            </div>
        </div>
    );
};

export default SelectedCDS;
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Fridge',
            amount: 999
        },
        {
            date: new Date(2022, 4, 15),
            description: 'Laptop',
            amount: 1200
        },
        {
            date: new Date(2023, 12, 22),
            description: 'Phone',
            amount: 300
        },

    ]
    return (
        <div>
            <h1>Hi!</h1>
            <NewCost/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;

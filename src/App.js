import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
    const costs = [
        {
            id: 1,
            date: new Date(2021, 2, 12),
            description: 'Fridge',
            amount: 999
        },
        {
            id: 2,
            date: new Date(2022, 4, 15),
            description: 'Laptop',
            amount: 1200
        },
        {
            id: 3,
            date: new Date(2023, 12, 22),
            description: 'Phone',
            amount: 300
        },
    ]

    function addCostHandler(Cost) {
        costs.push(Cost)
        console.log(costs)
    }

    return (
        <div>
            <h1>Hi!</h1>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;

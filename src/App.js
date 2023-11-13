import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
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
        date: new Date(2023, 10, 22),
        description: 'Phone',
        amount: 300
    },
]

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS)
    function addCostHandler(cost) {  //Используем, когда основываемся на предыдущем состоянии и обновляем его
        setCosts(prevState => {
            return [cost, ...prevState ]
        })
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;

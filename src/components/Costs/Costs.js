import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import {useState} from "react";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023')

    function changeYearHandler(year) {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })

    let costsContent = <p>This year doesn't contain any costs</p>
    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map(cost => <CostItem
            key={cost.id} //Всегда добавляем кий с уникальным айди когда отображаем список элементов
            date={cost.date}
            description={cost.description}
            amount={cost.amount}/>)
    }
    return (
        <div>
            <Card className={'costs'}>
                <CostFilter year={selectedYear} onChangeYear={changeYearHandler}/>
                {costsContent}
            </Card>
        </div>
    )
}

export default Costs
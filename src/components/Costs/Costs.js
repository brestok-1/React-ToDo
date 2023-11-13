import './Costs.css'
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import {useState} from "react";
import CostsList from "./CostsList";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023')

    function changeYearHandler(year) {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })

    return (
        <div>
            <Card className={'costs'}>
                <CostFilter year={selectedYear} onChangeYear={changeYearHandler}/>
                <CostsList costs={filteredCosts}/>
            </Card>
        </div>
    )
}

export default Costs
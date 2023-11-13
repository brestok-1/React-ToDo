import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import {useState} from "react";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023')
    function changeYearHandler(year){
        setSelectedYear(year)
    }

    return (
        <div>
            <Card className={'costs'}>
                <CostFilter year={selectedYear} onChangeYear={changeYearHandler}/>
                <CostItem date={props.costs[0].date} description={props.costs[0].description}
                          amount={props.costs[0].amount}/>
                <CostItem date={props.costs[1].date} description={props.costs[1].description}
                          amount={props.costs[1].amount}/>
                <CostItem date={props.costs[2].date} description={props.costs[2].description}
                          amount={props.costs[2].amount}/>
            </Card>
        </div>
    )
}

export default Costs
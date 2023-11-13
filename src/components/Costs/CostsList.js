import CostItem from "./CostItem";
import './CostsList.css'
function CostsList(props) {
    if (props.costs.length === 0) {
        return <h2 className={'cost-list__fallback'}>This year doesn't contain any costs</h2>
    }
    return <ul className={'cost-list'}>
        {props.costs.map(cost => <CostItem
            key={cost.id} //Всегда добавляем кий с уникальным айди когда отображаем список элементов
            date={cost.date}
            description={cost.description}
            amount={cost.amount}/>)
        }
    </ul>
}

export default CostsList
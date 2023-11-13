import CostForm from "./CostForm";
import './NewCost.css'
function NewCost(props){
    function saveCostDataHandler(InputCostData){
        const costData = {
            ...InputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
    }
    return (
        <div className={'new-cost'}>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    )
}
export default NewCost
import CostForm from "./CostForm";
import './NewCost.css'
function NewCost(){
    return (
        <div className={'new-cost'}>
            <CostForm onSaveCostData />
        </div>
    )
}
export default NewCost
import CostForm from "./CostForm";
import './NewCost.css'
import {useState} from "react";

function NewCost(props) {
    const [isOpened, setIsOpened] = useState(false)

    function InputCostDataHandler() {
        setIsOpened(true)
    }

    function saveCostDataHandler(InputCostData) {
        const costData = {
            ...InputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
        setIsOpened(false)
    }

    function cancelHandler(){
        setIsOpened(false)

    }

    return (
        <div className={'new-cost'}>
            {!isOpened && <button onClick={InputCostDataHandler}>Add Cost</button>}
            {isOpened && <CostForm onSaveCostData={saveCostDataHandler} onCansel={cancelHandler}/>}
        </div>
    )
}

export default NewCost
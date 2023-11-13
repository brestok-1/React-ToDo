import './CostForm.css'
import {useState} from "react";

function CostForm(props) {
    const [name, setName] = useState('') // Используем, когда просто объект изменяется и на нет необходимости знать его предыдущее состояние
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // const [isOpened, setIsOpened] = useState(false)

    function changeNameHandler(event) {
        setName(event.target.value)
    }

    function changeAmountHandler(event) {
        setAmount(event.target.value)
    }

    function changeDateHandler(event) {
        setDate(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const costData = {
            description: name,
            amount: amount,
            date: new Date(date),
        }
        props.onSaveCostData(costData)
        setName('')
        setAmount('')
        setDate('')
        // setIsOpened(false)
    }

    function cancelHandler() {
        props.onCansel()
        setDate('')
        setAmount('')
        setName('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={'new-cost__controls'}>
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type="text" onChange={changeNameHandler} value={name}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={changeAmountHandler} value={amount}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input type="date" min={'2019-01-01'} step={'2023-13-11'} onChange={changeDateHandler}
                           value={date}/>
                </div>
                <div className={'new-cost__actions'}>
                    <button type={"submit"}>Add cost</button>
                    <button type={"button"} onClick={cancelHandler}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm
import './CostItem.css'

function CostItem() {
    return (
        <div className={'cost-item'}>
            <div>12.12.2021</div>
            <div className={'cost-item__description'}>
                <h2>Fridge</h2>
                <div className={'cost-item__price'}>$999</div>
            </div>
        </div>
    )
}

export default CostItem
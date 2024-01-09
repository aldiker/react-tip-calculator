export default function Bill({ bill, onChange }) {
    const handleInputChange = (e) => {
        let inputValue = e.target.value
        // Убираем ведущие нули, кроме случая, если введено только "0"
        inputValue = inputValue.replace(/^0+(?!$)/, '')

        if (!isNaN(inputValue)) {
            onChange(inputValue)
        }
    }

    return (
        <div className='bill'>
            <label>How much was the bill?</label>
            <input
                type='text'
                style={{ marginLeft: '10px' }}
                value={bill}
                onChange={handleInputChange}
            />
        </div>
    )
}

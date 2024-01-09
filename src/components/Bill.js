export default function Bill({ bill, onChange }) {
    return (
        <div className='bill'>
            <span>How much was the bill?</span>
            <input
                type='number'
                style={{ marginLeft: '10px' }}
                value={bill}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

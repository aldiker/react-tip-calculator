export default function Service({ children }) {
    return (
        <div className='valueService'>
            <span>{children}</span>
            <select value={0} style={{ marginLeft: '10px' }}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}

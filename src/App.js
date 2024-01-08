import Bill from './components/Bill'

export default function App() {
    return (
        <div style={{ marginLeft: '10px' }}>
            <Bill />
            <div className='valueService'>
                <span>How did you like the service?</span>
                <select value={0} style={{ marginLeft: '10px' }}>
                    <option value={0}>Dissatisfied (0%)</option>
                    <option value={5}>It was okay (5%)</option>
                    <option value={10}>It was good (10%)</option>
                    <option value={20}>Absolutely amazing! (20%)</option>
                </select>
            </div>
            <div className='valueService'>
                <span>How did your friend like the service?</span>
                <select value={0} style={{ marginLeft: '10px' }}>
                    <option value={0}>Dissatisfied (0%)</option>
                    <option value={5}>It was okay (5%)</option>
                    <option value={10}>It was good (10%)</option>
                    <option value={20}>Absolutely amazing! (20%)</option>
                </select>
            </div>

            <div
                className='result'
                style={{ margin: '10px 0px 10px 0px ', fontWeight: 'bold' }}>
                You pay $105 ($100 + $5 tip)
            </div>
            <button>Reset</button>
        </div>
    )
}

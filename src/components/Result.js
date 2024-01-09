export default function Result({ bill, tip }) {
    const overall = bill + tip
    return (
        <div
            className='result'
            style={{
                margin: '20px 0px 20px 0px ',
                fontWeight: 'bold',
                fontSize: '46px',
            }}>
            {`You pay $${overall} ($${bill} + $${tip} tip)`}
        </div>
    )
}

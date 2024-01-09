export default function Result({ bill, tip }) {
    const overall = bill + tip
    return (
        <div
            className='result'
            style={{ margin: '10px 0px 10px 0px ', fontWeight: 'bold' }}>
            {`You pay $${overall} ($${bill} + $${tip} tip)`}
        </div>
    )
}

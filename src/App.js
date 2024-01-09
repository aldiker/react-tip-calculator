import { useState } from 'react'
import Bill from './components/Bill'
import Button from './components/Button'
import Result from './components/Result'
import Service from './components/Service'

export default function App() {
    const [bill, setBill] = useState(0)
    const [myServiceValue, setMyServiceValue] = useState(0)
    const [myFriendServiceValue, setMyFriendServiceValue] = useState(0)

    const handleSetBill = (newValue) => {
        setBill(newValue)
    }

    const handleSetMyServiceValue = (newValue) => {
        setMyServiceValue(newValue)
    }

    const handleMyFriendServiceValue = (newValue) => {
        setMyFriendServiceValue(newValue)
    }

    return (
        <div style={{ marginLeft: '10px' }}>
            <Bill bill={bill} onChange={handleSetBill} />
            <Service
                serviceValue={myServiceValue}
                onChange={handleSetMyServiceValue}>
                How did you like the service?
            </Service>
            <Service
                serviceValue={myFriendServiceValue}
                onChange={handleMyFriendServiceValue}>
                How did your friend like the service?
            </Service>
            <Result />
            <Button />
        </div>
    )
}

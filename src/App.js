import Bill from './components/Bill'
import Button from './components/Button'
import Result from './components/Result'
import Service from './components/Service'

export default function App() {
    return (
        <div style={{ marginLeft: '10px' }}>
            <Bill />
            <Service>How did you like the service?</Service>
            <Service>How did your friend like the service?</Service>
            <Result />
            <Button />
        </div>
    )
}

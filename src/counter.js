import React from 'react'
import Button from './Elemenets/Button'

const style = {
    button: {
        margin: 15
    }
}
const API_URL = `https://poniedzialek-60723.firebaseio.com/cwiczeniafirebase`
class Counter extends React.Component {
    state = {
        number: 0
    }
    componentDidMount = () => (
        this.loadData()
    )
    incHandler = () => (
        this.setState({ number: this.state.number + 1 })
    )

    decHandler = () => (
        this.setState({ number: this.state.number - 1 })
    )
    render() {
        return (
            <div>
                <div>
                    <div style={style.button}>{this.state.number}</div>
                    <Button
                        onClick={this.incHandler}
                        label={'+'}
                        primary={true}
                        style={style.button}
                    />
                    <Button
                        onClick={this.decHandler}
                        label={'-'}
                        primary={true}
                        style={style.button}
                    />
                </div>
            </div>
        )
    }
}
export default Counter
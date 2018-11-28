import React from 'react'
import Button from './Elemenets/Button'

const style = {
    button: {
        margin: 15
    }
}
const API_URL =`https://poniedzialek-60723.firebaseio.com/cwiczeniafirebase`
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
    saveToFirebase = () => (
        fetch(`${API_URL}.json`, {
            method: 'PUT',
            body: JSON.stringify(this.state.number)
        })
    )
    loadData = () => (
        fetch(`${API_URL}.json`, {
            method: 'GET',
        }
        ).then(response => response.json())
            .then(data => (this.setState({ number: data },console.log(data))
            )
            )
    )
    componentDidUpdate = () => (
        this.saveToFirebase()
    )
    render() {
        return (
            <div>
                <div>
                    <div>{this.state.number}</div>
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
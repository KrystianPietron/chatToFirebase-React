import React from 'react'
import Button from './Elemenets/Button'
import { database } from './firebaseConfig'

const style = {
    button: {
        margin: 15
    }
}
class Counter extends React.Component {
    state = {
        number: 0
    }

    componentDidMount = () => (
        database.ref('/cwiczeniafirebase').on(
            'value',
            snapshot => {
                this.setState({ number: snapshot.val() })
            }
        )
    )

    incHandler = () => (
        database.ref('/cwiczeniafirebase').set(this.state.number + 1)
    )

    decHandler = () => (
        database.ref('/cwiczeniafirebase').set(this.state.number - 1)
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
import React from 'react'
import Input from './inputComponent'
import { mapObjectToArray } from '../utils'
import { database } from '../firebaseConfig'
const databaseMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        messages: [],
        newMessageText: ''
    }

    componentDidMount = () => (
        databaseMessages.on(
            'value',
            snapshot => this.setState({ messages: mapObjectToArray(snapshot.val()) }
            )
        )
    )
    valueHandle = (event) => (
        this.setState({ newMessageText: event.target.value })
    )
    componentWillUnmount = () => {
        databaseMessages.off()
    }
    onNewMessage
    render() {
        return (
            <div>
                <div>Chat :D</div>
                <Input
                    hintText={"Message"}
                    onChange={this.valueHandle}
                    value={this.state.newMessageText}
                    onClick={this.onNewMessage}
                    label={"Send"}
                    primary={true}
                />
                <div>{this.state.messages.map(
                    message => <div key={message.key}>
                        {message.text}
                    </div>)
                }
                </div>
            </div>
        )
    }
}
export default Chat
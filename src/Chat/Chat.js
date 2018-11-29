import React from 'react'
import Input from './inputComponent'
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
            snapshot => console.log(snapshot.val())
        )
    )
    valueHandle = (event) => (
        this.setState({ newMessageText: event.target.value })
    )

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
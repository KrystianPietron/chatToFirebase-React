import React from 'react'
import Input from './inputComponent'
import { mapObjectToArray } from '../utils'
import { database } from '../firebaseConfig'
import MessageList from './MessagesList'

const databaseMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        messages: [],
        newMessageText: ''
    }

    componentDidMount = () => (
        databaseMessages.on(
            'value',
            snapshot => this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse(),
                newMessageText: ''
            }
            )
        )
    )
    valueHandle = (event) => (
        this.setState({
            newMessageText: event.target.value
        }
        )
    )
    componentWillUnmount = () => {
        databaseMessages.off()
    }
    onNewMessage = () => (
        databaseMessages.push({
            text: this.state.newMessageText,
            timestamp: Date.now()
        }
        )
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
                <div>
                    <MessageList
                        message={this.state.messages} />

                </div>
            </div>
        )
    }
}
export default Chat
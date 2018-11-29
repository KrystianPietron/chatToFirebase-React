import React from 'react'
import Input from './inputComponent'
import { mapObjectToArray } from '../utils'
import { database } from '../firebaseConfig'
import MessageList from './MessagesList'
import Paper from 'material-ui/Paper'

const databaseMessages = database.ref('/chat')
const style = {
    paper: {
        padding: 15,
        margin: 15,
        marginBottom: 0,
        position: 'fixed',
        bottom: 0,
        zindedx: 9999,
        width: '98%'
    }
}
class Chat extends React.Component {
    state = {
        messages: [],
        newMessageText: '',

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
                <div>
                    <MessageList
                        message={this.state.messages} />

                </div>
                <Paper style={style.paper}
                   >
                    <Input
                        hintText={"Message"}
                        onChange={this.valueHandle}
                        value={this.state.newMessageText}
                        onClick={this.onNewMessage}
                        label={"Send"}
                        primary={true}
                        fullWidth
                    />
                </Paper>
            </div>
        )
    }
}
export default Chat
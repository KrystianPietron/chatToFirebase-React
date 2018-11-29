import React from 'react'
import Input from './inputComponent'
import { mapObjectToArray } from '../utils'
import { auth, database } from '../firebaseConfig'
import MessageList from './MessagesList'
import Paper from 'material-ui/Paper'

const databaseMessages = database.ref('/chat')
const style = {
    paperList: {
        padding: 15,
        margin: 15,
        marginBottom: 0,
        width: '97.7%'
    },
    paper: {
        padding: 15,
        margin: 15,
        marginBottom: 0,
        position: 'fixed',
        bottom: 0,
        zindedx: 9999,
        width: '93.7%'

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
            timestamp: Date.now(),
            author: {
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                img: auth.currentUser.photoURL || `https://api.adorable.io/avatars/40/auth.currentUser.email`
            }
        }
        ), this.setState({ newMessageText: '' })
    )
    deleteMessage = (messageKey) => (
        databaseMessages.child(messageKey).remove()
    )
    render() {
        return (
            <Paper style={style.paperList}>
                <div>Chat :D</div>
                <div>
                    <MessageList
                        message={this.state.messages}
                        deleteMessage={this.deleteMessage} />

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
            </Paper>
        )
    }
}
export default Chat
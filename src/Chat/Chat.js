import React from 'react'
import Input from './inputComponent'
import { database } from '../firebaseConfig'


class Chat extends React.Component {
    state = {
        messages: [],
        newMessageText: ''
    }

    componentDidMount = () => (
        
    )
   valueHandle = (event) => (
       this.setState({newMessageText: event.target.value})
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
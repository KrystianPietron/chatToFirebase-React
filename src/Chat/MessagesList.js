import React from 'react'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import moment from 'moment'
import Avatar from 'material-ui/Avatar'
const MessagesList = (props) => (
    <div>
        {
            props.message.map((messages) =>
                <ListItem
                    primaryText={messages.text}
                    secondaryText={`
                    ${moment(messages.timestamp).format('DD-MM-YYYY hh:mm')}
                    ${messages.author.displayName || messages.author.email}
                    `}
                    key={messages.key}
                    leftAvatar={
                        <Avatar
                            src={messages.author.img}
                        />
                    }
                    rightIconButton={<IconButton>
                        <DeleteIcon onClick={() => props.deleteMessage(messages.key)} />
                    </IconButton>
                    }
                />
            )
        }
    </div>
)
export default MessagesList
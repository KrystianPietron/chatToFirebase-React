import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => (
    <RaisedButton
        onClick={props.onClick}
        label={props.label}
        primary={props.primary}
        style={props.style}
    />
)
export default Button
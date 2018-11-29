import React from 'react'
import Button from '../Elemenets/Button'
import Input from '../Elemenets/Input'

const inputComponent = (props) => (
    <div>
        <Input
            hintText={props.hintText}
            onChange={props.onChange}
            value={props.value}
        />
        <Button
            onClick={props.onClick}
            label={props.label}
            primary={props.primary}
            style={props.style}
        />
    </div>
)
export default inputComponent
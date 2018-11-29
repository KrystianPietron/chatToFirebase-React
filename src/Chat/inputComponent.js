import React from 'react'
import Button from '../Elemenets/Button'
import Input from '../Elemenets/Input'

const inputComponent = (props) => (
    <div>
        <div>
            <Input
                hintText={props.hintText}
                onChange={props.onChange}
                value={props.value}
                fullWidth={props.fullWidth}
            />
        </div>
        <div>
            <Button
                onClick={props.onClick}
                label={props.label}
                primary={props.primary}
                style={props.style}
                fullWidth={props.fullWidth}
            />
        </div>
    </div>
)
export default inputComponent
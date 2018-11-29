import React from 'react'
import Button from '../Elemenets/Button'
import Input from '../Elemenets/Input'

const Forms = (props) => (
    <div>
        <div>
            <Input
                hintText={props.hintTextLogin}
                style={props.style}
                value={props.valueLogin}
                onChange={props.onChangeLogin}
            />
        </div >
        <div>
            <Input
                hintText={props.hintTextPassword}
                style={props.style}
                value={props.valuePassword}
                onChange={props.onChangePassword}
            />
        </div>
        <div>
            <Button
                primary={props.primary}
                label={props.labelLogin}
                style={props.style}
                onClick={props.onClickLogin}
            />
            <Button
                primary={props.primary}
                label={props.labelLoginGoogle}
                style={props.style}
                onClick={props.onClickLoginGoogle}
            />
        </div>
    </div>
)
export default Forms
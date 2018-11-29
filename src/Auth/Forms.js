import React from 'react'
import Button from '../Elemenets/Button'
import Input from '../Elemenets/Input'

const Forms = (props) => (
    <div>
        <div>
            <Input
                hintText={"Login"}
                style={props.styleLabel}
                value={props.valueLogin}
                onChange={props.onChangeLogin}
            />
        </div >
        <div>
            <Input
                hintText={"Password"}
                style={props.styleLabel}
                value={props.valuePassword}
                onChange={props.onChangePassword}
            />
        </div>
        <div>
            <Button
                primary={props.primary}
                label={"Login"}
                style={props.styleButton}
                onClick={props.onClickLogin}
            />
            <Button
                primary={props.primary}
                label={'Login by Google'}
                style={props.styleButton}
                onClick={props.onClickLoginGoogle}
            />
        </div>
    </div>
)
export default Forms
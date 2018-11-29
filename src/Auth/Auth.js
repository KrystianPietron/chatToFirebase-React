import React from 'react'
import Button from '../Elemenets/Button'
import Input from '../Elemenets/Input'
import Paper from 'material-ui/Paper'

const style = {
    buttons: {
        margin: 15
    },
    input: {
        margin: 20
    },
    paper: {
        margin: 30,
        padding: 15
    }
}
class Auth extends React.Component {
    state = {
        login: '',
        password: ''
    }


    render() {
        return (
            <div>
                <Paper style={style.paper}>
                    <div>
                        <Input
                            hintText={'Login'}
                            style={style.input}
                            value={this.state.login}
                            onChange={(event) => this.setState({ login: event.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            hintText={'Password'}
                            style={style.input}
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                            type={'password'}
                        />
                    </div>
                    <div>
                        <Button
                            primary={true}
                            label={'Login'}
                            style={style.buttons}
                            onClick={() => alert('Click Login')}
                        />
                        <Button
                            primary={true}
                            label={'Login by Google'}
                            style={style.buttons}
                            onClick={() => alert('Click Login by Google')}
                        />
                    </div>
                </Paper>
            </div >
        )
    }
}
export default Auth
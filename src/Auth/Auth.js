import React from 'react'
import Forms from './Forms'
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
                    <Forms
                            hintTextLogin={'Login'}
                            style={style.input}
                            valueLogin={this.state.login}
                            onChangeLogin={(event) => this.setState({ login: event.target.value })}
                            hintTextPassword={'Password'}
                            style={style.input}
                            valuePassword={this.state.password}
                            onChangePassword={(event) => this.setState({ password: event.target.value })}
                            primary={true}
                            labelLogin={'Login'}
                            style={style.buttons}
                            onClickLogin={() => alert('Click Login')}
                            labelLoginGoogle={'Login by Google'}
                            style={style.buttons}
                            onClickLoginGoogle={() => alert('Click Login by Google')}
                        />
                </Paper>
            </div >
        )
    }
}
export default Auth
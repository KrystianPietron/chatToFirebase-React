import React from 'react'
import Forms from './Forms'
import Paper from 'material-ui/Paper'
import { auth } from '../firebaseConfig'

const style = {
    buttons: {
        margin: 15
    },
    input: {
        margin: 20,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 30,
        padding: 15
    }
}
class Auth extends React.Component {
    state = {
        login: '',
        password: '',
        isUserLoggedIn: false
    }
componentDidMount =  () => (
    auth.onAuthStateChanged(
        user => {
            user?
            this.setState({isUserLoggedIn: true})
            :
            this.setState({isUserLoggedIn: false})
        }
    )
)
onClickLogin = () =>(
    auth.signInWithEmailAndPassword(this.state.login, this.state.password)
    .catch(error => {
        alert('Something is wrong')
        console.log(error)
    })
)

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn === true ?
                        this.props.children
                        :
                        <Paper style={style.paper}>
                            <Forms
                                styleLabel={style.input}
                                valueLogin={this.state.login}
                                onChangeLogin={(event) => this.setState({ login: event.target.value })}
                                valuePassword={this.state.password}
                                onChangePassword={(event) => this.setState({ password: event.target.value })}
                                primary={true}
                                onClickLogin={this.onClickLogin}
                                styleButton={style.buttons}
                                onClickLoginGoogle={() => alert('Click Login by Google')}
                            />
                        </Paper>
                }

            </div >
        )
    }
}
export default Auth
import React from 'react'
import Forms from './Forms'
import Paper from 'material-ui/Paper'
import { auth, googleProvider } from '../firebaseConfig'
import FloatingActionButton from 'material-ui/FloatingActionButton'

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
    componentDidMount = () => (
        auth.onAuthStateChanged(
            user => {
                user ?
                    this.setState({ isUserLoggedIn: true })
                    :
                    this.setState({ isUserLoggedIn: false })
            }
        )
    )
    LogOut = () => (
        auth.signOut()
    )
    onClickLogin = () => (
        auth.signInWithEmailAndPassword(this.state.login, this.state.password)
            .catch(error => {
                alert('Something is wrong')
                console.log(error)
            })
    )
    onClickLoginGoogle = () => (
        auth.signInWithPopup(googleProvider)
    )
    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn === true ?
                        <div>
                            <FloatingActionButton
                                style={{
                                    position: 'fixed',
                                    top: 10,
                                    right: 10,
                                    zIndex: 9999,
                                }}
                                onClick={this.LogOut}
                            >
                                X
                            </FloatingActionButton>
                            {this.props.children}
                        </div>
                        :
                        <Paper style={style.paper}>
                            <h2>Log in!</h2>
                            <Forms
                                styleLabel={style.input}
                                valueLogin={this.state.login}
                                onChangeLogin={(event) => this.setState({ login: event.target.value })}
                                valuePassword={this.state.password}
                                onChangePassword={(event) => this.setState({ password: event.target.value })}
                                primary={true}
                                onClickLogin={this.onClickLogin}
                                styleButton={style.buttons}
                                onClickLoginGoogle={this.onClickLoginGoogle}
                            />
                        </Paper>
                }

            </div >
        )
    }
}
export default Auth
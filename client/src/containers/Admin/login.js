import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        success: false
    }

    handleInputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }

    submitFrom = (event) => {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    //     if(nextProps.user.login.isAuth){
            
    //         this.props.history.push('/user')
    //     }
    // }
    
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps)
    //     console.log(prevState)
    // }


    render() {
        return (
            <div className="rl_container"> 
                <form onSubmit={this.submitFrom}>
                    <h2>Log in here</h2>
                    <div className="form_element">
                        <input 
                            type="email"
                            placeholder="Enter your mail"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className="form_element">
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)
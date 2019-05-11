import React, { Component } from 'react'

class GoogleAuth extends Component {
  state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '760773206260-0jrse145ah1n2qafe15rc73tdmmepcdn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
              this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    renderAuthButton(){
      if(this.state.isSignedIn === null){
        return <div>I don't know if we are signed In</div>; 
      }else if(this.state.isSignedIn) {
        return <div>I am signed in </div>
      }else {
        return <div>I am not signed in </div>
      }
    }
    
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}


export default GoogleAuth;
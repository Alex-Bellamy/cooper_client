import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import IntroToTest from './components/IntroToTest'
import { Container, Button } from "semantic-ui-react";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };
 
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let performanceDataIndex;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button class="ui button"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
        
      case authenticated:
        renderLogin = (
          <p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Button color="green" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
            </>
          )
        } else {
        performanceDataIndex = (
          <Button color="green" id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
        )
      }  
    }

    return (
      <>
      <br/> <br/>
      <Container textAlign='left'>
        <IntroToTest />
      </Container> 
      <br/>
      <Container>
        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}
        authenticated={this.state.authenticated}
        entrySaved={this.state.entrySaved}
        entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
/>
{performanceDataIndex}
      </Container>
      </>
    );
  }
}
export default App;
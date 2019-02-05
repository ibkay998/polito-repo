import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false };
    this.state = { isRegistered: false };
    this.state = { page: "Dashboard" }
  }
 



  render() {
    return (
      <SignLog {...this.props}{...this.state} />
    )

  }
}


class SignLog extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Signup" };
    this.state={  value:true };
  }
  setActive = (link) => {
    this.setState({ active: link });

  }
  removeName = (val) => {
    this.setState({ value:val})
  }
  render(props) {
    let info = [
      { className: "field-wrap", className2: "req", name: "First Name", type: "text", autocomplete: "off",state:true},
      { className: "field-wrap", className2: "req", name: "Last Name", type: "text", autocomplete: "off",state:true },
      { className: "field-wrap", className2: "req", name: "Email Address", type: "text", autocomplete: "off",state:true },
      { className: "field-wrap", className2: "req", name: "Password", type: "text", autocomplete: "off",state:true },

    ]
    let infos = [
      { className: "field-wrap", className2: "req", name: "Email Address", type: "text", autocomplete: "off" },
      { className: "field-wrap", className2: "req", name: "Password", type: "text", autocomplete: "off" },
    ]
    return (
      <div className="form">
        <ul className="tab-group">
          <li className={`tab ${this.state.active === "Signup" ? "active" : ""}`}><a onClick={() => { this.setActive("Signup") }}>Sign Up</a></li>
          <li className={`tab ${this.state.active === "Login" ? "active" : ""}`}><a onClick={() => { this.setActive("Login") }}>Log In</a></li>
        </ul>

        <div className="tab-content">
          {this.state.active === 'Signup' ?
            <div id="signup">
              <h1>Sign Up for Free</h1>

              <form action="/" method="post">

                <div className="top-row">
                  {info.map((box, index) => {
                    return (
                      <div key={index} className={box.className}  onFocus={() => box.s=false }>
                        <label>
                        {box.state===true ? box.name:""}
                          <span className={box.className2}></span>
                        </label>
                        <input type={box.type} required autoComplete={box.autocomplete} />

                      </div>
                      
                    )
                  }
                  )}
                    {/* <a onKeyDown={() => {this.removeName(false)}} onKeyUp={() => {this.removeName(true)}}>
                          {this.state.value===true ? "yes":""}
                            <span className="req"><input/></span>
                    </a> */}
                   
                  <button type="submit" className="button button-block">Get Started</button>
                </div>
                
              </form>
            </div>
            :
            <div id="login">
              <h1>Welcome Back!</h1>

              <form action="/" method="post">
                {infos.map((box, index) => {
                  return (
                    <div key={index} className={box.className}>
                      <label >
                        {box.name}<span className={box.className2}></span>
                      </label>
                      <input type={box.type} required autoComplete={box.autocomplete} />
                    </div>
                  )
                }
                )}
                <p className="forgot"><a href="#">Forgot Password?</a></p>
                <button className="button button-block">Log In</button>

              </form>
            </div>
          }
        </div>
      </div>


    )
  }
}

class Dashboard extends Component {
  render() {
    return (
      <div>U have don it
        <button onClick={() => { this.props.changeLoggedStatus(false) }} >Logout</button>
      </div>
    )
  }
}


export default App;

import React, { Component } from "react";
import news from "./news.png";
import logo1 from "./logo1.png";
import APC from "./APC.png";
import PDP from "./PDP.jpg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false };
    this.state = { isRegistered: false };
  }

  render() {
    return (
      // <SignLog {...this.props}{...this.state} />
      <Dashboard />
    );
  }
}

class SignLog extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Signup" };
    this.state = { value: true };
    this.state = { forgot: false };
  }
  setActive = link => {
    this.setState({ active: link });
  };
  setForgot = links => {
    this.setState({ forgot: links });
  };

  removeName = val => {
    this.setState({ value: val });
  };
  render(props) {
    let info = [
      {
        className: "field-wrap",
        className2: "req",
        name: "First Name",
        type: "text",
        autocomplete: "off",
        state: true
      },
      {
        className: "field-wrap",
        className2: "req",
        name: "Last Name",
        type: "text",
        autocomplete: "off",
        state: true
      },
      {
        className: "field-wrap",
        className2: "req",
        name: "Email Address",
        type: "text",
        autocomplete: "off",
        state: true
      },
      {
        className: "field-wrap",
        className2: "req",
        name: "Password",
        type: "text",
        autocomplete: "off",
        state: true
      }
    ];
    let infos = [
      {
        className: "field-wrap",
        className2: "req",
        name: "Email Address",
        type: "text",
        autocomplete: "off"
      },
      {
        className: "field-wrap",
        className2: "req",
        name: "Password",
        type: "text",
        autocomplete: "off"
      }
    ];
    return (
      <div className="form">
        <ul className="tab-group">
          <li
            className={`tab ${this.state.active === "Signup" ? "active" : ""}`}
          >
            <a
              onClick={() => {
                this.setActive("Signup");
              }}
            >
              Sign Up
            </a>
          </li>
          <li
            className={`tab ${this.state.active === "Login" ? "active" : ""}`}
          >
            <a
              onClick={() => {
                this.setActive("Login");
              }}
            >
              Log In
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {this.state.active === "Signup" ? (
            <div id="signup">
              <h1>Sign Up for Free</h1>

              <form action="/" method="post">
                <div className="top-row">
                  {info.map((box, index) => {
                    return (
                      <div
                        key={index}
                        className={box.className}
                        onFocus={() => (box.s = false)}
                      >
                        <label>
                          {box.state === true ? box.name : ""}
                          <span className={box.className2} />
                        </label>
                        <input
                          type={box.type}
                          required
                          autoComplete={box.autocomplete}
                        />
                      </div>
                    );
                  })}
                  {/* <a onKeyDown={() => {this.removeName(false)}} onKeyUp={() => {this.removeName(true)}}>
                          {this.state.value===true ? "yes":""}
                            <span className="req"><input/></span>
                    </a> */}

                  <button type="submit" className="button button-block">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div id="loginall">
              {this.state.forgot === false ? (
                <div id="login">
                  <h1>Welcome Back!</h1>

                  <form action="/" method="post">
                    {infos.map((box, index) => {
                      return (
                        <div key={index} className={box.className}>
                          <label>
                            {box.name}
                            <span className={box.className2} />
                          </label>
                          <input
                            type={box.type}
                            required
                            autoComplete={box.autocomplete}
                          />
                        </div>
                      );
                    })}
                    <p className="forgot">
                      <a
                        onClick={() => {
                          this.setForgot(true);
                        }}
                      >
                        Forgot Password?
                      </a>
                    </p>
                    <button className="button button-block">Log In</button>
                  </form>
                </div>
              ) : (
                <div id="forgot">
                  <div className="field-wrap">
                    <h1>A Message will be sent to Your mail</h1>
                    <label>
                      Enter Your Email
                      <span className="req" />
                    </label>
                    <input type="text" required autoComplete="off" />
                  </div>
                  <button className="button button-block">Get Password</button>
                  <button
                    onClick={() => {
                      this.setForgot(false);
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          )}
          }
        </div>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { ispage: "Dashboard" };
    this.state = {
      news: {}
    };
  }
  setVotess = data => {
    this.setState({ news: data });
  };
  setPage = page => {
    this.setState({ ispage: page });
  };
  render() {
    const data = this.state.news
    return (
      <div>
        {" "}
        {this.state.ispage === "Dashboard" ? (
          <div className="dashboard">
            <Navbar {...this.props} setPage={this.setPage} />
            <img
              id="first"
              src={news}
              alt="did not find it"
              width="150px"
              height="150px"
            />
            <div id="body">
              <h1>Welcome user,</h1>
              <div id="main-section">
                <div id="vote">
                  <button
                    className="fool"
                    onClick={() => {
                      this.setPage("Vote");
                    }}
                  >
                    CLICK TO VOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {this.state.ispage === "Political" ? (
              <div>
                <Political {...this.props} setPage={this.setPage} />
              </div>
            ) : (
              <div>
                {this.state.ispage === "Candidate" ? (
                  <div>
                    <Candidate {...this.props} setPage={this.setPage} />
                  </div>
                ) : (
                  <div>
                    {this.state.ispage === "ProfilePage" ? (
                      <div>
                        <ProfilePage datas={this.state.new} {...this.props} setPage={this.setPage}/>
                      </div>
                    ) : (
                      <div>
                        <Vote
                          setVotess={this.setVotess}
                          {...this.props}
                          setPage={this.setPage}
                        />
                        {console.log(this.state.new)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
            //
            }
          </div>
        )}
      </div>
    );
  }
}

class Admin extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        Welcome Admin
      </div>
    );
  }
}
class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.datas

    return (
      <div>
        <Navbar {...this.props}/>
        <div className="side-section">
          <img />
          <button>VOTE NOW</button>
        </div>
        <div className="main-section">
          <div className="top-section" />
          <div className="bottom-section">
            <div>
              <h1>My Votes</h1>
              {console.log(this.props.datas)}
              <div className="data-collected"></div>
            </div>
            <div>
              <h1>Winners</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Politician extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        Welcome Politician Name
      </div>
    );
  }
}

class Political extends Component {
  render(props) {
    let political;
    political = [
      { partyName: "PDP", partySymbol: PDP },
      { partyName: "APC", partySymbol: APC },
      { partyName: "APD", partySymbol: "nono" }
    ];
    return (
      <div>
        <Navbar {...this.props} />

        <div className="holder">
          <ul>
            <li>
              <div className="forever">
                <img src={PDP} alt="this" />
                <p> People Democratic party</p>
              </div>
            </li>
            <li>
              <div className="forever">
                <img src={APC} alt="this" />
                <p> All Progressive party</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
class Candidate extends Component {
  render(props) {
    return (
      <div>
        <Navbar {...this.props} />
        <div className="holder">
          <ul>
            <li>
              <div className="forever">
                <img src={PDP} alt="this" />
                <p>
                  {" "}
                  Atiku <br /> People Democratic party
                </p>
              </div>
            </li>
            <li>
              <div className="forever">
                <img src={APC} alt="this" />
                <p>
                  Buhari
                  <br /> All Progressive party
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
class Navbar extends Component {
  render(props) {
    return (
      <div id="header">
        <div id="top-bar">
          <div id="title">
            <img
              alt="no "
              src={logo1}
              onClick={() => {
                this.props.setPage("Dashboard");
              }}
            />
            <ul>
              <li>
                <a
                  onClick={() => {
                    this.props.setPage("Political");
                  }}
                >
                  Political Parties
                </a>
              </li>
              <li>
                <a
                  id="second"
                  onClick={() => {
                    this.props.setPage("Candidate");
                  }}
                >
                  Candidates
                </a>
              </li>
              <li>
                <a
                  id="second"
                  onClick={() => {
                    this.props.setPage("ProfilePage");
                  }}
                >
                  ProfilePage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = { isVote: false, new: {} };
  }
  setVote = () => {
    this.setState({ isVote: true });
  };
  setVotes = (office, data) => {
    this.setState({ new: { ...this.state.new, [office]: data } });
    this.props.setVotess(this.state.new);
  };

  render(props) {
    const info = this.props.data;
    return (
      <div>
        <Navbar {...this.props} />
        <ForState setVotes={this.setVotes} {...this.props} {...this.state} />
        {info}
        {console.log({ ...this.state.new })}
      </div>
    );
  }
}

class ForState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {
        // "President":{},
        // "Governor":{}
      }
    };
  }

  voteCandidate = (office, data) => {
    this.setState({ votes: { ...this.state.votes, [office]: data } });
  };
  render() {
    let sampleData = [
      { id: 1, office: "President", name: "Atiku", party: "PDP" },
      { id: 2, office: "President", name: "Buhari ", party: "APC" },
      { id: 3, office: "Governor", name: "Tinumbu", party: "APC" },
      { id: 4, office: "Governor", name: "Obasanjo", party: "PDP" }
    ];
    let offices = [
      {
        name: "President",
        candidates: [
          { id: 1, office: "President", name: "Atiku", party: "PDP" },
          { id: 2, office: "President", name: "Buhari ", party: "APC" }
        ]
      },
      {
        name: "Governor",
        candidates: [
          { id: 3, office: "Governor", name: "Tinumbu", party: "APC" },
          { id: 4, office: "Governor", name: "Obasanjo", party: "PDP" }
        ]
      }
    ];

    return (
      <div>
        {offices.map((office, index) => {
          return (
            <div key={index} className={"carry"}>
              <div id="sec1">
                <VotingArea
                  key={office.id}
                  name={office.name}
                  isVoted={Object.keys(this.state.votes).includes(office.name)}
                >
                  {office.candidates.map((box, index) => (
                    <VoteCandidate
                      key={box.id}
                      candidate={box}
                      onVote={() => {
                        this.voteCandidate(office.name, box);
                        this.props.setVotes(office.name, box);
                      }}
                    />
                  ))}
                </VotingArea>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const VotingArea = ({ children, name, isVoted = false }) => {
  return !isVoted ? (
    <div>
      <div id="topic1">{name}</div>
      <div id="section-1">
        <div id="left-section">
          <ul>{children}</ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="dissapear">You have Voted</div>
  );
};
const VoteCandidate = ({ candidate, onVote }) => {
  return (
    <li>
      {candidate.name}
      <button onClick={onVote}>Vote</button>
    </li>
  );
};
export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Forms from "./components/Forms";

const casa = {
  calle: "Bermudas",
  numero: 33,
  vecinos: ["perra", "loca"],
  urbanizacion: "Los Cedros",
  distrito: "Chorrillos",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      mama: "Nancy",
      papa: "Cesar",
      sons: ["Carlos Cesar", "Eder Alonso"],
      daugther: "Ana Claudia",
      niceFamily: true,
      hero: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        daugther: "Ana Flavia",
      });
    }, 4000);

    fetch("https://swapi.dev/api/planets/1/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hero: data,
        });
      });
  }

  timer = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
      fontSize: "100px",
    };

    if (hours < 12) {
      timeOfDay = "Good Morning";
      styles.color = "blue";
    } else if (hours >= 12 && hours < 5) {
      timeOfDay = "Good Afternoon";
      styles.color = "red";
    } else {
      timeOfDay = "Good Night";
      styles.color = "green";
    }
    return <h1 style={styles}>{timeOfDay}</h1>;
    // Alternative terciary sintax!!!
    // return <h1 style={{ display: !styles && "none" }}>{timeOfDay}</h1>;
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        niceFamily: !prevState.niceFamily,
      };
    });
  };

  render() {
    let buttonText = this.state.niceFamily
      ? `It's a nice family`
      : `They are awful as a family`;
    let familyHero = this.state.hero
      ? this.state.hero.name
      : "loading name of hero";
    return (
      <div>
        <Header />
        <Home
          mama={this.state.mama}
          papa={this.state.papa}
          sons={this.state.sons}
          daughter={this.state.daugther}
          casa={casa}
        >
          <p>I'm a children!</p>
        </Home>
        {this.timer()}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          {buttonText}
        </button>
        <p>and their hero is {familyHero}</p>
        <Forms />
      </div>
    );
  }
}

export default App;

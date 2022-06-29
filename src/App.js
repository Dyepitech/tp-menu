import './App.css';
import './components/Menu.css';
import React from 'react';
import Menu from './components/Menu';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            filter: "",
        };
    }

    componentDidMount(prevProps) {


        axios.get("http://localhost:5555/foods").then(response => {
            this.setState({ foods: response.data });

        });
    }

    filterFlower = () => {
        console.log(JSON.stringify(this.state.foods))
        let changebutton = document.getElementById("flower")
        let otherbutton1 = document.getElementById("meat")
        let otherbutton2 = document.getElementById("all")
        this.setState({filter: "flower"});
        changebutton.classList.add("btn-primary");
        changebutton.classList.remove("btn-light");
        if (otherbutton1.classList.contains("btn-primary")){
            otherbutton1.classList.remove("btn-primary")
            otherbutton1.classList.add("btn-light")
        }
        else if (otherbutton2.classList.contains("btn-primary")){
            otherbutton2.classList.remove("btn-primary");
            otherbutton2.classList.remove("btn-light");
        }
        else
            return;
    }

    filterMeat = () => {
        let changebutton = document.getElementById("meat")
        let otherbutton1 = document.getElementById("flower")
        let otherbutton2 = document.getElementById("all")
        this.setState({filter: "meat"});
        changebutton.classList.add("btn-primary");
        changebutton.classList.remove("btn-light");
        if (otherbutton1.classList.contains("btn-primary")){
            otherbutton1.classList.remove("btn-primary")
            otherbutton1.classList.add("btn-light")
        }
        else if (otherbutton2.classList.contains("btn-primary")){
            otherbutton2.classList.remove("btn-primary");
            otherbutton2.classList.remove("btn-light");
        }
        else
            return;
    }

    filterAll = () => {
        let changebutton = document.getElementById("all")
        let otherbutton1 = document.getElementById("flower")
        let otherbutton2 = document.getElementById("meat")
        this.setState({filter: ""});
        changebutton.classList.add("btn-primary");
        changebutton.classList.remove("btn-light");
        if (otherbutton1.classList.contains("btn-primary")){
            otherbutton1.classList.remove("btn-primary")
            otherbutton1.classList.add("btn-light")
        }
        else if (otherbutton2.classList.contains("btn-primary")){
            otherbutton2.classList.remove("btn-primary");
            otherbutton2.classList.remove("btn-light");
        }
        else
            return;
    }

    render() {
        return (
            <div className="container">
                <div className="app">
                    <div className="Menu-top fw-bold mt-5 d-flex justify-content-between">
                        <h1 className="police text-color fw-bold">Découvrez notre <span className="fw-bold menu-title bg-purple police">menu.</span></h1>
                        <div className="">
                            <button type="button" className="btn btn-primary fw-bold" id="all" onClick={this.filterAll}>Tout</button>
                            <button type="button" className="btn btn-light fw-bold" id="meat" onClick={this.filterMeat} >Viandes</button>
                            <button type="button" className="btn btn-light fw-bold" id="flower" onClick={this.filterFlower}>Légumes</button>
                        </div>
                    </div>
                    <Menu foods={this.state.foods} filter={this.state.filter} />
                </div>
            </div>
        );
    }
}

export default App;

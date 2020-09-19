import React from 'react';
import Hello from "./Hello";
import Name from "./Name";
import Company from "./Company";
import Position from "./Position";
import Email from "./Email";
import Agree from "./Agree";
import Rules from "./Rules";
import Questions from "./Questions";
import Final from "./Final";

class App extends React.Component {

    state = {
        pageCounter: 0,
        prevPage: 0,
        name: "",
        surname: "",
        patronymic: "",
        company: "",
        position: "",
        email: "",
        rules: false,
        answers: [],
        photo: "",
        draw: "",
    };


    render() {
        switch (this.state.pageCounter) {
            case 0:
                return <Hello incr={this.pageIncrement}/>;
            case 1:
                return <Name incr={this.pageIncrement} set={this.setStateVal} name={this.state.name}
                             surname={this.state.surname} patronymic={this.state.patronymic}/>;
            case 2:
                return <Company incr={this.pageIncrement} comp={this.state.company} set={this.setStateVal}/>;
            case 3:
                return <Position incr={this.pageIncrement} position={this.state.position} set={this.setStateVal}/>;
            case 4:
                return <Email incr={this.pageIncrement} mail={this.state.email} set={this.setStateVal}/>;
            case 5:
                return <Agree incr={this.pageIncrement} rules={this.state.rules} set={this.setStateVal}/>;
            case 6:
                return <Rules incr={this.pageIncrement} prev={this.state.prevPage}/>;
            case 7:
                return <Questions incr={this.pageIncrement} ans={this.state.answers} prev={this.state.prevPage}
                                  set={this.setStateVal}/>;
            case 8:
                return <Final incr={this.pageIncrement} send={this.sendData} set={this.setStateVal}
                              draw={this.state.draw} photo={this.state.photo}/>;
            default:
                console.warn("No page for this state");
                return (<>Something ain't right</>);
        }
    }

    sendData = () => {
        let toSend = {
            name: this.state.name,
            surname: this.state.surname,
            patronymic: this.state.patronymic,
            company: this.state.company,
            position: this.state.position,
            email: this.state.email,
            rules: this.state.rules,
            photo: this.state.photo,
        };
        console.log(JSON.stringify(this.state))
        fetch(process.env.REACT_APP_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend)
        }).then(r => console.log(r)).catch(
            err => {
                console.log(err)
            });
        console.log(JSON.stringify(toSend))
        this.resetState()
    };

    resetState = () => {
        const initialState = {
            pageCounter: 0,
            prevPage: 0,
            name: "",
            surname: "",
            patronymic: "",
            company: "",
            position: "",
            email: "",
            rules: false,
            answers: [],
            photo: "",
            draw: "",
        };
        this.state = this.setState(initialState)
    };
    pageIncrement = (n) => {
        this.setState({prevPage: this.state.pageCounter});
        this.setState({pageCounter: this.state.pageCounter + n})
    };
    setStateVal = (n, v) => {
        this.setState({[n]: v})
    };
}

export default App;

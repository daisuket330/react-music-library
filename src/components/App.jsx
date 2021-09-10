import React, { Component } from "react";
import './App.css'
import axios from "axios";

class App extends Component{
    state = {
        songs: []
    }


componentDidMount(){
    this.getAllSongs();
}



async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/my_music_list/')
    this.setState({
        songs: response.data
    });
    console.console(response.data)
}

render() {
    return (
        <React.Fragment>
            <h1> log music list</h1>
            <button onClick ={this.getAllSongs}>test</button>
        </React.Fragment>
    );
    } 
}

export default App;
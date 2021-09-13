import React, { Component } from "react";
import './App.css'
import axios from "axios";
import MusicTable from "./MusicTable";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           songs:[]
         }
    }


    render() {
        return (
            <div className ="App">
                <h1>  music list</h1>
                <button onClick ={this.getAllSongs}>test</button>
                <MusicTable musicList = {this.state.songs} />
            </div>
                
        );
        } 
    }

export default App;
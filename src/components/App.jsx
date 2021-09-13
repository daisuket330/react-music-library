import React, { Component } from "react";
import './App.css'
import axios from "axios";
import MusicTable from "./MusicTable";
import AddSong from "./AddSong";

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
                
                <MusicTable musicList = {this.state.songs} />
                <AddSong />
            </div>
                
        );
        } 
    }

export default App;
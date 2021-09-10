import React, { Component } from "react";
import './App.css'
import axios from "axios";

class App  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            songs: []
        };
        this.getAllSongs = this.getAllSongs.bind(this);
    
  
    
}
 


    componentDidMount(){
        this.getAllSongs();
    }



    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/my_music_list/');
        this.setState({
            songs: response.data
        });
        console.log(response.data)
    }

    render() {
        return (
            <div className ="App">
                <h1>  music list</h1>
                <button onClick ={this.getAllSongs}>test</button>
            </div>
                
        );
        } 
    }

export default App;
import axios from 'axios';
import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
         }
    }
 
 

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
    event.preventDefault();
    this.addNewSong(this.state)

}
    
async addNewSong(){
    const song = {
        title: this.state.title,
        artist: this.state.artist,
        album: this.state.album,
        release_date: this.state.release_date,
        genre: this.state.genre,
    }
    try{
        let response = await axios.post('http://127.0.0.1:8000/my_music_list/',song);
        window.location.reload();

    }
    catch{
        console.log("somg not added :(") 
    }
}

 render() {
    return (
        <div>
            <h1>Add New Song</h1>
            <form onSubmit = {this.handleSubmit}>
                <label> Title:</label>
                <input name="title" onChange={this.handleChange} value={this.state.title}></input><br/>
                <label>Artist</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist}></input><br/>
                <label>Album</label>
                <input name="album" onChange={this.handleChange} value={this.state.album}></input><br/>
                <label>Genre</label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre}></input><br/>
                <label>Release Date</label>
                <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.release_date} ></input><br/>
                <button className="newSongButton" type="submit">Add Song</button>
            </form>
        </div>
     );
   }
}        
export default AddSong ;
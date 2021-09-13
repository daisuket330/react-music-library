import React, { Component } from 'react';
import './MusicTable.css'
import axios from 'axios';

class MusicViewer  extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            songs: []
        }
        this.getAllSongs = this.getAllSongs.bind(this);
        this.removeSong = this.removeSong.bind(this);
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


    async removeSong(songID){
        let response = await axios.delete('http://127.0.0.1:8000/my_music_list/' + songID);
        console.log(response);
        window.location.reload();

    }

    render() {
        return ( 
            <table>
                <thead>

                    
                    <tr>
                        <tr>title</tr>
                        <tr>artist</tr>
                        <tr>album</tr>
                        <tr>release date</tr>
                    </tr>
                </thead>
                <tbody>
                    {this.state.songs.map(songs =>(
                        <tr key={songs.id}>
                            <td>{songs.title}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.release_date}</td>
                            <td><button onClick ={()=> this.removeSong(songs.id)}>Delete</button></td> 
                        </tr>
                        
                    ))}
                </tbody>

            </table>
        );
    }
}
    export default MusicViewer;
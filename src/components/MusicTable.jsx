import React, { Component } from 'react';
import './MusicTable.css'
import axios from 'axios';
import MusicSearch from './MusicSearch';

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


    async removeSong(id){
        let response = await axios.delete('http://127.0.0.1:8000/my_music_list/' + id + '/');
        console.log(response);
        this.getAllSongs();

    }


    
    render() {
        return ( 
            <div>
                <MusicSearch songs={this.state.songs} />
                <table>
                <thead>

                    
                    <tr>
                        <th>title</th>
                        <th>artist</th>
                        <th>album</th>
                        <th>release date</th>
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
            </div>
        );
    }
}
    export default MusicViewer;
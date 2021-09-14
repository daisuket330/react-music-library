import React, { Component } from 'react';
import './MusicSearch.css'


class MusicSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            results: [],
            songs: props.song,
            submitted: false
         }
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.search4Song();
     }

     async search4Song(){

        try{
            const results = this.props.song.filter(songs => 
                songs.title.toLowerCase().includes(this.state.search.toLowerCase()) || 
                songs.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
                songs.album.toLowerCase().includes(this.state.search.toLowerCase()) ||
                songs.genre.toLowerCase().includes(this.state.search.toLowerCase()));
            if(results != ''){
                console.log(results);
                this.state.results = results;
                this.state.submitted = true;
                this.setState({state: this.state});
            }else{
                alert("no results");
            }

        }
        catch{
            console.log("unable to find")
        }

         
     }

    render() { 
        return ( 
            
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Search:</label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit">Search</button>
                </form>

                {this.state.submitted ? (  
                    <div>
                    <h2>Search Results:</h2>                  
                   <table>
                    <thead>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </thead>
                    {this.state.results.map((songs)=>{
                        return(
                            <tr>
                            <td>{songs.title}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.release_date}</td>
                            <td>{songs.genre}</td>
                         
                        </tr>   
                        );
                    })}
                </table>
                </div>
                ):(console.log("Waiting for Search Term"))}
                

            </div>
         );
    }
}
 
export default MusicSearch;
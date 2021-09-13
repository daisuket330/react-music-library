import axios from 'axios';
import React, { Component } from 'react';

class CreateSong extends Component {
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
 
    componentDidMount(){
        this.addNewSong();
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]
        })
    }
    async addNewSong(){
        let response = await axios.post('http://127.0.0.1:8000/my_music_list/');
        this.setState({
            songs: response.data
        });
        console.log(response.data)
    }

    o
    export CreateSong default ;
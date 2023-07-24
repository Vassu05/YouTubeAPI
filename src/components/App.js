import React from "react";
import axios from "axios";
import SearchBar from './SearchBar';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component{
    state = {videos: [] ,SelectedVideo: null};
    onTermSubmit = async (term) => {
        const response = await axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params:{
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_A_KEY
            }
        }).get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos: response.data.items, SelectedVideo: response.data.items[0]});
    }
    componentDidMount(){
        this.onTermSubmit('Spiderman');   
    }
    onVideoSelect = (video) => {
        this.setState({SelectedVideo: video});
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onFSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                           <VideoDetail video={this.state.SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
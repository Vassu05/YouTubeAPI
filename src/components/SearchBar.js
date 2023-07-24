import React from "react";


class SearchBar extends React.Component{
    state = { term : '' };
    onInputChange = (event) => {
        this.setState( { term: event.target.value } );
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFSubmit(this.state.term);
    };
    render(){
        return (
            <div className="ui segment" style={{marginTop:'10px'}}>
                <div className="ui form">
                    <form onSubmit={this.onFormSubmit}>
                        <label htmlFor="VideoSearch" className="field">Video Search</label>
                        <input id="VideoSearch" type="text" value={this.state.term} onChange={this.onInputChange} />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
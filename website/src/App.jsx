import React from 'react';
const axios = require('axios');
import Search from './Search';
import Headers from './Headers';
import Display from './Display';
import "./style.css"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: [],
            searchInput: '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/images')
            .then((rows) => {
                this.setState({ photo: [...rows] });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

    render() {
        return (
            <div>
                <Headers />
                <Search handleChange={this.handleChange} searchInput={this.state.searchInput}/>
                <Display />
            </div>
        )
    }

} 
export default App;
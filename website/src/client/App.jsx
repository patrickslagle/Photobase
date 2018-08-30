import React from 'react';
const axios = require('axios');
import Search from './components/Search';
import Header from './components/Header';
import Display from './components/Display';
import "./style.css"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            searchInput: '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/images')
            .then((images) => {
                console.log('what is images.data?', images.data)
                this.setState({ images: images.data });
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
                <Header />
                <Search handleChange={this.handleChange} searchInput={this.state.searchInput}/>
                <Display images={this.state.images}/>
            </div>
        )
    }

} 
export default App;
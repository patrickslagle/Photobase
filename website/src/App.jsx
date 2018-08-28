import React from 'react';
const axios = require('axios');
import Search from './Search';
import Headers from './Headers';
import Display from './Display';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: []
        }
    }

    componentDidMount() {
        axios.get('/pictures')
            .then((rows) => {
                this.setState({ photo: [...rows] });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Headers />
                <Search />
                <Display />
            </div>
        )
    }

} 
export default App;
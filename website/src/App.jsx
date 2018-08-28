import React from 'react';
const axios = require('axios');
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello:"hi",
            data: []
        }
    }

    componentDidMount() {
        axios.get('/users')
            .then((rows) => {
                this.setState({ data: [...rows] });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <p>Hello from me</p>
                <p>Data is {this.state.data}</p>
            </div>
        )
    }

} 
export default App;
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hello:"hi"
        }
    }
    render () {
        return (
            <div>Hello from me</div>
        )
    }

} 
export default App;
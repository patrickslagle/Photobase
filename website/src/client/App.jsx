import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import Display from './components/Display';
import "./style.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/images')
      .then((images) => {
        this.setState({ images: images.data });
      })
      .catch(err => console.log(err));
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { searchInput, images } = this.state;
    return (
      <div>
        <Header />
        <Search handleChange={this.handleChange} searchInput={searchInput} />
        <Display images={images} />
      </div>
    );
  }
}

export default App;

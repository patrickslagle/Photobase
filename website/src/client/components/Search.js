import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Search = ({ handleChange }) => (
  <div className="search-container">
    <input 
      type="text" 
      className="search" 
      onChange={handleChange} 
    />
    <Button className="search">Search</Button>
  </div>
);

export default Search;

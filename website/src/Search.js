import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Search = (props) => {
    console.log(props)
    return (
        <div className="wrap">
            <input type="text" onChange={props.handleChange} value={props.searchInput}/>
            <Button>Search</Button>
        </div>
    )
}
export default Search;

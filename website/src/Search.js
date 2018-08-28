import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Search = (props) => {
    return (
        <div className="wrapper">
            <input placeholder="Search your image" type="text" />
            <Button>Search</Button>
        </div>
    )
}
export default Search;

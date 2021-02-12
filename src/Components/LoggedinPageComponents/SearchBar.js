import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';





function SearchBar() {

    return (
        <div className="searchBarComponent border-bottom p-2">
            <div className="searchBar">
                <InputBase
                    className=""
                    placeholder="Search"
                />
                <IconButton type="submit" className="">
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default SearchBar;

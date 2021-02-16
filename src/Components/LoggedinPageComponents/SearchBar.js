import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Dropdown } from 'react-bootstrap';





function SearchBar() {

    return (
        <div className="searchBarComponent">
            <div className="filter">
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/reset">All</Dropdown.Item>
                        <Dropdown.Item href="#/topic">Topic</Dropdown.Item>
                        <Dropdown.Item href="#/grade">Grade</Dropdown.Item>
                        <Dropdown.Item href="#/partner">Partner</Dropdown.Item>
                        <Dropdown.Item href="#/educator">Educator</Dropdown.Item>
                        <Dropdown.Item href="#/a-z">Ascending order</Dropdown.Item>
                        <Dropdown.Item href="#/z-a">Descending order</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="searchBar border-bottom p-2">
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

import React from 'react'
import "./search.css"

function Search({onSearchChange}) {
    return (
        <div>
             <input
                className='search-box'
                type='search'
                placeholder='search users'
                onChange={onSearchChange}
            />
        </div>
    )
}

export default Search

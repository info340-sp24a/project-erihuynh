import React, {useState} from 'react';

export function SearchForm(props) {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        const triedToChange = event.target.value;
        setSearchValue(triedToChange);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", searchValue);
        // do something to filter
        setSearchValue('');
    }

    return (
        <div className="searchContainer" onSubmit={handleSubmit}>
            <h2>Begin Your Search</h2>
            <form id="form">
                <input type="search" id="query" name="q" placeholder="Search quizzes..." 
                value={searchValue} 
                onChange={handleChange}
                aria-label="Search through personality/persona quizzes" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
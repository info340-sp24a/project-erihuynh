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
        // <div className="searchContainer" onSubmit={handleSubmit}>
        //     <h2>Begin Your Search</h2>
        //     <form id="form">
        //         <input type="search" id="query" name="q" placeholder="Search quizzes..." 
        //         value={searchValue} 
        //         onChange={handleChange}
        //         aria-label="Search through personality/persona quizzes" />
        //         <button type="submit">Search</button>
        //     </form>
        // </div>
        <div className="searchContainer" onSubmit={handleSubmit}>
            <h2>Begin Your Search</h2>
            <div className="form-outline" data-mdb-input-init>
                <input type="search" id="form1" className="form-control" placeholder="Search quizzes..." aria-label="Search through personality/persona quizzes"
                value={searchValue}
                onChange={handleChange} />
            </div>
        </div>
    )
}
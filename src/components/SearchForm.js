import React from 'react';

export function SearchForm(props) {
    const { searchValue, onSearchChange } = props;

    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", searchValue);
    };

    return (
        <div className="searchContainer">
            <h2>Begin Your Search</h2>
            <form className="form-outline" data-mdb-input-init onSubmit={handleSubmit}>
                <input
                    type="search"
                    id="form1"
                    className="form-control"
                    placeholder="Search quizzes..."
                    aria-label="Search through personality/persona quizzes"
                    value={searchValue}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

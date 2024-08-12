import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';

function SearchBar() {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            history.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;

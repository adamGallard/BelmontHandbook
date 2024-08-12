import React from 'react';
import { useLocation } from '@docusaurus/router';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery();
    const searchQuery = query.get('q');

    // Implement your search logic here, possibly using a service or Algolia
    // This example assumes you have some search logic to return results
    const results = searchInDocumentation(searchQuery);

    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((result) => (
                        <li key={result.url}>
                            <a href={result.url}>{result.title}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found for "{searchQuery}"</p>
            )}
        </div>
    );
}

export default SearchResults;

import React from "react";
import { useState } from "react";

export default function SearchBar({fetchData}) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (evt) => {
        setInputText(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchData(inputText);
    };

    return (
        <>
            <h2>Search Bar</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter search term here..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button type="submit">SEARCH</button>
            </form>
        </>
    )
}

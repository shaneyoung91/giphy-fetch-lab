import React from "react";
import { useState } from "react";
import './SearchBar.css'

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
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Enter search term here..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                &nbsp; &nbsp;
                <button type="submit">SEARCH</button>
            </form>
        </>
    )
}

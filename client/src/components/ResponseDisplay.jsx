import React, { useState } from 'react';

const ResponseDisplay = ({ response }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

    const handleChange = (e) => {
        const { value, checked } = e.target;
        setSelectedOptions((prev) =>
            checked ? [...prev, value] : prev.filter((option) => option !== value)
        );
    };

    const renderResponse = () => {
        return (
            <div>
                {selectedOptions.includes('Alphabets') && (
                    <div>
                        <h3>Alphabets</h3>
                        <p>{JSON.stringify(response.alphabets)}</p>
                    </div>
                )}
                {selectedOptions.includes('Numbers') && (
                    <div>
                        <h3>Numbers</h3>
                        <p>{JSON.stringify(response.numbers)}</p>
                    </div>
                )}
                {selectedOptions.includes('Highest lowercase alphabet') && (
                    <div>
                        <h3>Highest Lowercase Alphabet</h3>
                        <p>{JSON.stringify(response.highest_lowercase_alphabet)}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            <h2>Response</h2>
            <div>
                {options.map((option) => (
                    <div key={option}>
                        <input
                            type="checkbox"
                            id={option}
                            value={option}
                            onChange={handleChange}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
            {response && renderResponse()}
        </div>
    );
};

export default ResponseDisplay;

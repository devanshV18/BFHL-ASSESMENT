import React, { useState } from 'react';
import { postData } from '../services/api';

const InputForm = ({ onResponse }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedData = JSON.parse(jsonInput);
            setError('');
            const response = await postData(parsedData);
            onResponse(response); // Pass response to parent component
        } catch (err) {
            setError('Invalid JSON format');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='Enter JSON input'
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default InputForm;

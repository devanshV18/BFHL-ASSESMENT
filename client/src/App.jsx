import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css'

const App = () => {
    const [response, setResponse] = useState(null);

    const handleResponse = (apiResponse) => {
        setResponse(apiResponse);
    };

    return (
        <div className="App">
            <h1>JSON Processor</h1>
            <InputForm onResponse={handleResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
};

export default App;

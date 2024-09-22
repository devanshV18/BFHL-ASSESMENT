const asyncHandler = require('express-async-handler')


const postMethod = asyncHandler(async (req, res) => {
    const { data, file_b64 } = req.body;

    // Initialize response object
    const response = {
        "is_success": true,
        "user_id": "john_doe_17091999",  // You can dynamically construct this from a DB or input
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "numbers": [],
        "alphabets": [],
        "highest_lowercase_alphabet": [],
        "file_valid": false,
        "file_mime_type": "",
        "file_size_kb": ""
    };

    // Separate numbers and alphabets
    const numbers = [];
    const alphabets = [];
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
        }
    });

    // Set numbers and alphabets in response
    response.numbers = numbers;
    response.alphabets = alphabets;

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => /[a-z]/.test(char));
    if (lowercaseAlphabets.length > 0) {
        const highestLowercase = lowercaseAlphabets.sort().slice(-1);  // Sort and get highest
        response.highest_lowercase_alphabet = highestLowercase;
    }

    // Handle file processing
    if (file_b64) {
        try {
            const fileBuffer = Buffer.from(file_b64, 'base64');
            const fileSizeKB = (fileBuffer.length / 1024).toFixed(2);  // Calculate file size in KB

            // MIME type detection (basic image type detection)
            let mimeType = "";
            if (file_b64.startsWith("iVBORw0KGgo")) {
                mimeType = "image/png";
            } else if (file_b64.startsWith("/9j/")) {
                mimeType = "image/jpeg";
            }

            if (mimeType) {
                response.file_valid = true;
                response.file_mime_type = mimeType;
                response.file_size_kb = fileSizeKB;
            } else {
                response.file_valid = false;
            }
        } catch (error) {
            response.file_valid = false;
        }
    }

    // Send the response
    res.json(response);
});
 

const getMethod = asyncHandler( async(req,res) => {
    res.status(200).json({
        operation_code: 1
    })
})

module.exports = {postMethod, getMethod}
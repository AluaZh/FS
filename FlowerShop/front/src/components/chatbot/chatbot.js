import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot({ preferences }) {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleChat = async (userMessage) => {
        // Prepare the conversation prompt with user preferences
        const prompt = `
            The user is creating a custom bouquet of flowers for a girl. Here are her preferences:
            - Hobby: ${preferences.hobby || 'not specified'}
            - Favorite Color: ${preferences.favoriteColor || 'not specified'}
            - Preferred Season: ${preferences.season || 'not specified'}
            User message: ${userMessage}
            
            Please suggest a bouquet idea based on these preferences and respond in a friendly, helpful manner.
        `;

        try {
            const res = await axios.post(
                'https://api.openai.com/v1/completions',
                {
                    model: 'text-davinci-003', // You can choose a different model if needed
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );

            setResponse(res.data.choices[0].text.trim());
        } catch (error) {
            console.error("Error interacting with ChatGPT API:", error);
            setResponse("Sorry, I'm having trouble responding right now.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChat(message);
        setMessage('');
    };

    return (
        <div className="chatbot">
            <h2>Chat with Our Flower Expert</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about flowers..."
                />
                <button type="submit">Send</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}

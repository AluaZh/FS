import React, { useState } from 'react';
import Preferences from '../components/preferences/preferences';
import Chatbot from '../components/chatbot/chatbot';

export default function Arcane() {
    const [preferences, setPreferences] = useState({});
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const handlePreferencesSubmit = (prefs) => {
        setPreferences(prefs);
    };

    const openChatbot = () => setIsChatbotOpen(true);
    const closeChatbot = () => setIsChatbotOpen(false);

    return (
        <div className="arcane">
            <h2>Create Your Custom Bouquet</h2>
            <Preferences onPreferencesSubmit={handlePreferencesSubmit} />

            <button className="chatbot-button" onClick={openChatbot}>
                Open Chatbot
            </button>

            {isChatbotOpen && (
                <div className="chatbot-modal">
                    <div className="chatbot-modal-content">
                        <button className="close-button" onClick={closeChatbot}>×</button>
                        <Chatbot preferences={preferences} />
                    </div>
                </div>
            )}
        </div>
    );
}

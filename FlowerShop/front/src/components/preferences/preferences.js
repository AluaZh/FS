import React, { useState } from 'react';

export default function Preferences({ onPreferencesSubmit }) {
    const [hobby, setHobby] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [season, setSeason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onPreferencesSubmit({ hobby, favoriteColor, season });
    };

    return (
        <form className="preference-form" onSubmit={handleSubmit}>
            <label>
                Hobby:
                <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Enter her hobby" />
            </label>
            <label>
                Favorite Color:
                <input type="text" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} placeholder="Favorite color" />
            </label>
            <label>
                Preferred Season:
                <input type="text" value={season} onChange={(e) => setSeason(e.target.value)} placeholder="Preferred season" />
            </label>
            <button type="submit">Submit Preferences</button>
        </form>
    );
}

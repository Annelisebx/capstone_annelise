
import React from 'react';

const Create = () => {
    return (
        <div className="create">
            <h2>Create a New Font</h2>
            <form>
                <label>Font Title:</label>
                <input
                    type="text"
                    required
                />
                <label>Font Type:</label>
                <select>
                    <option value="standard">Standard</option>
                    <option value="advanced">Advanced</option>
                </select>
                <br/>
                <label>User:</label>
                <input
                    type="text"
                    required
                />
                <button>Save Font</button>
            </form>
        </div>
    )
}

export default Create;
import React, { useState } from 'react';
import '../App.css';

export default function AddContact({ addContact }) {
    const [contactData, setContactData] = useState({ firstname: "", lastname: "", status: "active" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contactData.firstname === "" || contactData.lastname === "") {
            alert("Please fill all the details");
            return;
        }
        addContact(contactData);
        setContactData({ firstname: "", lastname: "", status: "active" });
    };

    return (
        <div className="formHeader">
            <div className="card">
                <div className="addContact">Add Contact</div>
                <form onSubmit={handleSubmit}>
                    <label>First Name:</label><br />
                    <input
                        type="text"
                        placeholder="Enter firstname"
                        name="firstname"
                        value={contactData.firstname}
                        onChange={handleChange}
                        className="input"
                    /><br />
                    <label>Last Name:</label><br />
                    <input
                        type="text"
                        placeholder="Enter lastname"
                        name="lastname"
                        value={contactData.lastname}
                        onChange={handleChange}
                        className="input"
                    /><br />
                    <button type="submit" className="btn">Add Contact</button>
                </form>
            </div>
        </div>
    );
}

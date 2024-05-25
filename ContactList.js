import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import '../App.css';

export default function ContactList({ contacts, setContacts }) {
    const [isEditing, setIsEditing] = useState(null); // State to track which contact is being edited
    const [editData, setEditData] = useState({ firstname: "", lastname: "", status: "" });

    const handleDelete = (index) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        setContacts(newContacts);
    };

    const toggleStatus = (index) => {
        const newContacts = contacts.map((contact, i) => 
            i === index ? { ...contact, status: contact.status === 'active' ? 'inactive' : 'active' } : contact
        );
        setContacts(newContacts);
    };

    const handleEditClick = (index) => {
        setIsEditing(index);
        setEditData(contacts[index]);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleEditSubmit = (index) => {
        const newContacts = contacts.map((contact, i) => 
            i === index ? { ...editData } : contact
        );
        setContacts(newContacts);
        setIsEditing(null);
    };

    const contactList = contacts.map((val, index) => (
        <div key={index} className='contacts'>
            {isEditing === index ? (
                <>
                    <input
                        type="text"
                        name="firstname"
                        value={editData.firstname}
                        onChange={handleEditChange}
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={editData.lastname}
                        onChange={handleEditChange}
                    />
                    <button onClick={() => handleEditSubmit(index)}>Save</button>
                </>
            ) : (
                <>
                    <div>{val.firstname}</div>
                    <div>{val.lastname}</div>
                    <div>Status: {val.status}</div>
                    <button onClick={() => toggleStatus(index)}>
                        {val.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <span onClick={() => handleDelete(index)}><DeleteIcon/></span>
                </>
            )}
        </div>
    ));

    return (
        <>
            <div className='ContactsHeader'>Contact List</div>
            <div>{contactList}</div>
        </>
    );
}

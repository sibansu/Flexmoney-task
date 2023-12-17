import React from 'react'

function Confirmation({name, age, address, contact, email, currentValue, month}) {
    return (
        <div className="body">
            <div class="centered-info">
                <h2>Congratulations {name} !!</h2>
                <div class="info-field">
                    <label for="name">Name:</label>
                    <span>{name}</span>
                </div>
                <div class="info-field">
                    <label for="email">Email:</label>
                    <span>{age}</span>
                </div>
                <div class="info-field">
                    <label for="phone">Address:</label>
                    <span>{address}</span>
                </div>
                <div class="info-field">
                    <label for="age">Age:</label>
                    <span>{contact}</span>
                </div>
                <div class="info-field">
                    <label for="age">Email:</label>
                    <span>{email}</span>
                </div>
                <div class="info-field">
                    <label for="age">Batch:</label>
                    <span>{currentValue}</span>
                </div>
                <div class="info-field">
                    <label for="age">Month:</label>
                    <span>{month}</span>
                </div>
            </div>

        </div>
    )
}

export default Confirmation
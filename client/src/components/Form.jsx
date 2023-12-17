import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Confirmation from './Confirmation';

function Form() {

    const [value, setValue] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [month, setMonth] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const select = (s) => {
        setValue(true);
        setCurrentValue(s);
    }



    const handleSubmit = async (e) => {

        if (!name || !age || !address || !contact || !email || !currentValue || !month) {
            window.alert("Please fill all the fields");

        }
        setError(false);
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/add", {
                name, age, address, contact, email, month, batch: currentValue
            });
            if (res.data?.success === true) {
                alert(res.data.message)
                setModal(true)
            } else {
                alert(res.data.message)
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            {
                !modal ? (
                    <div className="container">
                        <form action="" onSubmit={handleSubmit} className="custom-form">
                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Name</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your Full Name"
                                />
                            </div>


                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Age</span>
                                <input
                                    type="number"
                                    min={18}
                                    max={65}
                                    className="form-control"
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Enter your Age"
                                />
                            </div>

                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Month</span>
                                <input
                                    type="number"
                                    min={1}
                                    max={12}
                                    className="form-control"
                                    onChange={(e) => setMonth(e.target.value)}
                                    placeholder="Enter the month of registration (in number)"
                                />
                            </div>

                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Address</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter your Address"
                                />
                            </div>

                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Contact</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group input-group mb-3">
                                <span className="input-group-text">Email</span>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                />
                            </div>

                            <div className="form-group input-group mb-3">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Select batch
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => select("6-7 AM")}>
                                            6 - 7 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => select("7-8 AM")}>
                                            7 - 8 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => select("8-9 AM")}>
                                            8 - 9 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => select("5-6 PM")}>
                                            5 - 6 PM
                                        </a>
                                    </li>
                                </ul>

                                {value && <span className="input-group-text">{currentValue}</span>}
                            </div>

                            <div className="form-group input-group mb-3" style={{ float: "right" }}>
                                <span className="input-group-text">Rs</span>
                                <span className="input-group-text currency">500.00</span>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                ) : (
                    <Confirmation name={name} age={age} address={address} contact={contact} email={email} currentValue={currentValue} month={month}></Confirmation>
                )
            }
        </div >

    );
}

export default Form





import React, { useState } from 'react';
import CopyButton from '../CopyButton';
import PasswordDisplay from '../PasswordDisplay';

function UserPreferredPassword() {

    const [email, setemail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [dob, setdob] = useState("");
    const [length, setLength] = useState(8);
    const [password, setpassword] = useState('');
    const [rangeOutput, setrangeOutput] = useState(8);
    const [mobileNumber, setmobileNumber] = useState("");

    function onChange() {
        setLength(document.getElementById("rangeInput").value);
        setrangeOutput(document.getElementById("rangeInput").value);
    }


    function handleGenerate() {
        let password = '';
        if (email === '' || mobileNumber === '' || firstName === '' || lastName === '' || dob === '') {
            setpassword('Please Enter All Details')

            return
        }


        const listOfTypes = ["email", 'first', 'last', 'dob', 'number'];
        for (let i = 0; i <= length - 1; i++) {

            // alphabet or number

            const type = listOfTypes[Math.floor(Math.random() * listOfTypes.length)];

            if (type === "email") {
                password += pickRandomElement(email);
            }
            else if (type === "first") {
                password += pickRandomElement(firstName);
            }
            else if (type === "last") {
                password += pickRandomElement(lastName);
            }
            else if (type === "dob") {
                password += pickRandomElement(dob);
            } else {
                password += pickRandomElement(mobileNumber)
            }


        }

        setpassword(password);
        return password;
    }

    function pickRandomElement(parameter) {
        const r = parameter[Math.floor(Math.random() * parameter.length)];
        return r
    }


    return (
        <div className="container d-flex flex-column h-100 justify-content-center align-items-center mt-4">
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="text-center">Enter Some Details and we will Generate Password that easy for you and Harder for scammers.</h5>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className='container'>
                        <div className='row'>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Enter Your e-mail id
                                </label>
                                <input
                                    type="email"
                                    placeholder='yourpassword@cool.com'
                                    className="my-3"
                                    onChange={(e) => setemail(e.target.value)}
                                />
                            </div>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Enter Your Number
                                </label>
                                <input
                                    type="number"
                                    placeholder='(+91) 90888 1234 54'
                                    className="my-3"
                                    onChange={(e) => setmobileNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Enter Your First Name
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setfirstName(e.target.value)}
                                    placeholder='Elon'
                                    className="my-3"
                                />
                            </div>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Enter Your Last Name
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setlastName(e.target.value)}
                                    placeholder='Musk'
                                    className="my-3"
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Enter Your Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    onChange={(e) => setdob(e.target.value)}
                                    className="my-3"
                                />
                            </div>
                            <div className="d-flex flex-column col w-50">
                                <label className="form-label" htmlFor="customRange1">
                                    Password Length (8-32) :
                                    <span
                                        className="p-2 text-primary fs-5 font-weight-bold "
                                        id="amount"
                                        name="amount"
                                        htmlFor="rangeInput"
                                    >
                                        {rangeOutput}
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    id="rangeInput"
                                    name="rangeInput"
                                    min="8"
                                    max="32"
                                    value={length || 8}
                                    className="my-3"
                                    onChange={onChange}
                                    oninput="amount.value=rangeInput.value"
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="d-flex flex-column col w-50">
                                <button
                                    onClick={() => handleGenerate()}
                                    type="button"
                                    className="btn btn-success"
                                >
                                    Generate
                                </button>
                            </div>
                            <div className="d-flex flex-column col w-50">
                                <p style={{ color: password === 'Please Enter All Details' ? 'red' : '' }}>
                                    {password === 'Please Enter All Details' ? password :
                                        <PasswordDisplay password={password} />
                                    }
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="d-flex flex-column col w-50">
                                {password != 'Please Enter All Details' ? <CopyButton password={password} /> : null}
                            </div>
                            <div className="d-flex flex-column col w-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPreferredPassword
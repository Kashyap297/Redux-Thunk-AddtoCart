import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = ({ users, setUsers, isEdit }) => {

    const intialValue = {
        name: "",
        email: "",
        // age: "",
        city: ""
    }

    const [input, setInput] = useState(intialValue)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        if (isEdit) {
            setInput(users[id])
        }
    }, [])

    const checkValidation = (input) => {
        const errors = {}

        if (input.name.trim() === "") {
            errors.name = "Invalid Name*"
        }
        if (input.email.trim() === "") {
            errors.email = "Invalid Email*"
        }
        if (input.city.trim() === "") {
            errors.city = "Invalid City*"
        }

        return errors
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    // console.log(input);

    const handleSubmit = (e) => {
        e.preventDefault()


        const validate = checkValidation(input)
        setErrors(validate)
        const check = Object.keys(validate)
        if (check.length < 1) {
            setUsers([...users, input])
            setInput(intialValue)
            navigate(-1)
        }
        if(isEdit){
            const temp = [...users]
            temp[id] = input
            setUsers(temp)
        }
    }

    return (
        <>
            <section className='mt-5 gr-text'>
                <div className="container">
                    <div className="col-4 m-auto">
                        <form action="" className='bg-light p-3 bor-rad lightslategrey shadow-lg' onSubmit={handleSubmit}>
                            <h4 className='text-center mb-3'>{isEdit ? "Update Profile" : "New Profile"}</h4>
                            <div className="form-group mb-3">
                                <input type="text" placeholder="" name='name' value={input.name} onChange={handleChange}></input>
                                <label>Name</label>
                                <div className='text-danger text-end'>{errors.name}</div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <input type="email" placeholder="" name='email' value={input.email} onChange={handleChange}></input>
                                <label>Email-ID</label>
                                <div className='text-danger text-end'>{errors.email}</div>
                            </div>
                            {/* <div className="d-flex justify-content-between"> */}
                            {/* <div className="form-group col-3">
                                    <input type="number" placeholder="" name='age' value={input.age} onChange={handleChange}></input>
                                    <label>Age</label>
                                </div> */}
                            <div className="form-group w-100  mt-3">
                                <input type="text" placeholder="" name='city' value={input.city} onChange={handleChange}></input>
                                <label>City</label>
                                <div className='text-danger text-end'>{errors.city}</div>
                            </div>
                            {/* </div> */}
                            <button type='submit' className='button w-100 py-2 mt-3'>{isEdit ? "Update" : "Add Data"}</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
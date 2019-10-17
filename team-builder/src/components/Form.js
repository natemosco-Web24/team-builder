import React, { useState } from 'react'

export default function Form(props) {
    const [employee, setEmployee] = useState({ name: "", email: "", role: "", employeeid: "" });
    const [key, setKey] = useState({})

    const onChange = (event) => {
        setEmployee({ ...employee, ...{ [event.target.id]: event.target.value } })
    }
    const onChangeID = (event) => {
        setKey({ ...key, ...{ [event.target.id]: event.target.value } })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        props.setList({ ...props.list, ...{ [key]: { ...employee } } })
        setKey({})
        setEmployee({ name: "", email: "", role: "", employeeid: "" })
    }

    return (
        <div>
            <form onSubmit={(event) => { onSubmit(event) }}>
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" placeholder="name" type="text" onChange={(event) => { onChange(event) }} />

                <label htmlFor="email">Email:</label>
                <input name="email" id="email" placeholder="person@gmail.com" type="email" onChange={(event) => { onChange(event) }} />

                <label htmlFor="role">Role:</label>
                <input name="role" id="role" type="text" onChange={(event) => { onChange(event) }} />

                <label htmlFor="employeeid">Employee ID:</label>
                <input name="employeeid" id="employeeid" type="password" onChange={(event) => { onChange(event) }} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

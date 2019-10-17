import React from 'react'

export default function EmployeeCard(props) {
    return (
        <div>
            <p>{props.employee.name}</p>
            <p>{props.employee.role}</p>
            <i>{props.employee.email}</i>
        </div>
    )
}

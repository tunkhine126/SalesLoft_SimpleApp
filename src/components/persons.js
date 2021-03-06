import React from 'react'

const Persons = (props) => {
    return ( 
      <tbody>
        <tr className="table">
          <td>{props.person.id}</td>
          <td>{props.person.display_name}</td>
          <td>{props.person.email_address}</td>
          <td>{props.person.title}</td>
        </tr>  
      </tbody>
    )
}

export default Persons;
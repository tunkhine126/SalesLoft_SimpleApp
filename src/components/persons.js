import React from 'react'

// let persons = this.props.people ? this.props.people : null

const Persons = (props) => {
    return ( 
      <tbody>
        <tr className="table">
          <td>{props.index+1}</td>
          <td>{props.person.display_name}</td>
          <td>{props.person.email_address}</td>
          <td>{props.person.title}</td>
        </tr>  
      </tbody>
    )
}

export default Persons;
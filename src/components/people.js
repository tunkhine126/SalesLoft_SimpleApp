import React from 'react'
import Persons from './persons'
import { Table } from 'react-bootstrap'

const People = (props) => {

    let persons = props.allPeople ? props.allPeople : null

    return (
      <div>
        <div className="persons">
          <Table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
            {persons.data ? persons.data.map((person, i) => {
              return (<Persons person={person} key={i} index={i} className="table">
              </Persons>)
            }) : null}
          </Table>
        </div>
      </div>
    )
}

export default People;
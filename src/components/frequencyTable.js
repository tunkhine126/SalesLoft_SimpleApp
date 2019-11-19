import React from 'react'
import { Table } from 'react-bootstrap'

const FrequencyTable = (props) => {

  const people = props.allPeople.data
  const emails = []
  const frequency = {};

  //gathering all emails from props into an array
  for (let all of people) {
    emails.push(all.email_address);
  }

  //iterating over the email array
  //looping each email and splitting each character
  emails.forEach(email => {
    for (let i = 0; i < email.length; i++) {
      let character = email.charAt(i);
      frequency[character] = isNaN(frequency[character]) ? 1 : frequency[character] + 1
    }
  })

  //creating an array of objects and setting key / value pair
  const result = Object.keys(frequency).map(character => ({ character, count: frequency[character] }));
  //sorting the array by frequency count
  const sorted = result.sort((a, b) => (b.count > a.count) ? 1 : -1)

  return (
    <div className="frequency-table">
      <h4 className="frequencyHeader">Frequency count of all unique characters in email addresses:</h4>
      <Table className="col-4 mx-left" striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>Character</th>
            <th>Count</th>
          </tr>
        </thead>
        {sorted.map((item, i) => {
          return (
            <tbody item={item} key={i}>
              <tr className="table">
                <td>{item.character}</td>
                <td>{item.count}</td>
              </tr>
            </tbody>
          )
        }
        )
        }
      </Table>
    </div>
  )
}

export default FrequencyTable;
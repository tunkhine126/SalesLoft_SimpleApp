import React from 'react'
import { Table } from 'react-bootstrap'

const FrequencyTable = (props) => {

  const people = props.allPeople.data
  const emails = []
  const frequency = {};

  //gathering all emails into an array
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

  //setting key / value pair
  const result = Object.keys(frequency).map(character => ({ character, count: frequency[character] }));
  const sorted = result.sort((a, b) => b.count - a.count);

  return(
    <div>
      <h4 className="frequencyHeader">Frequency count of all unique characters in email addresses:</h4>
      <Table className="frequencyTable" striped bordered hover size="sm">
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
              )})}
          </Table>
      </div>
    )
}

export default FrequencyTable;
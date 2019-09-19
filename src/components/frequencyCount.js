import React from 'react'
import { Table } from 'react-bootstrap'

const FrequencyCount = () => {
  return(
    <div>
      <h4>Frequency count of all unique characters in email addresses</h4>
        <Table className="table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Count</th>
            </tr>
          </thead>
        </Table>
    </div>
  )
}

export default FrequencyCount;
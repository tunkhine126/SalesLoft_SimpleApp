import React from 'react'
import { Button } from 'react-bootstrap'

const total_records = 346

function PageButtons(props) {
  return (
    <div className='page-btn-container'>
      <Button
        className="button"
        variant="secondary"
        size="sm"
        onClick={() => props.prevPage()}
        disabled={props.page <= 1}>
        Previous 25 results
      </Button>
      &nbsp;
      <Button
        className="button"
        variant="secondary"
        size="sm"
        onClick={() => props.nextPage()}
        disabled={props.page >= 14}>
        Next 25 results
      </Button>
      <div className="page-results">
        <b>Page {props.page} of {Math.ceil(total_records / props.perPage)}</b>
      </div>
    </div>
  )
}

export default PageButtons;
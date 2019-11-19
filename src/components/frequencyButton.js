import React from 'react'
import { Button } from 'react-bootstrap'

function FrequencyButton(props) {

  return (
    <div className="frequency-btn-container">
      <Button onClick={() => props.display()}
        className="button"
        variant="secondary"
        size="sm">
        {props.toggle ? 'Hide' : 'Display'} Frequency Count
        </Button>
    </div>
  )
}

export default FrequencyButton;
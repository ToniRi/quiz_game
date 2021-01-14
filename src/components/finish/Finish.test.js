import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Finish from './Finish'

test('renders content', () => {
    const finsih = {
      content: 'Component testing is done with react-testing-library',
      important: true
    }
  
    const component = render(
      <Note note={note} />
    )
  
    expect(component.container).toHaveTextContent(
      'Component testing is done with react-testing-library'
    )
  })


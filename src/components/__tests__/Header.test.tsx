import { render, screen } from '@testing-library/react'
import Header from '../Header'

test('renders App Component', () => {
  render(<Header />)
  const linkElement = screen.getByText(/Header/i)
  expect(linkElement).toBeInTheDocument()
})

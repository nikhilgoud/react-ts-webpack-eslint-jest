import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

test('renders App Component', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/Copyright/i)
  expect(linkElement).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component: ', () => {
  it('renders Component', () => {
    render(<App />)
    const linkElement = screen.getByText(/React/i)
    expect(linkElement).toBeInTheDocument()
  })
  it('renders Image', () => {
    render(<App />)

    const image = screen.getByTitle(/logo/i)
    expect(image).toBeInTheDocument()
  })
  it('renders Button', () => {
    render(<App />)

    const button = screen.getByText(/Button/i)
    expect(button).toBeInTheDocument()
  })
  it('handles Button click', () => {
    render(<App />)

    jest.spyOn(window, 'alert').mockReturnValue()
    const button = screen.getByText(/Button/i) as HTMLButtonElement
    expect(button).toBeInTheDocument()
    button.click()
    expect(window.alert).toHaveBeenCalled()
  })
})

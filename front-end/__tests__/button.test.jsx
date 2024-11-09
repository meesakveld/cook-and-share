import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../src/components/common/Button'

describe('Button', () => {
  test('renders a button with a label', () => {
    render(<Button function='link' color='red'>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
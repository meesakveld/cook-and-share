import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Title from '../src/components/common/Title'

describe('Title', () => {
    test('renders a title with a label', () => {
        render(<Title>Test Title</Title>)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
    })
});
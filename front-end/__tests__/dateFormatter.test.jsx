import dateFormatter from '../src/utils/dateFormatter'

describe('dateFormatter', () => {
    test('formats a date string', () => {
        const date = '2021-06-01T00:00:00.000Z'
        expect(dateFormatter(date)).toBe('3 years ago')
    })
})
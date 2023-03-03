

const { shuffleArray } = require('./utils')

let arr1 = [1,2,3,4]

describe('shuffleArray should', () => {

    test('returns arr', () => {
        expect(Array.isArray(shuffleArray([1,2,3,4]))).toBe(true)
    })
    test('is the array returned the same length?', () => {
        expect(shuffleArray([1,2,3,4])).toHaveLength(4)
    })

    
})


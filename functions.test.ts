

const { shuffleArray } = require('./utils')

let arr1 = [1,2,3,4]

describe('shuffleArray should', () => {

    test('returns arr', () => {
        expect(typeof shuffleArray(arr1)).toBe('array')
    })
    test('is the array returned the same length?', () => {
        expect(shuffleArray(arr1)).toHaveLength(4)
    })

    
})


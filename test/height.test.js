import { firstTree, secondTree } from './mock/trees.mock.js'

describe('Height test', () => {
    describe('First tree', () => {
        test('Min Height', () => {
            expect(firstTree.getMinHeight()).toStrictEqual(3)
        })

        test('Max Height', () => {
            expect(firstTree.getMaxHeight()).toStrictEqual(9)
        })
    })

    describe('Second tree', () => {
        test('Min Height', () => {
            expect(secondTree.getMinHeight()).toStrictEqual(3)
        })

        test('Max Height', () => {
            expect(secondTree.getMaxHeight()).toStrictEqual(9)
        })
    })
})

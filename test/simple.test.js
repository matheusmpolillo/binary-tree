import Tree from '../src/classes/tree.js'
import Node from '../src/classes/node.js'

describe('Simple tests', () => {
    describe('Simple tree with two nodes', () => {
        const tree = new Tree(7)
        Node.setLeft(tree.root, 18)
        Node.setRight(tree.root, 14)

        test('Tree root value', () => {
            expect(tree.root.getValue()).toStrictEqual(7)
        })

        test('Left and right tree node value', () => {
            expect(tree.root.left.getValue()).toStrictEqual(18)
            expect(tree.root.right.getValue()).toStrictEqual(14)
        })
    })
})

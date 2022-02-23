import { firstTree, secondTree } from './mock/trees.mock.js'

describe('Route tests', () => {
    describe('First tree', () => {
        test('Preorder Traversal', () => {
            const preOrderResult = firstTree
                .preorderTraversal(firstTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('+ * A B - C / D E')
        })

        test('Inorder Traversal', () => {
            const preOrderResult = firstTree
                .inorderTraversal(firstTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('A * B + C - D / E')
        })

        test('Postorder Traversal', () => {
            const preOrderResult = firstTree
                .postorderTraversal(firstTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('A B * C D E / - +')
        })

        test('Level Order Traversal', () => {
            const preOrderResult = firstTree.levelOrderTraversal(firstTree.root)
            expect(preOrderResult).toStrictEqual([])
        })
    })

    describe('Second tree', () => {
        test('Preorder Traversal', () => {
            const preOrderResult = secondTree
                .preorderTraversal(secondTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('+ a * b - / c d e')
        })

        test('Inorder Traversal', () => {
            const preOrderResult = secondTree
                .inorderTraversal(secondTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('a + b * c / d - e')
        })

        test('Postorder Traversal', () => {
            const preOrderResult = secondTree
                .postorderTraversal(secondTree.root)
                .join(' ')
            expect(preOrderResult).toStrictEqual('a b c d / e - * +')
        })

        test('Level Order Traversal', () => {
            const preOrderResult = secondTree.levelOrderTraversal(
                secondTree.root
            )
            expect(preOrderResult).toStrictEqual([])
        })
    })
})

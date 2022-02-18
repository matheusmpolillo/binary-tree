import Tree from '../src/classes/tree.js'
import Node from '../src/classes/node.js'

describe('Route tests', () => {
    /**
     * Árvore
     *
     *          '+'
     *        /     \
     *      '*'     '-'
     *     /  \     /  \
     *  'A'   'B' 'C'  '/'
     *                /   \
     *             'D'    'E'
     *
     *    Preorder: "+ * A B - C / D E"
     *     Inorder: "A * B + C - D / E"
     *   Postorder: "A B * C D E / - +"
     * Level Order: "+ * - A B C / D E"
     */

    const tree = new Tree('+')
    /* Primeiro nível */
    Node.setLeft(tree.root, '*')
    Node.setRight(tree.root, '-')
    /* Segundo nível - Left */
    Node.setLeft(tree.root.left, 'A')
    Node.setRight(tree.root.left, 'B')
    /* Segundo nível - Right */
    Node.setLeft(tree.root.right, 'C')
    Node.setRight(tree.root.right, '/')
    /* Terceiro nível - Right */
    Node.setLeft(tree.root.right.right, 'D')
    Node.setRight(tree.root.right.right, 'E')

    /**
     * Segunda árvore
     *
     *     '+'
     *   /    \
     * 'a'    '*'
     *       /   \
     *    'b'     '-'
     *           /   \
     *        '/'    'e'
     *       /  \
     *     'c'  'd'
     *
     *    Preorder: "+ a * b - / c d e"
     *     Inorder: "a + b * c / d - e"
     *   Postorder: "a b c d / e - * +"
     * Level Order: "+ a * b - / e c d"
     */

    const secondTree = new Tree('+')
    /* Primeiro nível */
    Node.setLeft(secondTree.root, 'a')
    Node.setRight(secondTree.root, '*')
    /* Segundo nível - Right */
    Node.setLeft(secondTree.root.right, 'b')
    Node.setRight(secondTree.root.right, '-')
    /* Terceiro nível - Right */
    Node.setLeft(secondTree.root.right.right, '/')
    Node.setRight(secondTree.root.right.right, 'e')
    /* Quarto nível - Left */
    Node.setLeft(secondTree.root.right.right.left, 'c')
    Node.setRight(secondTree.root.right.right.left, 'd')

    describe('First tree', () => {
        test('Preorder Traversal', () => {
            const preOrderResult = tree.preorderTraversal(tree.root).join(' ')
            expect(preOrderResult).toStrictEqual('+ * A B - C / D E')
        })

        test('Inorder Traversal', () => {
            const preOrderResult = tree.inorderTraversal(tree.root)
            expect(preOrderResult).toStrictEqual([])
        })

        test('Postorder Traversal', () => {
            const preOrderResult = tree.postorderTraversal(tree.root)
            expect(preOrderResult).toStrictEqual([])
        })

        test('Level Order Traversal', () => {
            const preOrderResult = tree.levelOrderTraversal(tree.root)
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
            const preOrderResult = secondTree.inorderTraversal(secondTree.root)
            expect(preOrderResult).toStrictEqual([])
        })

        test('Postorder Traversal', () => {
            const preOrderResult = secondTree.postorderTraversal(
                secondTree.root
            )
            expect(preOrderResult).toStrictEqual([])
        })

        test('Level Order Traversal', () => {
            const preOrderResult = secondTree.levelOrderTraversal(
                secondTree.root
            )
            expect(preOrderResult).toStrictEqual([])
        })
    })
})

import Tree from '../../src/classes/tree.js'
import Node from '../../src/classes/node.js'

/**
 * First tree
 *
 *          '+'
 *        /     \
 *      '*'     '-'
 *     /  \     /  \
 *  'A'   'B' 'C'  '/'
 *                /   \
 *             'D'    'E'
 *
 *  Min Height: 3
 *  Max Height: 9
 *    Preorder: "+ * A B - C / D E"
 *     Inorder: "A * B + C - D / E"
 *   Postorder: "A B * C D E / - +"
 * Level Order: "+ * - A B C / D E"
 */

const firstTree = new Tree('+')
/* First level */
Node.setLeft(firstTree.root, '*')
Node.setRight(firstTree.root, '-')
/* Second level - Left */
Node.setLeft(firstTree.root.left, 'A')
Node.setRight(firstTree.root.left, 'B')
/* Third level - Right */
Node.setLeft(firstTree.root.right, 'C')
Node.setRight(firstTree.root.right, '/')
/* Fourth level - Right */
Node.setLeft(firstTree.root.right.right, 'D')
Node.setRight(firstTree.root.right.right, 'E')

/**
 * Second tree
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
 *  Min Height: 3
 *  Max Height: 9
 *    Preorder: "+ a * b - / c d e"
 *     Inorder: "a + b * c / d - e"
 *   Postorder: "a b c d / e - * +"
 * Level Order: "+ a * b - / e c d"
 */

const secondTree = new Tree('+')
/* First level */
Node.setLeft(secondTree.root, 'a')
Node.setRight(secondTree.root, '*')
/* Second level - Right */
Node.setLeft(secondTree.root.right, 'b')
Node.setRight(secondTree.root.right, '-')
/* Third level - Right */
Node.setLeft(secondTree.root.right.right, '/')
Node.setRight(secondTree.root.right.right, 'e')
/* Fourth level - Left */
Node.setLeft(secondTree.root.right.right.left, 'c')
Node.setRight(secondTree.root.right.right.left, 'd')

export { firstTree, secondTree }

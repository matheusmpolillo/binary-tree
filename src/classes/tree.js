import Node from './node.js'

export default class Tree {
    constructor(data) {
        this.root = new Node(data)
    }

    /**
     * Function responsible for traversing the tree in pre-order.
     * It starts by going through the root, goes through the left subtree, and ends by going through the right subtree.
     *
     * @param {Node} node Node responsible for being the root node of the route.
     * @returns {Array} Result of the traversal.
     */
    preorderTraversal(node) {
        let traversalResult = [node.getValue()]
        delete node.value
        for (const children of Object.values(node)) {
            if (!children) continue
            traversalResult = traversalResult.concat(
                this.preorderTraversal(children)
            )
        }

        return traversalResult
    }

    /**
     * Function responsible for traversing the tree in order.
     * It starts with the left subtree, goes through the root and ends with the right subtree.
     *
     * @param {Node} node Node responsible for being the root node of the route.
     * @returns {Array} Result of the traversal.
     */
    inorderTraversal(node) {
        return []
    }

    /**
     * Function responsible for making the post-order traversal through the tree.
     * It starts at the left subtree, goes through the right subtree, and ends at the root.
     *
     * @param {Node} node Node responsible for being the root node of the route.
     * @returns {Array} Result of the traversal.
     */
    postorderTraversal(node) {
        return []
    }

    /**
     * Function responsible for making the level path through the tree.
     * It starts by going through the first level of the tree: the root and its first nodes. Ends when going through the last level.
     * Always left to right from the first child node.
     *
     * @param {Node} node Node responsible for being the root node of the route.
     * @returns {Array} Result of the traversal.
     */
    levelOrderTraversal(node) {
        return []
    }
}

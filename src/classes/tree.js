import Node from './node.js'

export default class Tree {
    constructor(data) {
        this.root = new Node(data)
    }

    /**
     * Function responsible for calculating the maximum height of the tree.
     * The result of the height of N nodes will always be N.
     *
     * H(n)max = n
     *
     * @param {Node} node Node responsible for being the root node of the iteration.
     * @returns {number} Result of maximum tree size.
     */
    getMaxHeight(node = null) {
        let count = 1

        for (const children of Object.values(node ? node : this.root)) {
            if (!children) continue
            count += this.getMaxHeight(children)
        }

        return count
    }

    /**
     * Function responsible for calculating the minimum height of the tree.
     * The result of the height of N nodes will be 1 + the weight of the logarithm of N on
     * the basis of the mathematical constant (Euler's number).
     *
     * H(n)min = 1 + log(n)
     *
     * @returns {number} Result of minimum tree size.
     */

    getMinHeight() {
        const count = this.getMaxHeight()
        return parseInt(1 + Math.log(count))
    }

    /**
     * Function responsible for traversing the tree in pre-order.
     * It starts by going through the root, goes through the left subtree, and ends by going through the right subtree.
     *
     * @param {Node} node Node responsible for being the root node of the iteration.
     * @returns {Array} Result of the traversal.
     */
    preorderTraversal(node = null) {
        if (!node) node = this.root
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
     * @param {Node} node Node responsible for being the root node of the iteration.
     * @returns {Array} Result of the traversal.
     */
    inorderTraversal(node = null) {
        if (!node) node = this.root
        let traversalResult = []

        if (node.left)
            traversalResult = traversalResult.concat(
                this.inorderTraversal(node.left)
            )

        traversalResult.push(node.getValue())

        if (node.right)
            traversalResult = traversalResult.concat(
                this.inorderTraversal(node.right)
            )

        return traversalResult
    }

    /**
     * Function responsible for making the post-order traversal through the tree.
     * It starts at the left subtree, goes through the right subtree, and ends at the root.
     *
     * @param {Node} node Node responsible for being the root node of the iteration.
     * @returns {Array} Result of the traversal.
     */
    postorderTraversal(node = null) {
        if (!node) node = this.root
        let traversalResult = []

        if (node.left)
            traversalResult = traversalResult.concat(
                this.postorderTraversal(node.left)
            )

        if (node.right)
            traversalResult = traversalResult.concat(
                this.postorderTraversal(node.right)
            )

        traversalResult.push(node.getValue())

        return traversalResult
    }

    /**
     * Function responsible for making the level path through the tree.
     * It starts by going through the first level of the tree: the root and its first nodes. Ends when going through the last level.
     * Always left to right from the first child node.
     *
     * @param {Node} node Node responsible for being the root node of the iteration.
     * @returns {Array} Result of the traversal.
     */
    levelOrderTraversal(node = null) {
        return []
    }
}

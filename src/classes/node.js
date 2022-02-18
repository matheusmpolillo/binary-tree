export default class Node {
    #value

    constructor(data) {
        this.#value = data
        this.left   = null
        this.right  = null
    }

    /**
     * Function responsible for returning the value of the respective node.
     *
     * @returns {any} Node value
     */
    getValue() {
        return this.#value
    }

    /**
     * Function responsible for assigning a value to the left node.
     *
     * @param {*} node Node responsible for being the root node of the route.
     * @param {*} value Value that will compose the node.
     */
    static setLeft(node, value) {
        node.left = new Node(value)
    }

    /**
     * Function responsible for assigning a value to the right node.
     *
     * @param {*} node Node responsible for being the root node of the route.
     * @param {*} value Value that will compose the node.
     */
    static setRight(node, value) {
        node.right = new Node(value)
    }
}

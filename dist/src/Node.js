"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
/**
 * Node class representing a node in a graph.
 * Each node has a value and a set of edges to other nodes.
 * The edges are represented as a Set to ensure uniqueness.
 * The class provides methods to add and remove edges.
 */
class Node {
    /**
     * Get the value of the node.
     *
     * @returns The value of the node.
     */
    get value() {
        return this._value;
    }
    /**
     * Get the edges of the node.
     *
     * @returns The value of the node.
     */
    get edges() {
        return this._edges;
    }
    /**
     * The constructor of the Node class.
     * It initializes the value and edges of the node.
     * The edges are initialized as an empty Set.
     *
     * @param value The value of the node.
     */
    constructor(value) {
        this._value = value;
        this._edges = new Set();
    }
    /**
     * Adds an edge to the node.
     * This method adds a new edge to the node.
     * If the edge already exists, it does nothing.
     *
     * @param node The node to add as an edge.
     */
    addEdge(node) {
        this._edges.add(node);
    }
    /**
     * Removes an edge from the node.
     * This method removes an edge from the node.
     * If the edge does not exist, it does nothing.
     *
     * @param node The node to remove as an edge.
     */
    removeEdge(node) {
        this._edges.delete(node);
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map
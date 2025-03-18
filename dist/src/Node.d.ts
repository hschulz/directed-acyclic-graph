/**
 * Node class representing a node in a graph.
 * Each node has a value and a set of edges to other nodes.
 * The edges are represented as a Set to ensure uniqueness.
 * The class provides methods to add and remove edges.
 */
export declare class Node<T> {
    /**
     * The value of the node.
     * This can be any type, as specified by the generic type parameter T.
     * The value is used to identify the node in the graph.
     * The value is not unique, as multiple nodes can have the same value.
     * However, the combination of value and edges makes each node unique.
     */
    protected _value: T;
    /**
     * Get the value of the node.
     *
     * @returns The value of the node.
     */
    get value(): T;
    /**
     * The edges of the node.
     * This is a Set of Node instances that represent the nodes
     * that are connected to this node by an edge.
     * The edges are represented as a Set to ensure uniqueness.
     * This means that a node cannot have multiple edges to the same node.
     */
    protected _edges: Set<Node<T>>;
    /**
     * Get the edges of the node.
     *
     * @returns The value of the node.
     */
    get edges(): Set<Node<T>>;
    /**
     * The constructor of the Node class.
     * It initializes the value and edges of the node.
     * The edges are initialized as an empty Set.
     *
     * @param value The value of the node.
     */
    constructor(value: T);
    /**
     * Adds an edge to the node.
     * This method adds a new edge to the node.
     * If the edge already exists, it does nothing.
     *
     * @param node The node to add as an edge.
     */
    addEdge(node: Node<T>): void;
    /**
     * Removes an edge from the node.
     * This method removes an edge from the node.
     * If the edge does not exist, it does nothing.
     *
     * @param node The node to remove as an edge.
     */
    removeEdge(node: Node<T>): void;
}
//# sourceMappingURL=Node.d.ts.map
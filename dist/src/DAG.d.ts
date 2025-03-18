import { Node } from "./Node";
/**
 * A class representing a Directed Acyclic Graph (DAG).
 */
export declare class DAG<T> {
    /**
     * The internal reference to the nodes in the graph.
     * This is a Map of node values to Node instances.
     */
    protected nodes: Map<T, Node<T>>;
    /**
     * The constructor of the DAG class.
     * It initializes the nodes Map.
     */
    constructor();
    /**
     * Checks if adding an edge would create a cycle in the graph.
     * Uses depth-first search to detect cycles.
     *
     * @param startNode The starting node of the edge.
     * @param targetNode The target node of the edge.
     * @returns True if a cycle is detected, false otherwise.
     */
    protected hasCycle(startNode: Node<T>, targetNode: Node<T>): boolean;
    /**
     * Adds a new node to the graph.
     * If the node already exists, an error is thrown.
     *
     * @throws Error if the node already exists.
     *
     * @param value The value of the node.
     * @returns The created Node instance.
     */
    addNode(value: T): Node<T>;
    /**
     * Adds an edge between two nodes in the graph.
     * If either node does not exist, an error is thrown.
     * If adding the edge would create a cycle, an error is thrown.
     *
     * @throws Error if either node does not exist or
     *         if adding the edge would create a cycle.
     *
     * @param fromValue The value of the starting node.
     * @param toValue The value of the target node.
     * @returns void
     */
    addEdge(fromValue: T, toValue: T): void;
    /**
     * Gets a node from the graph by its value.
     *
     * @param value The value of the node.
     * @returns The Node instance or undefined if not found.
     */
    getNode(value: T): Node<T> | undefined;
    /**
     * Removes a node from the graph.
     * If the node does not exist, an error is thrown.
     * All edges connected to the node are also removed.
     *
     * @throws Error if the node does not exist.
     *
     * @param value The value of the node to remove.
     * @returns void
     */
    removeNode(value: T): void;
    /**
     * This method returns an array of node values in topologically sorted order.
     * It uses depth-first search to perform the sorting.
     *
     * @returns An array of node values in topologically sorted order.
     */
    topologicalSort(): T[];
    /**
     * Finds a path between two nodes in the graph.
     * This method uses depth-first search to find the path.
     *
     * @throws Error if either node does not exist.
     *
     * @param fromValue The value of the starting node.
     * @param toValue The value of the target node.
     * @returns An array of node values representing the path.
     */
    findPath(fromValue: T, toValue: T): T[];
}
//# sourceMappingURL=DAG.d.ts.map
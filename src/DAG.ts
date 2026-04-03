import { Node } from "./Node.js"

/**
 * A class representing a Directed Acyclic Graph (DAG).
 */
export class DAG<T> {

    /**
     * The internal reference to the nodes in the graph.
     * This is a Map of node values to Node instances.
     */
    protected nodes: Map<T, Node<T>>

    /**
     * The constructor of the DAG class.
     * It initializes the nodes Map.
     */
    constructor() {
        this.nodes = new Map<T, Node<T>>()
    }

    /**
     * Checks if adding an edge would create a cycle in the graph.
     * Uses depth-first search to detect cycles.
     *
     * @param startNode The starting node of the edge.
     * @param targetNode The target node of the edge.
     * @returns True if a cycle is detected, false otherwise.
     */
    protected hasCycle(startNode: Node<T>, targetNode: Node<T>): boolean {

        const visited = new Set<Node<T>>()
        const stack = [startNode]

        while (stack.length > 0) {

            const node = stack.pop()

            if (node === targetNode) {
                return true
            }

            if (node && !visited.has(node)) {
                visited.add(node)
                stack.push(...node.edges)
            }
        }

        return false
    }

    /**
     * Adds a new node to the graph.
     * If the node already exists, an error is thrown.
     *
     * @throws Error if the node already exists.
     *
     * @param value The value of the node.
     * @returns The created Node instance.
     */
    public addNode(value: T): Node<T> {

        if (this.nodes.has(value)) {
            throw new Error(`Node with value ${value} already exists.`)
        }

        const node = new Node(value)

        this.nodes.set(value, node)

        return node
    }

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
    public addEdge(fromValue: T, toValue: T): void {

        const fromNode = this.nodes.get(fromValue)
        const toNode = this.nodes.get(toValue)

        if (!fromNode || !toNode) {
            throw new Error("Both nodes must exist.")
        }

        if (this.hasCycle(fromNode, toNode)) {
            throw new Error("Adding this edge would create a cycle.")
        }

        fromNode.addEdge(toNode)
    }

    /**
     * Gets a node from the graph by its value.
     *
     * @param value The value of the node.
     * @returns The Node instance or undefined if not found.
     */
    public getNode(value: T): Node<T> | undefined {
        return this.nodes.get(value)
    }

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
    public removeNode(value: T): void {

        const nodeToRemove = this.nodes.get(value)

        if (!nodeToRemove) {
            throw new Error(`Node with value ${value} does not exist.`)
        }

        this.nodes.forEach(node => node.removeEdge(nodeToRemove))
        this.nodes.delete(value)
    }

    /**
     * This method returns an array of node values in topologically sorted order.
     * It uses depth-first search to perform the sorting.
     *
     * @returns An array of node values in topologically sorted order.
     */
    public topologicalSort(): T[] {

        const visited = new Set<Node<T>>()
        const stack: T[] = []

        const visit = (node: Node<T>) => {

            if (!visited.has(node)) {

                visited.add(node)
                node.edges.forEach(visit)
                stack.push(node.value)
            }
        }

        this.nodes.forEach(node => visit(node))

        return stack.reverse()
    }

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
    public findPath(fromValue: T, toValue: T): T[] {

        const fromNode = this.nodes.get(fromValue)
        const toNode = this.nodes.get(toValue)

        if (!fromNode || !toNode) {
            throw new Error("Both nodes must exist.")
        }

        const path: T[] = []
        const visited = new Set<Node<T>>()

        const dfs = (node: Node<T>) => {

            if (node === toNode) {
                path.push(node.value)
                return true
            }

            visited.add(node)

            for (const edge of node.edges) {
                if (!visited.has(edge) && dfs(edge)) {
                    path.unshift(node.value)
                    return true
                }
            }

            return false
        }

        dfs(fromNode)

        return path
    }
}

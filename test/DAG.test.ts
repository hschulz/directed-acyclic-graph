import { describe, it, expect, beforeEach } from "vitest"
import { DAG } from "../src/index.js"

describe("DAG", () => {
    let dag: DAG<string>

    beforeEach(() => {
        dag = new DAG<string>()
    })

    it("should add a node to the graph", () => {
        dag.addNode("A")
        expect(dag.getNode("A")).toBeDefined()
    })

    it("should remove a node from the graph", () => {
        dag.addNode("A")
        dag.removeNode("A")
        expect(dag.getNode("A")).toBeUndefined()
    })

    it("should throw an error when removing a non-existent node", () => {
        expect(() => dag.removeNode("A")).toThrow("Node with value A does not exist.")
    })

    it("should throw an error when adding a duplicate node", () => {
        dag.addNode("A")
        expect(() => dag.addNode("A")).toThrow("Node with value A already exists.")
    })

    it("should add an edge between two nodes", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addEdge("A", "B")
        const nodeA = dag.getNode("A")
        const nodeB = dag.getNode("B")
        expect(nodeA?.edges.has(nodeB!)).toBe(true)
    })

    it("should throw an error when adding an edge that creates a cycle", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addEdge("A", "B")
        dag.addEdge("B", "A")
        expect(() => dag.addEdge("B", "A")).toThrow("Adding this edge would create a cycle.")
    })

    it("should perform a topological sort", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addNode("C")
        dag.addEdge("A", "B")
        dag.addEdge("B", "C")
        const sorted = dag.topologicalSort()
        expect(sorted).toEqual(["A", "B", "C"])
    })

    it("should find a path between two nodes", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addNode("C")
        dag.addEdge("A", "B")
        dag.addEdge("B", "C")
        const path = dag.findPath("A", "C")
        expect(path).toEqual(["A", "B", "C"])
    })

    it("should throw an error when adding an edge to a non-existent node", () => {
        dag.addNode("A")
        expect(() => dag.addEdge("A", "B")).toThrow("Both nodes must exist.")
    })

    it("should throw an error when finding a path between non-existent nodes", () => {
        dag.addNode("A")
        expect(() => dag.findPath("A", "C")).toThrow("Both nodes must exist.")
    })

    it("should not find a path when no path exists", () => {
        dag.addNode("A")
        dag.addNode("B")
        const path = dag.findPath("A", "B")
        expect(path).toHaveLength(0)
    })
})

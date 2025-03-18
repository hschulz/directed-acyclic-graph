import { expect } from "chai"
import { DAG } from ".."

describe("DAG", () => {
    let dag: DAG<string>

    beforeEach(() => {
        dag = new DAG<string>()
    })

    it("should add a node to the graph", () => {
        dag.addNode("A")
        expect(dag.getNode("A")).to.not.be.undefined
    })

    it("should remove a node from the graph", () => {
        dag.addNode("A")
        dag.removeNode("A")
        expect(dag.getNode("A")).to.be.undefined
    })

    it("should throw an error when removing a non-existent node", () => {
        expect(() => dag.removeNode("A")).to.throw(Error, "Node with value A does not exist.")
    })

    it("should throw an error when adding a duplicate node", () => {
        dag.addNode("A")
        expect(() => dag.addNode("A")).to.throw(Error, "Node with value A already exists.")
    })

    it("should add an edge between two nodes", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addEdge("A", "B")
        const nodeA = dag.getNode("A")
        const nodeB = dag.getNode("B")
        expect(nodeA?.edges.has(nodeB!)).to.be.true
    })

    it("should throw an error when adding an edge that creates a cycle", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addEdge("A", "B")
        dag.addEdge("B", "A")
        expect(() => dag.addEdge("B", "A")).to.throw(Error, "Adding this edge would create a cycle.")
    })

    it("should perform a topological sort", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addNode("C")
        dag.addEdge("A", "B")
        dag.addEdge("B", "C")
        const sorted = dag.topologicalSort()
        expect(sorted).to.deep.equal(["A", "B", "C"])
    })

    it("should find a path between two nodes", () => {
        dag.addNode("A")
        dag.addNode("B")
        dag.addNode("C")
        dag.addEdge("A", "B")
        dag.addEdge("B", "C")
        const path = dag.findPath("A", "C")
        expect(path).to.deep.equal(["A", "B", "C"])
    })

    it("should throw an error when adding an edge to a non-existent node", () => {
        dag.addNode("A")
        expect(() => dag.addEdge("A", "B")).to.throw(Error, "Both nodes must exist.")
    })

    it("should throw an error when finding a path between non-existent nodes", () => {
        dag.addNode("A")
        expect(() => dag.findPath("A", "C")).to.throw(Error, "Both nodes must exist.")
    })

    it("should not find a path when no path exists", () => {
        dag.addNode("A")
        dag.addNode("B")
        const path = dag.findPath("A", "B")
        expect(path).to.be.empty
    })
})

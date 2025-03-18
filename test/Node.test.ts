import { expect } from "chai"
import { Node } from ".."

describe("Node", () => {
    it("should create a node with a value", () => {
        const node = new Node("A")
        expect(node.value).to.equal("A")
    })

    it("should add an edge to another node", () => {
        const nodeA = new Node("A")
        const nodeB = new Node("B")
        nodeA.addEdge(nodeB)
        expect(nodeA.edges.has(nodeB)).to.be.true
    })

    it("should remove an edge from another node", () => {
        const nodeA = new Node("A")
        const nodeB = new Node("B")
        nodeA.addEdge(nodeB)
        nodeA.removeEdge(nodeB)
        expect(nodeA.edges.has(nodeB)).to.be.false
    })
})

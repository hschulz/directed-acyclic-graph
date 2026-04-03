import { describe, it, expect } from "vitest"
import { Node } from "../src/index.js"

describe("Node", () => {
    it("should create a node with a value", () => {
        const node = new Node("A")
        expect(node.value).toBe("A")
    })

    it("should add an edge to another node", () => {
        const nodeA = new Node("A")
        const nodeB = new Node("B")
        nodeA.addEdge(nodeB)
        expect(nodeA.edges.has(nodeB)).toBe(true)
    })

    it("should remove an edge from another node", () => {
        const nodeA = new Node("A")
        const nodeB = new Node("B")
        nodeA.addEdge(nodeB)
        nodeA.removeEdge(nodeB)
        expect(nodeA.edges.has(nodeB)).toBe(false)
    })
})

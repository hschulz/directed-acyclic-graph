# Directed Acyclic Graph

[![codecov](https://codecov.io/gh/hschulz/directed-acyclic-graph/branch/master/graph/badge.svg)](https://codecov.io/gh/hschulz/directed-acyclic-graph)

A simple Directed Acyclic Graph (DAG) implementation in TypeScript with support for cycle detection, topological sorting, and path finding.

## Installation

```bash
npm install @hschulz/directed-acyclic-graph
```

## Usage

```typescript
import { DAG } from '@hschulz/directed-acyclic-graph'

const dag = new DAG<string>()

// Add nodes
dag.addNode("A")
dag.addNode("B")
dag.addNode("C")
dag.addNode("D")

// Add edges
dag.addEdge("A", "B")
dag.addEdge("B", "C")
dag.addEdge("A", "D")

// Find a path between nodes
const path = dag.findPath("A", "C")
console.log(path) // ["A", "B", "C"]

// Topological sort
const sorted = dag.topologicalSort()
console.log(sorted) // ["A", "D", "B", "C"]
```

## API

### `DAG<T>`

| Method | Description |
| --- | --- |
| `addNode(value: T)` | Adds a node to the graph. Throws if the node already exists. |
| `removeNode(value: T)` | Removes a node and all connected edges. Throws if the node does not exist. |
| `getNode(value: T)` | Returns the node or `undefined`. |
| `addEdge(from: T, to: T)` | Adds a directed edge. Throws if a cycle would be created. |
| `topologicalSort()` | Returns node values in topological order. |
| `findPath(from: T, to: T)` | Returns the path between two nodes or an empty array. |

### `Node<T>`

| Property / Method | Description |
| --- | --- |
| `value: T` | The value of the node. |
| `edges: Set<Node<T>>` | The set of outgoing edges. |
| `addEdge(node: Node<T>)` | Adds an edge to another node. |
| `removeEdge(node: Node<T>)` | Removes an edge to another node. |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

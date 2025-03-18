# Directed Acyclic Graph

This is a simple implementation of a Directed Acyclic Graph (DAG) in TypeScript.
The library provides basic functionalities to create nodes,
add edges, and perform topological sorting.

## Installation

You can install the library in your project using npm:

```bash
npm install @hschulz/directed-acyclic-graph
```

## Usage

```typescript
import { DAG } from '.'

// Create a new Directed Acyclic Graph
const dag = new DAG<string>()

// Add nodes
try {
    dag.addNode("A")
    dag.addNode("B")
    dag.addNode("C")
    dag.addNode("D")
} catch (error) {
    console.error('Error adding nodes:', error)
}

// Add edges
try {
    dag.addEdge("A", "B")
    dag.addEdge("B", "C")
    dag.addEdge("A", "D")
    // dag.addEdge("A", "C") // This will throw an error because it creates a cycle
    // dag.addEdge("D", "D") // This will throw an error because it creates a cycle
} catch (error) {
    console.error('Error adding edges:', error)
}

// Find a path from nodeA to nodeC
const path = dag.findPath("A", "C")

// Output: Path from A to C: [ 'A', 'B', 'C' ]
console.log('Path from A to C:', path)

// Sorting the nodes in topological order
const sorted = dag.topologicalSort()

// Output: Topological sort: [ 'A', 'D', 'C', 'B' ]
console.log('Topological sort:', sorted)
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

const nodesToK = (root, target, k) => {
    // Step 1: Build the graph (undirected tree representation)
    const graph = new Map();

    // Helper function to build the graph
    const buildGraph = (node, parent) => {
        if (!node) return;

        // Add the node and its parent to the graph
        if (!graph.has(node)) graph.set(node, []);
        if (parent) {
            graph.get(node).push(parent);
            if (!graph.has(parent)) graph.set(parent, []);
            graph.get(parent).push(node);
        }

        // Recurse for left and right children
        buildGraph(node.left, node);
        buildGraph(node.right, node);
    };

    buildGraph(root, null);

    // Step 2: BFS to find all nodes at distance K
    const result = [];
    const visited = new Set();
    const queue = [[target, 0]]; // Start with the target node at level 0
    visited.add(target);

    while (queue.length > 0) {
        const [node, level] = queue.shift();
        
        if (level === k) {
            result.push(node.val);
        }

        // Traverse the neighbors of the current node
        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, level + 1]);
            }
        }
    }

    return result;
}


function dijkstra(graph, start) {
    
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Initialize a priority queue to manage the vertices to explore
    const priority_queue = new priority_queue();
    priority_queue.enqueue(start, 0);

    // Initialize a set to keep track of the visited vertices
    const visited = new Set();

    while (!priority_queue.isEmpty()) {
        const { vertex: current_vertex, priority: current_distance } = priority_queue.dequeue();

        if (visited.has(current_vertex)) continue; // Skip if the vertex has already been visited
        visited.add(current_vertex); // Mark the vertex as visited

        for (let neighbor in graph[current_vertex]) {
            const weight = graph[current_vertex][neighbor];
            const total_distance = current_distance + weight;

            if (total_distance < distances[neighbor]) { 
                distances[neighbor] = total_distance;
                priority_queue.enqueue(neighbor, total_distance);
            }
        }
    }

    return distances;
}

// Priority Queue implementation using a MinHeap
class priority_queue {
    constructor() {
        this.values = [];
    }

    enqueue(vertex, priority) {
        this.values.push({ vertex, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length === 0;
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

const graph = {
    'A': { 'B': 6, 'C': 4 },
    'B': { 'A': 4, 'C': 6, 'D': 12 },
    'C': { 'A': 3, 'B': 7, 'D': 4 },
    'D': { 'B': 8, 'C': 2 }
};
console.log(dijkstra(graph, 'A'));




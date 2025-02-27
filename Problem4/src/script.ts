// Iterative approach
// Complexity: O(n) - Linear time complexity
function sum_to_n_a(n: number): number {
    let sum: number = 0;
    for (let i: number = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Recursive approach
// Complexity: O(n) - Linear time complexity due to recursive calls
function sum_to_n_b(n: number): number {
    if (n <= 0) return 0;
    return n + sum_to_n_b(n - 1);
}

// Mathematical formula approach
// Complexity: O(1) - Constant time complexity
function sum_to_n_c(n: number): number {
    return (n * (n + 1)) / 2;
}

// Example usage
console.log(sum_to_n_a(5)); // 15
console.log(sum_to_n_b(5)); // 15
console.log(sum_to_n_c(5)); // 15

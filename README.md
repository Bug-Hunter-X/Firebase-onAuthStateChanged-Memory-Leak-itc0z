# Firebase onAuthStateChanged Memory Leak Bug

This repository demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener. This leads to a memory leak and performance issues. 

The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides the corrected version with proper unsubscription.

## How to Reproduce

1.  Clone the repository.
2.  Install Firebase and necessary packages (`npm install`)
3.  Initialize firebase. 
4.  Run the application and observe that the memory usage increases continuously. 
5.  Then implement the solution from `authBugSolution.js` and re-run.

## Solution

Always unsubscribe from the `onAuthStateChanged` listener using the returned `unsubscribe` function when the component unmounts or when the listener is no longer needed.
const unsubscribe = onAuthStateChanged(auth, (user) => { if (user) { // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/firebase.User console.log(user.email); } else { // User is signed out // ... } });

// unsubscribe is crucial to prevent memory leaks. without this memory leak is high 

// unsubscribe should be called when you no longer need the listener

//This is very important because if you don't unsubscribe, you'll keep adding listeners each time the component renders.
// This will consume a lot of memory and eventually lead to performance issues. 
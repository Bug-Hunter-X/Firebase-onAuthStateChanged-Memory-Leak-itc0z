import { onAuthStateChanged, auth } from './firebaseConfig'; //Import firebase config

// This is a functional component
const AuthCheck = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Unsubscribe on unmount
  }, []);

  if (user) {
    return (
      <div>
        <p>User is signed in: {user.email}</p>
        {/* Other component content when user is signed in */}
      </div>
    );
  } else {
    return (
      <div>
        <p>User is not signed in</p>
        {/* Other component content when user is not signed in */}
      </div>
    );
  }
};
export default AuthCheck;
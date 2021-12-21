import useAuth from "../Hooks/useAuth";

export default function Home() {
  const { signInWithGoogle, user, logout } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {})
      .then((error) => {});
  };
  return (
    <div>
      {user?.email ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}
      {user?.email && (
        <div>
          <img
            style={{ borderRadius: "50%", marginTop: "20px" }}
            src={user.photoURL}
            alt="profile"
          />
          <h1>Hello {user.displayName}</h1>
        </div>
      )}
    </div>
  );
}

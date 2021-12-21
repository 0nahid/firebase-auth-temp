import useAuth from "../Hooks/useAuth";

export default function Home() {
  const { signInWithGoogle, user, logout } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {})
      .then((error) => {});
  };
  return (
    <div style={{textAlign:'center'}}>
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
      <h1>This is just a template of firebase Google Sign In</h1>
      <p>You can use this on your project</p>
      <p>Github: <a target="_blank" href="/https://github.com/0nahid/firebase-auth-temp">firebase-auth-temp</a> </p>
    </div>
  );
}

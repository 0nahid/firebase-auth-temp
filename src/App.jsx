import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home";

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/custom/Navbar";

function App() {
  const {  isSignedIn, isLoaded } = useUser();

  
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

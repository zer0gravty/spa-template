import { Outlet } from "react-router-dom";
import HomeButton from "./components/HomeButton";

function App() {
  return (
    <>
      <div className="relative">
        <HomeButton />
      </div>
      <Outlet />
    </>
  );
}

export default App;

import Navbar from "../_components/Common/Navbar";
import Home from "./page";

export default function Layout() {
  return (
    <div className="w-full max-w-[1500px] mx-auto">
      <Navbar>
        <Home />
      </Navbar>
    </div>
  );
}

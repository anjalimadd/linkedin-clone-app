import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Login"; // Assuming you have a Login component in your project

function App() {
  const user = useSelector(selectUser);

  return !user ? (
    <Login />
  ) : (
    <div className="flex flex-col items-center bg-[#f3f2ef]">
      <Header />
      <div className="flex w-[90%] mt-8 mx-5">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;

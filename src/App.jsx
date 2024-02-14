import Sidebar from "./components/sidebar/Sidebar";
import Board2 from "./components/boards/Board2";


function App() {

  return (
      <div className="min-h-screen grid grid-cols-6">
        <Sidebar/>
        <Board2/>
      </div>
  )
}

export default App

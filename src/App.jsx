import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/boards/Board";


function App() {

  return (
      <div className="min-h-screen grid grid-cols-6">
        <Sidebar/>
        <Board/>
      </div>
  )
}

export default App

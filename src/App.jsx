import { RiDashboardLine, 
  RiBriefcaseLine, 
  RiCalendar2Line, 
  RiMessage2Line, 
  RiLogoutBoxLine, 
  RiSearchLine, 
  RiFilter3Line,
  RiArrowDropRightLine } from "react-icons/ri";


function App() {

  return (
      <div className="min-h-screen grid grid-cols-6">
        <div className="w-full h-full col-span-1 border-r">
        <div className="text-center p-8">
            <h1 className="uppercase font-bold tracking-[4px]">tu logo</h1>
        </div>
          <div className="flex flex-col justify-between h-[600px]">
            <nav>
              <ul>
                <li>
                  <a href="" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiDashboardLine/>
                  Dashboard
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiBriefcaseLine/>
                  Jobs Board
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiCalendar2Line/>
                  Schedule
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiMessage2Line/>
                  Messages
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <img src="undraw_icon2.svg" alt="Image" />
              <a href="#" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
              <RiLogoutBoxLine/>
              Logout
              </a>
            </div>
          </div> 
        </div>
        <div className="col-span-5">
          <div className="p-12 bg-gray-100 h-full">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Job Board</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 items-center py-4">
              <form className="col-span-2">
                <div className="relative">
                <RiSearchLine className="absolute left-2 top-3 text-gray-500"/>
                <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl" placeholder="Search"/>
                </div>
              </form>
              <form className="col-span-1 ">
                <div className="relative">
                <RiSearchLine className="absolute left-2 top-3 text-gray-500"/>
                <select type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl">
                  <option>Any</option>
                </select>
                </div>
              </form>
              <form className="col-span-1 ">
                <div className="relative">
                <RiFilter3Line className="absolute left-2 top-3 text-gray-500"/>
                <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl" placeholder="Filters"/>
                </div>
              </form>
            </div>
            <div>
            <div className="flex flex-row items-center bg-white rounded-2xl py-3 px-4 drop-shadow-lg">
              <div className="w-[10%]">
                <RiArrowDropRightLine className="text-5xl bg-gray-100 rounded-xl"/>
              </div>
              <div className="w-[90%]">
                <ul className="flex gap-8">
                  <li>Customer</li>
                  <li>Cellphone</li>
                  <li>Rut</li>
                  <li>Product</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App

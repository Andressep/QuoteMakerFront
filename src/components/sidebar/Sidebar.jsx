import { RiDashboardLine, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line, RiLogoutBoxLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="w-full h-full col-span-1 border-r">
      <div className="text-center p-8">
        <h1 className="uppercase font-bold tracking-[4px]">tu logo</h1>
      </div>
      <div className="flex flex-col justify-between h-[600px]">
        <nav>
          <ul>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiDashboardLine />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiBriefcaseLine />
                Jobs Board
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiCalendar2Line />
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiMessage2Line />
                Messages
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-4">
          <a href="/logout" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
            <RiLogoutBoxLine />
            Logout
          </a>
        </div>
      </div> 
    </div>
  );
}

export default Sidebar;

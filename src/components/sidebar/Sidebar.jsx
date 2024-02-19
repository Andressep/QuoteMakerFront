import { RiDashboardLine, RiBriefcaseLine, RiAccountCircleLine, RiFileListLine, RiLogoutBoxLine } from "react-icons/ri";

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
                <RiDashboardLine className="w-6 h-6"/>
                Quotes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiBriefcaseLine className="w-6 h-6"/>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiAccountCircleLine className="w-6 h-6"/>
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:bg-gray-600 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiFileListLine className="w-6 h-6"/>
                Dashboards
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

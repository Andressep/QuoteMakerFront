import { RiSearchLine, RiFilter3Line } from "react-icons/ri";
import BoardItem from "./BoardItem";

function Board() {
    return (
        <div className="col-span-5">
          <div className="py-5 px-12 bg-gray-100 h-full">
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
            <div className="flex flex-col gap-2">
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
              <BoardItem Customer={"customer"} Cellphone={"9 1234 5678"} Rut={"12.345.678-9"} Product={"Product X"}/>
            </div>
          </div>
        </div>
    );
}

export default Board;

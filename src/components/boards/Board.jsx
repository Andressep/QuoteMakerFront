import BoardItem from "./BoardItem";
import SearchBar from "./SearchBar";

function Board() {
    return (
        <div className="col-span-5">
          <div className="py-5 px-12 bg-gray-100 h-full">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Job Board</h1>
            </div>
            <SearchBar/>
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

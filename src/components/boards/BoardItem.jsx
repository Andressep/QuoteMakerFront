import { RiArrowDropRightLine } from "react-icons/ri";

function BoardItem({Customer, Cellphone, Rut, Product}) {
  return (
    <div className="flex flex-row items-center bg-white rounded-2xl py-2 px-3 drop-shadow-lg border-2 border-transparent hover:border-purple-200">
        <div className="w-[6%]">
          <RiArrowDropRightLine className="text-4xl bg-gray-100 rounded-xl"/>
        </div>
        <div className="w-[90%]">
          <ul className="flex gap-8">
            <li>{Customer}</li>
            <li>{Cellphone}</li>
            <li>{Rut}</li>
            <li>{Product}</li>
          </ul>
        </div>
    </div>
  );
}

export default BoardItem;

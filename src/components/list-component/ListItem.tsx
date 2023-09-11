import ButtonComponent from "../button-component/ButtonComponent";

import { useAppDispatch } from "../../redux/hooks";
import {
  deleteDataFromFirebase,
  updateDataFromFirebase,
} from "../../redux/actions/AddActionData";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ListItem = ({ itemValue }: any) => {
  console.log("from list item:", itemValue);
  const dispatch = useAppDispatch();

  const deleteBtnHandler = () => {
    if (itemValue.completed !== false) {
      dispatch(deleteDataFromFirebase(itemValue.id));
    } else {
      alert("task is incomplete");
    }
  };

  const completeBtnHandler = () => {
    dispatch(updateDataFromFirebase(itemValue.id, true));
  };

  return (
    <div className="font-semibold text-black flex items-center p-4  justify-center">
      <div className="rounded-md border-2 lg:h-14 items-center flex w-1/2 ring-rose-950 ring-1 sm:h-20 ">
        <h1 className=" font-bold text-xl text-center   ">{itemValue.value}</h1>
      </div>
      {itemValue.completed ? (
        <div className=" px-2">
          <BsFillCheckCircleFill size={20} color="green" />
        </div>
      ) : (
        <div className=" px-2">
          <BsFillCheckCircleFill size={20} color="black" />
        </div>
      )}

      <div className=" flex">
        <div className=" px-4">
          <ButtonComponent
            borderRadius="rounded-sm"
            borderWith="border-2"
            children="complete"
            height="h-10"
            width="w-24"
            onClick={completeBtnHandler}
          />
        </div>
        <div>
          <ButtonComponent
            borderRadius="rounded-sm"
            borderWith="border-2"
            children="delete"
            height="h-10"
            width="w-16"
            onClick={deleteBtnHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;

import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { gettingDataFromFirebaseStore } from "../../redux/actions/AddActionData";
import ListItem from "./ListItem";

const ListComponent = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector((state) => state.addData.value);

  // console.log("from list Component", ids);

  React.useEffect(() => {
    dispatch(gettingDataFromFirebaseStore());
  }, []);

  return (
    <div className=" ">
      {lists.map((doc, index) => (
        <ListItem itemValue={doc} key={index} />
      ))}
    </div>
  );
};

export default ListComponent;

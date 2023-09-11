import React from "react";

import ButtonComponent from "../button-component/ButtonComponent";
import { useAppDispatch } from "../../redux/hooks";

import { AddDataToFirebase } from "../../redux/actions/AddActionData";

const SearchComponent = () => {
  const [text, setText] = React.useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleClick = async () => {
    if (text !== "") {
      dispatch(AddDataToFirebase(text));
      setText("");
    } else {
      alert("Please Add a Task. ");
    }
  };

  return (
    // <div className=" md:w-auto lg:w-auto items-center ">
    <div className=" flex items-center justify-center  h-32   ">
      <div className=" flex rounded-md border-2 ring-2 ring-rose-950 w-2/3 shadow-md shadow-slate-950">
        <input
          className=" h-14 rounded-md border-2 ring-2 ring-rose-900 w-full bg-rose-900 text-cyan-50"
          placeholder=" Enter Your Thoughts"
          onChange={handleChange}
          value={text}
          autoCapitalize="sentences"
        />
      </div>
      <div className=" px-2">
        <ButtonComponent
          borderRadius="rounded-md"
          borderWith="border-2"
          height="h-14"
          width="w-32"
          children={"Add"}
          onClick={handleClick}
        />
      </div>
    </div>
    // </div>
  );
};

export default SearchComponent;

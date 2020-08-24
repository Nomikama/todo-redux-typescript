import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCategoryFormComponents } from "../components";
import { createNewCategory } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";

interface ICreateCategoryForm {
  statusForm(status: false): void;
}

export const CreateCategoryForm: React.FC<ICreateCategoryForm> = ({ statusForm }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state: GlobalStateType) => state.todo.nextCategoryID);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryColor, setCategoryColor] = useState<string>("#525252");

  const sendData = (e: React.FormEvent<HTMLFormElement>): false | void => {
    e.preventDefault();

    if (categoryName.trim() === "") return false;

    dispatch(createNewCategory({ id: categoryID, color: categoryColor, name: categoryName }));
    statusForm(false);
  };

  return (
    <CreateCategoryFormComponents
      closeForm={statusForm}
      sendData={sendData}
      inputFormHandler={setCategoryName}
      setCategoryColor={setCategoryColor}
    />
  );
};

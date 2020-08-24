import React from "react";
import { CreateCategoryBtnComponents } from "../components";

interface ITaskCategoryBtn {
  statusForm(status: true): void;
}

export const CreateCategoryBtn: React.FC<ITaskCategoryBtn> = ({ statusForm }) => {
  const showForm = (): void => {
    statusForm(true);
  };

  return <CreateCategoryBtnComponents showForm={showForm} />;
};

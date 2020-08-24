import React, { useState } from "react";
import { CreateCategoryBtn } from "./CreateCategoryBtn";
import { CreateCategoryForm } from "./CreateCategoryForm";

export const HandlerCreateCategoryForm: React.FC = (): JSX.Element => {
  const [statusCategoryForm, setStatusCategoryForm] = useState<boolean>(false);

  if (statusCategoryForm) {
    return <CreateCategoryForm statusForm={setStatusCategoryForm} />;
  } else {
    return <CreateCategoryBtn statusForm={setStatusCategoryForm} />;
  }
};

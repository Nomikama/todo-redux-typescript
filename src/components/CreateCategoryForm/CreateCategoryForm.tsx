import React from "react";
import "./CreateCategoryForm.scss";

interface ISelectCategoryColor {
  setCategoryColor(color: string): void;
}

interface ICreateCategoryForm extends ISelectCategoryColor {
  closeForm(status: false): void;
  sendData(e: React.FormEvent<HTMLFormElement>): void;
  inputFormHandler(name: string): void | false;
}

type colorItem = {
  id: string;
  color: string;
};

const colorDB = [
  { id: "color-gray", color: "#C9D1D3" },
  { id: "color-green", color: "#42B883" },
  { id: "color-blue", color: "#64C4ED" },
  { id: "color-pink", color: "#FFBBCC" },
  { id: "color-lime", color: "#B6E6BD" },
  { id: "color-purple", color: "#C355F5" },
  { id: "color-black", color: "#09011A" },
  { id: "color-red", color: "#FF6464" },
];

const SelectCategoryColor: React.FC<ISelectCategoryColor> = ({ setCategoryColor }) => {
  return (
    <div className="select-category-color">
      {colorDB.map((colorItem: colorItem) => (
        <div className="color-item">
          <input
            className={colorItem.id}
            type="radio"
            id={colorItem.id}
            key={colorItem.color}
            onClick={() => setCategoryColor(colorItem.color)}
            name="select-color"
          />
          <label htmlFor={colorItem.id} style={{ backgroundColor: colorItem.color }} />
        </div>
      ))}
    </div>
  );
};

export const CreateCategoryForm: React.FC<ICreateCategoryForm> = ({
  closeForm,
  sendData,
  inputFormHandler,
  setCategoryColor,
}) => (
  <div className="create-category-form">
    <div className="create-category-form__close-btn" onClick={() => closeForm(false)}></div>
    <form onSubmit={sendData}>
      <input
        type="text"
        placeholder="Название папки"
        onChange={(e) => inputFormHandler(e.target.value)}
        autoFocus
      />
      <SelectCategoryColor setCategoryColor={setCategoryColor} />
      <button className="create-category-btn">Добавить</button>
    </form>
  </div>
);

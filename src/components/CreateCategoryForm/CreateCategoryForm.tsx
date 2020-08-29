import React from "react";
import "./CreateCategoryForm.scss";

interface ICreateCategoryForm {
  closeForm(status: false): void;
  sendData(e: React.FormEvent<HTMLFormElement>): void;
  inputFormHandler(name: string): void | false;
  setCategoryColor(color: string): void;
}

const colorDB = [
  { htmlClass: "select-color--gray", color: "#C9D1D3" },
  { htmlClass: "select-color--green", color: "#42B883" },
  { htmlClass: "select-color--blue", color: "#64C4ED" },
  { htmlClass: "select-color--pink", color: "#FFBBCC" },
  { htmlClass: "select-color--lime", color: "#B6E6BD" },
  { htmlClass: "select-color--purple", color: "#C355F5" },
  { htmlClass: "select-color--black", color: "#09011A" },
  { htmlClass: "select-color--red", color: "#FF6464" },
];

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
      <div className="select-category-color">
        {colorDB.map((colorItem) => (
          <div className="radio">
            <input
              className={`select-color ${colorItem.htmlClass}`}
              type="radio"
              id={colorItem.htmlClass}
              onClick={() => setCategoryColor(colorItem.color)}
              name="color"
            />
            <label htmlFor={colorItem.htmlClass} />
          </div>
        ))}
      </div>
      <button className="create-category-btn">Добавить</button>
    </form>
  </div>
);

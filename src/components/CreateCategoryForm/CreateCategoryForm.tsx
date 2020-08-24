import React from "react";
import "./CreateCategoryForm.scss";

interface ICreateCategoryForm {
  closeForm(status: false): void;
  sendData(e: React.FormEvent<HTMLFormElement>): void;
  inputFormHandler(name: string): void | false;
  setCategoryColor(color: string): void;
}

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
        <span
          className="select-color select-color--gray"
          data-color="#C9D1D3"
          onClick={() => setCategoryColor("#C9D1D3")}
        ></span>
        <span
          className="select-color select-color--green"
          data-color="#42B883"
          onClick={() => setCategoryColor("#42B883")}
        ></span>
        <span
          className="select-color select-color--blue"
          data-color="#64C4ED"
          onClick={() => setCategoryColor("#64C4ED")}
        ></span>
        <span
          className="select-color select-color--pink"
          data-color="#FFBBCC"
          onClick={() => setCategoryColor("#FFBBCC")}
        ></span>
        <span
          className="select-color select-color--lime"
          data-color="#B6E6BD"
          onClick={() => setCategoryColor("#B6E6BD")}
        ></span>
        <span
          className="select-color select-color--purple"
          data-color="#C355F5"
          onClick={() => setCategoryColor("#C355F5")}
        ></span>
        <span
          className="select-color select-color--black"
          data-color="#09011A"
          onClick={() => setCategoryColor("#09011A")}
        ></span>
        <span
          className="select-color select-color--red"
          data-color="#FF6464"
          onClick={() => setCategoryColor("#FF6464")}
        ></span>
      </div>
      <button className="create-category-btn">Добавить</button>
    </form>
  </div>
);

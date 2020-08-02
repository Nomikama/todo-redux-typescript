import React from "react";
import "./CreateCategoryForm.scss";

export const CreateCategoryForm: React.FC = () => (
  <div className="create-category-form">
    <div className="create-category-form__close-btn"></div>
    <form>
      <input type="text" placeholder="Название папки" />
      <div className="select-category-color">
        <span className="select-color select-color--gray" data-color="#42B883"></span>
        <span className="select-color select-color--green active" data-color="#64C4ED"></span>
        <span className="select-color select-color--blue" data-color="#64C4ED"></span>
        <span className="select-color select-color--pink" data-color="#FFBBCC"></span>
        <span className="select-color select-color--lime" data-color="#B6E6BD"></span>
        <span className="select-color select-color--purple" data-color="#C355F5"></span>
        <span className="select-color select-color--black" data-color="#09011A"></span>
        <span className="select-color select-color--red" data-color="#FF6464"></span>
      </div>
      <button className="create-category-btn">Добавить</button>
    </form>
  </div>
);

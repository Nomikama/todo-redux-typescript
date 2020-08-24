import React from "react";
import {
  AllCategoryBtn,
  CategoryBtn,
  CategoryTitle,
  TodoItem,
  HandlerCreateTodoForm,
  HandlerCreateCategoryForm,
} from "./containers";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__lcol">
          <div className="category">
            <div className="category__all">
              <AllCategoryBtn />
            </div>
            <div className="category__list">
              <CategoryBtn />
            </div>
            <div className="category__create">
              <HandlerCreateCategoryForm />
            </div>
          </div>
        </div>
        <div className="app__rcol">
          <CategoryTitle />
          <TodoItem />
          <HandlerCreateTodoForm />
        </div>
      </div>
    </div>
  );
};

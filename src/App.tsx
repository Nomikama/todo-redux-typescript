import React from "react";
import {
  AllCategoryBtn,
  CategoryBtn,
  CreateCategoryForm,
  CategoryTitle,
  TodoItem,
  CreateTodoItemForm,
  CreateCategoryBtn,
  CreateTodoItemBtn,
} from "./connectors";
import "./App.scss";

export const App: React.FC = () => {
  let showForm = false;
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
              <CategoryBtn />
              <CategoryBtn />
              <CategoryBtn />
            </div>
            <div className="category__create">
              {showForm ? <CreateCategoryForm /> : <CreateCategoryBtn />}
            </div>
          </div>
        </div>
        <div className="app__rcol">
          <CategoryTitle />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          {showForm ? <CreateTodoItemForm /> : <CreateTodoItemBtn />}
        </div>
      </div>
    </div>
  );
};

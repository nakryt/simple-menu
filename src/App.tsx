import React, { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import data, { TypeOfFood } from "./data";

function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [typeToShow, setTypeToShow] = useState<TypeOfFood>(TypeOfFood.all);

  const selectItemHandler = (id: string) => {
    if (selectedItems.indexOf(id) === -1) {
      setSelectedItems((prev) => [id, ...prev]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
    }
  };

  const changeTypeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    if (
      name === TypeOfFood.all ||
      name === TypeOfFood.breakfast ||
      name === TypeOfFood.lunch ||
      name === TypeOfFood.shake
    )
      setTypeToShow(name);
  };

  const totalPrice = data
    .filter((item) => selectedItems.some((i) => i === item.id))
    .reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="App">
      <Header totalPrice={totalPrice} />
      <div className="container dflex align-center flex-column">
        <h1>Our Menu</h1>
        <ul className="type-of-food">
          <li>
            <button
              name="all"
              onClick={changeTypeHandler}
              className={typeToShow === TypeOfFood.all ? "btn-active" : ""}
            >
              All
            </button>
          </li>
          <li>
            <button
              name="breakfast"
              onClick={changeTypeHandler}
              className={
                typeToShow === TypeOfFood.breakfast ? "btn-active" : ""
              }
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              name="lunch"
              onClick={changeTypeHandler}
              className={typeToShow === TypeOfFood.lunch ? "btn-active" : ""}
            >
              Lunch
            </button>
          </li>
          <li>
            <button
              name="shake"
              onClick={changeTypeHandler}
              className={typeToShow === TypeOfFood.shake ? "btn-active" : ""}
            >
              Shakes
            </button>
          </li>
        </ul>
        <FoodList
          typeToShow={typeToShow}
          selectItem={selectItemHandler}
          checkedItems={selectedItems}
        />
      </div>
    </div>
  );
}

export default App;

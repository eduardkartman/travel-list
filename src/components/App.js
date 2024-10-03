import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // creates a new array of items
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // creates a new array of items excluding the one that match
    // the item's id the we want to delete
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // creates a new array of items and update the value of packed
    // to a new object based on the current item
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

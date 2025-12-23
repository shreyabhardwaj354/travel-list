import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packing List";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function emptyList(items) {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        emptyList={emptyList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

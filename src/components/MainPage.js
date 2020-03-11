import React from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import ModalManager from "./Modal/ModalManager";

const MainPage = ({ items, setItems, allItems }) => {
  let searchQuery = new URLSearchParams(useLocation().search).get(
    "search_query"
  );

  items = items.filter(entry => entry[1].isAvailable);
  allItems = allItems.filter(entry => entry[1].isAvailable);

  if (searchQuery) {
    searchQuery = searchQuery.toLowerCase();
    const filteredItems = allItems.filter(entry => {
      const item = entry[1];
      const typeWords = item.type.toLowerCase().split(" ");
      const nameWords = item.name.toLowerCase().split(" ");
      return (
        typeWords.filter(word => word.startsWith(searchQuery)).length ||
        nameWords.filter(word => word.startsWith(searchQuery)).length
      );
    });
    if (JSON.stringify(items) !== JSON.stringify(filteredItems)) {
      setItems(filteredItems);
    }
  }

  return (
    <div>
      <ModalManager />
      <Search searchQuery={searchQuery} />
      <ItemList items={items} />
    </div>
  );
};

export default MainPage;

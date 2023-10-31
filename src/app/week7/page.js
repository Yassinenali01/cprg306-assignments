'use client';

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import Meal from "./meal-ideas";
export default function Page( ){

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState('null');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
          
    };

    const handleItemSelect = (item) => {
    // Clean up the item name
    const cleanedItemName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };
      

    return(
        <main className=" flex">

            <NewItem  onAddItem = {handleAddItem}  />
            <ItemList items={items} onItemSelect={handleItemSelect}   />
            <Meal ingredient={selectedItemName} />
        </main>
        
    )


}
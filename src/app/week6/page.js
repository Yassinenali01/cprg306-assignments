'use client';

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page( ){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
          
    };
      

    return(
        <main>

            <NewItem  onAddItem = {handleAddItem}  />
            <ItemList items={items} />
        </main>
        
    )


}
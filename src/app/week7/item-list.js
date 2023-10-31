"use client";
import Item from "./item";
import { useState } from "react";


export default function ItemList({items, onItemSelect}){

    const [sortBy, setSortBy] = useState("name");

    

    {items.map((item) =>  ({
        id:item.id,
        name:item.name,
        quantity: item.quantity,
        category: item.category,
    }))};

      

    const handleNameClick = () =>{
        setSortBy("name");
    };

    const handleCategoryClick = () => {
        setSortBy("category");
    };
    



    items.sort((a,b) => {
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category"){
            return a.category.localeCompare(b.category);
        }
        
    });  

    
    return(
        <main className="  bg-black text-white p-4" >
            <div className="flex items-center">
            <p className="mr-2">Sort By:</p>
             <button className="border px-4 py-1 hover:bg-slate-500" onClick={handleNameClick}>Name </button>
            <button className="border px-4 py-1 ml-4 hover:bg-slate-500" onClick={handleCategoryClick}> Category </button>
</div>

           
            <div>
                
                <ul className=" p-7  ">
                    {items.map((item) => ( 
                        <Item 
                        className=" p-9  " 
                        item={item} 
                        key={item.id}
                        onClick={() => onItemSelect(item)}  
                        />
                    ))}
                </ul>
            </div>     
        </main>
    )
    
}
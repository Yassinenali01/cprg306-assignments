export default function Item({item, onSelect}){

    const handleClick = () => {
        // Call the onSelect function when the item is clicked
        onSelect(item);
      };

    return(
        <main>
            <div onClick={handleClick} className=" border">
                <h1 className="text-xl font-bold "  >{item.name}</h1>
                <p> {item.quantity}</p>
                <p>{item.category}</p>   
            </div>
        </main>
    )



}

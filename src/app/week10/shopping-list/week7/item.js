export default function Item({item, onSelect}){

    // const handleClick = () => {
        
    //     onSelect(item.name);
    //   };

    return(
        <main>
            <ul onClick={()=> onSelect(item.name)} className=" border">
                <li className="text-xl font-bold "  >{item.name}</li>
                <li> {item.quantity}</li>
                <li>{item.category}</li>   
            </ul>
        </main>
    )



}

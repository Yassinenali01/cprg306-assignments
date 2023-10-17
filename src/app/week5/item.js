export default function Item({item}){
    return(
        <main>
            <div className=" border">
                <h1 className="text-xl font-bold "  >{item.name}</h1>
                <p> {item.quantity}</p>
                <p>{item.category}</p>   
            </div>
        </main>
    )



}

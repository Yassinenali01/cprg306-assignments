export default function Item({name, quantity, category}){
    return(
        <main>
            <div className=" border">
                <h1 className="text-xl font-bold "  >{name}</h1>
                <p> {quantity}</p>
                <p>{category}</p>   
            </div>
        </main>
    )



}

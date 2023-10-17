import ItemList from "./item-list"



export default function Page(){
    return(
        <main>
            <h1 className=" text-center font-extrabold text-xl bg-black text-white"> Shopping List </h1>
            <ItemList></ItemList>
        </main>
    )
}
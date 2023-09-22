import Link from "next/link";

export default function Name(){

    let name = "Yassine Nali";
    const url = "https://github.com/Yassinenali01/cprg306-assignments";
    return(
        <main>
            <h1 class="font-serif "> my name is {name}</h1>
            <p> course section is CPRG 306 B</p>
            <p>
                link to my GitHub 
                <Link href= {url}> Repository </Link>
            </p>
        </main>
    )
}
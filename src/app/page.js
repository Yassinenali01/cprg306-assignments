import Link from "next/link";
import StudentInfo from "./StudentInfo/page.js";



export default function Home() {
  return (
    <main >

      <h1 class= "font-extrabold"> CPRG 306: Web Development 2 - Assignments </h1>

      <StudentInfo />
      <Link href="./week2"  > Week 2 </Link>
      <Link href="./week3"> Week 3 </Link>
      <Link href="./week4"> week 4 </Link>

    </main>
  )
}

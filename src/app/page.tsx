import Link from "next/link";

import styles from "./index.module.css"; 
import { getAllUsers } from "utils";
import { LoginForm } from "components/LoginForm";


export default async function Home() {

  const allUsers = await getAllUsers().then((data)=>data);

  console.log(allUsers);
  

  
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}

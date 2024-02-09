import Form from "./components/Form";
import styles from "./page.module.css";
export default function Home() {
return (
<main className={styles.main}>
<div className="App">
<div>
<p>
Lista de compras
</p>
<Form></Form>
</div>
</div>
</main>
);
}

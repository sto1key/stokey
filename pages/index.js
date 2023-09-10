import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div
      className={styles.container}
    >
      <h1>stokey</h1>
      <ul>
        <li>
          <a href="https://www.youtube.com/@sto1key" target="_blank">Canal YouTube</a>
        </li>
        <li>
          <a href="https://discord.gg/KxuYpY8RFx" target="_blank">Comunidade Discord</a>
        </li>
        <li>
          <a href="https://blog.stokey.com.br/" target="_blank">Blog</a>
        </li>
        <li>
          <a href="https://www.instagram.com/sto1key/" target="_blank">Instagram</a>
        </li>
        
      </ul>
    </div>
  );
}
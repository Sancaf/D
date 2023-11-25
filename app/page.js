import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Daniele&#39;s Website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi
          tempore laboriosam iste quisquam porro laudantium. Maiores tenetur,
          odio aliquam voluptas iusto eligendi reprehenderit tempore,
          perferendis perspiciatis ad omnis illo.
        </p>
      </div>

      <Image src="/file.jpg" fill alt="asdasd" />
    </main>
  )
}

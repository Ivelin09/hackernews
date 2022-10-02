import styles from '../components/createBlog.module.css'
import Image from 'next/image'
import bg from '../public/bg.jpg'
import useWindow from '../hooks/backgroundImage';
import Head from 'next/head'

export default function Page() {
    const window = useWindow();
    console.log(styles);
    return (
        <div>
          <Head>
            <link rel="stylesheet" href="/createBlog.css"></link>
            <link rel="stylesheet" href="/register.css"></link>
          </Head>
            <Image src={bg}  className={`${styles.img} ${styles.span}`} height={window.height} width={window.width}></Image>
            <div className="border">
            </div>
              <form className={`${styles.form} ${styles.formInput}`}>
                <label>Title</label>
                <div>
                  <input type="text" id="username" name="username" variant="outlined" required />
                </div>
                <label>Description</label>
                <div>
                <input type="text" id="username" name="username" variant="outlined" required />
                </div>
                <div>
                  <div>
                      <button type="submit">Send</button>
                  </div>
                </div>
            </form>
        </div>
    )
}
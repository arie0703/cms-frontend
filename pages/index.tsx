import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getAllWords } from './api/words/all'
import { Words } from './types/words'
import { Word } from '@/src/components/Word'

const inter = Inter({ subsets: ['latin'] })

export default function Home({allWords}: {allWords: Words[]}) {
  return (
    <>
      <Head>
        <title>ポル単</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} ${styles.container}`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>ポルトガル語単語帳</h2>
          </div>
          
          <ul>
            {allWords.map((word) => {
              return (
                <Word portuguese={word.portuguese} japanese={word.japanese} />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const data = await getAllWords();
  // TimeStampをobjectに変換するため一旦JSON.parseをかます
  const allWords = JSON.parse(JSON.stringify(data));
  console.log(allWords);
  return {props: { allWords }}
}

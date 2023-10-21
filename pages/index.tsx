import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createComposition = async() => {

    setIsLoading(true);
    const prompt = '「旅行」に関して、日本語→英語の翻訳問題を出題してください'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt }),
    };

    const response = await fetch('/api/composition/create', options);
    const result = await response.json();
    console.log(result)
    setIsLoading(false);
    setQuestion(result.message)
  }

  
  return (
    <>
      <Head>
        <title>Composition Practice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} ${styles.container}`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Composition Practice</h2>
          </div>
          <div className={styles.questionArea}>
            {question}
          </div>

          <button onClick={() => createComposition()}>
            作文問題を生成
          </button>
          {isLoading && (
          <div className={styles.spinnerBox}>
            
            <div className={styles.circleBorder}>
              <div className={styles.circleCore}></div>
            </div>  
          </div>
          )}
        </div>
      </main>
    </>
  )
}

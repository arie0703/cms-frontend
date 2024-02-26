'use client'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { WordList } from '../components/WordList'
import { Header } from '../components/Header'
import { Spacer } from '../components/Spacer'
import { NavigationBar } from '../components/NavigationBar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<number>(0)

  return (
    <>
      <Head>
        <title>ポル単</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} ${styles.container}`}>
        <div className={styles.container}>
          <Header />
          <Spacer height={55} />
          <WordList />
          <NavigationBar selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
        </div>
      </main>
    </>
  )
}

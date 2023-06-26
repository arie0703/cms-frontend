import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import type { Article } from '../types/article'

export default function Article({ article }: { article: Article }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.title}</title>
        <meta name="description" content="投稿詳細ページです" />
      </Head>
      <main className={styles.main}>
        <h1>{router.query.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: router.query.content || '' }} />
      </main>
    </>
  )
}

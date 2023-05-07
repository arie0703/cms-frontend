import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getArticles } from './lib/newt'
import type { Article } from './types/article'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Next.jsとNewtを使用した個人ブログ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article._id}>
                <Link href={`articles/${article.slug}`}>{article.title}</Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}

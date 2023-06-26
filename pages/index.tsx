import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getArticles } from './lib/articles'
import type { Article } from './types/article'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="CMSを利用した個人サイト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          {articles.map((article: Article) => {

            // 詳細ページに渡すデータ
            const query = {
              id: article.id, 
              title: article.attributes.title, 
              content: article.attributes.content, 
              category: article.attributes.category
            }

            return (
              <li key={article.id}>
                <Link href={{ pathname: `articles/${article.id}`, query: query}}>{article.attributes.title}</Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const fetchedResponse = await getArticles()
  const articles: Article = fetchedResponse.data
  return {
    props: {
      articles,
    },
  }
}

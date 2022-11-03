import { NextPage } from 'next'

/**
 * Home page.
 */
const HomePage: NextPage = () => {
  return (
    <>
      <h1>ほた(hota1024)のポートフォリオになる予定のサイト</h1>
      <p>このサイトは現在開発中です。</p>
      <section>
        <h2>リンク</h2>
        <ul>
          <li>
            <a
              href="https://twitter.com/hota1024"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hota1024"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default HomePage

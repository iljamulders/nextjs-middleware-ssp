import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      {
        Array.from(Array(100).keys()).map(i => (
          <div key={i}>
            <Link href={`/article/${i}`}>
              <a>{i}</a>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Home

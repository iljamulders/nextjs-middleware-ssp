import type { GetServerSideProps, NextPage } from 'next'

type Props = {
    id: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    return {
        props: {
          id: context.params!.id as string,
        }
    }
}

const Home: NextPage<Props> = ({ id }) => {
  return (
    <div>
      id: {id}
    </div>
  )
}

export default Home

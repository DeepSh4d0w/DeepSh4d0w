import Head from 'next/head'
import { PageFooter } from '../components/PageFooter'
import { PageHeader } from '../components/PageHeader'
import { ProfileHeader } from '../components/ProfileHeader'
import { EmptyProjectList } from '../components/ProjectList/Empty'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosmux - Deepsh</title>
        <meta name="description" content="Seja bem-vindo(a) ao Cosmux, veja os projetos de Deepsh aqui." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className='w-screen min-h-screen bg-[#09090a] text-[#e1e1e6] flex flex-col font-mono'>
        <PageHeader />

        <main className='flex flex-1 flex-col items-start justify-center px-10'>
          <ProfileHeader name='Deepsh' />

          <div className='flex flex-1 justify-center items-center'>
            <EmptyProjectList />
          </div>
        </main>

        <PageFooter />
      </main>
    </>
  )
}

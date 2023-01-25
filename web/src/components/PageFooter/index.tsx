import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'

export function PageFooter() {
  return (
    <footer
      className='
        w-screen bg-[#121214] p-10 pl-10
        flex flex-col gap-5 justify-start items-start
        md:flex-row md:justify-between md:items-center'>
      <span>
        <p className='text-md font-bold'>Cosmux Comp.</p>
        <p className='text-xs'>copyright © 2023 todos os direitos reservados</p>
      </span>

      <div>
        <span
          className='
            flex justify-center items-center gap-2
            text-zinc-300 underline decoration-dashed
          '
        >
          <Link
            href='https://github.com/DeepSh4d0w'
            className='
              outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-4 focus:ring-offset-[#121214] rounded-sm flex items-center gap-2
            '
          >
            <GithubLogo className='text-lg md:text-3lx' />
            <p>DeepSh4d0w (Deepsh)</p>
          </Link>
        </span>
      </div>
    </footer>
  )
}

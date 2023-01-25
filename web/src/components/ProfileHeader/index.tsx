export interface ProfileHeaderProps {
  name: string
}

export function ProfileHeader(props: ProfileHeaderProps) {
  return (
    <header className='w-full h-fit pb-5 flex gap-10 pt-10 items-center border-b-2 border-zinc-800'>
      <main>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>{props.name}</h1>
        <h2 className='text-xl md:text-3xl text-zinc-300'>Cosmux</h2>
      </main>
    </header>
  )
}

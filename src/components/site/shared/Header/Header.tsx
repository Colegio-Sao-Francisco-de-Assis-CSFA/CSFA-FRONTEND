import Navigation from './Navigation';

export default function Header(){
  return(
    <header className='fixed z-50 top-0 left-0 w-full h-20 md:h-24 lg:h-32 p-2'>
      <Navigation />
    </header>
  )
}
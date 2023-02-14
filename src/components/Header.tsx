import Logotipo from './../assets/logotipo.svg'
import Womans from './../assets/womans-ilustra.png'

export function Header() {
  return (
    <header className='px-8 bg-blue-10'>
      <nav className='pt-11 pb-5 flex items-start justify-between lg:justify-around'>
        <img
          className='w-auto h-16 lg:h-24'
          src={Logotipo}
          alt="Logotipo - Elas Vivas."
        />

        <ul className='hidden text-white xl:flex lg:gap-20'>
          <li className='hover:text-yellow-80 transition-colors'>
            <a href="#Projeto">Projeto</a>
          </li>
          <li className='hover:text-yellow-80 transition-colors'>
            <a href="#Objetivo">Objetivo</a>
          </li>
          <li className='hover:text-yellow-80 transition-colors'>
            <a href="#Atendimento">Atendimento</a>
          </li>
          <li className='hover:text-yellow-80 transition-colors'>
            <a href="#Psicólogas">Psicólogas</a>
          </li>
        </ul>

        <a
          className='px-6 py-2 text-center text-yellow-80 border font-medium border-yellow-80 rounded-md hover:text-white hover:bg-yellow-80 transition-colors lg:px-20 lg:border-2'
          href='https://docs.google.com/forms/d/e/1FAIpQLSfdjsfEsUX5blQ3T5AZth3piZvqdbkWL2q7Oq9gI8x4wBCwew/viewform?usp=sf_link'
        >
          Atendimento
        </a>
      </nav>

      <img
        className='m-auto'
        src={Womans}
        alt="Ilustração de várias mulheres."
      />
    </header>
  )
}
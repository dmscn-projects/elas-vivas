import { Clock, Users } from 'phosphor-react'

import Screenshot from './../assets/screenshot.png'

export function Attendances() {
  return (
    <section id='Atendimento' className='flex flex-col p-8 gap-16 bg-blue-60 text-white md:min-h-[32rem] lg:flex-row lg:items-center lg:justify-around'>
      <div className='grid gap-8 lg:max-w-sm lg:gap-6'>
        <h2 className='text-2xl'>Sobre os Atendimentos</h2>

        <div className='grid gap-4 lg:gap-2'>
          <div className='flex items-center gap-5'>
            <Clock size={80} className='text-yellow-80 lg:w-[4rem]' />
            <p>As nossas seções acontecem de forma online e são de 40 minutos a 50 minutos.</p>
          </div>

          <div className='flex items-center gap-5'>
            <Users size={80} className='text-yellow-80 lg:w-[4rem]' />
            <p>Atendimento feito pela plataforma do Google Meet ou por video chamada.</p>
          </div>
        </div>

        <p>Caso tenha interesse em marcar um atendimento, é necessario preencher o formulário.</p>
        <a
          className='py-3 bg-yellow-80 text-blue-10 rounded-md text-center'
          href='https://docs.google.com/forms/d/e/1FAIpQLSfdjsfEsUX5blQ3T5AZth3piZvqdbkWL2q7Oq9gI8x4wBCwew/viewform?usp=sf_link'
        >
          Preencher Formulário
        </a>
      </div>

      <img className='lg:w-auto lg:h-80' src={Screenshot} alt="Screenshot do formulário no smartphone e computador." />
    </section>
  )
}
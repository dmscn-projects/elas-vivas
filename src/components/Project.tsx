import Logo from './../assets/logo.svg'

export function Project() {
  return (
    <section id='Projeto' className='p-8 flex flex-col items-center gap-8 sm:p-16 sm:flex-row sm:gap-28 sm:justify-center sm:min-h-[32rem]'>
      <div className='grid gap-6 sm:max-w-2xl'>
        <h2 className='text-2xl leading-6 font-semibold'>
          Projeto
        </h2>

        <p className='font-medium'>
          O projeto <strong className='font-bold'>ELAS VIVAS</strong> surgiu a partir da necessidade
          de proporcionar um olhar diferenciado para a população de mulheres
          em situação de vulnerabilidade e violência na sociedade, prestando
          acolhimento e uma escuta qualificada através do olhar de uma psicologia ética, responsável e social.
        </p>
      </div>

      <img
        className='w-52 h-auto sm:w-72'
        src={Logo}
        alt="Logo completo do projeto Elas Vivas"
      />
    </section>
  )
}
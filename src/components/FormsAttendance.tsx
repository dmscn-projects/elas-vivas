import WomansInLaptop from './../assets/womans-in-laptop.jpg'

export function FormsAttendance() {
  return (
    <section id='Atendimento' className='bg-blue-light lg:flex'>
      <img className='w-full lg:w-2/4 lg:object-cover' src={WomansInLaptop} alt="Fotografia com três mulheres juntas." />

      <div className='px-8 py-14 text-blue-10 flex flex-col gap-8 lg:max-w-lg lg:mx-auto lg:self-center lg:gap-6'>
        <h2 className='text-2xl font-semibold'>
          Plantão psicológico
        </h2>

        <p className='font-medium'>
          Modalidade de atendimento breve e focal em uma demanda.
          Não se trata de uma psicoterapia, mas de um apoio psicológico a mulheres em situação de violência.
        </p>

        <h2 className='text-2xl font-semibold'>
          Psicoterapia
        </h2>

        <p>
          Psicoterapia destinada a mulheres em situação de violência e vulnerabilidade social.
          Os atendimentos levarão em consideração a realidade socioeconômica da paciente.
        </p>
      </div>
    </section>
  )
}
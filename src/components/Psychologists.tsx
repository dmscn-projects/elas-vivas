import { psychologists } from "../utils/psychologists"

export function Psychologists() {
  return (
    <section id='Psicólogas' className='grid p-8 gap-8 bg-white-80 text-blue-10 lg:py-24 lg:justify-items-center'>
      <h2 className='text-2xl font-semibold lg:max-w-4xl lg:w-full'>Psicólogas</h2>

      {
        psychologists.map((psychologist) => (
          <div key={`psychologist-${psychologist.id}`} className='flex flex-col gap-6 lg:max-w-4xl lg:flex-row lg:gap-16'>
            <a href={psychologist.social} className='mx-auto lg:w-full'>
              <img
                className="hover:-rotate-3 transition-transform"
                src={psychologist.profile_image}
                alt={`Foto de perfil da Psicóloga ${psychologist.name}`} />
            </a>

            <div className='lg:flex lg:justify-center lg:flex-col lg:gap-6'>
              <div>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold'>{psychologist.name}</h2>
                <h3 className='text-lg font-semibold'>{psychologist.crp}</h3>
              </div>

              <p>{psychologist.description}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}
import ProfileLiandra from './../assets/profile-liandra.jpg'
import ProfileIsabel from './../assets/profile-isabel.jpg'
import ProfileLarissa from './../assets/profile-larissa.jpg'

export function Psychologists() {
  return (
    <section id='Psicólogas' className='grid p-8 gap-8 bg-white-80 text-blue-10 lg:py-24 lg:justify-items-center'>
      <h2 className='text-2xl font-semibold lg:max-w-4xl lg:w-full'>Psicólogas</h2>

      <div className='flex flex-col gap-6 lg:max-w-4xl lg:flex-row lg:gap-16'>
        <img className='mx-auto' src={ProfileLiandra} alt="Foto de perfil da Psicóloga Liandra" />

        <div className='lg:flex lg:justify-center lg:flex-col lg:gap-6'>
          <div>
            <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold'>Antônia Liandra da Silva</h2>
            <h3 className='text-lg font-semibold'>CRP 11/19442</h3>
          </div>

          <p>
            Sou psicóloga graduada pela faculdade Ieducare-Fied/UNINTA Tianguá e pós graduanda em Saúde Mental
            pela faculdade Dom Alberto. Atuo com base na psicanálise e meus estudos são guiados por temas como
            psicologia decolonial, políticas públicas, feminismo e antirracismo.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-6 lg:max-w-4xl lg:flex-row lg:gap-16'>
        <img className='mx-auto' src={ProfileIsabel} alt="Foto de perfil da Psicóloga Isabel" />

        <div className='lg:flex lg:justify-center lg:flex-col lg:gap-6'>
          <div>
            <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold'>Isabel Oliveira do Carmo</h2>
            <h3 className='text-lg font-semibold'>CRP 11/19182</h3>
          </div>

          <p>
            Sou Psicóloga formada pela Faculdade Ieducare-Fied e Pós-Graduanda em Psicologia e Saúde da Mulher
            pela Faculdade Metropolitana. Atuo com base na clínica da Psicologia Comportamental e tenho interesse
            por temas de Saúde Mental da Mulher envolvendo padrão estético, mídias sociais e socialização feminina.
          </p>
        </div>


      </div>

      <div className='flex flex-col gap-6 lg:max-w-4xl lg:flex-row lg:gap-16'>
        <img className='mx-auto' src={ProfileLarissa} alt="Foto de perfil da Psicóloga Larissa" />

        <div className='lg:flex lg:justify-center lg:flex-col lg:gap-6'>
          <div>
            <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold'>Larissa Oliveira Abreu</h2>
            <h3 className='text-lg font-semibold'>CRP 11/19185</h3>
          </div>
          <p>
            Sou Psicóloga formada pela Faculdade Ieducare-Fied/Uninta Tianguá e Pós-Graduanda em Psicologia Social
            pela Faculdade UniVitoria. Atuo com base na clínica da Terapia Cognitivo-comportamental
            e tenho interesse por temas voltados para violência contra mulheres e políticas públicas.
          </p>
        </div>

      </div>
    </section>
  )
}
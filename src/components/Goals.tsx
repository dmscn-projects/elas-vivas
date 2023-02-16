import PictureWomans from './../assets/picture-womans.jpg'

export function Goals() {
  return (
    <section id='Objetivo' className='bg-yellow-100 sm:flex'>
      <img className='sm:w-2/4 sm:object-cover' src={PictureWomans} alt="Fotografia com três mulheres juntas." />

      <div className='px-8 py-14 text-blue-10 grid gap-6 sm:max-w-lg sm:mx-auto sm:flex sm:flex-col sm:justify-center sm:gap-4'>
        <h2 className='w-full text-2xl leading-6 font-semibold'>
          Objetivos
        </h2>

        <p className='font-medium sm:max-w-md'>
          Compartilhar informações que levem à reflexão do papel social e político das mulheres na sociedade.
        </p>

        <p>
          Oferecer atendimento social ou voluntário para mulheres a partir de 18 anos em situação de violência.
        </p>
      </div>
    </section>
  )
}
import { TwitterLogo, InstagramLogo } from "phosphor-react"

export function Footer() {
  return (
    <footer className='p-8 flex flex-col gap-4 items-center justify-center bg-blue-10 text-white'>
      <p>Este site foi desenvolvido por:</p>

      <div className='flex flex-col gap-2 sm:flex-row sm:gap-16'>
        <a className='flex items-center gap-4' href="https://twitter.com/wesleydmscn">
          <TwitterLogo size={32} />

          <div>
            <p>@wesleydmscn</p>
            <p className='text-yellow-80'>Software Developer</p>
          </div>
        </a>

        <a className='flex items-center gap-4' href="https://instagram.com/tailane.isaias">
          <InstagramLogo size={32} />

          <div>
            <p>@tailaneisaias</p>
            <p className='text-yellow-80'>UI/UX Design</p>
          </div>
        </a>
      </div>
    </footer>
  )
}
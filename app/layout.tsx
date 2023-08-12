import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Milanas Portfolio',
  description: 'Milana is an aspiring full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className='bg-lime-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75]' ></div>
        <div className='bg-rose-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2xl:left-[-5rem]' ></div>
        {children}
        </body>
    </html>
  )
}

import {Inter} from 'next/font/google'
import './globals.css'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'FIAP - Portifólio do Aluno',
  description: 'Website de um aluno que estuda na FIAP, utilizado para facilitar a vida do aluno em cálculos, fórmulas, atalhos, etc.',
}

export default function RootLayout({children}) {
  return ( 
  <html lang="pt-br" >
    <body className = {inter.className} > 
      <Cabecalho />
      {children}
    </body> 
  </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className={inter.className}>
      <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <svg className="absolute left-0 top-0" width="490" height="428" viewBox="0 0 490 428" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H490V428H0V0ZM0.765625 0.764286H60.4844V60.3786H0.765625V0.764286ZM62.0156 0.764286H121.734V60.3786H62.0156V0.764286ZM182.984 0.764286H123.266V60.3786H182.984V0.764286ZM184.516 0.764286H244.234V60.3786H184.516V0.764286ZM305.484 0.764286H245.766V60.3786H305.484V0.764286ZM307.016 0.764286H366.734V60.3786H307.016V0.764286ZM427.984 0.764286H368.266V60.3786H427.984V0.764286ZM429.516 0.764286H489.234V60.3786H429.516V0.764286ZM60.4844 61.9071H0.765625V121.521H60.4844V61.9071ZM62.0156 61.9071H121.734V121.521H62.0156V61.9071ZM182.984 61.9071H123.266V121.521H182.984V61.9071ZM184.516 61.9071H244.234V121.521H184.516V61.9071ZM305.484 61.9071H245.766V121.521H305.484V61.9071ZM307.016 61.9071H366.734V121.521H307.016V61.9071ZM427.984 61.9071H368.266V121.521H427.984V61.9071ZM429.516 61.9071H489.234V121.521H429.516V61.9071ZM60.4844 123.05H0.765625V182.664H60.4844V123.05ZM62.0156 123.05H121.734V182.664H62.0156V123.05ZM182.984 123.05H123.266V182.664H182.984V123.05ZM184.516 123.05H244.234V182.664H184.516V123.05ZM305.484 123.05H245.766V182.664H305.484V123.05ZM307.016 123.05H366.734V182.664H307.016V123.05ZM427.984 123.05H368.266V182.664H427.984V123.05ZM429.516 123.05H489.234V182.664H429.516V123.05ZM60.4844 184.193H0.765625V243.807H60.4844V184.193ZM62.0156 184.193H121.734V243.807H62.0156V184.193ZM182.984 184.193H123.266V243.807H182.984V184.193ZM184.516 184.193H244.234V243.807H184.516V184.193ZM305.484 184.193H245.766V243.807H305.484V184.193ZM307.016 184.193H366.734V243.807H307.016V184.193ZM427.984 184.193H368.266V243.807H427.984V184.193ZM429.516 184.193H489.234V243.807H429.516V184.193ZM60.4844 245.336H0.765625V304.95H60.4844V245.336ZM62.0156 245.336H121.734V304.95H62.0156V245.336ZM182.984 245.336H123.266V304.95H182.984V245.336ZM184.516 245.336H244.234V304.95H184.516V245.336ZM305.484 245.336H245.766V304.95H305.484V245.336ZM307.016 245.336H366.734V304.95H307.016V245.336ZM427.984 245.336H368.266V304.95H427.984V245.336ZM429.516 245.336H489.234V304.95H429.516V245.336ZM60.4844 306.479H0.765625V366.093H60.4844V306.479ZM62.0156 306.479H121.734V366.093H62.0156V306.479ZM182.984 306.479H123.266V366.093H182.984V306.479ZM184.516 306.479H244.234V366.093H184.516V306.479ZM305.484 306.479H245.766V366.093H305.484V306.479ZM307.016 306.479H366.734V366.093H307.016V306.479ZM427.984 306.479H368.266V366.093H427.984V306.479ZM429.516 306.479H489.234V366.093H429.516V306.479ZM60.4844 367.621H0.765625V427.236H60.4844V367.621ZM62.0156 367.621H121.734V427.236H62.0156V367.621ZM182.984 367.621H123.266V427.236H182.984V367.621ZM184.516 367.621H244.234V427.236H184.516V367.621ZM305.484 367.621H245.766V427.236H305.484V367.621ZM307.016 367.621H366.734V427.236H307.016V367.621ZM427.984 367.621H368.266V427.236H427.984V367.621ZM429.516 367.621H489.234V427.236H429.516V367.621Z" fill="url(#paint0_linear_2926_2007)"/>
          <defs>
          <linearGradient id="paint0_linear_2926_2007" x1="-68" y1="-35.5" x2="245" y2="428" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="0.657437" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg> 
        <Navbar />
        {children}
      </body>
    </html>
  )
}

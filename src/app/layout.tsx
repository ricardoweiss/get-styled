import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      {/*{process.env.NODE_ENV === 'production' && (*/}
      {/*  <script async*/}
      {/*          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4127168004839495"*/}
      {/*          crossOrigin="anonymous"></script>*/}
      {/*)}*/}
      <Script
        id="Absence-banner"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4127168004839495"
        crossOrigin="anonymous"
      />
      <title>
        CSS Convertor
      </title>
    </head>
    <body className={inter.className}>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
    </html>
  )
}

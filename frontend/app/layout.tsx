import NavBar from "@/ui/NavBar"
import '@/styles/globals.css'
import localFont from "next/font/local"

const jetBrainsMonoNLNF = localFont({
  src: [
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../styles/fonts/JetBrainsMonoNLNF-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetBrainsMonoNLNF.className}>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
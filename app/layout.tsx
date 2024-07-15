import "../styles/globals.css"
import Header from "../components/header"
import { inter } from "../styles/fonts"
import { Toaster } from "@/components/ui/toaster"
import HeaderShell from "@/components/header-shell"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Troupe de comédie musicale basée à Marly dans le Val d'Oise"
        />
        <meta property="og:title" content="Comédie musicale les Chup's" />
        <meta
          property="og:description"
          content="Troupe de comédie musicale basée à Marly dans le Val d'Oise"
        />
        <meta
          property="og:image"
          content="./assets/pictures/chups_troupe.webp"
        />
        <meta property="og:type" content="facebook:photo" />
        <meta property="og:site_name" content="Les Chup's" />
        <meta
          property="og:url"
          content="https://www.facebook.com/profile.php?id=100091876850435"
        />
        <meta itemProp="name" content="Les Chup's" />
        <meta itemProp="image" content="./assets/pictures/chups_troupe.webp" />

        <meta property="og:title" content="Les Chup's" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="leschups.vercel.app" />
        <meta
          property="og:image"
          content="./assets/pictures/chups_troupe.webp"
        />
        <meta
          property="og:description"
          content="Comédie musicale mélangeant chant, danses, comédie et instruments, présentée par la troupe des Chup's"
        />
        <meta name="facebook:card" content="summary" />
        <meta name="facebook:title" content="Les Chup's" />
        <meta
          name="facebook:description"
          content="Troupe de comédie musicale basée à Marly dans le Val d'Oise"
        />
        <meta
          name="facebook:image"
          content="./assets/pictures/chups_troupe.webp"
        />
        <meta
          name="description"
          content="Comédie musicale mélangeant chant, danses, comédie et instruments, présentée par la troupe des Chup's."
        />
      </head>
      <body
        className={`${inter.className} dark`}
        suppressHydrationWarning={true}
      >
        <HeaderShell headerContent={<Header />} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

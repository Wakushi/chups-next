import { playfairDisplay } from "@/styles/fonts"

export default function FaqPage() {
  return (
    <div className="py-20 px-4 flex flex-col gap-4 min-h-[100dvh]">
      <h1 className={`${playfairDisplay.className} text-3xl`}>FAQ</h1>
      <h2 className="text-xl leading-tight	">Qui sont les Chup's ? </h2>
      <p className="font-extralight">
        Les Chup's sont une troupe de comédie musicale basée à Marly dans le Val
        d'Oise. Passionnés par les arts de la scène, ils allient danse, chant,
        musique et théâtre pour offrir des spectacles uniques et captivants.
      </p>
      <h2 className="text-xl leading-tight">
        Dans quelles villes vous produisez-vous ?{" "}
      </h2>
      <p className="font-extralight">
        Nous nous produisons principalement dans les villes autour de Marly dans
        le Val d'Oise, mais nous sommes ouverts à des invitations d'autres
        régions. Consultez notre calendrier sur notre site pour connaître nos
        prochaines dates.
      </p>
      <h2 className="text-xl leading-tight">
        Comment puis-je acheter des billets pour un spectacle ?{" "}
      </h2>
      <p className="font-extralight">
        Vous pouvez réserver par mail (leschups@outlook.fr) ou par téléphone au
        06 11 84 60 05. Il est également possible d'acheter vos billets sur
        place, cependant nous vous recommandons de réserver à l'avance car nos
        spectacles sont souvent complets.
      </p>
      <h2 className="text-xl leading-tight">
        Faites-vous des spectacles adaptés aux enfants ?
      </h2>
      <p className="font-extralight">
        Oui, nous proposons des spectacles adaptés pour toute la famille, y
        compris les plus jeunes.
      </p>
      <h2 className="text-xl leading-tight">Puis-je rejoindre la troupe ?</h2>
      <p className="font-extralight">
        {" "}
        Nous sommes toujours à la recherche de nouveaux talents ! Si vous avez
        une passion pour la danse, le chant, la musique ou le théâtre, n'hésitez
        pas à nous envoyer votre candidature.
      </p>
      <p className="text-center">
        Nous espérons que cette FAQ répond à vos questions. Si ce n'est pas le
        cas, n'hésitez pas à nous contacter.
      </p>
      <p className="text-center">
        Au plaisir de vous voir lors de l'un de nos spectacles !
      </p>
    </div>
  )
}

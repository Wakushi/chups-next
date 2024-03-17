import { playfairDisplay } from "@/styles/fonts"

export default function AboutPage() {
  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Légende des Chup's
      </h1>
      <div className="flex flex-col gap-4 font-extralight">
        <p>
          Cette création se fit sous la pression de quelques joyeux lurons qui
          voulaient danser, chanter et jouer la comédie. Encore fallait-il
          trouver une personne capable de leur apprendre à faire tout cela sans
          être ridicule!...
        </p>
        <p>
          Depuis longtemps, l'on savait qu'il y avait une femme, chanteuse de
          son état, capable de leur apprendre les joies du spectacle. Mais la
          peur les figeait car cette petite dame marchait dans les rues du
          village sans dire un mot, et le pire c'est que l'on ne voyait jamais
          son visage sous sa chevelure blonde...
        </p>
        <p>
          Ils prirent leur courage à deux mains et toquèrent à sa porte.
          Celle-ci s'ouvrit sous un grincement terrible et la…… Stupeur, cette
          femme que tout le monde craignait les accueillies avec un sourire
          éclatant. Ils expliquèrent leur souhait précisant ne pas savoir
          comment s'y prendre.
        </p>
        <p>
          Voyant l'enthousiasme de ces troubadours, elle décida de créer une
          troupe musicale qu'elle nomma L'ATELIER CHANSON, c'était en 2004.
        </p>
        <p>
          Après de long cours d'apprentissage, le premier spectacle fût donné à
          la salle des fêtes du village de Marly la Ville, puis un deuxième.
        </p>
        <p>
          Le succès de ses élèves étant, cette dame toujours aussi petite mais
          avec un immense talent, décida de les faire jouer sur la scène -ou
          plutot- la "grande scène" de notre commune, avec presque trois cent
          places qu'ils remplirent chaque année.
        </p>
        <p>
          Cet ATELIER CHANSONS changea de nom en 2008 pour s'appeler CHUPACHUP'S
          puis LES CHUP'S. Tous ensembles, ils continuent à offrir du plaisir
          aux marlysiens et marlysiennes au moins une fois par an.
        </p>
        <p>
          Si un jour vous avez l'occasion de voir une affiche de spectacle de
          ces fous chantants, alors n'hésitez pas, venez les applaudir... Mais
          attention, ne croisez pas le regard de notre Mme Chup's car vous
          risqueriez de devenir comme nous: Tout simplement heureux!
        </p>
      </div>
      <p className="mt-4">Que le spectacle continu !</p>
    </div>
  )
}

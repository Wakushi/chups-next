import { Song } from "../types/Song"

const RAW_SONGS: Song[] = [
  {
    id: 1,
    title: "Et c'est parti",
    artist: "Nadya",
    singers: ["Emerick", "Astrid", "Maryline"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F1.%20ET%20C'EST%20PARTI....docx?alt=media&token=e904fba7-da96-4052-ad95-fe082190a5e0",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F01.%20Et%20c'est%20Parti...%20(Instrumental).mp3?alt=media&token=5653a6fe-d9f8-4d1e-ad9e-1e1294e5f048",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
    .lyrics {
      font-family: Arial, sans-serif;
      margin: 0 auto;
      line-height: 1.6;
    }
    .chorus {
      font-weight: bold;
      font-style: italic;
      margin: 20px 0;
    }
    .verse {
      margin: 20px 0;
    }
    .singer {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem
    }
    .parenthetical {
      font-style: italic;
    }
  </style>
  <div class="lyrics">
    <div class="chorus">ET C'EST PARTI …</div>
    
    <div class="chorus">
      Et c'est parti ….. (x 4) Everybody
    </div>
  
    <div class="chorus">
      Et c'est parti pour le show<br>
      Et c'est parti le stade est chaud<br>
      Et c'est parti bouge-toi sur ce flow<br>
      Et c'est parti pour le show<br>
      Et c'est parti tout le monde est chaud<br>
      Et c'est parti Everybody
    </div>
  
    <div class="verse">
      <div class="singer">[Emerick]</div>
      Il lève Les yeux vers son rêve<br>
      Se remémore et lève Ses pensées l'élèvent<br>
      Il lave Ses poings faits de lave <span class="parenthetical">(Lave)</span><br>
      Prêt à briser l'enclave Et se refuse esclave
    </div>
  
    <div class="chorus">
      Et c'est parti pour le show<br>
      Et c'est parti le stade est chaud<br>
      Et c'est parti bouge-toi sur ce flow<br>
      Et c'est parti pour le show<br>
      Et c'est parti tout le monde est chaud<br>
      Et c'est parti Everybody
    </div>
  
    <div class="verse">
      <div class="singer">[Maryline]</div>
      Il laisse… L'emporter l'ivresse<br>
      Et son cœur n'a de cesse De taire ses faiblesses…<br>
      <span class="parenthetical">Ah!</span><br>
      Délaisse Les coups qui le blessent<br>
      Pour que l'autre s'affaisse Que le rideau se baisse
    </div>
  
    <div class="chorus">
      Et c'est parti pour le show<br>
      Et c'est parti le stade est chaud<br>
      Et c'est parti bouge-toi sur ce flow<br>
      Et c'est parti pour le show<br>
      Et c'est parti tout le monde est chaud<br>
      Et c'est parti Everybody
    </div>
  
    <div class="verse">
      <div class="singer">[Astrid]</div>
      <span class="parenthetical">Ladies and gentlemen<br>
      Welcome tonight at the MGM Grand, Las Vegas<br>
      The main event y'all been waitin' for<br>
      On my right, you got Nâdiya<br>
      And on my left, Smartzee<br>
      Let's go</span><br>
      I'm bangin' on these suckas with a passion, it's a pageant<br>
      Blastin' like a bullet, I'm there before you pull it<br>
      Mashin' 24-7 before I get to heaven<br>
      Uppercut niggas and gentlemen, Smartzee's Propellin'<br>
      Bang, energy doubles when niggas lookin' for trouble<br>
      Home street home, like a rebel, trying to beat our puzzle<br>
      You really wanna rumble, let's get ready to crumble<br>
      I ain't goin' out like a busta, I put my foot on the pedal
    </div>
  
    <div class="chorus">
      Et c'est parti pour le show<br>
      Et c'est parti le stade est chaud<br>
      Et c'est parti bouge-toi sur ce flow<br>
      Et c'est parti pour le show<br>
      Et c'est parti tout le monde est chaud<br>
      Et c'est parti Everybody
    </div>
  
    <div class="verse">
      Et c'est parti <span class="parenthetical">(To all my fellas in the club)</span><br>
      Et c'est parti <span class="parenthetical">(To all my ladies in the club)</span><br>
      Et c'est parti <span class="parenthetical">(To all my gangstas in the club)</span><br>
      <span class="parenthetical">(Yeah, put your mother fucking hands up)</span><br>
      Et c'est parti <span class="parenthetical">(To all my ladies in the club)</span><br>
      Et c'est parti <span class="parenthetical">(To all my fellas in the club)</span><br>
      Et c'est parti <span class="parenthetical">(To all my gangstas in the club)</span><br>
      <span class="parenthetical">(Put your mother fucking hands up)</span>
    </div>
  
    <div class="chorus">
      Et c'est parti, pour le show<br>
      Et c'est parti, le stade est chaud<br>
      Et c'est parti bouge-toi sur ce flow<br>
      Et c'est parti, pour le show<br>
      Et c'est parti, tout l'monde est chaud<br>
      Et c'est parti Everybody
    </div>
  </div>`,
    },
  },
  {
    id: 2,
    title: "Du côté de chez Swann",
    artist: "Dave",
    singers: ["Martine R", "Martine B"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F2.%20DU%20CO%CC%82TE%20DE%20CHEZ%20SWANN.docx?alt=media&token=a714f6c4-ccfe-4ce3-b0a9-ad67e7e64e6f",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F02.%20Du%20co%CC%82te%CC%81%20de%20chez%20Swann%20(Instrumental).mp3?alt=media&token=01eaefd2-f08c-4094-8ef5-fb3c1a5aad1a",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
    .lyrics {
      font-family: Arial, sans-serif;
      margin: 0 auto;
      line-height: 1.6;
    }
    .chorus {
      font-weight: bold;
      font-style: italic;
      margin: 20px 0;
    }
    .verse {
      margin: 20px 0;
    }
    .singer {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .parenthetical {
      font-style: italic;
    }
    .ensemble {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .subtitle {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 2rem;
    }
</style>

<div class="lyrics">
    <div class="title">Du côté de chez Swann</div>
    <div class="subtitle">Intro</div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        On oublie…<br>
        Hier est loin, si loin d'aujourd'hui<br>
        Mais il m'arrive souvent…<br>
        De rêver encore… À l'adolescent…<br>
        Que je ne suis plus
    </div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        On sourit…<br>
        En revoyant sur les photos jaunies<br>
        L'air un peu trop sûr de soi<br>
        Que l'on prend à 16 ans<br>
        Et que l'on fait de son mieux<br>
        Pour paraître plus vieux
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble]</div>
        J'irai bien refaire un tour<br>
        Du côté de chez Swann<br>
        Revoir mon premier amour<br>
        Qui me donné rendez-vous<br>
        Sous le chêne<br>
        Et se laissait embrasser sur la joue<br>
        Je ne voudrai pas refaire<br>
        Le chemin à l'envers<br>
        Et pourtant je paierai cher<br>
        pour revivre un seul instant<br>
        Le temps du bonheur…<br>
        À l'ombre d'une fille en fleurs
    </div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        On oublie…<br>
        Et puis un jour il suffit d'un parfum<br>
        <div class="singer">[Martine R]</div>
        Pour qu'on retrouve soudain la magie d'un matin<br>
        <div class="ensemble">[Ensemble]</div>
        Et l'on oublie l'avenir pour quelques souvenirs
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble x 3]</div>
        Et je m'en vais faire un tour<br>
        Du côté de chez Swann<br>
        Revoir mon premier amour<br>
        Qui me donné rendez-vous<br>
        Sous le chêne<br>
        Et se laissait embrasser sur la joue<br>
        Je ne voudrai pas refaire<br>
        Le chemin à l'envers<br>
        Et pourtant je paierai cher<br>
        pour revivre un seul instant<br>
        Le temps du bonheur…<br>
        À l'ombre d'une fille en fleurs
    </div>
</div>`,
    },
  },
  {
    id: 3,
    title: "Le Dîner",
    artist: "Bénabar",
    singers: ["Aline", "Emmanuel"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F3.%20LE%20DI%CC%82NER.docx?alt=media&token=cc1a06e2-84df-4176-9bb8-56599a0e4425",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F03.%20Le%20di%CC%82ner%20(karaoke).mp3?alt=media&token=05fc15c3-0447-45d1-b41e-c3c19c25509c",
    isFavorite: false,
    lyrics_html: {
      __html: `<style>
    .lyrics {
      font-family: Arial, sans-serif;
      margin: 0 auto;
      line-height: 1.6;
    }
    .chorus {
      font-weight: bold;
      font-style: italic;
      margin: 20px 0;
    }
    .verse {
      margin: 20px 0;
    }
    .singer {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .parenthetical {
      font-style: italic;
    }
    .ensemble {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
</style>

<div class="lyrics">
    <div class="title">Le Dîner</div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        J'veux pas y aller, à ce dîner<br>
        J'ai pas l'moral, j'suis fatigué<br>
        Ils nous en voudront pas<br>
        Allez on n'y va pas
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        En plus faut qu'j'fasse un régime<br>
        Ma chemise me boudine<br>
        J'ai l'air d'une chipolata<br>
        Je peux pas sortir comme ça
    </div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        Ça n'a rien à voir<br>
        J'les aime bien, tes amis<br>
        Mais je veux pas les voir<br>
        Parce que j'ai pas envie
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble]</div>
        On s'en fout, on n'y va pas<br>
        On n'a qu'à s'cacher sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi<br>
        On appelle, on s'excuse<br>
        On improvise, on trouve quelqu'chose<br>
        On n'a qu'à dire à tes amis<br>
        Qu'on les aime pas et puis tant pis
    </div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        J'suis pas d'humeur, tout me déprime<br>
        Et il se trouve que par hasard<br>
        Y a un super bon film<br>
        À la télé ce soir
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        Un chef-d'oeuvre du septième Art<br>
        Que je voudrais revoir<br>
        Un drame très engagé<br>
        Sur la police de Saint-Tropez
    </div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        C'est une satire sociale<br>
        Dont le personnage central<br>
        Est joué par De Funès<br>
        En plus y a des extraterrestres
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble]</div>
        On s'en fout, on n'y va pas<br>
        On n'a qu'à s'cacher sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi<br>
        On appelle, on s'excuse<br>
        On improvise, on trouve quelqu'chose<br>
        On n'a qu'à dire à tes amis<br>
        Qu'on les aime pas et puis tant pis<br>
        On s'en fout,<br>
        On n'y va pas<br>
        On n'a qu'à se cacher<br>
        sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi
    </div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        J'ai des frissons, je me sens faible<br>
        Je crois qu'je suis souffrant<br>
        Ce serait pas raisonnable<br>
        De sortir maintenant
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        Je préfère pas prend' de risque<br>
        C'est peut-être contagieux<br>
        Il vaut mieux que je reste<br>
        Ça m'ennuie mais c'est mieux
    </div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        Tu me traites d'égoïste<br>
        Comment oses-tu dire ça ?<br>
        Moi qui suis malheureux et triste<br>
        Et j'ai même pas de home-cinéma
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble]</div>
        On s'en fout, on n'y va pas<br>
        On n'a qu'à s'cacher sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi<br>
        On appelle, on s'excuse<br>
        On improvise, on trouve quelqu'chose<br>
        On n'a qu'à dire à tes amis<br>
        Qu'on les aime pas et puis tant pis<br>
        On s'en fout<br>
        On n'y va pas<br>
        On n'a qu'à se cacher<br>
        Sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi<br><br>
        On s'en fout, on n'y va pas<br>
        On n'a qu'à s'cacher sous les draps<br>
        On commandera des pizzas<br>
        Toi, la télé et moi
    </div>
</div>`,
    },
  },
  {
    id: 4,
    title: "Clic Clic Pan Pan",
    artist: "Yanns",
    singers: ["Nathan", "Nelyan", "Linoa", "Jade"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F4.%20CLIC%20CLIC%20PAN%20PAN.docx?alt=media&token=173aff72-224c-4ec7-b46f-cf49e8ec5665",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F04.%20Clic%20Clic%20Pan%20Pan%20(Instrumental).mp3?alt=media&token=a894a43d-2341-4512-aace-dcc7b943b867",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
    .lyrics {
      font-family: Arial, sans-serif;
      margin: 0 auto;
      line-height: 1.6;
    }
    .verse {
      margin: 20px 0;
    }
    .singer {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .response {
      font-style: italic;
      font-size: 0.9rem;
      margin-left: 20px;
    }
    .ensemble {
      font-weight: bold;
      margin-top: 20px;
      font-size: 1.1rem;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
</style>

<div class="lyrics">
    <div class="title">Clic Clic Pan Pan</div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        T'étais mon chouchou, j'peux pas oublier l'passé, oublier l'passé<br>
        T'étais mon chouchou, j'peux pas t'effacer<br>
        T'es la plus belle des étoiles, parmi les autres, je vois que toi<br>
        <span class="response">[Que toi]</span><br>
        Si tu te sens seule, dis-moi<br>
        <span class="response">[Dis-moi]</span><br>
        il m'reste une place auprès de moi<br>
        <span class="response">[Auprès de moi]</span><br>
        Les projecteurs sur toi, c'est fou comment, tu brilles dans l'noir<br>
        <span class="response">[C'est fou]</span><br>
        T'es la plus belle mademoiselle, comment j'aurais fait pour pas te voir ?
    </div>

    <div class="verse">
        <div class="singer">[Nelyan]</div>
        J'sais que l'passé, c'est l'passé<br>
        <span class="response">[Mais c'est passé]</span><br>
        Mais entre nous, j'peux pas dire ce qu'il s'est passé<br>
        <span class="response">[J'peux pas dire ce qu'il s'est passé]</span><br>
        J'voudrais pouvoir rattraper le temps<br>
        <span class="response">[Rattraper le temps]</span><br>
        Pour que tu partes, dis-moi qu'est-ce que j'ai fait, bon sang ?<br>
        <span class="response">[Qu'est-ce que j'ai fait, bon sang]</span>
    </div>

    <div class="verse">
        <div class="singer">[Jade]</div>
        J'sais que l'passé, c'est l'passé, mais y a qu'à toi qu'j'peux me confier<br>
        Tu sais, j'deviens parano des fois, quand j'reste seul, direct, je pense à toi<br>
        Et ça fait Clic "Clic-Clic Pan-Pan-Pan"<br>
        J'braque ton petit cœur, ma chérie, t'es trop séduisante
    </div>

    <div class="verse">
        <div class="singer">[Nora 2]</div>
        T'étais mon chouchou <span class="response">[Hmm]</span> j'sais pas ce qui s'est passé <span class="response">[Nan]</span><br>
        Je repense à toi chaque jour, j'aimerais recoller ce qui est cassé<br>
        Tu m'dis qu'c'est fini, qu'y a plus d'nous, <span class="response">[Nous]</span> j'ferais mieux de t'effacer <span class="response">[Mieux de t'éffacer]</span><br>
        Je sais pas à quoi tu joues, mais j'peux pas oublier l'passé<br>
        <span class="response">[J'peux pas oublier l'passé, oublier l'passé] [T'étais mon chouchou, j'peux pas t'effacer]</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        T'es la plus belle des étoiles, parmi les autres, je vois que toi<br>
        <span class="response">[Je vois que toi]</span><br>
        Si tu te sens seule, dis-moi, <span class="response">[Dis-moi]</span><br>
        il m'reste une place auprès de moi <span class="response">[Auprès de moi]</span><br>
        Les projecteurs sur toi, c'est fou comment, tu brilles dans l'noir <span class="response">[C'est fou]</span><br>
        T'es la plus belle mademoiselle, comment j'aurais fait pour pas te voir ? <span class="response">[Voir]</span>
    </div>

    <div class="verse">
        <div class="singer">[Nelyan]</div>
        Je sens que tu caches quelque chose, c'est bon, me mens pas <span class="response">[Non, ne mens pas]</span><br>
        T'es plus du tout comme avant, j'sais pas c'qui s'passe, j'te r'connais pas <span class="response">[J'te r'connais pas]</span><br>
        J'sais que parfois, je suis con, <span class="response">[Con]</span> mais j'reste le premier dans ton cœur <span class="response">[Ouais dans ton coeur]</span><br>
        Si les minutes sont des secondes, je te ferais l'amour pendant des heures
    </div>

    <div class="verse">
        <div class="singer">[Jade]</div>
        Je sais que l'passé c'est l'passé, mais y a qu'à toi que je peux me confier<br>
        Tu sais, j'deviens parano' des fois, quand j'reste seul, direct, je pense à toi<br>
        Et ça fait Clic "Clic-Clic Pan-Pan-Pan"<br>
        J'braque ton petit cœur, ma chérie, t'es trop séduisante <span class="response">[T'es trop séduisante]</span>
    </div>

    <div class="verse">
        <div class="singer">[Nora 2]</div>
        T'étais mon chouchou <span class="response">[Hmm]</span> j'sais pas ce qui s'est passé <span class="response">[Nan]</span><br>
        J'repense à toi chaque jour, j'aimerais recoller ce qui est cassé<br>
        Tu m'dis qu'c'est fini, qu'y a plus d'nous, <span class="response">[d'nous]</span> j'ferais mieux de t'effacer <span class="response">[Ouais t'éffacer]</span><br>
        Je sais pas à quoi tu joues, mais j'peux pas oublier l'passé <span class="response">[l'passé l'passé]</span>
    </div>

    <div class="verse">
        <div class="ensemble">[Ensemble]</div>
        <span class="response">[Et ça fait Clic "Clic-Clic, Pan-Pan-Pan"]</span><br>
        <span class="response">[J'braque ton petit cœur, ma chérie, t'es trop séduisante]</span><br>
        <span class="response">[Et ça fait Clic "Clic-Clic, Pan-Pan-Pan"]</span><br>
        <span class="response">[J'braque ton petit cœur, ma chérie, t'es trop séduisante]</span>
    </div>
</div>`,
    },
  },
  {
    id: 5,
    title: "Ma drôle de vie",
    artist: "Véronique Sanson",
    singers: ["Maryline", "Alexandra"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F5.%20CHANSON%20SUR%20MA%20DROLE%20DE%20VIE.docx?alt=media&token=0a91b979-1212-4e59-ae5b-8de3b91f8217",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F05.%20Ma%20dro%CC%82le%20de%20vie%20V.%20Sanson%20%26%20Vianney.mp3?alt=media&token=2af3582a-981f-41db-be68-8666694069c0",
    isFavorite: false,
    lyrics_html: {
      __html: `
      <style>
          .lyrics {
            font-family: Arial, sans-serif;
            margin: 0 auto;
            line-height: 1.6;
          }
          .verse {
            margin: 20px 0;
          }
          .singer {
            font-weight: bold;
            margin-top: 20px;
            font-size: 1.1rem;
          }
          .response {
            font-style: italic;
            margin-left: 20px;
          }
          .ensemble {
            font-weight: bold;
            margin-top: 20px;
            font-size: 1.1rem;
          }
          .title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .vocalise {
            font-style: italic;
          }
      </style>
      <div class="lyrics">
          <div class="title">CHANSON SUR MA DRÔLE DE VIE</div>
          <div class="verse">
    <div class="singer">[Alexandra]</div>
    Tu m'as dit que j'étais faite, Pour une drôle de vie<br>
    J'ai des idées dans la tête, Et je fais ce que j'ai envie
</div>

<div class="verse">
    <div class="singer">[Maryline]</div>
    <span class="response">Je t'emmène faire le tour, De ma drôle de vie<br>
    Je te verrai tous les jours</span>
</div>

<div class="verse">
    <div class="singer">[Alexandra] [Maryline]</div>
    Et si je te pose des questions <span class="response">(Qu'est-ce que tu diras?)</span><br>
    Et si je te réponds <span class="response">(Qu'est-ce que tu diras?)</span><br>
    Si on parle d'amour <span class="response">(Qu'est-ce que tu diras?)</span>
</div>

<div class="verse">
    <div class="ensemble">[Ensemble]</div>
    Si je sais que tu mènes La vie que tu aimes au fond de moi<br>
    Me donne tous ses emblèmes Me touche quand même du bout de ses doigts<br>
    Même si tu as des problèmes Tu sais que je t'aime, ça t'aidera<br>
    Laisse les autres totems Tes drôles de poèmes et viens avec moi
</div>

<div class="verse">
    <div class="singer">[Alexandra]</div>
    On est parti tous les deux, Pour une drôle de vie<br>
    On est toujours amoureux, Et on fait ce qu'on a envie
</div>

<div class="verse">
    <div class="singer">[Maryline]</div>
    <span class="response">Tu as sûrement fait le tour, De ma drôle de vie<br>
    Je te demanderai toujours</span>
</div>

<div class="verse">
    <div class="singer">[Alexandra] [Maryline]</div>
    Et si je te pose des questions <span class="response">(Qu'est-ce que tu diras?)</span><br>
    Et si je te réponds <span class="response">(Qu'est-ce que tu diras?)</span><br>
    Si on parle d'amour <span class="response">(Qu'est-ce que tu diras?)</span>
</div>

<div class="verse">
    <div class="ensemble">[Ensemble]</div>
    Si je sais que tu mènes La vie que tu aimes au fond de moi<br>
    Me donne tous ses emblèmes Me touche quand même du bout de ses doigts<br>
    Même si tu as des problèmes Tu sais que je t'aime, ça t'aidera<br>
    Laisse les autres totems Tes drôles de poèmes et viens avec moi<br><br>
    Et si je sais que tu mènes La vie que tu aimes au fond de moi<br>
    Me donne tous ses emblèmes Me touche quand même du bout de ses doigts<br>
    Même si tu as des problèmes Tu sais que je t'aime, ça t'aidera<br>
    Laisse les autres totems Tes drôles de poèmes et viens avec moi
</div>

<div class="verse vocalise">
    Pa pa la la pa la pa la…….. Da ba da ba da da da da da ba da<br>
    Ouh ! Oh ! Ba da ba da da da Ba da ba da da da, Ouh !<br>
    Da da ba da da ba da da ba da ba da do<br>
    Ba dam bo Dou dou hou hou hou hou hou<br>
    Ba da ba ram ta tam ta da da dam ta da bam<br>
    Da da da dam Da da da dam<br>
    Pa da da dam dam pa dam dam<br>
    Da da da dam Da da da dam Da da da da da dam<br>
    Pam Pam
</div></div>
`,
    },
  },
  {
    id: 6,
    title: "Moi si j'étais Breton",
    artist: "Aioli",
    singers: ["Jean-Michel", "Mathys", "Emmanuel"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F6.%20MOI%20SI%20J'ETAIS%20BRETON.docx?alt=media&token=4dcfc5fe-d96a-4e42-af96-f7420a83fbb9",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: `
      <style>
          .lyrics {
            font-family: Arial, sans-serif;
            margin: 0 auto;
            line-height: 1.6;
          }
          .verse {
            margin: 20px 0;
          }
          .singer {
            font-weight: bold;
            margin-top: 20px;
            font-size: 1.1rem;
          }
          .response {
            font-style: italic;
          }
          .ensemble {
            font-weight: bold;
            margin-top: 20px;
            font-size: 1.1rem;
          }
          .title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
      </style>
      <div class="lyrics">
          <div class="title">Moi si j'étais Breton</div>
          <div class="verse">
    <div class="singer">[Emmanuel]</div>
    Moi, si j'étais breton, je m'appellerais Yvonick<br>
    J'habiterais à Pont-Aven et je boirais du chouchen
</div>

<div class="verse">
    <div class="singer">[Emmanuel + J. Michel]</div>
    Moi, si j'étais breton, je m'appellerais Yvonick<br>
    J'habiterais à Pont-Aven et je boirais du chouchen
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    J'aurais un ciré jaune, des bottes en caoutchouc<br>
    Je mangerais des galettes et je boirais de la godinette
</div>

<div class="verse">
    <div class="singer">[Emmanuel + J. Michel]</div>
    J'aurais un ciré jaune, des bottes en caoutchouc<br>
    Je mangerais des galettes et je boirais de la godinette
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    Et je lève mon verre à Morlaix, à Quiberon
    <div class="singer">[Emmanuel + J. Michel]</div>
    Et je trinque à Lorient, à Ouessant, à Crozon
    <div class="singer">[J. Michel]</div>
    Je me rince le gosier à la gnôle à Paimpol
    <div class="singer">[Emmanuel + J. Michel]</div>
    Et je bois du pommeau
    <div class="singer">[J. Michel]</div>
    Au fin fond de Landernau
    <div class="singer">[Emmanuel + J. Michel]</div>
    Au fin fond de Landernau…. <span class="response">Ye'hed mat</span>
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    Moi, si j'étais breton, j'irais à la pêche à pieds<br>
    J'aurais une marinière et je boirais de la bière
</div>

<div class="verse">
    <div class="singer">[J. Michel + Mathys]</div>
    Moi, si j'étais breton, j'irais à la pêche à pieds<br>
    J'aurais une marinière et je boirais de la bière
</div>

<div class="verse">
    <div class="singer">[Mathys]</div>
    Partout j'irais, je porterais mon drapeau<br>
    Je serais marin et je boirais du bon vin
</div>

<div class="verse">
    <div class="singer">[J. Michel + Mathys]</div>
    Partout j'irais, je porterais mon drapeau<br>
    Je serais marin et je boirais du bon vin
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    Et je lève mon verre à Morlaix, à Quiberon
    <div class="singer">[J. Michel + Mathys]</div>
    Et je trinque à Lorient, à Ouessant, à Crozon
    <div class="singer">[J. Michel]</div>
    Je me rince le gosier à la gnôle à Paimpol
    <div class="singer">[J. Michel + Mathys]</div>
    Et je bois du pommeau
    <div class="singer">[J. Michel]</div>
    Au fin fond de Landernau
    <div class="singer">[J. Michel + Mathys]</div>
    Au fin fond de Landernau…. <span class="response">Ye'hed mat</span>
</div>

<div class="verse">
    <div class="ensemble">Instrumental</div>
</div>

<div class="verse">
    <div class="singer">[Mathys]</div>
    Moi, si j'étais breton, j'écouterais Dan Ar Braz<br>
    Manau, Alan Stivell et je boirais de l'hydromel
</div>

<div class="verse">
    <div class="singer">[J. Michel + Emmanuel]</div>
    Moi si j'étais breton, j'écouterais Dan Ar Braz<br>
    Manau, Alan Stivell et je boirais de l'hydromel
</div>

<div class="verse">
    <div class="singer">[Emmanuel]</div>
    J'aurais un menhir planté dans mon jardin<br>
    Je me laisserais pousser les pâtes et je crierais <span class="response">ye'hed mat</span>
</div>

<div class="verse">
    <div class="singer">[J. Michel + Mathys]</div>
    J'aurais un menhir planté dans mon jardin<br>
    Je me laisserais pousser les pâtes et je crierais ye'hed mat
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    Et je lève mon verre à Morlaix, à Quiberon
    <div class="singer">[Emmanuel + Mathys]</div>
    Et je trinque à Lorient, à Ouessant, à Crozon
    <div class="singer">[J. Michel]</div>
    Je me rince le gosier à la gnôle à Paimpol
    <div class="singer">[Emmanuel + Mathys]</div>
    Et je bois du pommeau
    <div class="singer">[J. Michel]</div>
    Au fin fond de Landernau
    <div class="singer">[Emmanuel + Mathys]</div>
    Au fin fond de Landernau…. <span class="response">Ye'hed mat</span>
</div>

<div class="verse">
    <div class="singer">[J. Michel]</div>
    Moi, si j'étais breton, j'en aurais marre des clichés
    <div class="singer">[Emmanuel]</div>
    Et des cons qui disent qu'on fait que picoler
    <div class="singer">[Mathys]</div>
    À tous ces idiots, je dirais kenavo
    <div class="ensemble">[Ensemble]</div>
    Je prendrais mon biniou et j'irais boire un coup
</div></div>
`,
    },
  },
  {
    id: 7,
    title: "Girl Just Want to Have Fun",
    artist: "Cindy Lauper",
    singers: ["Emerick", "Kylian"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F7.%20GIRLS%20JUST%20WANT%20TO%20HAVE%20FUN.docx?alt=media&token=68f2ea2b-6bea-4512-9897-4c1753e751e6",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F07.%20Girls%20Just%20Wanna%20Have%20Fun%20(Instrumental).mp3?alt=media&token=a1a68c20-daa1-4e42-a621-e21e99af5e8a",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    line-height: 1.6;
}
.verse {
    margin: 20px 0;
}
.singer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">Girls Just Want to Have Fun</div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        I come home in the morning light<br>
        My mother says, "When you gonna live your life right"<br>
        Oh, mama dear, we're not the fortunate ones<br>
        And girls, they wanna have fun<br>
        Oh, girls they wanna have fun
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life ?"<br>
        Oh, daddy dear, you know you're still number one<br>
        But girls, they wanna have fun,<br>
        Oh, girls they wanna have<br>
        That's all they really want…. Some fun<br>
        When the working day is done<br>
        Oh, girls they wanna have fun<br>
        Oh, girls just wanna have fun
    </div>

    <div class="ensemble">
        Girls, they want, wanna have fun<br>
        Girls wanna have
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Some boys take a beautiful girl<br>
        And hide her away from the rest of the world<br>
        I wanna be the one to walk in the sun<br>
        Oh, girls they wanna have fun<br>
        Oh, girls just wanna have<br>
        That's all they really want…. Some fun<br>
        When the working day is done
    </div>

    <div class="ensemble">
        Girls, they want, wanna have fun<br>
        Girls Wanna have
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        They just wanna, They just wanna<br>
        They just wanna, They just wanna<br>
        Girls just wanna have fun
    </div>

    <div class="ensemble">
        They just wanna They just wanna<br>
        They just wanna, They just wanna<br>
        They just wanna, They just wanna
    </div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Oh, girls, girls just wanna have fun,<br>
        When the workin', When the workin' day is done<br>
        Oh, when the workin' day is done<br>
        Oh, girls
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Girls just wanna have fun<br>
        They just wanna, They just wanna<br>
        They just wanna, They just wanna
    </div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Oh, girls, girls just wanna have fun<br>
        Oh, when the workin' day is done<br>
        Oh, girls, girls just wanna have fun
    </div>
</div>`,
    },
  },
  {
    id: 8,
    title: "Animaux Fragiles",
    artist: "Ycare-Zaz",
    singers: ["Nora", "Murielle"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F8.%20ANIMAUX%20FRAGILES.docx?alt=media&token=7314ce28-6599-46dc-9997-69117ae483ba",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F08.%20Animaux%20fragiles%20(Version%20instrumentale).mp3?alt=media&token=fc76023c-5dc7-49e6-97cc-8b3d496ac873",
    isFavorite: true,
    lyrics_html: {
      __html: `
      <style>
.lyrics {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    line-height: 1.6;
}
.verse {
    margin: 20px 0;
}
.singer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.response {
    font-style: italic;
    font-size: 0.9rem;
    margin-left: 20px;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.murielle {
    font-style: italic;
}
</style>

<div class="lyrics">
    <div class="title">Animaux fragiles</div>

    <div class="verse">
        <div class="singer">[Greg]</div>
        Tu sais, je suis pas malheureux<br>
        Sentimental, on peut le dire<br>
        Un peu de buée dans les yeux<br>
        À chacun de mes sourires
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        <span class="murielle">
        Et si cette vie n'était qu'un jeu<br>
        Et si on se moquait de nous<br>
        Pourquoi les gens sont si sérieux<br>
        Si Dieu existe est-ce un fou ?
        </span>
    </div>

    <div class="ensemble">
        Toi et moi<br>
        Des animaux fragiles<br>
        Et cette planète n'est qu'une île<br>
        Elle-même perdue dans les étoiles
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        <span class="murielle">
        Mais on s'imagine une vie facile<br>
        Et puis qu'on vi…vra vieux
        </span>
    </div>

    <div class="verse">
        <div class="singer">[Greg]</div>
        Regard'le soleil brille,<br>
        On est tranquille<br>
        Ma main dans tes cheveux
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        <span class="murielle">
        Entre les rires et la tristesse<br>
        Cette vie nous aura à l'usure
        </span>
    </div>

    <div class="verse">
        <div class="singer">[Greg]</div>
        Faut profiter de sa jeunesse<br>
        Sans jamais détruire son futur….
    </div>

    <div class="ensemble">
        On me dit de bien me tenir<br>
        Que c'est une question d'équilibre<br>
        Pourquoi j'ai pas le souvenir<br>
        Un jour d'avoir été libre<br>
        <br>
        Toi et moi<br>
        Des animaux fragiles<br>
        Et cette planète n'est qu'une île<br>
        Elle-même perdue dans les étoiles
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        <span class="murielle">
        Mais on s'imagine une vie facile<br>
        Et puis qu'on vi…vra vieux
        </span>
    </div>

    <div class="verse">
        <div class="singer">[Greg]</div>
        Regard'le soleil brille<br>
        On est tranquille<br>
        Ma main dans tes cheveux<br>
        <br>
        La nuit tout seul, je me balade<br>
        Mais je n'veux pas t'abandonner
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        <span class="murielle">
        Sache que si moi, je suis malade<br>
        Ce n'est que de t'aimer
        </span>
    </div>

    <div class="ensemble">
        Toi et moi<br>
        Des animaux fragiles<br>
        Et cette planète n'est qu'une île<br>
        Elle-même perdue dans les étoiles<br>
        <br>
        Toi et moi<br>
        Des animaux fragiles<br>
        Et cette planète n'est qu'une île<br>
        Elle-même perdue dans les étoiles<br>
        Mais on s'imagine une vie facile<br>
        Et puis qu'on vivra vieux<br>
        Regard'le soleil brille,<br>
        on est tranquille<br>
        Ma main dans tes cheveux<br>
        <br>
        Ma main dans tes cheveux
    </div>
</div>`,
    },
  },
  {
    id: 9,
    title: "Jamais Content",
    artist: "Allain Souchon",
    singers: ["Brigitte", "Aline"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F9.%20JAMAIS%20CONTENT.docx?alt=media&token=a7bbb317-f5cd-486e-812b-bf62d1fe8d92",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F09.%20Jamais%20content%20(coupe%CC%81).mp3?alt=media&token=0a6d20b9-81c7-409f-a215-e49cc4ed396d",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    line-height: 1.6;
}
.verse {
    margin: 20px 0;
}
.singer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">Jamais content</div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        Elle me dit que j' pleure tout le temps<br>
        Que j'suis comme un tout p'tit enfant<br>
        Qu'aime plus ses jeux, sa vie, sa maman<br>
        Elle dit que j'pleure tout le temps<br>
        Que j'suis carrément méchant<br>
        Jamais content<br>
        Carrément méchant<br>
        Jamais content
    </div>

    <div class="verse">
        <div class="singer">[Nora]</div>
        Déjà mes parents, dans le temps<br>
        Voulaient que j'aille faire le charmant<br>
        Chez des amis d'mon grand-père<br>
        Des pharmaciens, des notaires<br>
        Qui me trouvaient carrément vulgaire<br>
        Très ordinaire<br>
        Carrément vulgaire<br>
        Très ordinaire
    </div>

    <div class="verse">
        <div class="singer">[Brigitte]</div>
        Puis on m'a enrôlé d'office<br>
        À Pau, dans les parachutistes<br>
        Ils voulaient que j'tombe des avions<br>
        Accroché à un champignon<br>
        Je leur ai carrément dit Non<br>
        Pas beau, l'avion<br>
        Carrément dit Non<br>
        Pas beau, l'avion
    </div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        Je m'suis sauvé en Angleterre<br>
        J'faisais le frenchman, super lover<br>
        Je me teignais les cheveux, les sourcils<br>
        Pour être plus brun, pour faire viril<br>
        Carrément débile<br>
        J'trouve pas mon style<br>
        Carrément débile<br>
        J'trouve pas mon style
    </div>

    <div class="verse">
        <div class="singer">[Nora]</div>
        J'ai chopé la mélancolie<br>
        En f'sant des chansons sur mon lit<br>
        Une commande pour chanteur pas bien<br>
        Fallait que j'dise France Américain<br>
        Ça m'a carrément miné<br>
        Tout dégoûté<br>
        Carrément miné<br>
        Tout dégoûté
    </div>

    <div class="verse">
        <div class="singer">[Brigitte]</div>
        Promoteurs, ils voulaient, canailles<br>
        Que j'fasse dessous d'table, homme de paille<br>
        Construire des tours de carton bleu<br>
        Pour qu'les petits garçons mettent leurs jeux<br>
        J'y ai carrément mis le feu<br>
        Bien fait pour eux<br>
        Carrément mis le feu<br>
        Bien fait pour eux
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="ensemble">
        Elle me dit que j'pleure tout le temps<br>
        Que j'suis comme un tout p'tit enfant<br>
        Qu'aime plus ses jeux, sa vie, sa maman<br>
        Elle dit que j'pleure tout le temps<br>
        Que j'suis
    </div>

    <div class="instrumental">Petite pause instrumental</div>

    <div class="ensemble">
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content<br>
        Carrément méchant Jamais content
    </div>
</div>`,
    },
  },
  {
    id: 10,
    title: "Parapluie",
    artist: "Jeck",
    singers: ["Mathys", "Liam"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F10.%20PARAPLUIE.docx?alt=media&token=764d2ed2-945e-4d68-a107-c926c0217646",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    line-height: 1.6;
}
.verse {
    margin: 20px 0;
}
.singer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.echo {
    font-style: italic;
    font-size: 0.9em;
}
</style>

<div class="lyrics">
    <div class="title">Parapluie</div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Matin d'hiver sur le palier<br>
        Tu rentres chez toi<br>
        Le regard froid, les cheveux mouillés<br>
        Tu n't'expliqueras pas<br>
        <br>
        J'ai embrassé tous tes défauts<br>
        J'ai fini par les trouver beau<br>
        Le cri de ton cœur lui sonnait faux<br>
        Comme mes toutes premières compos<br>
        <br>
        Dis-moi, c'est bien nous deux qui avons froissé les draps<br>
        Dis-moi qu'c'est toi et moi
    </div>

    <div class="ensemble">
        Elle me dit qu'elle est fidèle<br>
        Mais elle sort sous la pluie<br>
        J'crois bien qu'j'l'ai vu à l'hôtel lundi soir avec lui<br>
        Elle passe des heures à s'faire belle<br>
        Mais pressée de s'enfuir<br>
        Madame sort toutes les nuits sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Liam]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Mathys]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)
    </div>

    <div class="verse">
        <div class="singer">[Mathys]</div>
        Jardin d'hiver, la fleur est fanée,<br>
        Je ne saurais pas<br>
        Comment te plaire ni comment t'aimer<br>
        Je n'te reconnais pas<br>
        <br>
        Pourquoi tous ces mystères, mais dis-moi à quoi tu joues ?<br>
        J'vis sous l'même toit qu'une étrangère<br>
        Qui s'éloigne jour après jour<br>
        <br>
        Dis-moi, c'est bien nous deux qui avons froissé les draps<br>
        Dis-moi qu'c'est toi et moi
    </div>

    <div class="ensemble">
        Elle me dit qu'elle est fidèle<br>
        Mais elle sort sous la pluie<br>
        J'crois bien qu'j'l'ai vu à l'hôtel lundi soir avec lui<br>
        Elle passe des heures à s'faire belle<br>
        Mais pressée de s'enfuir<br>
        Madame sort toutes les nuits sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Mathys]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Liam]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)
    </div>

    <div class="verse">
        <div class="singer">[Mathys]</div>
        Madame se fout <span class="echo">(Se fout)</span><br>
        De tout <span class="echo">(De tout)</span><br>
        De la pluie dans son cou<br>
        Elle passe de rendez-vous en rendez-vous
    </div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Madame se fout <span class="echo">(Se fout)</span><br>
        De tout <span class="echo">(De tout)</span><br>
        De la pluie dans son cou<br>
        Elle passe de rendez-vous en rendez-vous
    </div>

    <div class="ensemble">
        Elle me dit qu'elle est fidèle<br>
        Mais elle sort sous la pluie<br>
        J'crois bien qu'j'l'ai vu à l'hôtel lundi soir avec lui<br>
        Elle passe des heures à s'faire belle<br>
        Mais pressée de s'enfuir<br>
        Madame sort toutes les nuits sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Liam]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)<br>
        <div class="singer">[Mathys]</div>
        Elle sort sans son parapluie (oh-oh, oh-oh-oh)
    </div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Elle sort sans son parapluie
    </div>

    <div class="verse">
        <div class="singer">[Mathys]</div>
        Elle sort sans son parapluie
    </div>
</div>`,
    },
  },
  {
    id: 11,
    title: "C'est fou comme je t'aime",
    artist: "Foé",
    singers: ["Maxime", "Murielle"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F11.1%20C'EST%20FOU%20COMME%20JE%20T'AIME%20(Sara%20Perche%CC%81).docx?alt=media&token=035f0c6d-bb3e-45be-a91a-07f8a68c46c8",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2Ffoe%CC%81%20instrumentale.mp3?alt=media&token=56eff63d-0cf9-4893-9518-2488da89b9b7",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    line-height: 1.6;
}
.verse {
    margin: 20px 0;
}
.singer {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}
.subtitle {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 1.5rem;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">C'EST FOU COMME JE T'AIME</div>
    <div class="subtitle">(Sara Perché)</div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        J'ai une confession<br>
        C'est fou comme je t'aime<br>
        Une simple émotion<br>
        Qui monte piano piano<br>
        Ta bouche ton gin to<br>
        L'énergie que tu sèmes<br>
        Sur la sono<br>
        C'est fou comme je t'aime
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        Je prie pour q'tu m'vois<br>
        Un regard me suffira<br>
        Pour lever mes dilemmes<br>
        C'est fou comme je t'aime<br>
        Tu n'te soucies pas<br>
        De tous ces yeux qui gênent<br>
        Je veux tout de toi<br>
        C'est fou comme je t'aime
    </div>

    <div class="ensemble">
        Et je vole vole tu sais<br>
        Plus haut que tout et tu me fais voler voler tout près<br>
        De ton cœur de ton palais<br>
        T'es un ange qui me plait<br>
        Si tout s'arrête là et ce soir<br>
        Il restera quoi<br>
        L'amour que j'ai pour toi<br>
        <br>
        Je vole vole tu sais<br>
        Plus haut que tout et tu me fais voler voler tout près<br>
        De ton cœur de ton palais<br>
        T'es un ange qui me plait<br>
        Si tout s'arrête là et<br>
        Ce soir<br>
        Il restera quoi<br>
        L'amour que j'ai pour toi
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        Un monde qui tourne<br>
        Sous le rythme de tes pas<br>
        Un monde qui chante<br>
        Au doux son de la voix
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        C'est tellement étrange<br>
        Je te veux contre moi<br>
        Une nuit en tandem<br>
        C'est fou comme je t'aime
    </div>

    <div class="ensemble">
        Et je vole vole tu sais<br>
        Plus haut que tout et tu me fais voler voler tout près<br>
        De ton cœur de ton palais<br>
        T'es un ange qui me plait<br>
        Si tout s'arrête là et ce soir<br>
        Il restera quoi<br>
        L'amour que j'ai pour toi<br>
        <br>
        Je vole vole tu sais<br>
        Plus haut que tout et tu me fais voler voler tout près<br>
        De ton cœur de ton palais<br>
        T'es un ange qui me plait<br>
        Si tout s'arrête là et ce soir<br>
        Il restera quoi<br>
        L'amour que j'ai pour toi
    </div>
</div>`,
    },
  },
  {
    id: 11,
    title: "Rien que des mots (Ti amo)",
    artist: "Lena Ka - Umberto Tozzi",
    singers: ["Nathan", "Maelle"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F11.2%20RIEN%20QUE%20DES%20MOTS%20(TI%20AMO).docx?alt=media&token=8d1bae3a-3ade-429e-86a9-2331553ef86d",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 11,
    title: "Les Nouveaux Romantiques",
    artist: "Karen Cheryl",
    singers: ["Martine R", "Sophie"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F11.3%20LES%20NOUVEAUX%20ROMANTIQUES.docx?alt=media&token=2fd02cd2-e208-4840-bea6-b5f90d4626d7",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 12,
    title: "Mourir Demain",
    artist: "Obispo",
    singers: ["Emmanuel", "Astrid"],
    duration: 0,
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F12.%20MOURIR%20DEMAIN.docx?alt=media&token=ff13a0a9-1cc8-45b0-b904-074feef0d858",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F12.%20Mourir%20demain%20(Instrumental).mp3?alt=media&token=7d825298-c129-4501-b66c-ab1780bc5a41",
    isFavorite: false,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 13,
    title: "Proud Mary",
    artist: "Tina Turner",
    singers: ["Astrid", "Maxime"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F13.%20PROUD%20MARY%20(Duo).docx?alt=media&token=9b08279b-6acf-41e0-b87a-04a1eeb970c4",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 14,
    title: "Beau",
    artist: "Joseph Kamel - J. Doré",
    singers: ["Emmanuel", "Maelle", "Elfy"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F14.%20BEAU.docx?alt=media&token=12404c1e-8bab-4c0e-8871-61335f757662",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F14.%20Beau%20(Instrumental).mp3?alt=media&token=178a9bc9-a38e-4dd9-88d2-254ea2933c2c",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 15,
    title: "Je suis fou",
    artist: "Soprano - Vianey - Kendji Girac",
    singers: ["Jade", "Ava", "Linoa", "Liam"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F15.%20JE%20SUIS%20FOU.docx?alt=media&token=03bbc0ef-cb9a-44fe-8450-c6d455346e1a",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 16,
    title: "En cloque",
    artist: "Renaud",
    singers: ["Brigitte", "Murielle"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F16.%20EN%20CLOQUE.docx?alt=media&token=ea166e39-dc7b-4596-9ba9-ffeb4de8833c",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F16.%20En%20cloque%20%5BBDFab%20karaoke%5D.mp3?alt=media&token=fbe3d64d-fcbc-4230-8eb0-3971dea833a3",
    isFavorite: false,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 17,
    title: "1987",
    artist: "Calogero",
    singers: ["Emerick", "Kylian"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F17.%201987.docx?alt=media&token=59a9385a-08f7-4d5a-bb31-828c754dd0f1",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F17.%201987%20(Instrumental).mp3?alt=media&token=f05a1efa-1d21-4efc-b6c3-119892c2dcab",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 18,
    title: "Mamy Blue",
    artist: "Nicoletta",
    singers: ["Astrid", "Aline", "Nora", "Wylnie"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F18.%20MAMY%20BLUE.docx?alt=media&token=b8477bd5-2c4f-40cc-ae68-1250310b9e55",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 19,
    title: "Lily",
    artist: "Pierre Perret",
    singers: ["Caroline", "Anne", "Mathys"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F19.%20LILY.docx?alt=media&token=539952b3-1428-49de-b41e-18c13eef77fa",
    instrumental_url: "",
    isFavorite: false,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 20,
    title: "Elisa",
    artist: "Serge Gainsbourg",
    singers: ["Maxime", "Patricia", "Wilnie"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F20.%20E%CC%81LISA.docx?alt=media&token=899e6551-67e8-4b12-9395-c93e7f68fd0a",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 21,
    title: "Gimme Gimme",
    artist: "Abba",
    singers: ["Emmanuel", "Alexandra", "Maryline", "Sophie"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F21.%20GIMME%20GIMME%20GIMME.docx?alt=media&token=58130789-bac4-4fed-a7ae-2d18a1cd3230",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F21.%20Gimme-gimme-gimme%20(Version%20coupe%CC%81e).mp3?alt=media&token=bc1d4de6-c233-4353-a58b-8c172dda5063",
    isFavorite: false,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 22,
    title: "YMCA",
    artist: "Village People",
    singers: ["Maxime", "Jean-Michel", "Nathan", "Grégory"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F22.%20YMCA.docx?alt=media&token=00152f50-1a41-47f4-9ad8-aafa5847820c",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
  {
    id: 23,
    title: "La vie du bon côté",
    artist: "Keen'v",
    singers: ["Tous"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F23.%20LA%20VIE%20DU%20BON%20CO%CC%82TE.docx?alt=media&token=8f6f34b9-a268-4eae-9ecc-e66478c90aa1",
    instrumental_url: "",
    isFavorite: true,
    lyrics_html: {
      __html: ``,
    },
  },
]

export { RAW_SONGS }

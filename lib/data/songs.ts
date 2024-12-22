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
    singers: ["Aline", "Emmanuel", "Maxime"],
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
    singers: ["Nathan", "Nelyan", "Nora", "Jade"],
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
    singers: ["Greg", "Murielle"],
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
    singers: ["Brigitte", "Aline", "Nora"],
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F10.%20Parapluie%20(Insrtrumental).mp3?alt=media&token=41a1111f-fb17-411a-a39a-4db67f5e3607",
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
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F11.%20Foe%CC%81%20-%20C'est%20fou%20comme%20je%20t'aime%20(mix).mp3?alt=media&token=eb8ed3fa-d0f2-4dda-b109-d87216cc455e",
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F11.%20Ti%20amo%20-%20U.Tozzi%20(mix).mp3?alt=media&token=c0178556-75ae-438f-8624-73b29a3f0e72",
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
.italian {
    font-style: italic;
}
.echo {
    font-size: 0.9em;
    margin-left: 20px;
}
</style>

<div class="lyrics">
    <div class="title">RIEN QUE DES MOTS</div>
    <div class="subtitle">(TI AMO)</div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Ti Amo<br>
        Redis-moi<br>
        Ti Amo
        <div class="singer">[Nathan]</div>
        <span class="echo">(Ti Amo) (Ti Amo)</span>
    </div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Garde-moi, Ti Amo
        <div class="singer">[Nathan]</div>
        <span class="echo">(Ti Amo)</span>
    </div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Même si je sais que je ne suis pas ton unique et que tu l'aimes…….<br>
        Aussi Que la vie est……..<br>
        Ainsi<br>
        Ti Amo, c'est………<br>
        Mon cri Entends-moi-même dans le silence dans lequel j'ai plongé ma vie.<br>
        Sans toi<br>
        Je ne serais…….<br>
        Plus moi Je l'envie et………<br>
        Je t'aime Comme l'oiseau déploie ses ailes tu t'envoles vers elle.
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">L'amoré ka letto si fa</span>
        <div class="singer">[Maelle]</div>
        <span class="echo">(Ti Amo) (Ti Amo)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">Rendimi l'atra métà</span>
        <div class="singer">[Maelle]</div>
        <span class="echo">(Ti Amo) (Ti Amo)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">Ogninitorno da lei</span>
        <div class="singer">[Maelle]</div>
        <span class="echo">(Ti Amo)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">Primo maggio, Su coraggio yo<br>
        Ti amo, E kiedo perdono<br>
        Ricordi ki sono<br>
        Apri la porta a un guerriero<br>
        Di carta igienica</span>
    </div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Ti amo de tout mon être<br>
        Mon cœur, mon corps et ma tête<br>
        Je crains toujours tes "peut-être"
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">Dammiil sonno<br>
        Din bambino, ké ta…<br>
        Sognia</span>
        <div class="singer">[Maelle]</div>
        <span class="echo">(Je rêve)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">Cavallié si…<br>
        Gira</span>
        <div class="singer">[Maelle]</div>
        <span class="echo">(Que tu reviennes)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nathan]</div>
        <span class="italian">E un po'di la…<br>
        Voro Fammia bracciareuna donna<br>
        ké stira cantando poi</span>
    </div>

    <div class="verse">
        Ti amo, je t'ai dans la peau<br>
        Je ferais tout ce qu'il faut<br>
        Pour effacer tes défauts<br>
        Toutes ses promesses<br>
        Rien que des mots
    </div>

    <div class="verse">
        <span class="italian">Ti amo e chiedo perdono<br>
        Ricordi chi sono</span><br>
        Ti amo, ti amo, ti amo, ti amo, ti amo
    </div>

    <div class="verse">
        Ti amo de tout mon être<br>
        Mon cœur, mon corps et ma tête<br>
        Je crains toujours tes "peut-être"<br>
        <span class="italian">Dammi il sonno di un bambino</span>
    </div>

    <div class="verse">
        <span class="italian">Che ti sogna (sogna)<br>
        Cavalli e si gira (gira)<br>
        E un po' di lavoro<br>
        Fammi abbracciare una donna che stira cantando e poi</span>
    </div>

    <div class="verse">
        Ti amo, je t'ai dans la peau<br>
        Je ferais tout ce qu'il faut<br>
        Pour effacer tes défauts<br>
        Toutes ses promesses<br>
        Rien que des mots
    </div>

    <div class="verse">
        Ti amo, ti amo, ti amo, ti amo, ti amo<br>
        Ti amo, ti amo, ti amo, ti amo, ti amo<br>
        Ti amo, ti amo, ti amo, ti amo, ti amo<br>
        Ti amo, ti amo, ti amo, ti amo, ti amo<br>
        Ti amo
    </div>
</div>`,
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F11.%20Nouveaux%20romantiques%20(mix).mp3?alt=media&token=6e08c053-88c5-452c-ac8a-e02e09aa52b3",
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
.martine {
    font-style: italic;
}
.echo {
    margin-left: 20px;
}
</style>

<div class="lyrics">
    <div class="title">Les Nouveaux Romantiques</div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        <span class="martine">
        Il a l'émotion<br>
        De notre génération<br>
        Il a des chansons<br>
        Et le courage de Danton<br>
        Pour lui je peux faire<br>
        L'Atlantique en solitaire<br>
        Sa vie est la mienne<br>
        Et c'est pour ça que je l'aime
        </span>
    </div>

    <div class="verse">
        <div class="singer">[Sophie]</div>
        On est en romance<br>
        Cœur contre cœur bien branché<br>
        On est en fréquence<br>
        Sur la ligne de nos idées<br>
        On est en instance<br>
        De vouloir tout partager<br>
        Aucun théorème<br>
        Et c'est pour ça que l'on s'aime
    </div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        <span class="martine">On s'écrit téléphonique</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Nous les nouveaux romantiques</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">Actuel et nostalgique</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Étonnamment romantique</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">Dans les boites à musique</span>
    </div>

    <div class="ensemble">
        Les Roméos s'abandonnent<br>
        C'est triste Vérone<br>
        J'aime l'amour que tu me donnes
    </div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        <span class="martine">Boul'vard périphérique</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Sur nos motos héroïques</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">Symphonie mécanique</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Nous les nouveaux romantiques</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">C'est un look un physique</span>
    </div>

    <div class="ensemble">
        Que Roméo me pardonne<br>
        C'est fini Vérone<br>
        laisse tomber y a plus personne
    </div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        <span class="martine">
        La dolce vita<br>
        C'est se retrouver chez nous<br>
        La romantica<br>
        C'est avec toi jusqu'au bout
        </span>
    </div>

    <div class="verse">
        <div class="singer">[Sophie]</div>
        La passionnatta<br>
        C'est les aveux les plus doux<br>
        Aucun théorème<br>
        Et c'est pour ça que l'on s'aime
    </div>

    <div class="verse">
        <div class="singer">[Martine R]</div>
        <span class="martine">On s'écrit téléphonique</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Nous les nouveaux romantiques</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">Actuel et nostalgie</span><br>
        <div class="singer">[Sophie]</div>
        <span class="echo">Etonnamment romantique</span><br>
        <div class="singer">[Martine R]</div>
        <span class="martine">Dans les boites à musique</span>
    </div>

    <div class="ensemble">
        Les Roméos s'abandonnent<br>
        C'est triste Vérone<br>
        J'aime l'amour que tu me donnes
    </div>
</div>`,
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
.astrid {
    font-style: italic;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
.duet {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}
.duet-part {
    flex: 1;
}
</style>

<div class="lyrics">
    <div class="title">Mourir demain</div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        Il y a ceux qui prendraient un avion<br>
        D'autres qui s'enfermeraient chez eux,<br>
        Les yeux fermés<br>
        Toi, qu'est-ce que tu f'rais ?<br>
        Toi, qu'est-ce que tu ferais ?
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        <span class="astrid">
        Il y en a qui voudrait revoir la mer<br>
        D'autres qui voudraient encore faire l'amour,<br>
        Une dernière fois<br>
        Toi, tu ferais quoi ?<br>
        Et toi, tu ferais quoi ?
        </span>
    </div>

    <div class="ensemble">
        Si on devait…. Mourir demain….<br>
        Qu'est-ce qu'on ferait de plus ?<br>
        Qu'est-ce qu'on ferait de moins ?<br>
        Si on devait…. Mourir demain….
    </div>

    <div class="duet">
        <div class="duet-part">
            <div class="singer">[Emmanuel]</div>
            Moi, je t'aimerais….
        </div>
        <div class="duet-part">
            <div class="singer">[Astrid]</div>
            <span class="astrid">Moi, je t'aimerai ai ais….</span>
        </div>
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        Je t'aimerais<br>
        Il y en a qui ref'raient leur passé<br>
        Certains qui voudraient boire et faire la fête<br>
        Jusqu'au matin<br>
        D'autres qui prieraient...<br>
        D'autres qui prieraient...
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        <span class="astrid">
        Ceux qui s'en fichent et se donn'raient du plaisir<br>
        Et d'autres qui voudraient encore partir…<br>
        Avant la fin…<br>
        Toi, qu'est-ce que tu f'rais ?<br>
        Et toi, qu'est-ce que tu ferais ?
        </span>
    </div>

    <div class="ensemble">
        Si on devait…. Mourir demain….<br>
        Qu'est-ce qu'on ferait de plus ?<br>
        Qu'est-ce qu'on ferait de moins ?<br>
        Si on devait…. Mourir demain….
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel] [Astrid]</div>
        Moi, Je t'aimerais…. <span class="astrid">Moi, Je t'aimerais….</span>
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel] [Astrid]</div>
        <span class="astrid">Moi, je t'aimerai ai ai…ais… Je t'aimerais….</span>
    </div>

    <div class="ensemble">
        Oh oh oh !<br>
        Oh oh oh !<br>
        Oh oh oh !<br>
        Oh oh oh oh !
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        <span class="astrid">Et toi, dis-moi, est-ce que tu m'aimeras ?</span>
    </div>

    <div class="ensemble">
        Jusqu'à demain et tous les jours d'après<br>
        Que rien, non rien, ne s'arrêtera jamais<br>
        Si on devait…. Mourir demain….
    </div>

    <div class="duet">
        <div class="duet-part">
            <div class="singer">[Emmanuel]</div>
            Moi, Je t'aimerais….
        </div>
        <div class="duet-part">
            <div class="singer">[Astrid]</div>
            <span class="astrid">Moi, Je t'aimerais….</span>
        </div>
    </div>

    <div class="instrumental">Musique</div>

    <div class="ensemble">
        Est-ce qu'on ferait, du mal, du bien….<br>
        Si on avait jusqu'à demain pour vivre<br>
        Tout ce qu'on a rêvé (à l'unisson)<br>
        Si on devait…. Mourir demain….
    </div>

    <div class="duet">
        <div class="duet-part">
            <div class="singer">[Emmanuel]</div>
            Moi, Je t'aimerais….
        </div>
        <div class="duet-part">
            <div class="singer">[Astrid]</div>
            <span class="astrid">Moi, Je t'aimerais….</span>
        </div>
    </div>

    <div class="verse">
        <div class="singer">[Emmanuel]</div>
        <span class="astrid">Je t'aimerai ai ai ai ai ais…..</span>
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        <span class="astrid">Je t'aimerais</span>
    </div>
</div>`,
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F13.%20Proud%20Mary%20(coupe%CC%81e).mp3?alt=media&token=be21f9ca-7f03-4ac1-807c-edfefbbd6913",
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
.backing {
    font-style: italic;
    font-size: 0.9em;
    margin-left: 20px;
}
.exclamation {
    font-style: italic;
}
.chant {
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
}
</style>

<div class="lyrics">
    <div class="title">PROUD MARY</div>

    <div class="chant">
        ROLLING.... ROLLING..... ROLLING ON THE RIVER
    </div>

    <div class="verse">
        <div class="singer">[ASTRID/MAXIME]</div>
        Left a good job in the city<br>
        Working for the man every night and day<br>
        And I never lost one minute of sleeping<br>
        Worrying 'bout the way that things might have been<br>
        <br>
        Big wheel keep on turning<br>
        Proud Mary keep on burning<br>
        And we're rolling, Rolling yeah<br>
        Rolling on the river<br>
        We're rolling, Rolling yeah<br>
        Rolling on the river.......
    </div>

    <div class="instrumental">Instrumental rapide</div>

    <div class="verse">
        <div class="singer">[ASTRID]</div>
        Left a good job in the city<br>
        Working for the man every night and day<br>
        And I never lost one minute of sleeping<br>
        Worrying 'bout the way that things might have been<br>
        <br>
        Big wheel keep on turning<br>
        Proud Mary keep on burning<br>
        And we're rolling, Rolling yeah<br>
        Rolling on the river........<br>
        we're rolling, Rolling yeah<br>
        Rolling on the river........
    </div>

    <div class="verse">
        <div class="chant">Dou dou dou dou dou dou dou dou dou dou dou</div>
        <span class="exclamation">Alright !</span>
    </div>

    <div class="verse">
        Oh ! Cleaned a lot of plates in Memphis<br>
        Ya know I pumped a lot of 'tane down in New Orleans<br>
        But I never saw the good side of the city<br>
        Until I hitched a ride on the riverboat queen
    </div>

    <div class="verse">
        <div class="singer">[ASTRID / MAXIME]</div>
        Big wheel keep on turning <span class="backing">(Turning)</span><br>
        Proud Mary keep on burning <span class="backing">(Burning)</span><br>
        And we're rolling <span class="backing">(Rolling)</span><br>
        Rolling yeah <span class="backing">(Rolling)</span><br>
        Rolling on the river <span class="backing">(Rolling on the river)</span><br>
        I Said we're rolling <span class="backing">(Rolling)</span><br>
        Rolling yeah <span class="backing">(Rolling)</span><br>
        Rolling on the river <span class="backing">(Rolling on the river)</span>
    </div>

    <div class="verse">
        <div class="chant">Dou dou dou dou dou dou dou dou dou dou dou</div>
        <span class="exclamation">Alright !</span>
    </div>

    <div class="verse">
        Rolling, Rolling, Rolling on the river<br>
        I said rolling, Rolling, Rolling on the river<br>
        Rolling, Rolling, Rolling on the river<br>
        Rolling, Rolling, Rolling on the river<br>
        Yeaaaaaaah...... Uh-huh
    </div>
</div>`,
    },
  },
  {
    id: 14,
    title: "Beau",
    artist: "Joseph Kamel - Julien Doré",
    singers: ["Emmanuel", "Maelle", "Elfy"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F14.%20BEAU.docx?alt=media&token=12404c1e-8bab-4c0e-8871-61335f757662",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F14.%20Beau%20(Instrumental).mp3?alt=media&token=178a9bc9-a38e-4dd9-88d2-254ea2933c2c",
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
    color: #fff;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
</style>

<div class="lyrics">
    <div class="title">Beau</div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Assis sur le trottoir la soirée n'est pas belle<br>
        Il est sûrement trop tard pour qu'elle prenne mon appel<br>
        Je laisserai un message pour avoir des nouvelles<br>
        Elle l'écoutera tout bas et le gardera pour elle
    </div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Cette nuit j'suis dans ma vie, elle en est tellement loin<br>
        Ses yeux rivés sur lui et sa peau sous ses mains<br>
        Assis sur le trottoir, c'est plus du tout pareil<br>
        Ce soir, j'envie celui qui veillera son réveil
    </div>

    <div class="ensemble">
        <div class="singer">[Emerick]</div>
        Si tu savais comme c'est beau<br>
        <div class="singer">[Elfy]</div>
        Si tu voyais comme c'est beau<br>
        <div class="singer">[Maelle]</div>
        J'ai vu son reflet dans l'eau<br>
        <div class="singer">[Ensemble]</div>
        Si tu savais comme c'est beau
    </div>

    <div class="verse">
        <div class="singer">[Elfy]</div>
        Assise en face de moi, elle me regarde à peine<br>
        Quelque chose dans sa voix sonne comme un cœur qui saigne<br>
        Elle reçoit ce message qui soudain la rend belle<br>
        La lumière de l'écran, le sourire qu'il révèle
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Cette nuit elle pense à lui, elle dit qu'elle n'y peut rien<br>
        J'me bats contre un souvenir en lui tenant la main<br>
        Assise en face de moi, c'est plus du tout pareil<br>
        Ce soir, j'envie celui qui lui manque au réveil
    </div>

    <div class="ensemble">
        <div class="singer">[Emerick]</div>
        Si tu savais comme c'est beau<br>
        <div class="singer">[Elfy]</div>
        Si tu voyais comme c'est beau<br>
        <div class="singer">[Maelle]</div>
        J'ai vu son reflet dans l'eau<br>
        <div class="singer">[Ensemble]</div>
        Si tu savais comme c'est beau
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Elle a laissé son cœur entre nous<br>
        Entre nous et le reste
    </div>

    <div class="verse">
        <div class="singer">[Elfy]</div>
        Elle a laissé son cœur à genoux<br>
        Sur le sol, des promesses
    </div>

    <div class="verse">
        <div class="singer">[Maelle]</div>
        Elle a laissé son cœur entre nous<br>
        Elle nous laisse le pire et le reste elle s'en fout
    </div>

    <div class="ensemble">
        <div class="singer">[Emerick]</div>
        Si tu savais comme c'est beau<br>
        <div class="singer">[Elfy]</div>
        Si tu voyais comme c'est beau<br>
        <div class="singer">[Maelle]</div>
        J'ai vu son reflet dans l'eau<br>
        <div class="singer">[Ensemble]</div>
        Si tu savais comme c'est beau<br>
        Si tu savais comme c'est beau<br>
        Si tu voyais comme c'est beau
    </div>
</div>`,
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
    color: #fff;
}
.ensemble {
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.duet {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}
.duet-part {
    flex: 1;
}
.finale {
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">Je suis fou</div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Certains pensaient qu'ils étaient seuls<br>
        Abandonnés, là, sur le seuil<br>
        On veut changer tout ça mais Oh-là-là
    </div>

    <div class="verse">
        <div class="singer">[Jade]</div>
        Certains voudraient qu'on se déchire<br>
        Pour des billets, pour un empire<br>
        On veut changer tout ça mais Oh-là-là<br>
        Oh-là-là
    </div>

    <div class="verse">
        <div class="singer">[Ava]</div>
        Et toi ! Qui a troqué le "Je" contre le "Nous"<br>
        Qui donnerait le monde aux sans-le-sou<br>
        Ici-bas, tu es fou
    </div>

    <div class="verse">
        <div class="singer">[Linoa]</div>
        Et toi ! Qui tends la main vers celui qui n'a rien<br>
        Sans en vouloir à celui qui a tout<br>
        Si pour ça, tu es fou
    </div>

    <div class="ensemble">
        Je suis fou<br>
        Je suis fou<br>
        Je suis fou
    </div>

    <div class="verse">
        <div class="singer">[Linoa]</div>
        Certains pensaient qu'ils dérangeaient<br>
        Trop différents, trop à côté<br>
        On veut changer tout ça mais oh-là-là
    </div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Et oublie les gens qui nous séparent<br>
        Il est temps qu'on se répare<br>
        Que tous les fous se préparent<br>
        Sur la ligne de départ
    </div>

    <div class="verse">
        <div class="singer">[Jade]</div>
        Parlez pas de complot<br>
        Et l'autre, et l'autre, il a bon dos<br>
        On va déjà se changer soi, oh-là-là
    </div>

    <div class="verse">
        <div class="singer">[Ava]</div>
        Et toi ! Qui a troqué le "Je" contre le "Nous"<br>
        Qui donnerait le monde aux sans-le-sou<br>
        Ici-bas, tu es fou
    </div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Et toi ! Qui tends la main vers celui qui n'a rien<br>
        Sans en vouloir à celui qui a tout<br>
        Si pour ça, tu es fou
    </div>

    <div class="ensemble">
        Je suis fou<br>
        Je suis fou<br>
        Je suis fou
    </div>

    <div class="duet">
        <div class="duet-part">
            <div class="singer">[Liam + Ava]</div>
            On va se changer soi
        </div>
        <div class="duet-part">
            <div class="singer">[Jade + Linoa]</div>
            On va se changer
        </div>
    </div>

    <div class="verse">
        <div class="singer">[Liam]</div>
        Et toi ! Qui a troqué le "Je" contre le "Nous"
    </div>

    <div class="verse">
        <div class="singer">[Jade]</div>
        Qui donnerait le monde aux sans-le-sou<br>
        Ici-bas, tu es fou
    </div>

    <div class="verse">
        <div class="singer">[Ava]</div>
        Et toi ! Qui tends la main vers celui qui n'a rien
    </div>

    <div class="verse">
        <div class="singer">[Linoa]</div>
        Sans en vouloir à celui qui a tout<br>
        Si pour ça, tu es fou
    </div>

    <div class="ensemble">
        Je suis fou<br>
        Je suis fou<br>
        Je suis fou
    </div>

    <div class="duet">
        <div class="duet-part">
            <div class="singer">[Liam + Ava]</div>
            On va se changer soi
        </div>
        <div class="duet-part">
            <div class="singer">[Jade + Linoa]</div>
            On va se changer
        </div>
    </div>

    <div class="ensemble">
        <div class="finale">Je suis fou !!!</div>
    </div>
</div>`,
    },
  },
  {
    id: 16,
    title: "En cloque",
    artist: "Renaud",
    singers: ["Brigitte", "Murielle", "Martine B"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F16.%20EN%20CLOQUE.docx?alt=media&token=ea166e39-dc7b-4596-9ba9-ffeb4de8833c",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F16.%20En%20cloque%20%5BBDFab%20karaoke%5D.mp3?alt=media&token=fbe3d64d-fcbc-4230-8eb0-3971dea833a3",
    isFavorite: false,
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
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
.ensemble {
    font-weight: bold;
    text-align: center;
    font-size: 1.1rem;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">En cloque</div>

    <div class="verse">
        <div class="singer">[Brigitte]</div>
        Elle a mis sur l'mur, au d'ssus du berceau<br>
        Une photo d'Arthur Rimbaud<br>
        Vec ses ch'veux en brosse, elle trouve qu'il est beau<br>
        Dans la chambre du gosse, bravo !
    </div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        Déjà les p'tits anges sur le papier teint<br>
        J'trouvais ça étrange, j'dis rien<br>
        Elles me font marrer ses idées loufoques<br>
        Depuis qu'elle est en cloque
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        Elle s'réveille la nuit, veut bouffer des fraises<br>
        Elle a des envies balèzes<br>
        Moi j'suis aux p'tits soins, je m'défonce en huit<br>
        Pour qu'elle manque de rien ma p'tite
    </div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        C'est comme si je pissais dans un violoncelle<br>
        Comme si j'existais plus pour elle<br>
        Je m'retrouve planté, tout seul dans mon froc<br>
        Depuis qu'elle est en cloque
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        Le soir elle tricotte en buvant d'la verveine<br>
        Moi j'démelle ses p'lottes de laine<br>
        Elle use les miroirs à s'regarder d'dans<br>
        A s'trouver bizarre, tout l'temps
    </div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        J'lui dis qu'elle est belle comme un fruit trop mûr<br>
        Elle croit qu'je fous d'elle, c'est sûr<br>
        Faut bien dire c'qui est, moi aussi j'débloque<br>
        Depuis qu'elle est en cloque
    </div>

    <div class="verse">
        <div class="singer">[Brigitte]</div>
        Faut qu'j'retire mes grolles quand j'rentre dans la chambre<br>
        Du p'tit rossignol qu'elle couve<br>
        C'est qu'son p'tit bonhomme qu'arrive en décembre<br>
        Elle le protège comme une louve
    </div>

    <div class="verse">
        <div class="singer">[Murielle]</div>
        Même le chat pépère elle en dit du mal<br>
        Sous prétexte qu'y perd ses poils<br>
        Elle veut plus l'voir traîner autour du paddock<br>
        Depuis qu'elle est en cloque
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Martine B]</div>
        Quand j'promène mes mains d'l'autre côté d'son dos<br>
        J'sens comme des coups d'poings, ça bouge<br>
        J'lui dis "t'es un jardin, une fleur, un ruisseau"<br>
        Alors elle devient toute rouge
    </div>

    <div class="ensemble">
        Parfois c'qui m'désole, c'qui m'fait du chagrin<br>
        Quand je r'garde son ventre et l'mien<br>
        C'est qu'même si j'devenais pédé comme un phoque<br>
        Moi j's'rai jamais en cloque
    </div>
</div>`,
    },
  },
  {
    id: 17,
    title: "1987",
    artist: "Calogero",
    singers: ["Emerick", "Kylian", "Lou"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F17.%201987.docx?alt=media&token=59a9385a-08f7-4d5a-bb31-828c754dd0f1",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F17.%201987%20(Instrumental).mp3?alt=media&token=f05a1efa-1d21-4efc-b6c3-119892c2dcab",
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
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
.ensemble {
    font-weight: bold;
    text-align: center;
    font-size: 1.1rem;
    margin: 20px 0;
    color: #fff;
}
</style>

<div class="lyrics">
    <div class="title">1987</div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Tu t'souviens ?<br>
        Les couleurs sur les baskets<br>
        Les crayons dans les cassettes<br>
        Je rembobine,<br>
        Tu t'souviens<br>
        Tous ces rêves plein nos disquettes<br>
        À Paris c'était les States….<br>
        1987
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Il y a certains jours où je reprends mon skate<br>
        Et je vais faire un tour en 1987…<br>
        Il y a certains jours dans lesquels je me jette<br>
        Et je suis de retour en 1987…<br>
        Tu sais, de tous ces jours,<br>
        Y a rien que je regrette<br>
        Mais parfois je retourne en 1987….<br>
        En 87
    </div>

    <div class="verse">
        <div class="singer">[Lou]</div>
        Tu t'souviens ?<br>
        Les survêt et les houpettes<br>
        Sabrina et 7 sur 7<br>
        Dans la cuisine c'était rien<br>
        Que douze mois sur la planète<br>
        L'URSS, INXS<br>
        On chantait "I want your sex"
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Il y a certains jours où je reprends mon skate<br>
        Et je vais faire un tour en 1987…
    </div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Il y a certains jours dans lesquels je me jette<br>
        Et je suis de retour en 1987…
    </div>

    <div class="verse">
        <div class="singer">[Lou]</div>
        Tu sais, de tous ces jours,<br>
        Y a rien que je regrette<br>
        Mais parfois je retourne en 1987….<br>
        En '87
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        Tu verras bien qu'un jour<br>
        Une chanson dans la tête<br>
        Tu l'auras à ton tour, ton 1987…
    </div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Tu verras bien qu'un jour<br>
        Une chanson dans la tête<br>
        Tu auras à ton tour ton 1987…<br>
        C'est tout ce que je te souhaite
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Lou]</div>
        Tu auras à ton tour ton 1987…<br>
        C'est tout ce que je te souhaite
    </div>

    <div class="instrumental">Pause instrumental</div>

    <div class="verse">
        <div class="singer">[Kylian]</div>
        Tu auras à ton tour ton 1987…
    </div>

    <div class="verse">
        <div class="singer">[Emerick]</div>
        C'est tout ce que je te souhaite
    </div>

    <div class="instrumental">Pause instrumental</div>

    <div class="verse">
        <div class="singer">[Lou]</div>
        Tu auras à ton tour ton 1987…
    </div>

    <div class="ensemble">
        Tu t'souviens ?
    </div>
</div>`,
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F18.%20Mamy%20Blue%20(Version%20instrumentale).mp3?alt=media&token=bbd6ebdd-21e4-473e-ac6a-aa97e0b026eb",
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
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.chorus {
    margin: 20px 0;
}
.echo {
    margin-left: 20px;
    font-style: italic;
}
.finale {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 20px 0;
}
</style>

<div class="lyrics">
    <div class="title">Mamy Blue</div>

    <div class="chorus">
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue<br>
        <div class="singer">[Astrid]</div>
        Oh mamy, mamy<br>
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue<br>
        <div class="singer">[Astrid]</div>
        Oh mamy, mamy blue<br>
        Oh mamy, Oh mamy, mamy blue Oh mamy blue<br>
        <div class="singer">[Astrid]</div>
        Où es-tu mamy?<br>
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        Je suis partie un soir d'été <span class="echo">(Oh mamy)</span><br>
        Sans dire un mot, sans t'embrasser <span class="echo">(Oh mamy)</span><br>
        Sans un regard sur le passé, Le passé<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="verse">
        <div class="singer">[Nora]</div>
        Dès que j'ai franchi la frontière <span class="echo">(Oh mamy)</span><br>
        Le vent soufflait plus fort qu'hier <span class="echo">(Oh mamy)</span><br>
        Quand j'étais près de toi ma mère, Oh ma mère<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="chorus">
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue<br>
        <div class="singer">[Astrid]</div>
        Oh mamy, mamy blue<br>
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue
    </div>

    <div class="verse">
        <div class="singer">[Wilnie]</div>
        Et aujourd'hui je te reviens <span class="echo">(Oh mamy)</span><br>
        Et, j'ai refait tout le chemin <span class="echo">(Oh mamy)</span><br>
        Qui m'avait entraînée si loin, Oh si loin<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="verse">
        <div class="singer">[Aline]</div>
        Tu n'es plus là pour me sourire <span class="echo">(Oh mamy)</span><br>
        Me réchauffer, me recueillir <span class="echo">(Oh mamy)</span><br>
        Et je n'ai plus qu'à repartir, Repartir<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="chorus">
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue<br>
        <div class="singer">[Astrid]</div>
        Oh mamy, mamy blue<br>
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue
    </div>

    <div class="verse">
        <div class="singer">[Astrid]</div>
        La maison a fermé ses yeux <span class="echo">(Oh mamy)</span><br>
        Le chat et les chiens sont très vieux <span class="echo">(Oh mamy)</span><br>
        <div class="singer">[Nora]</div>
        Et ils viennent me dire adieu, Adieu<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="verse">
        <div class="singer">[Wilnie]</div>
        Je ne reviendrai plus jamais <span class="echo">(Oh mamy)</span><br>
        <div class="singer">[Aline]</div>
        Dans ce village que j'aimais <span class="echo">(Oh mamy)</span><br>
        Où tu reposes à tout jamais, Désormais<br>
        <span class="echo">(Oh mamy… Blue)</span>
    </div>

    <div class="finale">
        <div class="singer">[Astrid]</div>
        Oh mamy, Oh mamy, mamy blue, Oh mamy blue <span class="echo">(Oh mamy, mamy)</span><br>
        Oh mamy, <span class="echo">(Oh mamy)</span><br>
        Oh mamy, mamy blue Oh mamy blue <span class="echo">(Oh mamy, mamy)</span><br>
        Oh mamy, Oh mamy, mamy blue Oh mamy blue <span class="echo">(Où es-tu mamy blue?)</span><br>
        Oh mamy <span class="echo">(Oh mamy, Oh mamy, mamy blue, Oh mamy blue)</span><br>
        Oh mamy, mamy, mamy<br>
        Oh mamy, <span class="echo">(Oh mamy)</span><br>
        Oh mamy, mamy blue Oh mamy blue<br>
        Oh mamy, mamy blue yeah<br>
        Oh mamy, Oh mamy mamy blue Oh mamy <span class="echo">(Oh mamy, Oh mamy, mamy……)</span><br>
        Bluueee!
    </div>
</div>`,
    },
  },
  {
    id: 19,
    title: "Lily",
    artist: "Pierre Perret",
    singers: ["Caroline", "Anne", "Elfy"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F19.%20LILY.docx?alt=media&token=539952b3-1428-49de-b41e-18c13eef77fa",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F19.%20Lily.mp3?alt=media&token=7f532fbe-5d7b-442e-9c9f-94f0bb88207a",
    isFavorite: false,
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
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.ensemble {
    font-weight: bold;
    font-style: italic;
    margin: 20px 0;
    color: #fff;
}
</style>

<div class="lyrics">
    <div class="title">Lily</div>

    <div class="verse">
        <div class="singer">[Elfy]</div>
        On la trouvait plutôt jolie, Lily<br>
        Elle arrivait des Somalies, Lily<br>
        Dans un bateau plein d'émigrés<br>
        Qui venaient tous de leur plein gré<br>
        Vider les poubelles à Paris
    </div>

    <div class="verse">
        <div class="singer">[Caroline]</div>
        Elle croyait qu'on était égaux, Lily<br>
        Au pays d'Voltaire et d'Hugo, Lily<br>
        Mais, pour Debussy, en revanche<br>
        Il faut deux noires pour une blanche<br>
        Ça fait un sacré distinguo
    </div>

    <div class="ensemble">
        Elle aimait tant la liberté, Lily<br>
        Elle rêvait de fraternité, Lily<br>
        Un hôtelier, rue Secrétan<br>
        Lui a précisé, en arrivant<br>
        Qu'on ne recevait que des Blancs
    </div>

    <div class="verse">
        <div class="singer">[Anne]</div>
        Elle a déchargé des cageots, Lily<br>
        Elle s'est tapée les sales boulots, Lily<br>
        Elle crie pour vendre des choux-fleurs<br>
        Dans la rue, ses frères de couleur<br>
        L'accompagnent au marteau-piqueur
    </div>

    <div class="verse">
        <div class="singer">[Caroline]</div>
        Et quand on l'appelait Blanche-Neige, Lily<br>
        Elle se laissait plus prendre au piège, Lily<br>
        Elle trouvait ça très amusant<br>
        Même s'il fallait serrer les dents<br>
        Ils auraient été trop contents
    </div>

    <div class="ensemble">
        Elle aima un beau blond frisé, Lily<br>
        Qui était tout prêt à l'épouser, Lily<br>
        Mais, la belle-famille lui dit<br>
        "Nous n'sommes pas racistes pour deux sous…<br>
        Mais on veut pas de ça chez nous"
    </div>

    <div class="verse">
        <div class="singer">[Elfy]</div>
        Elle a essayé l'Amérique, Lily<br>
        Ce grand pays démocratique, Lily<br>
        Elle aurait pas cru sans le voir<br>
        Que la couleur du désespoir<br>
        Là-bas, aussi ce fût le noir
    </div>

    <div class="verse">
        <div class="singer">[Caroline]</div>
        Mais, dans un meeting à Memphis, Lily<br>
        Elle a vu Angela Davis, Lily<br>
        Qui lui dit "viens, ma petite sœur"<br>
        "En s'unissant, on a moins peur"<br>
        "Des loups qui guettent le trappeur"
    </div>

    <div class="ensemble">
        Et c'est pour conjurer sa peur, Lily<br>
        Qu'elle lève aussi un poing rageur, Lily<br>
        Au milieu de tous ces gugus<br>
        Qui foutent le feu aux autobus<br>
        Interdits aux gens de couleur
    </div>

    <div class="verse">
        <div class="singer">[Anne]</div>
        Mais, dans ton combat quotidien, Lily<br>
        Tu connaîtras un type bien, Lily<br>
        Et l'enfant qui naîtra, un jour<br>
        Aura la couleur de l'amour<br>
        Contre laquelle on ne peut rien
    </div>

    <div class="ensemble">
        On la trouvait plutôt jolie, Lily<br>
        Elle arrivait des Somalies, Lily<br>
        Dans un bateau plein d'émigrés<br>
        Qui venaient tous de leur plein gré<br>
        Vider les poubelles à Paris
    </div>
</div>`,
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F20.%20Elisa%20%20%5BBDFab%20karaoke%5D.mp3?alt=media&token=27972fcb-bd3a-494b-817c-ecb1e72f881a",
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
    color: #fff;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}
.instrumental {
    text-align: center;
    font-style: italic;
    margin: 20px 0;
}
.ensemble {
    font-weight: bold;
    font-style: italic;
    margin: 20px 0;
    color: #fff;
}
</style>

<div class="lyrics">
    <div class="title">Élisa</div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        Elisa, Elisa, Elisa, saute-moi au cou<br>
        Elisa, Elisa, Elisa, cherche-moi des poux<br>
        Enfonce bien tes ongles<br>
        Et tes doigts délicats<br>
        Dans la jungle<br>
        De mes cheveux, Lisa
    </div>

    <div class="verse">
        <div class="singer">[Patricia]</div>
        Elisa, Elisa, Elisa, saute-moi au cou<br>
        Elisa, Elisa, Elisa, cherche-moi des poux<br>
        Fais-moi quelques anglaises<br>
        Et la raie au milieu<br>
        On a treize<br>
        Quatorze ans à nous deux
    </div>

    <div class="verse">
        <div class="singer">[Wilnie]</div>
        Elisa, Elisa, Elisa, les autres on s'en fout<br>
        Elisa, Elisa, Elisa rien que toi, moi, nous<br>
        Tes vingt ans, mes quarante<br>
        Si tu crois que cela<br>
        Me tourmente<br>
        Ah non vraiment, Lisa
    </div>

    <div class="instrumental">Instrumental</div>

    <div class="verse">
        <div class="singer">[Maxime]</div>
        Elisa, Elisa, Elisa saute-moi au cou<br>
        Elisa, Elisa, Elisa, cherche-moi des poux<br>
        Enfonce bien tes ongles<br>
        Et tes doigts délicats<br>
        Dans la jungle<br>
        De mes cheveux, Lisa
    </div>

    <div class="ensemble">
        Elisa, Elisa, Elisa saute-moi au cou<br>
        Elisa, Elisa, Elisa, cherche-moi des poux<br>
        Enfonce bien tes ongles<br>
        Et tes doigts délicats<br>
        Dans la jungle<br>
        De mes cheveux, Lisa
    </div>
</div>`,
    },
  },
  {
    id: 21,
    title: "Gimme Gimme",
    artist: "Abba",
    singers: ["Lou", "Alexandra", "Maryline", "Sophie"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F21.%20GIMME%20GIMME%20GIMME.docx?alt=media&token=58130789-bac4-4fed-a7ae-2d18a1cd3230",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F21.%20Gimme-gimme-gimme%20(Version%20coupe%CC%81e).mp3?alt=media&token=bc1d4de6-c233-4353-a58b-8c172dda5063",
    isFavorite: false,
    lyrics_html: {
      __html: `<style>
.lyrics {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
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
.instrumental {
  font-style: italic;
  margin: 15px 0;
}
</style>

<div class="lyrics">
  <div class="title">Gimme Gimme Gimme</div>

  <div class="instrumental">Long Instrumental</div>

  <div class="ensemble">Ensemble: Half-past twelve</div>

  <div class="singer">Lou:</div>
  <div class="verse">And I'm watching the late show in my flat all alone<br>
  How I hate to spend the evening on my own</div>

  <div class="ensemble">Ensemble: Autumn winds</div>

  <div class="singer">Alexandra:</div>
  <div class="verse">Blowing outside the window as I look around the room<br>
  And it makes me so depressed to see the gloom</div>

  <div class="singer">Maryline:</div>
  <div class="verse">There's not a soul out there<br>
  No one to hear my prayer</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>
  
  <div class="singer">Lou:</div>
  <div class="response">Won't somebody help me chase the shadows away?</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Alexandra:</div>
  <div class="response">Take me through the darkness to the break of the day</div>

  <div class="instrumental">Instrumental</div>

  <div class="ensemble">Ensemble: Movie stars</div>

  <div class="singer">Sophie:</div>
  <div class="verse">Find the end of the rainbow with a fortune to win<br>
  It's so different from the world I'm living in</div>

  <div class="ensemble">Ensemble: Tired of TV</div>

  <div class="singer">Maryline:</div>
  <div class="verse">I open the window and I gaze into the night<br>
  But there's nothing there to see, no one in sight</div>

  <div class="singer">Lou:</div>
  <div class="verse">There's not a soul out there<br>
  No one to hear my prayer</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Lou + Alexandra:</div>
  <div class="response">Won't somebody help me chase the shadows away?</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Sophie + Maryline:</div>
  <div class="response">Take me through the darkness to the break of the day</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....<br>
  Oh oh oh ...<br>
  Gimme, gimme, gimme a man after midnight....<br>
  Oh oh oh ...</div>

  <div class="instrumental">Instrumental</div>

  <div class="singer">Lou + Maryline:</div>
  <div class="verse">There's not a soul out there<br>
  No one to hear my prayer</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Lou:</div>
  <div class="response">Won't somebody help me chase the shadows away?</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Alexandra:</div>
  <div class="response">Take me through the darkness to the break of the day</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Sophie:</div>
  <div class="response">Won't somebody help me chase the shadows away?</div>

  <div class="ensemble">Ensemble:</div>
  <div class="verse">Gimme, gimme, gimme a man after midnight....</div>

  <div class="singer">Maryline:</div>
  <div class="response">Take me through the darkness to the break of the day</div>
</div>`,
    },
  },
  {
    id: 22,
    title: "YMCA",
    artist: "Village People",
    singers: ["Maxime", "Jean-Michel", "Nathan", "Greg"],
    duration: 0,
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Textes%20chansons%2F22.%20YMCA.docx?alt=media&token=00152f50-1a41-47f4-9ad8-aafa5847820c",
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F22.%20YMCA%20(coupe%CC%81e).mp3?alt=media&token=84508f98-b8a1-4c09-937d-06ab1452b6b7",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
}
.verse {
  margin: 20px 0;
}
.singer {
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.1rem;
}
.backing {
  font-style: italic;
  margin-left: 20px;
  opacity: 0.9;
}
.chorus {
  font-weight: bold;
  margin: 20px 0;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.duet {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.duet-part {
  flex: 1;
}
</style>

<div class="lyrics">
  <div class="title">Y.M.C.A.</div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (Young man)<br>
        (Young man)<br>
        (Young man)<br>
        (Need to be unhappy)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">Maxime:</div>
      <div class="verse">
        There's no need to feel down I said,<br>
        Pick yourself off the ground I said,<br>
        Cause you're in a new town, There's no
      </div>
    </div>
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (Young man)<br>
        (Young man)<br>
        (Stay there)<br>
        (Ways to have a good time)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">J. Michel:</div>
      <div class="verse">
        There's a place you can go I said,<br>
        When you're short on your dough You can<br>
        And I'm sure you will find Many
      </div>
    </div>
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="singer">Maxime:</div>
      <div class="chorus">
        It's fun to stay at the
      </div>
    </div>
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="chorus">
        (Y.M.C.A.)<br>
      </div>
    </div>
  </div>

  <div class="chorus">
    It's fun to stay at the (Y.M.C.A.)<br>
    They have everything For young men to enjoy<br>
    You can hang out with all the boys<br>
    It's fun to stay at the (Y.M.C.A.)<br>
    It's fun to stay at the (Y.M.C.A.)
  </div>

  <div class="singer">J. Michel:</div>
  <div class="verse">
    You can get yourself clean<br>
    You can have a good meal<br>
    You can do whatever you feel
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (Young man)<br>
        (Young man)<br>
        (Young man)<br>
        (Got to know this one thing)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">Grégory:</div>
      <div class="verse">
        Are you listening to me? I said,<br>
        What do you want to be? I said,<br>
        You can make real your dreams But you've
      </div>
    </div>
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (No man)<br>
        (Young man)<br>
        (Go there)<br>
        (I'm sure they can help you today)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">Nathan:</div>
      <div class="verse">
        Does it all by himself I said,<br>
        Put your pride on the shelf And just<br>
        To the Y.M.C.A.
      </div>
    </div>
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="singer">Gregory:</div>
      <div class="chorus">
        It's fun to stay at the
      </div>
    </div>
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="chorus">
        (Y.M.C.A.)
      </div>
    </div>
  </div>

  <div class="chorus">
    It's fun to stay at the (Y.M.C.A.)<br>
    They have everything For young men to enjoy<br>
    You can hang out with all the boys<br>
    It's fun to stay at the (Y.M.C.A.)<br>
    It's fun to stay at the (Y.M.C.A.)
  </div>

  <div class="singer">Nathan:</div>
  <div class="verse">
    You can get yourself clean<br>
    You can have a good meal<br>
    You can do whatever you feel
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (Young man)<br>
        (I was)<br>
        (No man)<br>
        (The whole world was so jive)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">Maxime:</div>
      <div class="verse">
        I was once in your shoes I said,<br>
        Down and out with the blues I felt,<br>
        Cared if I were alive I felt
      </div>
    </div>
  </div>

  <div class="duet">
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="verse">
        (That's when)<br>
        (Young man)<br>
        (Place there)<br>
        (Stop you back on your way)
      </div>
    </div>
    <div class="duet-part">
      <div class="singer">J. Michel:</div>
      <div class="verse">
        Someone came up to me And said,<br>
        Take a walk up the street There's a<br>
        Called the Y.M.C.A. They can't
      </div>
    </div>
  </div>

  <div class="chorus">
    It's fun to stay at the (Y.M.C.A.)<br>
    It's fun to stay at the (Y.M.C.A.)<br>
    They have everything<br>
    For young men to enjoy<br>
    You can hang out with all the boys
  </div>

  <div class="chorus">(Y.M.C.A.)</div>

  <div class="duet">
    <div class="duet-part">
      <div class="singer">Gregory:</div>
      <div class="chorus">It's fun to stay at the</div>
    </div>
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="chorus">(Y.M.C.A.)</div>
    </div>
  </div>

  <div class="chorus">
    Young man, young man, there's no need to feel down<br>
    Young man, young man, pick yourself off the ground
  </div>

  <div class="chorus">(Y.M.C.A.)</div>

  <div class="duet">
    <div class="duet-part">
      <div class="singer">Nathan:</div>
      <div class="chorus">It's fun to stay at the</div>
    </div>
    <div class="duet-part">
      <div class="backing">Les 3 gars:</div>
      <div class="chorus">(Y.M.C.A.)</div>
    </div>
  </div>

  <div class="chorus">
    Young man, young man Are you listening to me?<br>
    Young man, young man What do you want to be?
  </div>

  <div class="chorus">
    Y.M.C.A.<br>
    You buy in at the<br>
    Y.M.C.A.<br>
    Young man, young man Does it all by himself<br>
    Young man, young man Put your pride on the shelf<br>
    Y.M.C.A.
  </div>
</div>`,
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
    instrumental_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Instrumentales%2F23.%20La%20vie%20du%20bon%20co%CC%82te%CC%81%20(Version%20Instrumental).mp3?alt=media&token=1a68a2dd-84a9-4b52-ad5f-540f46234c6c",
    isFavorite: true,
    lyrics_html: {
      __html: `<style>
.lyrics {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.intro {
  font-style: italic;
  margin: 15px 0;
  opacity: 0.9;
}
.duet {
  margin: 20px 0;
}
.singers {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.verse {
  margin-bottom: 20px;
}
.solo {
  margin: 15px 0;
}
.ensemble {
  font-weight: bold;
  margin: 20px 0;
}
.repeat {
  font-style: italic;
  margin-left: 20px;
}
</style>

<div class="lyrics">
  <div class="title">La Vie du bon côté</div>

  <div class="intro">
    [Hey Yaw !] [C'est Keen'V on the mic yaw !]<br>
    [Lorelei B !] [Faut prendre la vie du bon côté]
  </div>

  <div class="duet">
    <div class="singers">Astrid + Emerick:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Alexandra + J. Michel:</div>
    <div class="verse">
      Adolescent, souvent, je me sentais complexé.<br>
      Il suffisait d'un rien pour que je me sente vexé.<br>
      Les critiques qu'on m'faisait me pénaient et me blessaient.<br>
      Mais tout ça, c'est du passé.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Emmanuel + Aline:</div>
    <div class="verse">
      J'ai cessé d'me lamenter pour croquer la vie à pleine dent.<br>
      J'fais selon mes idées, et j'vis mes envies pleinement.<br>
      J'ai bien essayé de changer le passé mais veinement,<br>
      Rien ne changerait ces événements, Nan.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Maelle + Elfy:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Nora + Sophie:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Nathan + Gregory:</div>
    <div class="verse">
      On a qu'une seule vie, donc profiter est important.<br>
      J'n'ai pas envie d'nourrir des regrets à 40 ans.<br>
      On peut pas continuer à exister en portant<br>
      Le lourd poids des remords d'antan
    </div>
  </div>

  <div class="duet">
    <div class="singers">Murielle + Martine B:</div>
    <div class="verse">
      J'ai cessé de me lamenter pour croquer la vie à pleine dent<br>
      C'est selon mes idées et je vis mes envies pleinement<br>
      J'ai bien essayé de changer le passé mais vainement<br>
      Rien ne changerait ces événements...
    </div>
  </div>

  <div class="duet">
    <div class="singers">Jade + Linoa:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Martine R + Kylian:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>

  <div class="duet">
    <div class="singers">Astrid + Maxime:</div>
    <div class="verse">
      Je donne le meilleur de moi-même pour ne pas me lamenter<br>
      Pour ne pas regretter<br>
      Je donne le meilleur de moi-même pour ne pas me lamenter<br>
      Ne pas abandonner<br><br>
      Je donne le meilleur de moi-même pour ne pas me lamenter<br>
      Pour ne pas regretter<br>
      Je donne le meilleur de moi-même pour ne pas me lamenter<br>
      Ne pas abandonner
    </div>
  </div>

  <div class="solo">
    <div class="singers">Nora 2:</div>
    <div class="verse">J'y suis arriver donc tu peux y arriver</div>
  </div>

  <div class="solo">
    <div class="singers">Lou:</div>
    <div class="verse">J'y suis arriver donc tu peux y arriver</div>
  </div>

  <div class="ensemble">
    <div class="singers">Tous ensemble:</div>
    <div class="verse">
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.<br><br>
      Ca y'est, j'en ai assez, assez de m'lamenter,<br>
      J'vais effacer l'passé pour tout recommencer,<br>
      Me libérer, j'ai décidé d'prendre la vie du bon côté.
    </div>
  </div>
</div>`,
    },
  },
]

export { RAW_SONGS }

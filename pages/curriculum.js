import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Lavoro come SEO Specialist e Digital Strategist - ${siteMetadata.author}`} description={`Qui troverai tutte le informazioni su come sono arrivato a svolgere questo lavoro e cosa mi ha portato a diventare un SEO Specialist!`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Curriculum
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Dove sono e cosa sto facendo? Cosa ho studiato? Qui troverai tutte le informazioni su come sono arrivato a svolgere questo lavoro e cosa mi ha portato a diventare un SEO Specialist!
          </p>
        </div>
        <div>
{/* Work */}
<div className="pt-6 pb-4 text-gray-700 dark:text-gray-300">
  <h2 className="text-3xl font-bold leading-8 text-gray-900 dark:text-gray-100 tracking-tight">
    Cosa sto facendo attualmente?
  </h2>
  <br />
  <span>
    In questo momento lavoro come SEO Specialist presso {' '}
    <Link
      href={'https://www.nur.it'}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
    >
      NUR{' '}
    </Link>
    .
  </span>
  <br />
  <p>Il mio ruolo consiste nell'ottimizzare i siti web per i motori di ricerca. In altre parole, faccio in modo che i siti web vengano visualizzati nei primi risultati di ricerca per le parole chiave appropriate. Ciò può essere ottenuto attraverso diversi metodi, come la creazione di contenuti di alta qualità, il miglioramento del codice del sito e la creazione di link verso altri siti web.</p>
  <br />
  <br />
  <h2 className="text-3xl font-bold leading-8 text-gray-900 dark:text-gray-100 tracking-tight">
    Come sono arrivato a ricoprire il ruolo di SEO Specialist?
  </h2>
  <br />
  <p>
    Diciamo che non c'è un percorso universale per diventare un SEO Specialist, ma ci sono alcune cose che la maggior parte degli esperti hanno in comune. La prima è una solida comprensione dei fondamenti del marketing su Internet. Questo include conoscenze di base di come funziona il web e dei principali fattori che influenzano il posizionamento di un sito nei risultati di ricerca.
  </p>
  <br />
  <p>
    È proprio per questo che ho deciso di iniziare il mio percorso frequentando un corso in Web Design presso l'{' '}
    <Link
      href={'https://www.modartech.com/'}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
    >
      Istituto Modartech
    </Link>
    .
  </p>
  <br />
  <p>
    Grazie a questa esperienza ho iniziato a lavoroare come E-Commerce Specialist presso
    la{' '}
    <Link
      href={'https://www.brand-store.it/'}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
    >
      Brand-Store
    </Link>
    .
  </p>
  <p>
    Questa esperienza mi ha permesso di apprezzare al meglio tutti gli aspetti della gestione di un sito web e mi ha "introdotto" al mondo della SEO.
  </p>
    <br />
   <p>
    Da lì decisi che era giunto il momento di iniziare questo percorso e MAGIA...., sono ufficialmente diventato un SEO Specialist.
  </p>
</div>
<div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
  &#126;&#126;&#126;
</div>

{/* Personal life */}
<div className="pt-6 text-gray-700 dark:text-gray-300">
  <p>
    Quando non lavoro ho molti hobby: suono la batteria da oltre 10 anni, pratico fitness a livello amatoriale, adoro viaggiare e confrontarmi con nuove culture e scoprire nuove destinazioni. 
    La mia passione per il web mi ha anche portato a sviluppare questo{' '}
    <Link
      href={'https://www.filippodanesi.it/blog'}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
    >
      blog
    </Link>{' '}
    sito web dove vorrei parlare delle ultime notizie sulla SEO, il Digital Marketing e magari confrontami con voi su altri argomenti come il mondo del lavoro e i cambiamenti del nostro pianeta (sì, mi piace spaziare :D).
  </p>
  <br />
  <p>
    Per un periodo ho scritto sul quotidiano {' '}
    <Link
      href={'https://www.uninfonews.it/author/filippo-danesi/'}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
    >
       Uni Info News
    </Link>
    di argomenti riguardanti principalmente la psicologia e la sociologia.
  </p>
  <br />
  <p>
    Sono sempre interessato ad ascoltare ex colleghi, manager o semplicemente persone che lavorano nell'ambito del Digital Marketing,
    quindi non esitare a contattarmi, vi risponderò il prima possibile :)
  </p>
  <br />
</div>
<div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
  Per contattarmi mandate pure una mail al mio indirizzo personale{' '}
  <Link
    href={'mailto:filippo.danesi93@gmail.com?subject=Contatto%20da%20sito%20web'}
    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-300" 
  >
    cliccando qui
  </Link>
  .
</div>
</div>
      </div>
    </>
  )
}

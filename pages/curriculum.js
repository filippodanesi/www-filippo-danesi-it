import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Lavoro come SEO Specialist e Digital Strategist - ${siteMetadata.author}`} description={`Dove sono e cosa sto facendo? Cosa ho studiato? Qui troverai tutte le informazioni su come sono arrivato a svolgere questo lavoro e cosa mi ha portato a diventare un SEO Specialist!`} />
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
  <span>
    Attualmente lavoro come SEO Specialist presso {' '}
    <Link
      href={'https://www.nur.it'}
      className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
    >
      NUR{' '}
    </Link>
    <br />
  </span>
  <p>Il mio ruolo consiste nell'ottimizzare i siti web per i motori di ricerca. In altre parole, faccio in modo che i siti web vengano visualizzati nei primi risultati di ricerca per le parole chiave appropriate. Ciò può essere ottenuto attraverso diversi metodi, come la creazione di contenuti di alta qualità, il miglioramento del codice del sito e la creazione di link verso altri siti web.</p>
  <br />
  <p className="font-bold">
    Ma come sono arrivato a ricoprire il ruolo di SEO Specialist?
  </p>
  <br />
  <p>
    Diciamo che non c'è un percorso universale per diventare un SEO Specialist, ma ci sono alcune cose che la maggior parte degli esperti hanno in comune. La prima è una solida comprensione dei fondamenti del marketing su Internet. Questo include conoscenze di base di come funziona il web e dei principali fattori che influenzano il posizionamento di un sito nei risultati di ricerca.
  </p>
  <br />
  <p>
    È proprio per questo che ho deciso di iniziare il mio percorso frequentando un corso in Web Design presso l'{' '}
    <Link
      href={'https://www.modartech.com/'}
      className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
    >
      Istituto Modartech.
    </Link>
  </p>
  <br />
  <p>
    Grazie a questa esperienza ho iniziato a lavoroare come E-Commerce Specialist presso
    la{' '}
    <Link
      href={'https://www.brand-store.it/'}
      className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
    >
      Brand-Store.
    </Link>
  </p>
  <p>
    I like the execute programming method of courses since they use spaced-repition. I
    believe that is on of the best way to learn.
  </p>
</div>
<div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
  &#126;&#126;&#126;
</div>

{/* Personal life */}
<div className="pt-6 text-gray-700 dark:text-gray-300">
  <p>
    I've been slowly building this website, trying to share interesting things with anyone
    who wants to read it.{' '}
    <Link
      href={'https://www.swyx.io/learn-in-public'}
      className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
    >
      This
    </Link>{' '}
    article is a great reason to start your blog.
  </p>
  <br />
  <p>
    I published a short e-book about how to make LaTeX templates for your homework, aimed
    towards beginners.
    <Link
      href={'http://einargudni.com/my-books'}
      className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
    >
      It's available here.
    </Link>
  </p>
  <br />
  <p>
    I've been spending some time updating my Obsidian vault. I feel like my system helps me
    be more productive. I'll share it with you soon.
  </p>
  <br />
</div>
<div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
  For more examples of folks with /now pages, check out{' '}
  <Link
    href={'https://nownownow.com/'}
    className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
  >
    nownownow.com
  </Link>
</div>
</div>
      </div>
    </>
  )
}

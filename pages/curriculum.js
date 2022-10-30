import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Benvenuto/a!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ciao a tutti e grazie per aver visitato il mio sito. Mi presento, mi chiamo Filippo Danesi e sono un SEO Specialist.  Il mio lavoro consiste nell'ottimizzare i siti web per i motori di ricerca. In altre parole, mi occupo di migliorare il posizionamento di un sito web sui risultati di ricerca di Google e altri motori di ricerca. Vorrei condividere con voi le mie conoscenze (e alcuni consigli) riguardo questo ambito, quindi se siete appassionati di notizie riguardanti la SEO, il Digital Marketing o il mondo del lavoro (su questa ci provo..) allora siete nel posto giusto!
          </p>
        </div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Città:</span> <span>Mantova,</span>
            <br />
            <span className="font-semibold">Azienda:</span> <span>NUR S.r.l.</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Ruolo:</span>{' '}
            <span>SEO Specialist</span>
            <br />
            <span className="font-semibold">Anni di esperienza:</span> <span>4+</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Hobby:</span> <span>Fitness, Batteria, Viaggi</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Pre-workout</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a software developer at{' '}
            <Link
              href={'https://maul.is'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Maul{' '}
            </Link>
            <br />
          </span>
          <p>We deliver various and delicous lunch to workplaces in Reykjavík.</p>
          <br />
          <p>
            We at Maul strive to improve the quality of your lunch by offering courses from multiple
            restaurants and saving you from the constant "what should I have for lunch" conundrum.
          </p>
          <br />
          <p>
            We've been spending a significant time and effort to make our internal tools better. We
            are delivering around 7000 portions of food per week. Our daily operations team was in
            need of better tools to help them manage the daily operations. This will also help us
            re-phrasing some issues we've bee dealing with before. Now the operations team can solve
            some problems that previously they needed the software team help.
          </p>
          <br />
          <p>
            I'm almost finished with updating our data to match our new data structure. This had a
            lot of tinkering and updating data. This is also a step towards making our billing
            system better. It works, but it's not very user friendly.
          </p>
          <br />
          <p>
            I finished the TypeScript basics course and I've started on the Everyday TypeScript
            course on{' '}
            <Link
              href={'https://www.executeprogram.com/courses'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Execute Programming.
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
        <div className="pt-6">
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
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}

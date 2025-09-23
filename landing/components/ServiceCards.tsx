import Button from './Button';

export default function ServiceCards() {
  // Fonction pour générer l'URL Calendly avec la date actuelle
  const getCalendlyUrl = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // getMonth() retourne 0-11, on veut 1-12
    const currentYear = now.getFullYear();
    return `https://calendly.com/guichstudio/30min?back=1&month=${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Carte gauche - grise */}
      <div className="bg-neutral-100 rounded-2xl p-6 sm:p-8">
        <h3 className="text-3xl sm:text-2xl font-bold mb-4 sm:mb-6">
          How it work
        </h3>
        <p className="text-sm sm:text-base text-neutral-700 mb-4 sm:mb-6 leading-relaxed">
          Narrative-led growth for tech companies. We turn products into brands
          people care about, through cinematic story, cohesive design, and
          memetic content.
        </p>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-700">
          <li className="flex items-center">
            <span className="text-neutral-500 mr-2 text-3xl leading-none">
              •
            </span>
            <span>Weekly ship: assets + creator placements.</span>
          </li>
          <li className="flex items-center">
            <span className="text-neutral-500 mr-2 text-3xl leading-none">
              •
            </span>
            <span>48h response: trend/news/partner spikes.</span>
          </li>
          <li className="flex items-center">
            <span className="text-neutral-500 mr-2 text-3xl leading-none">
              •
            </span>
            <span>One art direction: across video, social, and your dapp.</span>
          </li>
        </ul>
      </div>

      {/* Carte droite - noire */}
      <div className="bg-black rounded-2xl p-6 sm:p-8 text-white">
        <h3 className="text-3xl sm:text-2xl font-bold mb-4 sm:mb-6">
          The Narrative Engine
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
          A monthly content & design service that ships weekly. We run your
          narrative : from teaser to threads to in-product feelings.
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8">
          Not included : community moderation, pure media buying, smart-contract
          work, full app builds.
        </p>
        <Button
          variant="white"
          size="lg"
          onClick={() => window.open(getCalendlyUrl(), '_blank')}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

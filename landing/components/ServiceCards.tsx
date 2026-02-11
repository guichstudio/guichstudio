import Button from './Button';

export default function ServiceCards() {
  const getCalendlyUrl = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    return `https://calendly.com/guichstudio/30min?back=1&month=${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 lg:mb-12">Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* How it works */}
      <div className="bg-neutral-100 rounded-2xl p-6 sm:p-8 lg:p-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          How it works
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-700 mb-4 sm:mb-6 leading-relaxed">
          Narrative-led growth for tech companies. We turn products into brands
          people care about, through cinematic story, cohesive design, and
          memetic content.
        </p>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-neutral-700">
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

      {/* Narrative Engine */}
      <div className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          The Narrative Engine
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
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
    </div>
  );
}

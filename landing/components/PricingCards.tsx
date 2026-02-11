import Button from './Button';

const pricingPlans = [
  {
    title: 'Launch Sprint',
    price: '4,600 $',
    features: [
      '##Narrative spine & visual micro-system##',
      '##Teaser/launch film##',
      '##Launch page## Art direction + wording',
      '##Social starter kit## 10 assets & meme templates',
    ],
    buttonText: 'Book Sprint',
    buttonVariant: 'white' as const,
    tagline: 'A launch that actually circulates, not just a pretty video.',
  },
  {
    title: 'Growth',
    price: '6,000 $/mo',
    features: [
      '##Weekly ship## 3-5 brand assets/week, video',
      '##Hot-moment## 48h for trend,news,partner spikes',
      '##Dapp touches## Microcopy, small in-product animations',
      '##Creator seeding## Coordination across 5-10 creators',
      '##Lore maintenance## Persona + library updated monthly',
    ],
    buttonText: 'Reserve',
    buttonVariant: 'black' as const,
    tagline:
      'Stay culturally loud and visually consistent so new people keep encountering, and remembering you.',
  },
  {
    title: 'Scale',
    price: '11,000 $/mo',
    features: [
      '##High volume## 15-25 assets + 2 short video',
      "##Quarterly cinematic video## Sets the season's narrative",
      '##Creator orchestration## 10-30 creators',
      '##Style governance## In-product, social visuals branding',
      '##Monthly campaign## Mint, contest, merch design',
      '##UX revision## Onboarding, LP, emotional design',
    ],
    buttonText: 'Scale',
    buttonVariant: 'black' as const,
    tagline:
      'An owned brand universe with always-on distribution. Your narrative compound.',
  },
];

export default function PricingCards() {
  const renderFeature = (feature: string) => {
    const parts = feature.split(/(##.*?##)/g);

    return parts.map((part, index) => {
      if (part.startsWith('##') && part.endsWith('##')) {
        // Strip ## markers and bold
        const boldText = part.slice(2, -2);
        return <strong key={index}>{boldText}</strong>;
      }
      return part;
    });
  };

  const getCalendlyUrl = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    return `https://calendly.com/guichstudio/30min?back=1&month=${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 lg:mb-12">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 lg:p-8 flex flex-col h-full"
          >
            {/* Features */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black mb-2">
                {plan.title}
              </h3>

              <div className="text-2xl font-medium text-black mb-6">
                {plan.price}
              </div>

              {/* Feature list */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-neutral-500 mr-1 text-lg leading-none">
                      •
                    </span>
                    <span className="text-sm text-neutral-700 leading-relaxed">
                      {renderFeature(feature)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button
                variant={plan.buttonVariant}
                size="md"
                className="w-full"
                onClick={() => window.open(getCalendlyUrl(), '_blank')}
              >
                {plan.buttonText}
              </Button>

              <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                {plan.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

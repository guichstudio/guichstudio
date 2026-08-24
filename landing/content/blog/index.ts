import type { BlogPost } from '@/lib/blog';

import { post as web3LaunchVideo } from './web3-launch-video';
import { post as howToChooseAWeb3MarketingAgency } from './how-to-choose-a-web3-marketing-agency';
import { post as brandVideoForTechStartups } from './brand-video-for-tech-startups';
import { post as cryptoVideoProduction } from './crypto-video-production';
import { post as productLaunchVideo } from './product-launch-video';
import { post as nftMarketingVideo } from './nft-marketing-video';
import { post as saasExplainerVideo } from './saas-explainer-video';
import { post as tokenLaunchMarketing } from './token-launch-marketing';
import { post as motionDesignAgency } from './motion-design-agency';
import { post as web3Branding } from './web3-branding';
import { post as startupVideoMarketingStrategy } from './startup-video-marketing-strategy';
import { post as cryptoCommunityContent } from './crypto-community-content';
import { post as teaserVideoForAppLaunch } from './teaser-video-for-app-launch';

// Registry. Add one import + one entry per new post. Order does not matter,
// getAllPosts() sorts by date descending.
export const posts: BlogPost[] = [
  web3LaunchVideo,
  howToChooseAWeb3MarketingAgency,
  brandVideoForTechStartups,
  cryptoVideoProduction,
  productLaunchVideo,
  nftMarketingVideo,
  saasExplainerVideo,
  tokenLaunchMarketing,
  motionDesignAgency,
  web3Branding,
  startupVideoMarketingStrategy,
  cryptoCommunityContent,
  teaserVideoForAppLaunch,
];

import type { BlogPost } from '@/lib/blog';

import { post as web3LaunchVideo } from './web3-launch-video';
import { post as howToChooseAWeb3MarketingAgency } from './how-to-choose-a-web3-marketing-agency';
import { post as brandVideoForTechStartups } from './brand-video-for-tech-startups';
import { post as cryptoVideoProduction } from './crypto-video-production';
import { post as productLaunchVideo } from './product-launch-video';
import { post as nftMarketingVideo } from './nft-marketing-video';

// Registry. Add one import + one entry per new post. Order does not matter,
// getAllPosts() sorts by date descending.
export const posts: BlogPost[] = [
  web3LaunchVideo,
  howToChooseAWeb3MarketingAgency,
  brandVideoForTechStartups,
  cryptoVideoProduction,
  productLaunchVideo,
  nftMarketingVideo,
];

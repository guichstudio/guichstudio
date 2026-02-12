export type Project = {
    slug: string
    title: string
    role: string
    tags: string[]
    thumb: string
    video?: string
    year?: string
    month?: string
    day?: string
    client?: string
    description?: string
};

export type Tweet = {
    id: number
    video: string
    imageStats: string
    avatar: string
    thumbnail: string
    link: string
    username: string
    handle: string
    content: string
}
    
    
export const allTags = [
    'All',
    'Projection',
    'Web 3',
    'Music/Label',
    'Commercial',
    'Experimental'
] as const;
    
    
    // Project data — move to CMS when needed
    export const projects: Project[] = [
    {
    slug: 'fantasy-top-1',
    title: 'Fantasy.top',
    role: 'Art Direction & Production',
    tags: ['Web 3'],
    thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-1-thumbnail.webp',
    video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-1.mp4',
    year: '2024',
    month: '04',
    day: '24',
    client: '-',
    description: `Step into a world where imagination meets strategy with the launch of Fantasy.top, the next evolution in trading card games. Designed for competitive play and immersive storytelling, Fantasy.top offers players a rich universe filled with unique characters, powerful spells, and dynamic battle mechanics that keep every match fresh and challenging.\n\nCollect rare cards, build unstoppable decks, and engage with a vibrant community eager to test their wits and forge alliances.`
},
    {
    slug: 'H-company-1',
    title: 'H Company',
    role: 'Editing & Production',
    tags: ['Commercial'],
    thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-1-thumbnail.webp',
    video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-1.mp4',
    year: '2025',
    month: '06',
    day: '12',
    client: '-',
    description: 'H Company’s motion design work for their paid ad campaign for their new product ‘Runner H’ - AI agent - effectively combines dynamic visuals with concise messaging to capture audience attention and drive engagement.'
    },
    {
    slug: 'pressiat-1',
    title: 'Pressiat',
    role: 'Art Direction & Production',
    tags: ['Commercial', 'Projection'],
    thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/pressiat-thumbnail.webp',
    video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/pressiat.mp4',
    year: '2023',
    month: '09',
    day: '16',
    client: '-',
    description: 'The Fashion Runway Projection Mapping of Pressiat presented a cutting-edge fusion of technology and style, transforming the traditional runway experience into an immersive visual spectacle.'
    },
    {
        slug: 'eterna-labs',
        title: 'Eterna Labs',
        role: 'Art Direction & Production',
        tags: ['Web 3'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/eterna-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/eterna.mp4',
        year: '2024',
        month: '07',
        day: '01',
        client: '-',
        description: 'Eterna Labs is revolutionizing molecule testing by leveraging the decentralized structure of a DAO (Decentralized Autonomous Organization) to improve transparency, efficiency, and collaboration in the research process. By distributing decision-making and funding among a global community of stakeholders, Eterna Labs accelerates the validation and optimization of molecular compounds while reducing reliance on traditional centralized institutions. This approach not only democratizes access to cutting-edge testing methodologies but also fosters innovation through open data sharing and collective problem-solving, setting a new standard for how molecular research can be conducted in the digital age.'
        },
        {
            slug: 'H-company-2',
            title: 'H Company',
            role: 'Motion design & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-2-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-2.mp4',
            year: '2025',
            month: '06',
            day: '20',
            client: '-',
            description: "H Company’s motion design work for their paid ad campaign for their new product ‘Runner H’ - AI agent - effectively combines dynamic visuals with concise messaging to capture audience attention and drive engagement."
        },
        {
            slug: 'fantasy-top-2',
            title: 'Fantasy.top',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-2-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-2.mp4',
            year: '2025',
            month: '01',
            day: '02',
            client: '-',
            description: 'Fantasy.Top Trading Card Game introduces Clout, an innovative platform that enables players to earn rewards based on their social media performance. By leveraging your activity and influence on Social X, Clout transforms engagement into tangible value, allowing users to monetize their presence while enjoying immersive gameplay. This integration creates a unique ecosystem where social interaction and competitive card gaming combine, offering an opportunity for players to grow both their in-game assets and online clout simultaneously.'
        },
        {
            slug: 'domestique-1',
            title: 'Domestique Paris',
            role: 'Art Direction & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/domestique-1-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/domestique-1.mp4',
            year: '2022',
            month: '09',
            day: '08',
            client: '-',
            description: 'THE IDENTITY CAMPAIGN\nSocial media campaign for the Paris-based brand DOMESTIQUE. Render of the brand\'s iconic bag with photorealistic renderings. Playing on minimal volumes and transparency, with references to fetishism and BDSM to support the essential pillars of the brand.'
        },
        {
            slug: 'domestique-2',
            title: 'Domestique Paris',
            role: 'Art Direction & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/domestique-2-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/domestique-2.mp4',
            client: '-',
            description: 'Social media campaign for the Paris-based brand DOMESTIQUE. Photorealistic renderings playing on minimal volumes and transparency to support the essential pillars of the brand.'
        },
        {
            slug: 'pressiat-3',
            title: 'Pressiat',
            role: 'Art Direction & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/pressiat-2-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/pressiat-2.mp4',
            client: '-',
            description: 'Pressiat social media campaign combining high-quality visuals and interactive content to engage a global audience and reinforce brand identity.'
        },
        {
            slug: 'AAA-lending',
            title: 'AAA Lending Aggregator',
            role: 'Artistic Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/AAA-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/AAA.mp4',
            year: '2023',
            month: '09',
            day: '08',
            client: '-',
            description: 'Introducing the electrifying launch teaser for AAA, the revolutionary NFT lending aggregator! Experience cutting-edge CGI rendering and masterful editing that bring the future of NFT finance to life. This dynamic teaser captures AAA’s unique ability to seamlessly connect lenders and borrowers in the NFT space.'
        },
        {
            slug: 'pressiat-2',
            title: 'Pressiat',
            role: 'Art Direction & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/pressiat-1-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/pressiat-1.mp4',
            year: '2023',
            month: '09',
            day: '07',
            client: '-',
            description: 'Pressiat Fashion Week 2023 launched a dynamic social media campaign that effectively combined high-quality visuals, influencer partnerships, and interactive content to engage a global audience. The campaign’s cohesive aesthetic and consistent messaging reinforced Pressiat’s brand identity, contributing to increased visibility and event attendance.'
        },
        {
            slug: 'H-company-3',
            title: 'H Company',
            role: 'Motion design & Production',
            tags: ['Commercial'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-3-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/commercial/H-company-3.mp4',
            year: '2025',
            month: '06',
            day: '12',
            client: '-',
            description: 'H Company’s motion design work for their paid ad campaign effectively combines dynamic visuals with concise messaging to capture audience attention and drive engagement.'
        },
        {
            slug: 'pump-fun',
            title: 'Pump Fun',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/pump-fun-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/pump-fun.mp4',
            year: '2025',
            month: '02',
            day: '21',
            client: '-',
            description: 'The first launch teaser of Pump.Fun, the renowned launchpad for meme coins, impressive $800 million revenue achieved in its first year. This teaser emphasized the platform’s unique ability to accelerate the growth of meme coins, attracting a wide community of investors and developers eager to capitalize on trending digital assets. The launchpad’s innovative approach to combining fun and finance demonstrated a strong market demand for meme-based projects, setting new standards for revenue generation and user engagement within the crypto space.'
        },
        {
            slug: 'fantasy-top-3',
            title: 'Fantasy.top',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-3-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-3.mp4',
            year: '2025',
            month: '02',
            day: '01',
            client: '-',
            description: 'Fantasy.Top Trading Card Game introduces Clout, an innovative platform that enables players to earn rewards based on their social media performance. By leveraging your activity and influence on Social X, Clout transforms engagement into tangible value, allowing users to monetize their presence while enjoying immersive gameplay. This integration creates a unique ecosystem where social interaction and competitive card gaming combine, offering an opportunity for players to grow both their in-game assets and online clout simultaneously.'
        },
        {
            slug: 'wasabi-1',
            title: 'Wasabi Protocol',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/wasabi-1-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/wasabi-1.mp4',
            year: '2025',
            month: '02',
            day: '08',
            client: '-',
            description: 'wasabi.xyz is generating buzz with its upcoming launch of perpetual contracts (Perps) and leverage options specifically designed for meme coins. By combining Perps with leverage, wasabi.xyz promises to deliver a dynamic trading experience that balances risk and reward, catering to the growing community of meme coin enthusiasts eager for advanced financial tools tailored to this niche market.'
        },
        {
            slug: 'gondi',
            title: 'Gondi.xyz',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/gondi-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/gondi.mp4',
            year: '2025',
            month: '04',
            day: '10',
            client: '-',
            description: 'Gondi.xyz stands as a beacon of innovation in the decentralized finance landscape, much like a call to action echoing the spirit of Kennedy’s timeless speeches. The accompanying video elaborates on this vision, with blockchain security to create a lending environment where trust and technology walk hand in hand, promising a future where financial empowerment is accessible to all who dare to dream and participate.'
        },
        {
            slug: 'fantasy-top-4',
            title: 'Fantasy.top',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-4-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-4.mp4',
            year: '2025',
            month: '01',
            day: '09',
            client: '-',
            description: 'Experience the future of political engagement with Fantasy.top’s newest feature: Opening Bets on Political Results. Now, you can place your predictions on upcoming elections and political outcomes in a dynamic, interactive platform designed for political enthusiasts.\nWatch as the power of your insights turns into real rewards. Join a community where every prediction counts, where your political knowledge is put to the test and can earn you exciting prizes.'
        },
        {
            slug: 'fantasy-top-5',
            title: 'Fantasy.top',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-5-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/fantasy-5.mp4',
            year: '2024',
            month: '02',
            day: '01',
            client: '-',
            description: 'Introducing the launch video for Fantasy.top Testnet. This dynamic visual presentation showcases the seamless integration of blockchain technology with immersive gameplay, highlighting user-friendly features, enhanced security, and innovative reward systems. Designed to engage both casual players and crypto enthusiasts, the video captures the excitement and potential of Fantasy.top’s testnet phase.'
        },
        {
            slug: 'guess-best',
            title: 'Guess Best',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/guess-best-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/guess-best.mp4',
            year: '2024',
            month: '10',
            day: '19',
            client: '-',
            description: 'Guess.best is a cutting-edge mobile game betting platform on Telegram, designed to ride the wave of emerging trends in interactive entertainment. Combining the convenience of instant messaging with the thrill of strategic betting, Guess.best offers users a seamless experience where they can predict outcomes, place bets, and engage with a growing community.'
        },
        {
            slug: 'wasabi-2',
            title: 'Wasabi Protocol',
            role: 'Art Direction & Production',
            tags: ['Web 3'],
            thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/wasabi-2-thumbnail.webp',
            video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/wasabi-2.mp4',
            year: '2024',
            month: '02',
            day: '16',
            client: '-',
            description: 'wasabi.xyz is generating buzz with its upcoming launch of perpetual contracts (Perps) and leverage options specifically designed for meme coins. By combining Perps with leverage, wasabi.xyz promises to deliver a dynamic trading experience that balances risk and reward, catering to the growing community of meme coin enthusiasts eager for advanced financial tools tailored to this niche market.'
        },
    {
        slug: '0015-1',
        title: 'Polycool.live',
        role: 'Art Direction & Production',
        tags: ['Web 3'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/0015_1-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/0015_1.mp4',
        client: '-',
        description: 'Web3 project production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'final',
        title: 'Polycool.live',
        role: 'Art Direction & Production',
        tags: ['Web 3'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/final-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/final.mp4',
        client: '-',
        description: 'Web3 project production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'polycool-devfunxpoly',
        title: 'Polycool.live',
        role: 'Art Direction & Production',
        tags: ['Web 3'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/polycool_devfunxpoly_video-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/web-3/polycool_devfunxpoly_video.mp4',
        client: '-',
        description: 'Web3 project production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'rad-carter-ft-jaia-rose',
        title: 'Rad Cartier ft Jaia Rose',
        role: 'Art Direction & Production',
        tags: ['Music/Label'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/rad-carter-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/rad-carter.mp4',
        year: '2023',
        month: '06',
        day: '28',
        client: '-',
        description: 'The video clip by All 3D Prod showcases seamless 3D animation techniques, highlighting smooth transitions, realistic textures, and dynamic lighting.'
    },
    {
        slug: 'nganoux',
        title: 'Nganoux',
        role: 'Art Direction & Production',
        tags: ['Music/Label'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/nganoux-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/nganoux.mp4',
        client: '-',
        description: 'Music video production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'romsii-usa',
        title: 'ROMSII - USA',
        role: 'Art Direction & Production',
        tags: ['Music/Label'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/romsii-1-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/romsii-1.mp4',
        client: '-',
        description: 'Music video production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'romsii-enfant',
        title: 'ROMSII - Enfant',
        role: 'Art Direction & Production',
        tags: ['Music/Label'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/romsii-2-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/music&clip/romsii-2.mp4',
        client: '-',
        description: 'Music video production featuring creative direction and visual storytelling.'
    },
    {
        slug: 'dtf-projection',
        title: 'DTF',
        role: 'Art Direction & Production',
        tags: ['Projection'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/DTF-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/DTF.mp4',
        client: '-',
        description: 'Projection mapping performance combining immersive visuals with live stage design.'
    },
    {
        slug: 'lujipeka-projection',
        title: 'Lujipeka',
        role: 'Art Direction & Production',
        tags: ['Projection'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/lujipeka-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/lujipeka.mp4',
        client: '-',
        description: 'Projection mapping performance combining immersive visuals with live stage design.'
    },
    {
        slug: 'naute-projection',
        title: 'Naute',
        role: 'Art Direction & Production',
        tags: ['Projection'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/naute-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/naute.mp4',
        client: '-',
        description: 'Projection mapping performance combining immersive visuals with live stage design.'
    },
    {
        slug: 'romsii-projection',
        title: 'ROMSII',
        role: 'Art Direction & Production',
        tags: ['Projection'],
        thumb: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/romsii-thumbnail.webp',
        video: 'https://d3cf6gvjj37km9.cloudfront.net/video-landing/projection/romsii.mp4',
        client: '-',
        description: 'Projection mapping performance combining immersive visuals with live stage design.'
    },

    ]
    
    
    export function getProjectsByTag(tag?: string) {
    if (!tag || tag === 'All') return projects
    return projects.filter(p => p.tags.includes(tag))
    }
    
    
    export function getProject(slug: string) {
    return projects.find(p => p.slug === slug) || null
    }

    export const tweets: Tweet[] = [
      {
        id: 1,
        video:
          'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video4/video_4.mp4',
        imageStats:
          'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video4/text_video_4.png',
        avatar:
          'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video4/logo_4.jpg',
        thumbnail:
          'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video4/video_4_thumbnail.webp',
        link: 'https://twitter.com/pumpdotfun/status/1763327529635692928',
        username: 'pump.fun',
        handle: '@pumpdotfun',
        content: 'pump dot fun is now live on @Blast_L2 !!!!!',
      },
        {
            id: 2,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video1/video_1.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video1/text_video_1.png',
      
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video1/logo_1.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video1/video_1_thumbnail.webp',
            link: 'https://twitter.com/fantasy_top_/status/1892230558140244196',
          username: 'fantasy_top_',
          handle: '@fantasy_top_',
          content: 'Introducing… Fantasy Top Free to Play, LIVE',
        },
        {
          id: 3,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video2/video_2.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video2/text_video_2.png',
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video2/logo_2.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video2/video_2_thumbnail.webp',
          link: 'https://twitter.com/fantasy_top_/status/1914745584940146944',
          username: 'fantasy_top_',
          handle: '@fantasy_top_',
          content: 'Do you have what it takes to be a Hero?',
        },
        {
          id: 4,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video3/video_3.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video3/text_video_3.png',
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video3/logo_3.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video3/video_3_thumbnail.webp',
          link: 'https://twitter.com/fantasy_top_/status/1867353434799653176',
          username: 'fantasy_top_',
          handle: '@fantasy_top_',
          content: "Today we're thrilled to unveil Fantasy Top V2! 🎉",
        },
        
        {
          id: 5,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video5/video_5.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video5/text_video_5.png',
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video5/logo_5.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video5/video_5_thumbnail.webp',
          link: 'https://twitter.com/wasabi_protocol/status/1762175723282878802',
          username: 'Wasabi Protocol 🟢',
          handle: '@wasabi_protocol',
          content: 'T-3 Days Till Blast Off 🟡🚀',
        },
        {
          id: 6,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video6/video_6.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video6/text_video_6.png',
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video6/logo_6.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video6/video_6_thumbnail.webp',
          link: 'https://twitter.com/eterna_labs/status/1949834887688507715',
          username: 'Eterna Labs',
          handle: '@eterna_labs',
          content: '🧾 [Initiation File #ΞL-010]',
        },
        {
          id: 7,
          video:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video7/video_7.mp4',
          imageStats:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video7/text_video_7.png',
          avatar:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video7/logo_7.jpg',
          thumbnail:
            'https://d3cf6gvjj37km9.cloudfront.net/video-landing/tweet-image-video/video7/video_7_thumbnail.webp',
          link: 'https://x.com/wasabi_protocol/status/1866135927594303591',
          username: 'Wasabi Protocol 🟢',
          handle: '@wasabi_protocol',
          content: 'SZN 3 Begins 🔵 🟣 🟡',
        },
      ];

export const logos: string[] = [
    'domestique.png',
    'elysee.png',
    'eterna.png',
    'fantasy.png',
    'gaite.png',
    'gondi.png',
    'guess.png',
    'H.png',
    'ledger.png',
    'mentat.png',
    'olympia.png',
    'pressiat.png',
    'pump.png',
    'warner.png',
    'wasabi.png',
    'Zyfai.png',
  ];

  export const faqData: { question: string; answer: string }[] = [
    {
      question: 'Why us ?',
      answer:
        "Distribution you control. Speed you can’t copy. One signature universe."
    },
    {
      question: "Why monthly ?",
      answer:
        "Growth compounds, launches don’t. We ship, learn, and iterate every week so your story shows up consistently across video, socials, and product."
    },
    {
      question: "What do i get each week ?",
      answer:
        '3-5 on-brand assets shipped, one creator placement or interactive drop live, and a 10-minute Loom debrief with next week’s plan.'
    },
    {
      question: 'What’s included in assets ?',
      answer:
        "Video carousels, statics, meme sets, in app animations design or asset design. Source files + usage rights delivered monthly. Not included : Community moderation, pure media buying, smart-contract work, full app builds."
    },
    {
      question: 'How does the Launch Sprint work ?',
      answer:
        "Two weeks : Day 1-2 narrative + visual micro-system. Day 3-7 teaser, Day 8-11  art direction. Day 11–14 social starter kit."
    },
  ];
import { CoffeeVariety, MarketSegment, ImpactStory } from './types';

export const COFFEE_VARIETIES: CoffeeVariety[] = [
  {
    id: 'yirgacheffee',
    name: 'Yirgacheffe',
    description: 'Famous for its complex, fruity flavors, Yirgacheffe coffee offers a unique profile with hints of citrus and floral undertones. Hand-picked at high altitudes and meticulously processed.',
    aroma: 'Intense Floral, Jasmine, Citrus Bloom',
    acidity: 'Vibrant, Bright, Citrusy',
    body: 'Light, Tea-like, Silky',
    notes: ['Floral', 'Citrus', 'Jasmine', 'Tea-like'],
    characteristic: 'Complex & Fruity',
    image: '/1.webp'
  },
  {
    id: 'gesha',
    name: 'Gesha',
    description: 'Renowned for its delicate floral notes and complex sweetness, Gesha coffee is often regarded as one of the finest and most exclusive coffee varieties in the world.',
    aroma: 'Exquisite Jasmine, Orange Blossom, Honey',
    acidity: 'Vibrant, Elegant, Multi-layered',
    body: 'Light, Silky, Refined',
    notes: ['Floral', 'Honey', 'Jasmine', 'Exquisite'],
    characteristic: 'Exquisite & Highly Prized',
    image: '/2.jpg'
  },
  {
    id: 'sidamo',
    name: 'Sidamo',
    description: 'A benchmark of complex Ethiopian coffee, Sidamo coffee boasts a smooth, balanced body with rich fruitiness and subtle hints of sweet spice.',
    aroma: 'Sweet Herbaceous, Citrus, Cardamom',
    acidity: 'Crisp, Balanced, Soft',
    body: 'Smooth, Full, Creamy',
    notes: ['Spice', 'Citrus', 'Smooth', 'Herbaceous'],
    characteristic: 'Smooth & Spicy',
    image: '/3.webp'
  },
  {
    id: 'limmu',
    name: 'Limmu',
    description: 'Known for its floral notes and balanced acidity, Limmu coffee is a favorite among those who enjoy a clean, bright, and highly aromatic cup.',
    aroma: 'Sweet Jasmine, Orange Peel',
    acidity: 'Balanced, Clean, Medium-Bright',
    body: 'Clean, Medium, Velvety',
    notes: ['Floral', 'Balanced', 'Bright', 'Aromatic'],
    characteristic: 'Bright & Aromatic',
    image: '/4.webp'
  },
  {
    id: 'guji',
    name: 'Guji',
    description: 'Guji coffee features a bright acidity and complex sweet flavor, often with floral and stone-fruit notes that make it highly sought after by specialty roasters.',
    aroma: 'Complex Flower, Peach, Nectarine',
    acidity: 'Bright, Sweet, Juicy',
    body: 'Smooth, Elegant, Medium',
    notes: ['Bright Acidity', 'Floral', 'Fruity', 'Peach'],
    characteristic: 'Bright & Complex',
    image: '/5.webp'
  },
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Dry-processed and known for its wild, fruity flavor and heavy, wine-like body, Harrar is a truly distinctive and historic Ethiopian origin.',
    aroma: 'Wild Blueberry, Winey, Blackberry',
    acidity: 'Medium, Fruity, Wine-like',
    body: 'Heavy, Creamy, Full',
    notes: ['Wild Berries', 'Wine-like', 'Distinctive', 'Blueberry'],
    characteristic: 'Wild & Wine-like',
    image: '/6.webp'
  },
  {
    id: 'teppi',
    name: 'Teppi',
    description: 'Grown in the lush, high-rainfall forests of southwestern Ethiopia, Teppi coffee is celebrated for its wild, earthy richness and deep flavor profile.',
    aroma: 'Earthy, Forest Floor, Sandalwood',
    acidity: 'Low, Mild, Soft',
    body: 'Medium-Full, Round',
    notes: ['Earthy', 'Lush Forest', 'Rich', 'Deep Flavor'],
    characteristic: 'Earthy & Rich',
    image: '/7.webp'
  },
  {
    id: 'djimmah',
    name: 'Djimmah',
    description: 'With a bold, full-bodied character and low acidity, Djimmah coffee provides a robust, classic experience with rich hints of dark cocoa.',
    aroma: 'Roasted Cocoa, Nutty, Toasted Barley',
    acidity: 'Low, Soft',
    body: 'Bold, Heavy, Strong',
    notes: ['Dark Chocolate', 'Robust', 'Bold', 'Cocoa'],
    characteristic: 'Bold & Chocolatey',
    image: '/8.webp'
  },
  {
    id: 'lekempti',
    name: 'Lekempti',
    description: 'Offering a sweet, nutty aroma with a subtle hint of warming spice, Lekempti coffee is a well-rounded and versatile variety.',
    aroma: 'Toasted Almond, Cinnamon, Warm Clove',
    acidity: 'Moderate, Gentle',
    body: 'Medium-Full, Rounded',
    notes: ['Nutty', 'Spicy', 'Well-rounded', 'Almond'],
    characteristic: 'Nutty & Spiced',
    image: '/9.webp'
  }
];

export const MARKET_SEGMENTS: MarketSegment[] = [
  {
    id: 'roasters',
    title: 'International Coffee Roasters',
    description: 'We collaborate with specialty roasters seeking high-quality, single-origin Ethiopian coffee that embodies the rich heritage and complexity of Ethiopian flavors. Our beans are meticulously sourced and prepared for shipment to ensure absolute consistency and traceability.',
    icon: 'Flame'
  },
  {
    id: 'cafes',
    title: 'Cafés and Coffee Shops Worldwide',
    description: 'We partner with progressive cafés around the world wishing to offer their customers a true taste of Ethiopia. Our offerings allow coffee shops to share a story of heritage, quality, and craftsmanship, establishing a direct connection to origin.',
    icon: 'Coffee'
  },
  {
    id: 'wholesalers',
    title: 'Distributors and Wholesalers',
    description: 'We supply global distributors interested in importing premium bulk quantities of Ethiopian coffee. We focus on building relationships that value reliability, timely delivery, and consistent quality across multiple container shipments.',
    icon: 'Globe'
  },
  {
    id: 'private-label',
    title: 'Private Label Partners',
    description: 'For brands looking to build or expand their coffee portfolio, we provide premium Ethiopian coffee tailored for private labeling—backed by a strong, reliable, and scalable container-based supply system.',
    icon: 'Briefcase'
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'origin-sourcing',
    title: 'Direct Origin Sourcing',
    description: 'At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with farmers, cooperatives, and suppliers across Ethiopia’s key coffee regions, building long-term relationships based on trust, fairness, and shared growth.',
    category: 'community'
  },
  {
    id: 'empowering-women',
    title: 'Empowering Women at Origin',
    description: 'Our cultivation and sourcing leadership places a strong emphasis on supporting women-led farms and cooperatives within Ethiopia’s coffee sector—encouraging access to training, leadership, fair opportunities, and improved resources to unlock financial independence.',
    category: 'women'
  },
  {
    id: 'sustainable-practices',
    title: 'Preserving Natural Coffee Landscapes',
    description: 'We are committed to responsible sourcing practices that protect Ethiopia’s natural coffee landscapes. We promote sustainable farming methods that preserve soil health, protect biodiversity, and secure the heritage of Ethiopian coffee for generations.',
    category: 'environment'
  }
];

export const GENERAL_INFO = {
  companyName: 'Coffee Container',
  tagline: 'BIG DEAL WITH SIMPLE WAYS',
  introduction: {
    title: 'A Bridge Between Origin and the World',
    text: 'Coffee Container was founded to connect Ethiopia’s finest coffee directly with global buyers through a sourcing system built on trust, consistency, and transparency. As the birthplace of coffee, Ethiopia produces some of the world’s most distinctive varieties, but complex supply chains often make sourcing challenging for international buyers. Our mission is to simplify this process by creating a direct, reliable link between producers and global markets.\n\nWorking closely with farmers and cooperatives, we manage every stage of the supply chain—from sourcing and quality control to logistics and container export. By maintaining strict standards throughout the process, we ensure every shipment delivers consistent quality, full traceability, and dependable service. Our commitment goes beyond supplying coffee; we build long-term partnerships based on integrity, reliability, and shared success, helping our clients source premium Ethiopian coffee with confidence while supporting sustainable growth for producers at origin.'
  },
  mission: {
    title: 'Mission Statement',
    text: 'To connect international coffee buyers directly with Ethiopia’s finest origins through structured, transparent, and highly reliable container-based sourcing networks, simplifying logistics while guaranteeing traceability, shared prosperity, and superior quality.'
  },
  vision: {
    title: 'Vision Statement',
    text: 'To transition the global coffee trade from a fragmented past into a structured, reliable, and sustainable future—standing as a premier origin partner that honors the people, the process, and the heritage behind every container.'
  },
  foundingStory: {
    title: 'Two Perspectives, One Vision: The Founding Story',
    alignment: 'At its core, the founding of Coffee Container is a story of alignment—two perspectives, two backgrounds, and two experiences coming together to build one system that brings clarity, trust, and meaning back into the coffee trade.',
    paragraphs: [
      'Coffee Container represents a shift from fragmented trade to a structured origin-to-market connection—grounded in the belief that every container carries more than beans; it carries the work of farmers, the identity of origin, and the promise of connection between people across the world.',
      'On one side was the farmers—working with deep knowledge passed down through generations, carefully cultivating coffee in rich and diverse landscapes but often receiving limited visibility and volatile market access.',
      'On the other side were international buyers—seeking reliability, quality, and direct connection to origin, but often receiving inconsistent supply and facing complex logistics systems.',
      'Coffee Container was created to bring these two worlds closer together—starting with building strong relationships at origin and shaping a quality-controlled system from the very beginning. As we grew, the solution became clear: redesign the entire flow of trade. This led to our container-based export model, where coffee is organized, processed, verified, and shipped in structured systems ensuring consistency, transparency, and reliability.'
    ],
    founders: [
      {
        name: 'Sourcing & Heritage',
        role: 'Co-Founder • Sourcing & Heritage Lead',
        bio: 'A third-generation coffee entrepreneur deeply rooted in Ethiopia’s coffee culture and family tradition. Her journey began long before the company was formed—growing up within the coffee industry, learning directly from family experience, and witnessing every stage of the coffee process from farm to trade. She developed a deep respect for farmers, an understanding of seasonal cycles, and a strong personal mission: to ensure that coffee is not only exported, but that the people behind it—especially women in farming communities—are empowered, valued, and compensated fairly.'
      },
      {
        name: 'Global Markets',
        role: 'Co-Founder • Global Markets Lead',
        bio: 'A foreign partner with strong cross-cultural understanding, global trade awareness, and clear insight into how international coffee markets operate. Through his experience engaging with different markets and consumer expectations, he identified a consistent gap in the coffee supply chain: buyers were seeking reliability, traceability, and consistent quality, yet sourcing systems at origin often lacked structure, transparency, and predictability. His understanding of what global buyers truly need became one of the key foundations of Coffee Container.'
      }
    ]
  },
  qualityAssurance: {
    title: 'Quality is Not a Final Step, It Begins at Origin',
    subtitle: 'At Coffee Container, quality is a continuous commitment that follows every stage of the supply chain, from the moment coffee is selected on the farm to the final shipment.',
    heartOfTradition: 'Our quality standards are built on deep respect for Ethiopian coffee heritage and the craftsmanship of the farmers we work with. Each batch is carefully evaluated through strict selection, sample analysis, and cup testing to ensure it meets both local excellence and international export standards.',
    consistencyAndTrust: 'We believe consistency builds trust. Every container we export reflects our values of integrity, responsibility, and attention to detail. From farm selection to final shipment, we ensure every step is carefully managed. For us, quality is not just about coffee—it is about honoring the people, the process, and the promise behind every cup.'
  },
  growthPlans: {
    title: '3-5 Year Vision: Scaling Sourcing & Global Reach',
    vision3to5Years: {
      title: 'Our 3-5 Year Vision',
      text: 'Coffee Container aims to expand its global export operations while strengthening direct connections between Ethiopian coffee farmers and international buyers. Our focus is on building a reliable and scalable supply system that ensures every container reflects quality, consistency, and origin integrity.'
    },
    communityImpact: {
      title: 'Empowerment and Community',
      text: 'Alongside expansion, we are committed to supporting Ethiopian farming communities—especially women—through initiatives that promote economic opportunity, skills development, and long-term empowerment.'
    },
    futureCafes: {
      title: 'Coffee Container Cafés',
      text: 'In the long term, we envision creating Coffee Container cafés in international markets as cultural spaces that celebrate Ethiopian coffee heritage. These cafés will serve as bridges between origin and global consumers, offering not just coffee, but a cultural experience rooted in storytelling and connection.'
    },
    summary: 'At every stage of growth, our mission remains the same: to carry Ethiopia’s coffee legacy forward while creating meaningful impact for the people behind it.'
  },
  contact: {
    phone: '+251 92 161 1111',
    email: 'info@coffeecontainer.com',
    website: 'www.coffeecontainer.com',
    location: 'Addis Ababa, Ethiopia',
    ctaHeader: "LET'S BUILD A STRONGER COFFEE CONNECTION",
    ctaSubtitle: 'FROM ETHIOPIA TO THE WORLD',
    ctaMessage: 'Discover the transparency and reliability of a structured, container-based sourcing system. Partner with Coffee Container for premium, traceable, and consistent Ethiopian coffee shipments tailored to your exact needs.'
  }
};

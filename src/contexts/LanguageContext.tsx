import React, { createContext, useContext, useState, useEffect } from 'react';
import { CoffeeVariety, MarketSegment, ImpactStory } from '../types';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  varieties: (CoffeeVariety & { image: string })[];
  marketSegments: MarketSegment[];
  impactStories: ImpactStory[];
  generalInfo: any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Define translation dictionary
const TRANSLATIONS = {
  en: {
    // Navbar
    'nav.story': 'Our Story',
    'nav.varieties': 'The Varieties',
    'nav.sustainability': 'Sustainability',
    'nav.contact': 'Contact Us',
    'nav.requestQuote': 'Request Quote',
    'nav.portal': 'Export Portal',

    // Hero Section
    'hero.title': 'Experience the Most',
    'hero.subtitle': 'Celebrated Coffee in the World',
    'hero.description': 'Connecting Ethiopia\'s finest direct harvests with global roasters through structured container logistics.',
    'hero.explore': 'Explore Catalog',
    'hero.quote': 'Request Quote',
    'hero.storyTitle': 'A Labor of Love in Pursuit of the Best Coffee',
    'hero.storyText1': 'The high-altitude forests and sun-drenched hills of Ethiopia are a jewel of unfathomable natural beauty. It is in this one-of-a-kind landscape that Coffee Container builds direct-sourcing container networks.',
    'hero.storyText2': 'This long journey is our labor of love. We are extremely proud to be supplying traceable coffees that are as awe-inspiring as our surroundings, honoring our generational traditions and connecting local farmers directly with international roasters.',
    'hero.readMore': 'READ MORE',
    'hero.forestTitle': 'Forest of Dreams',
    'hero.forestText': 'Discover the origin of wild specialty coffees. Working within the birthplace of Arabica, our dream is to protect these ancient forest landscapes while making single-origin lots accessible worldwide.\n\nBut the Ethiopian forests taught us to think bigger. Coffee Container is the culmination of these dreams—establishing a structured logistics system that supports smallholder growers while delivering immaculate quality consistency.',
    'hero.peoplesTitle': 'THE PEOPLES OF ORIGIN',
    'hero.peoplesQuote': '"The grower families of Ethiopia are the true inhabitants and protectors of origin."',
    'hero.polaroid1': 'Growers Cooperative',
    'hero.polaroid1Sub': 'HARVESTING SPECIALTY CHERRIES',
    'hero.polaroid2': 'Washing Station Teams',
    'hero.polaroid2Sub': 'RIGOROUS QUALITY SORTING',
    'hero.polaroid3': 'Drying Beds & Traceability',
    'hero.polaroid3Sub': 'EXQUISITE GREEN RESERVES',
    'hero.tasteTitle': 'Our Celebrated Regional Varieties',
    'hero.tasteSub': 'Ethiopia is the birthplace of Arabica coffee. Sourced at high altitudes, our specialty-grade micro-lots deliver distinct cup profiles. Explore our featured origins below.',
    'hero.featuredVariety': 'FEATURED VARIETY',
    'hero.fullCatalog': 'FULL CATALOG',
    'hero.quoteRequest': 'QUOTE REQUEST',
    'hero.sourcing': 'THE SOURCING',
    'hero.processed': 'Processed With Care',
    'hero.processedText': 'We bring out the utmost quality in every single batch through meticulously controlled processing methods. Our networks utilize washed, natural, and anaerobic fermentations, dried precisely on raised African beds.',
    'hero.exploreBtn': 'EXPLORE',
    'hero.stage1Title': '1. Direct Farmer Sourcing',
    'hero.stage1Text': 'We partner directly with over 5,000 smallholder growers and local cooperatives across regions like Yirgacheffe, Sidamo, and Guji. By bypassing redundant brokers, we guarantee fair trade pricing, mutual trust, and full traceable transparency back to individual family micro-lots.',
    'hero.stage2Title': '2. Precision Cherry Selection',
    'hero.stage2Text': 'Our skilled harvest teams manually hand-pick only the fully-ripe, crimson-red cherries. Every single cherry must meet optimal sugar-density levels, leaving under-ripe or over-ripe cherries untouched to preserve pure acidity profiles and zero-defect consistency.',
    'hero.stage3Title': '3. Organic Wet Washing',
    'hero.stage3Text': 'Within hours of harvest, cherries are de-pulped and organic mucilage is fermented naturally. We wash the parchment using high-purity natural mountain spring water channels, utilizing density-based water floatation to float away lower-density beans for unmatched cup cleanliness.',
    'hero.stage4Title': '4. Slow Sun-Drying',
    'hero.stage4Text': 'The parchment is dried slowly for 12 to 20 days on elevated African bamboo beds. Exposed to optimal cool highland winds and gentle sun, our specialists continuously rotate the beans by hand to prevent uneven drying and lock in complex fruity and floral nuances.',
    'hero.sourcingFacts': 'Sourcing Facts',
    'hero.hectares': 'HECTARES TOTAL SOURCE AREA',
    'hero.cooperatives': 'COOPERATIVES ENGAGED',
    'hero.trees': 'TREES PROTECTED',
    'hero.preservation': 'PRESERVATION AREA',
    'hero.sourcingConnection': 'Sourcing Connection',
    'hero.quoteCardTitle': 'Sourcing Intake',
    'hero.quoteCardSub': 'Inquire about current container availability, pricing matrix, and sample lots.',
    'hero.quoteFormName': 'Your Name',
    'hero.quoteFormEmail': 'Email Address',
    'hero.quoteFormCompany': 'Company / Roastery',
    'hero.quoteFormObjective': 'Primary Sourcing Objective',
    'hero.quoteFormMsg': 'Detailed Specifications / Requirements',
    'hero.quoteFormBtnSubmitting': 'Transmitting...',
    'hero.quoteFormBtn': 'Submit Sourcing Request',
    'hero.quoteSuccess': 'Transmission Succeeded',
    'hero.quoteSuccessText': 'Thank you! Your sourcing request has been received. Our origin logistics team will contact you within 24 operational hours.',

    // Story Section
    'story.journey': 'OUR JOURNEY',
    'story.title': 'The Story of Origin',
    'story.header': 'THE ORIGIN OF COFFEE CONTAINER',
    'story.intro': 'Coffee Container was founded on a powerful intersection of two worlds — international market understanding and deep Ethiopian coffee heritage — brought together by a shared frustration and a shared vision to improve how coffee moves from origin to the global stage.\n\nBoth founders saw different sides of the same problem: a disconnected system that needed structure, trust, and long-term thinking. The company was not built as a traditional trading business — it was designed as a structured sourcing and export system centered around container-based supply, where every step from farm selection to final shipment is managed with consistency, accountability, and transparency.',
    'story.landscape': 'This breathtaking landscape is home to Coffee Container, our sourcing system built directly at origin.',
    'story.whoWeAre': 'Who We Are',
    'story.missionTitle': 'Our Vision',
    'story.missionText': 'To transition the global coffee trade from a fragmented past into a structured, reliable, and sustainable future—standing as a premier origin partner that honors the people, the process, and the heritage behind every container.',
    'story.visionText': 'To connect international coffee buyers directly with Ethiopia’s finest origins through structured, transparent, and highly reliable container-based sourcing networks, simplifying logistics while guaranteeing traceability, shared prosperity, and superior quality.',
    'story.cultivatingTitle': 'Sourcing from the Land',
    'story.cultivatingText': 'We quickly got to work, sourcing a premium selection of wild plants from the Gori Gesha forest and establishing traceable washing stations. We spent month after tireless month turning our relationships with local farmers into high-standard, organized sourcing channels capable of exporting some of the world\'s best coffees.\n\nIn the process, we have been helping to create a highly sustainable specialty-coffee industry at the source. Ethiopia has historically had highly fragmented market access for smaller farmers, but now world-class single-origins are available directly and transparently through our structured container models.',
    'story.quote': 'Developing Coffee Container has been a humble story of revival, community, and innovation. We know this is truly just the beginning though, and we’re excited to continue sharing this journey with the specialty-coffee community.',
    'story.exploreSourcing': 'Explore Sourcing',
    'story.ourVarieties': 'Our Varieties',

    // Varieties Section
    'var.taste': 'TASTE & TERROIR',
    'var.title': 'The Regional Varieties',
    'var.header': 'Sourcing Catalog: Regional Varieties',
    'var.p': 'Each bean reflects the unique soil, elevation, microclimate, and meticulous craftsmanship of Ethiopia’s celebrated coffee-growing regions. Explore our 9 world-renowned single-origin varieties, cupped and sorted for absolute consistency.',
    'var.landscape': 'Sun-dried on traditional African raised beds to lock in natural sweetness.',
    'var.portfolio': 'Our Sourcing Portfolio',
    'var.showing': 'Showing {count} of {total} single-origin varieties',
    'var.interactive': 'Interactive Deck',
    'var.bento': 'Bento Board',
    'var.tableau': 'Tableau Lookup',
    'var.search': 'Search varieties (e.g. Yirgacheffe, floral, dark chocolate)...',
    'var.sensoryNote': 'Filter by Sensory Note:',
    'var.allNotes': 'All Notes',
    'var.empty': 'No varieties match your filter criteria.',
    'var.emptySub': 'Try typing another search term or clearing the active filters.',
    'var.viewProfile': 'View Profile',
    'var.aroma': 'Aroma Strength',
    'var.acidity': 'Acidity / Brightness',
    'var.body': 'Body & Texture',
    'var.sensoryBlueprint': 'Sensory Blueprint',
    'var.cuppingNotes': 'Primary Cupping Notes',
    'var.requestSample': 'Request B2B Sample',
    'var.availableFor': 'Available for Roasters & Distributors Worldwide',
    'var.prestigious': 'PRESTIGIOUS ORIGIN',
    'var.regional': 'REGIONAL CLASSIC',
    'var.varietyTerroir': 'Variety & Terroir',
    'var.sourcingConnection': 'Sourcing Connection',
    'var.qgrader': 'Q-GRADER GUARANTEE',
    'var.sourcingExcellence': 'Quality Sourced Direct From Origin',
    'var.sourcingExcellenceText': 'At Coffee Container, quality is a continuous commitment that follows every stage of the supply chain—from farm selection to sample analysis and custom testing. Each batch is meticulously evaluated by certified Q-graders to ensure it meets strict international export standards and preserves genuine origin identity.',
    'var.scaScore': 'SCA Score 85+ Specialty Grade Lots',

    // Sustainability Section
    'sust.ethics': 'ETHICS & VISION',
    'sust.title': 'Sourcing & Sincerity',
    'sust.header': 'Sourcing, Quality & Global Partnerships',
    'sust.intro': 'At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with farmers, cooperatives, and suppliers across Ethiopia\'s key coffee regions, building long-term relationships based on trust, fairness, and shared growth. Our journey ensures absolute container-level consistency and Q-grader verified traceability.',
    'sust.landscape': 'Empowering women-led cooperatives and protecting lush, high-altitude shade coffee forests.',
    'sust.columns': 'EXPLORE THE CORE COLUMNS',
    'sust.ethicsTitle': 'Ethics, Sourcing & Strategy',
    'sust.tab1': 'Sustainability & Sourcing',
    'sust.tab2': 'Target Markets',
    'sust.tab3': 'Competitive Advantage',
    'sust.tab4': '3-5 Year Vision',
    'sust.ethicsPurpose': 'Ethics & Purpose',
    'sust.responsibleSourcing': 'Responsible Sourcing at Origin',
    'sust.responsibleText': 'At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with farmers, cooperatives, and suppliers across Ethiopia\'s key coffee regions, building long-term relationships based on trust, fairness, and shared growth.\n\nOur cultivation and agricultural leadership teams place a profound emphasis on supporting women-led farms and cooperatives within Ethiopia’s coffee sector—providing leadership access, training, fair opportunities, and improved resources to secure long-term financial independence and family prosperity.',
    'sust.empoweringWomen': 'Empowering Women',
    'sust.empoweringText': 'Supporting women-led farms with education, resources, and fair opportunities within Ethiopia’s coffee sector.',
    'sust.stewardship': 'Landscape Stewardship',
    'sust.stewardshipText': 'Responsible sourcing practices that protect Ethiopia’s natural coffee forests, soil health, and biodiversity.',
    'sust.originIntegrity': 'Origin Integrity',
    'sust.originText': 'Ensuring every single-origin lot we procure reflects the genuine sensory identity of its specific microclimate.',
    'sust.qualityAssurance': 'QUALITY ASSURANCE',
    'sust.traceableContainers': '100% Traceable container shipments',
    'sust.globalStrategy': 'Global Supply Strategy',
    'sust.globalPartners': 'Global Partners Who Value Quality',
    'sust.globalText': 'We export premium-grade Ethiopian coffee in bulk containers, tailoring logistics and processing methods to meet specific international business requirements.',
    'sust.segment': 'SEGMENT',
    'sust.roastersNote': '• ROASTER-READY LOTS',
    'sust.cafesNote': '• SINGLE-ORIGIN TRACEABILITY',
    'sust.wholesalersNote': '• SCALE SOURCING',
    'sust.privateNote': '• BRAND CUSTOMIZATION',
    'sust.compDifference': 'The Coffee Container Difference',
    'sust.compEdge': 'Our Competitive Edge',
    'sust.compEdgeText1': 'Rooted in deep knowledge of Ethiopian coffee traditions passed down through family generations, combined with a sophisticated modern understanding of international trade logistics. We speak both the language of origin farms and the language of international container shipment systems. This balance is what sets us apart from standard export operations.',
    'sust.compEdgeText2': 'Every container reflects integrity, responsibility, and attention to detail. We manage the fragmented elements of local sourcing, organizing them into predictable, certified, and fully documented shipping container systems. We build long-term relationships based on direct communication, reliable delivery, and absolute quality consistency.',
    'sust.brandStrategy': 'Brand Strategy',
    'sust.sourcingConnectionText': 'Our brand represents a journey that begins in Ethiopia\'s coffee-growing regions and extends to global markets through every container we export. It honors the people behind the coffee while serving as a trusted origin partner.',
    'sust.keyColumns': 'Key Sourcing Columns:',
    'sust.traceabilityTitle': 'Digital Traceability:',
    'sust.traceabilityDesc': 'Showcasing the real journey of every container back to specific farmer networks.',
    'sust.originFocusTitle': 'Origin-focused Sourcing:',
    'sust.originFocusDesc': 'Highlighting direct buyer engagements that pay premiums to growers at origin.',
    'sust.strategicOutlook': 'Strategic Outlook',
    'sust.organicShade': 'Organic shade canopy',

    // Export Portal
    'exp.title': 'B2B Sourcing Portal',
    'exp.sub': 'Build your container shipment, calculate metrics, and request formal commercial quotes directly from origin.',
    'exp.specs': 'Container Sourcing Specifications',
    'exp.specsSub': 'Provide your technical roasting and logistics requirements below.',
    'exp.varietyLabel': 'Select Coffee Variety',
    'exp.beanType': 'Preferred State',
    'exp.green': 'Green Coffee (Raw Beans)',
    'exp.roasted': 'Roasted Coffee (Wholesale)',
    'exp.volume': 'Target Sourcing Volume',
    'exp.customMessage': 'Custom Processing & Shipping Instructions',
    'exp.customMessagePlaceholder': 'Specify any unique requirements (e.g. anaerobic fermentation, specific moisture level, custom container lining, target FOB price)...',
    'exp.btnSubmit': 'Request Commercial Quote',
    'exp.calcTitle': 'Logistics & Volume Estimator',
    'exp.calcSub': 'Real-time estimates based on standard international shipping container volumes.',
    'exp.estimatedBags': 'Estimated Bags',
    'exp.totalWeight': 'Total Net Weight',
    'exp.shippingVolume': 'Container Share',
    'exp.leadTime': 'Estimated Port Delivery',
    'exp.weeks': 'weeks',
    'exp.disclaimer': 'Logistics estimates correspond to standard 60kg jute bags packed inside dry cargo containers. Lead times depend on regional harvest schedules and Djibouti port queues.',

    // Contact Page
    'cont.getInTouch': 'GET IN TOUCH',
    'cont.connect': 'Connect with Origin',
    'cont.directComm': 'DIRECT COMMUNICATION & COLLABORATION',
    'cont.directP': 'We are committed to providing structured, transparent, and direct pathways for international green coffee sourcing. Reach out directly to our leadership teams, schedule origin visits, or inquire about current coffee stocks.',
    'cont.officeHub': 'OFFICE & LOGISTICS HUB',
    'cont.corpHeadquarters': 'Corporate Headquarters',
    'cont.hqLocation': 'HQ Location',
    'cont.directCall': 'Direct Call',
    'cont.electronicMail': 'Electronic Mail',
    'cont.officialSite': 'Official Site',
    'cont.operationalTime': 'OPERATIONAL TIME',
    'cont.workingHours': 'Sourcing & Working Hours',
    'cont.monFri': 'Monday – Friday',
    'cont.sat': 'Saturday',
    'cont.sun': 'Sunday',
    'cont.closed': 'Closed',
    'cont.eatNote': '* Note: Sourcing schedules correspond to East Africa Time (EAT) / UTC+3. Sample evaluations and cupping tours must be arranged at least 48 hours in advance.',
    'cont.intake': 'Direct Inquiry Intake',
    'cont.intakeSub': 'Fill out our secure sourcing intake form below. An origin communications coordinator will process your message and respond within 24 operational hours.',
    'cont.fullName': 'Your Full Name *',
    'cont.corpEmail': 'Corporate Email *',
    'cont.compRoastery': 'Company / Roastery',
    'cont.destCountry': 'Destination Country',
    'cont.primaryObj': 'Primary Sourcing Objective',
    'cont.fclPricing': 'FCL Container Pricing / Direct Shipment',
    'cont.greenSample': 'B2B Cupping Sample Request',
    'cont.customSourcing': 'Custom Regional Sourcing Partnership',
    'cont.generalCollab': 'General Business Collaboration',
    'cont.detailedMsg': 'Detailed Message / Specifications *',
    'cont.detailedPlaceholder': 'Specify regions (e.g. Yirgacheffe, Guji, Sidamo), requested cupping grades, volumes, and preferred shipment schedules...',
    'cont.transmitting': 'Transmitting Sourcing Request...',
    'cont.submitIntake': 'Submit Sourcing Intake',
    'cont.locationMap': 'LOCATION AND MAP',
    'cont.sampleRoom': 'Addis Ababa Head Office & Sample Room',
    'cont.sampleRoomSub': 'Visit our central office to explore green samples and cup with our certified Q-graders. Close proximity to Bole International Airport (ADD).',
    'cont.locationCoord': 'Location Coordinate: Bole District, Addis Ababa, Ethiopia',
    'cont.transportArrangements': '• Direct transport arrangements available for foreign buyer groups',

    // Cookie Banner
    'cookie.title': 'We Value Your Sourcing Privacy',
    'cookie.desc': 'We use cookies to analyze portal traffic, customize logistics estimators, and guarantee seamless navigation. By accepting, you consent to our Q-grader verified cookie policy.',
    'cookie.accept': 'Accept Sourcing Cookies',
    'cookie.reject': 'Reject Non-Essential',

    // Footer
    'foot.about': 'Coffee Container is a premier structured sourcing and exporting company, bridging the gap between Ethiopian smallholder cooperatives and global specialty roasters. We supply highly traceable, consistent, and certified shipping container lots directly from origin.',
    'foot.useful': 'Useful Pathways',
    'foot.copyright': '© 2026 Coffee Container. All rights reserved. Sourced & exported with full traceability from Addis Ababa, Ethiopia.'
  },
  ar: {
    // Navbar
    'nav.story': 'قصتنا',
    'nav.varieties': 'سلالات القهوة',
    'nav.sustainability': 'الاستدامة والتوريد',
    'nav.contact': 'اتصل بنا',
    'nav.requestQuote': 'طلب تسعيرة',
    'nav.portal': 'بوابة التصدير',

    // Hero Section
    'hero.title': 'تذوق أرقى وأشهر',
    'hero.subtitle': 'أنواع القهوة في العالم',
    'hero.description': 'نربط أرقى محاصيل البن الإثيوبي المباشرة بالمحامص العالمية عبر لوجستيات حاويات منظمة وآمنة.',
    'hero.explore': 'استكشف الدليل',
    'hero.quote': 'طلب تسعيرة حاوية',
    'hero.storyTitle': 'شغف وتفانٍ في السعي وراء أفضل فنجان قهوة',
    'hero.storyText1': 'تعتبر الغابات المرتفعة والتلال المشمسة في إثيوبيا جوهرة فريدة من الجمال الطبيعي الخلاب. في هذا المشهد الطبيعي الساحر، تبني شركة "كوفي كونتينر" شبكات توريد الحاويات مباشرة من المصدر.',
    'hero.storyText2': 'هذه الرحلة الطويلة هي تجسيد لشغفنا. نحن فخورون للغاية بتقديم قهوة موثقة وممتازة تثير الإعجاب تماماً كبيئتنا الطبيعية، مكرمين تقاليد أجدادنا وربط المزارعين المحليين مباشرة بالمحامص الدولية.',
    'hero.readMore': 'اقرأ المزيد',
    'hero.forestTitle': 'غابة الأحلام',
    'hero.forestText': 'اكتشف منشأ قهوة الاختصاص البرية الرائعة. من خلال عملنا في الموطن الأصلي لبن أرابيكا، نسعى لحماية غابات البن العتيقة هذه مع إتاحة المحاصيل المتميزة للمشترين حول العالم.\n\nلكن الغابات الإثيوبية علمتنا أن نحلم على نطاق أوسع. تمثل "كوفي كونتينر" ذروة هذه الأحلام — حيث أسست نظاماً لوجستياً مهيكلاً يدعم صغار المزارعين مع ضمان أعلى معايير الجودة والاتساق.',
    'hero.peoplesTitle': 'أهل المنشأ ومزارعو الأرض',
    'hero.peoplesQuote': '"إن عائلات المزارعين في إثيوبيا هم الحماة الحقيقيون والأوصياء المخلصون على منشأ القهوة الأصيل."',
    'hero.polaroid1': 'تعاونيات المزارعين',
    'hero.polaroid1Sub': 'حصاد كرزات البن المختصة يدوياً',
    'hero.polaroid2': 'فرق محطات المعالجة والغسيل',
    'hero.polaroid2Sub': 'فرز دقيق وضمان الجودة الصارمة',
    'hero.polaroid3': 'أسرة التجفيف والتتبع',
    'hero.polaroid3Sub': 'محاصيل خضراء فاخرة وموثقة',
    'hero.tasteTitle': 'سلالاتنا الإقليمية الشهيرة',
    'hero.tasteSub': 'إثيوبيا هي المهد الأول لبن أرابيكا. نوفر محاصيل عالية الجودة من المرتفعات لتمنحكم مذاقاً فريداً ومميزاً. استكشف مناطق المنشأ الشهيرة بالأسفل.',
    'hero.featuredVariety': 'سلالة مميزة',
    'hero.fullCatalog': 'الدليل الكامل',
    'hero.quoteRequest': 'طلب تسعيرة',
    'hero.sourcing': 'عملية التوريد والفرز',
    'hero.processed': 'معالجة احترافية بعناية فائقة',
    'hero.processedText': 'نبرز أقصى درجات الجودة في كل دفعة بن من خلال طرق معالجة خاضعة لرقابة صارمة. تستخدم شبكاتنا طرق المعالجة المغسولة، الطبيعية، واللا هوائية، وتجفف بدقة على أسرة أفريقية مرتفعة.',
    'hero.exploreBtn': 'استكشف',
    'hero.stage1Title': '١. مصادر مباشرة من المزارعين',
    'hero.stage1Text': 'نتعاون مباشرة مع أكثر من ٥,٠٠٠ مزارع صغير وجمعيات تعاونية محلية في مناطق ييرغاشيفي وسيدامو وغوجي. عبر استبعاد الوسطاء، نضمن أسعار تجارة عادلة ومثمرة، وتتبعاً كاملاً لكل كيس قهوة إلى مزارع العائلات الصغيرة.',
    'hero.stage2Title': '٢. قطف الكرزات فائقة النضج',
    'hero.stage2Text': 'تقوم فرق الحصاد المتخصصة بقطف كرزات البن الحمراء القرمزية الناضجة تماماً بشكل يدوي دقيق. تخضع كل كرزة لفحص نسبة تركيز السكريات الطبيعية، ويُستبعد البن غير الناضج لضمان حموضة نظيفة وخلو المحصول من أي عيوب.',
    'hero.stage3Title': '٣. غسيل ومعالجة رطبة نقية',
    'hero.stage3Text': 'خلال ساعات من الحصاد، تُزال القشرة الخارجية وتُخمر الكرزات طبيعياً بشكل عضوي. نغسل حبوب البن باستخدام مياه الينابيع الجبلية الجارية عالية النقاء، حيث نعتمد على الفرز بكثافة المياه لعزل الحبوب الخفيفة والحصول على كوب قهوة شديد النقاء والجمال.',
    'hero.stage4Title': '٤. تجفيف بطيء تحت أشعة الشمس',
    'hero.stage4Text': 'تُجفف حبوب البن ببطء لفترة تتراوح بين ١٢ إلى ٢٠ يوماً على أسرة خيزران أفريقية مرتفعة. تحت نسمات المرتفعات الباردة وأشعة الشمس الدافئة، يقوم مختصونا بتقليب الحبوب يدوياً باستمرار لضمان تجفيف متوازن وحفظ النكهات الفاكهية والزهرية النادرة.',
    'hero.sourcingFacts': 'حقائق التوريد والتصدير',
    'hero.hectares': 'هكتار إجمالي مساحة التوريد',
    'hero.cooperatives': 'جمعية تعاونية شريكة',
    'hero.trees': 'شجرة محمية',
    'hero.preservation': 'مساحة محمية بالكامل',
    'hero.sourcingConnection': 'روابط التوريد والأرض',
    'hero.quoteCardTitle': 'طلب فحص وتوريد',
    'hero.quoteCardSub': 'استعلم عن توافر الحاويات الحالية، مصفوفة الأسعار، وطلب عينات الفحص والفرز.',
    'hero.quoteFormName': 'الاسم الكامل',
    'hero.quoteFormEmail': 'البريد الإلكتروني للشركة',
    'hero.quoteFormCompany': 'الشركة / المحمصة',
    'hero.quoteFormObjective': 'هدف التوريد الأساسي',
    'hero.quoteFormMsg': 'المواصفات والمتطلبات بالتفصيل',
    'hero.quoteFormBtnSubmitting': 'جاري الإرسال والتسجيل...',
    'hero.quoteFormBtn': 'إرسال طلب التوريد',
    'hero.quoteSuccess': 'تم الإرسال بنجاح',
    'hero.quoteSuccessText': 'شكراً لك! تم استلام طلبك اللوجستي بنجاح. سيتواصل معك فريق الشحن واللوجستيات لدينا في غضون ٢٤ ساعة عمل.',

    // Story Section
    'story.journey': 'رحلتنا وقيمنا',
    'story.title': 'قصة المنشأ والأرض',
    'story.header': 'نشأة وتأسيس كوفي كونتينر',
    'story.intro': 'تأسست "كوفي كونتينر" عند تقاطع قوي ومثمر بين عالمين — الفهم العميق لمتطلبات السوق الدولية والتراث العريق الممتد لأجيال في زراعة وتجارة البن الإثيوبي. اجتمع الشريكان على رؤية واحدة تهدف لتحسين وتسهيل تصدير البن من موطنه الأصلي إلى الساحة العالمية.\n\nلقد رأى كلاهما جوانب مختلفة من المشكلة ذاتها: نظام تصدير مفكك كان بحاجة ماسة إلى الهيكلة والثقة والتفكير المستدام طويل الأجل. لم تُؤسس الشركة كعمل تجاري تقليدي سريع — بل صُممت كمنظومة تصدير وتوريد مهيكلة تركز على شحن الحاويات الموثقة بالكامل، حيث تخضع كل مرحلة، بدءاً من اختيار مناطق المزارعين إلى التحميل النهائي، لإشراف صارم يضمن الاتساق والشفافية والمسؤولية.',
    'story.landscape': 'هذه الطبيعة الخلابة هي الموطن الأصلي لـ كوفي كونتينر، حيث أسسنا نظام التوريد الخاص بنا مباشرة عند المنشأ.',
    'story.whoWeAre': 'من نحن ومؤسسو الشركة',
    'story.missionTitle': 'رؤيتنا',
    'story.missionText': 'نقل قطاع تجارة البن العالمي من الأساليب المفككة السابقة إلى مستقبل منظم وموثوق ومستدام — لنكون شريك المنشأ الرائد الذي يكرم الجهود والتقاليد خلف كل حاوية نصدرها.',
    'story.visionText': 'ربط مستوردي ومشتري البن الدوليين بأفضل مناطق إنتاج القهوة في إثيوبيا مباشرة عبر شبكات توريد منظمة وشفافة تعتمد على الحاويات، مما يسهل اللوجستيات مع ضمان تتبع المحصول، والازدهار المشترك، والجودة الاستثنائية.',
    'story.cultivatingTitle': 'التوريد المباشر والشراكة مع المزارعين',
    'story.cultivatingText': 'بدأنا العمل سريعاً لتوريد نخبة متميزة من محاصيل الغابات البرية في "غوري غيشا" وتأسيس محطات غسيل ومعالجة قابلة للتتبع بالكامل. لقد قضينا شهوراً طويلة من العمل الدؤوب لبناء قنوات توريد منظمة وعالية المعايير مع المزارعين المحليين تتيح تصدير أفضل أنواع البن الإثيوبي في العالم.\n\nمن خلال هذه الجهود، نساهم بنشاط في بناء قطاع بن مختص ومستدام عند المنشأ. لطالما عانى صغار المزارعين في إثيوبيا تاريخياً من صعوبة الوصول إلى الأسواق العالمية، ولكن اليوم باتت المحاصيل الفاخرة ذات المنشأ الواحد متاحة بشكل مباشر وشفاف تماماً عبر نماذج حاويات التصدير المهيكلة لدينا.',
    'story.quote': 'إن تطوير "كوفي كونتينر" قصة متواضعة من الإحياء، والعمل المجتمعي، والابتكار المستمر. نحن ندرك تماماً أن هذه مجرد بداية لرحلتنا، ويسعدنا جداً مشاركة هذا الشغف والتقدم مع مجتمع القهوة المختصة العالمي.',
    'story.exploreSourcing': 'استكشف التوريد',
    'story.ourVarieties': 'أنواع البن لدينا',

    // Varieties Section
    'var.taste': 'المذاق والأرض المتميزة',
    'var.title': 'السلالات والمحاصيل الإقليمية',
    'var.header': 'دليل التوريد: سلالات البن الإقليمية الفاخرة',
    'var.p': 'تعكس كل حبة بن جودة التربة، الارتفاع، المناخ الدقيق، والحرفية العالية لمناطق زراعة البن الشهيرة في إثيوبيا. استكشف محاصيلنا التسعة الفاخرة ذات المنشأ الواحد، والمصنفة والمقيمة لضمان أعلى مستويات الثبات والتميز الطبيعي.',
    'var.landscape': 'مجفف تحت أشعة الشمس على أسرة أفريقية مرتفعة تقليدية لتركيز الحلاوة الطبيعية للحبوب.',
    'var.portfolio': 'محفظة التوريد والتصدير لدينا',
    'var.showing': 'عرض {count} من أصل {total} من السلالات الفاخرة ذات المنشأ الواحد',
    'var.interactive': 'العرض التفاعلي',
    'var.bento': 'لوحة بينتو المنظمة',
    'var.tableau': 'البحث السريع المجدول',
    'var.search': 'ابحث عن السلالات (مثال: يرغاشيفي، نكهة الياسمين، شوكولاتة داكنة)...',
    'var.sensoryNote': 'تصفية حسب الإيحاءات العطرية والذوقية:',
    'var.allNotes': 'جميع الإيحاءات',
    'var.empty': 'لا توجد سلالات تطابق معايير التصفية والبحث الخاصة بك.',
    'var.emptySub': 'يرجى تجربة مصطلح بحث آخر أو مساعدة الفلاتر النشطة.',
    'var.viewProfile': 'عرض الملف التعريفي',
    'var.aroma': 'قوة الشذى والعبير',
    'var.acidity': 'الحمضية والوضوح',
    'var.body': 'القوام والملمس في الفم',
    'var.sensoryBlueprint': 'المخطط الحسي والتقييم الحرفي',
    'var.cuppingNotes': 'إيحاءات التذوق والتقييم الأساسية',
    'var.requestSample': 'طلب عينة تجارية (B2B)',
    'var.availableFor': 'متاح للمحامص والموزعين الدوليين حول العالم مع شهادات الفحص والفرز',
    'var.prestigious': 'منشأ مرموق وتاريخي فاخر',
    'var.regional': 'كلاسيكي إقليمي شهير',
    'var.varietyTerroir': 'السلالة وخصائص الأرض والمناخ',
    'var.sourcingConnection': 'روابط التوريد والموثوقية',
    'var.qgrader': 'ضمان ومصادقة مقيمي الجودة المعتمدين (Q-Graders)',
    'var.sourcingExcellence': 'جودة استثنائية مستوردة مباشرة من المنشأ الأصلي',
    'var.sourcingExcellenceText': 'في "كوفي كونتينر"، نعتبر الجودة التزاماً مستمراً يرافق كل مرحلة من مراحل سلسلة التوريد — من اختيار المزارعين إلى فحص وتحليل العينات المخبرية وعمليات Cupping المكثفة. يتم تقييم كل دفعة وتصنيفها بدقة تامة من قبل خبراء تقييم معتمدين (Q-graders) لضمان تلبيتها لأشد المعايير الدولية لتصدير البن الفاخر.',
    'var.scaScore': 'علامات جودة تزيد عن +٨٥ وفق جمعية القهوة المختصة (SCA)',

    // Sustainability Section
    'sust.ethics': 'الأخلاق والرؤية',
    'sust.title': 'الأصالة وأمانة التوريد',
    'sust.header': 'التوريد المسؤول، جودة المحاصيل، والشراكات العالمية',
    'sust.intro': 'في كوفي كونتينر، تنبع قيم التوريد لدينا من احترام الإنسان والبيئة والمنشأ الأصيل. نعمل جنباً إلى جنب مع المزارعين والتعاونيات في شتى أرجاء إثيوبيا، لبناء شراكات مستدامة تعتمد على العدالة والنمو المتبادل. نضمن ثبات شحنات الحاويات وتتبعها الشامل ومصادقتها المعتمدة.',
    'sust.landscape': 'تمكين التعاونيات النسائية الرائدة وحماية الغابات الكثيفة المظللة المرتفعة.',
    'sust.columns': 'استكشف ركائز عملنا الأساسية',
    'sust.ethicsTitle': 'الأخلاقيات، التوريد، والاستراتيجية',
    'sust.tab1': 'الاستدامة والتوريد المسؤول',
    'sust.tab2': 'الأسواق المستهدفة',
    'sust.tab3': 'الميزة التنافسية',
    'sust.tab4': 'الرؤية الخمسية (٣-٥ سنوات)',
    'sust.ethicsPurpose': 'الأخلاقيات والمسؤولية والمصداقية',
    'sust.responsibleSourcing': 'التوريد المسؤول والمباشر عند المنشأ',
    'sust.responsibleText': 'في "كوفي كونتينر"، تنبع أساليب التوريد لدينا من الإيمان العميق بأهمية دعم الإنسان والبيئة والمنشأ الأصيل. نحن نعمل جنباً إلى جنب مع صغار المزارعين والتعاونيات والشركاء المحليين لبناء علاقات طويلة الأجل تضمن المنفعة المتبادلة والعدالة.\n\nتضع فرق قيادة التوريد والزراعة لدينا تركيزاً بالغاً على دعم وإشراك المزارعات والتعاونيات النسائية الرائدة في قطاع القهوة الإثيوبي — من خلال إتاحة فرص التدريب والقيادة والأسعار العادلة لتمكينهن وتحقيق الاستقلال المالي والرفاه لعائلاتهن.',
    'sust.empoweringWomen': 'تمكين المرأة العاملة في المنشأ',
    'sust.empoweringText': 'دعم وإشراك المزارعات والتعاونيات النسائية بالموارد والتعليم وفرص العمل العادلة لتعزيز ريادتهن واستقلالهن المالي.',
    'sust.stewardship': 'الأمانة البيئية وحماية الغابات Canopy',
    'sust.stewardshipText': 'ممارسات توريد مسؤولة تضمن بقاء غابات البن الطبيعية وتنوعها البيولوجي وخصوبة تربتها للأجيال القادمة.',
    'sust.originIntegrity': 'أمانة وحفظ المنشأ وتتبع الشحنات',
    'sust.originText': 'التحقق من أن كل دفعة بن نصدرها تعبر بدقة عن الخصائص الفريدة والإيحاءات الغنية لبيئتها الجغرافية المتميزة.',
    'sust.qualityAssurance': 'ضمان الجودة والرقابة الصارمة',
    'sust.traceableContainers': 'حاويات تصدير خاضعة للتتبع الكامل بنسبة ١٠٠٪ وبشكل رقمي متطور',
    'sust.globalStrategy': 'استراتيجية التوريد واللوجستيات العالمية',
    'sust.globalPartners': 'شركاء دوليون يقدرون التميز والجودة',
    'sust.globalText': 'نصدر البن الإثيوبي الفاخر في حاويات شحن مجهزة بالكامل، ونقوم بتهيئة أساليب الشحن والمعالجة والفرز لتناسب تطلعات واحتياجات كبرى الشركات والمحامص العالمية.',
    'sust.segment': 'قطاع الأعمال',
    'sust.roastersNote': '• دفعات جاهزة للتحميص الفاخر وفق أعلى الدرجات التجارية',
    'sust.cafesNote': '• موثوقية التتبع للمحاصيل ذات المنشأ الواحد لتقديم قصة فريدة',
    'sust.wholesalersNote': '• توريد كميات ضخمة ومستمرة بعقود توريد طويلة المدى وآمنة',
    'sust.privateNote': '• تخصيص شحنات خاصة لعلامتكم التجارية مع تعبئة وحفظ فائق الدقة',
    'sust.compDifference': 'الفروق الجوهرية لـ كوفي كونتينر',
    'sust.compEdge': 'ميزتنا التنافسية وعناصر قوتنا',
    'sust.compEdgeText1': 'نجمع بين الإرث العريق الممتد لأجيال في زراعة وفرز البن الإثيوبي وبين الفهم الحديث والمتكامل لعمليات الشحن واللوجستيات الدولية. نتحدث لغة المزارعين والتعاونيات في قلب الغابات الإثيوبية، وفي الوقت ذاته نتحدث لغة كبرى شركات التحميص والموانئ العالمية. هذا التوازن اللوجستي الفريد هو ما يضمن اتساق أعمالنا.',
    'sust.compEdgeText2': 'تجسد كل حاوية نشحنها قيم المسؤولية والالتزام والدقة البالغة. نتولى إدارة كافة التفاصيل اللوجستية والمحلية المعقدة، لننظمها في نظام حاويات شحن مستقر وموثق ومرخص بالكامل. نبني شراكاتنا على أسس التواصل الصريح والواضح والتوريد الثابت المستقر.',
    'sust.brandStrategy': 'استراتيجية الهوية والعلامة التجارية',
    'sust.sourcingConnectionText': 'تمثل هويتنا رحلة استثنائية تبدأ من تلال وغابات إثيوبيا الخصبة وتنتهي في أكواب عشاق القهوة حول العالم عبر كل حاوية تصدير نشحنها. نكرم المزارع ونسعى لنكون شريك التوريد الأكثر موثوقية وأمانة.',
    'sust.keyColumns': 'الركائز الاستراتيجية للتوريد والتصدير:',
    'sust.traceabilityTitle': 'التتبع الرقمي الشامل:',
    'sust.traceabilityDesc': 'توضيح المسار الحقيقي لكل حاوية شحن وتوثيق صلتها بالتعاونيات الزراعية المحلية.',
    'sust.originFocusTitle': 'التوريد المتمركز حول الأرض والإنسان:',
    'sust.originFocusDesc': 'إبراز الشراكات المباشرة التي تضمن دفع عوائد عادلة ومجزية للمزارعين وعائلاتهم.',
    'sust.strategicOutlook': 'التطلعات والآفاق المستقبلية',
    'sust.organicShade': 'حماية وتنمية الغابات المظللة للبن العضوي',

    // Export Portal
    'exp.title': 'بوابة تصدير حاويات البن (B2B)',
    'exp.sub': 'قم بتهيئة حاوية الشحن الخاصة بك، وحساب المؤشرات الفنية، وطلب تسعيرة تجارية معتمدة مباشرة من قلب إثيوبيا.',
    'exp.specs': 'مواصفات ومتطلبات حاوية الشحن',
    'exp.specsSub': 'حدد متطلبات المعالجة والفرز واللوجستيات الفنية بالأسفل.',
    'exp.varietyLabel': 'اختر سلالة ومحصول القهوة',
    'exp.beanType': 'الحالة المفضلة لحبوب البن',
    'exp.green': 'حبوب بن خضراء خام (بن غير محمص للصناعة والمحامص)',
    'exp.roasted': 'حبوب بن محمصة بالكامل (جملة للعلامات والمقاهي)',
    'exp.volume': 'حجم التوريد المطلوب (بالحاويات أو الأكياس)',
    'exp.customMessage': 'متطلبات الفرز والتحميل والمعالجة الخاصة',
    'exp.customMessagePlaceholder': 'حدد أي شروط خاصة (مثل: المعالجة اللاهوائية، نسبة الرطوبة المطلوبة، تبطين الحاوية لحمايتها من الرطوبة، السعر المستهدف FOB)...',
    'exp.btnSubmit': 'إرسال طلب تسعير وتجهيز الحاوية',
    'exp.calcTitle': 'المقدر اللوجستي التفاعلي لوزن الحاويات',
    'exp.calcSub': 'تقديرات فورية مبنية على الأحجام المعيارية لحاويات الشحن الجاف الدولية.',
    'exp.estimatedBags': 'عدد الأكياس التقديري',
    'exp.totalWeight': 'الوزن الصافي الإجمالي للبن',
    'exp.shippingVolume': 'مساحة الحاوية المستهلكة',
    'exp.leadTime': 'موعد التسليم المتوقع للميناء',
    'exp.weeks': 'أسابيع عمل',
    'exp.disclaimer': 'التقديرات اللوجستية مبنية على تحميل أكياس الجوت القياسية (٦٠ كجم) داخل حاويات الشحن الجاف التقليدية. تختلف أوقات التسليم اللوجستي باختلاف مواسم الحصاد وجداول الشحن البري والبحري لميناء جيبوتي.',

    // Contact Page
    'cont.getInTouch': 'قنوات التواصل المباشر',
    'cont.connect': 'اتصل مباشرة بالمنشأ والمصدر الرئيسي',
    'cont.directComm': 'قنوات تواصل مباشر وتعاون لوجستي سريع',
    'cont.directP': 'نحن ملتزمون بتوفير طرق واضحة ومباشرة لتنسيق عمليات تصدير وتوريد البن الأخضر والمحمص. اتصل بنا مباشرة لمناقشة العقود، الاستفسار عن المخزونات الحالية، أو لتنسيق زيارات فحص وتقييم المحاصيل.',
    'cont.officeHub': 'المكتب اللوجستي المركزي ومختبر فرز العينات',
    'cont.corpHeadquarters': 'المقر الرئيسي للشركة وإدارة التصدير',
    'cont.hqLocation': 'عنوان المقر الرئيسي',
    'cont.directCall': 'الاتصال الهاتفي المباشر',
    'cont.electronicMail': 'المراسلات الإلكترونية الرسمية',
    'cont.officialSite': 'الموقع الرسمي للشركة',
    'cont.operationalTime': 'أوقات وساعات العمل واللوجستيات',
    'cont.workingHours': 'أوقات العمل واستقبال المشترين الدوليين',
    'cont.monFri': 'الاثنين – الجمعة',
    'cont.sat': 'السبت',
    'cont.sun': 'الأحد',
    'cont.closed': 'عطلة رسمية مغلق',
    'cont.eatNote': '* ملاحظة: جميع توقيتات التوريد والعمل تتبع توقيت شرق أفريقيا (EAT) / UTC+3. يجب تنسيق زيارات مختبر التذوق وفحص العينات الخضراء مسبقاً قبل ٤٨ ساعة عمل على الأقل.',
    'cont.intake': 'نموذج تسجيل واستقبال عروض الشراء والتوريد',
    'cont.intakeSub': 'يرجى ملء نموذج التوريد بدقة بالأسفل. سيقوم منسق الاتصال اللوجستي بفحص طلبكم والرد بملف التسعير الفني خلال ٢٤ ساعة عمل كحد أقصى.',
    'cont.fullName': 'الاسم الكامل للمتصل *',
    'cont.corpEmail': 'البريد الإلكتروني الرسمي للشركة *',
    'cont.compRoastery': 'الشركة / المحمصة التجارية',
    'cont.destCountry': 'بلد الوصول / ميناء التسليم المستهدف',
    'cont.primaryObj': 'الهدف الأساسي من طلب التوريد',
    'cont.fclPricing': 'تسعير حاويات كاملة FCL / تصدير مباشر',
    'cont.greenSample': 'طلب عينات خضراء مخبرية للتقييم والتذوق Cupping',
    'cont.customSourcing': 'عقد شراكة توريد مخصصة لمنتج إقليمي معين',
    'cont.generalCollab': 'استفسار تجاري عام / فرص تعاون وشراكة',
    'cont.detailedMsg': 'تفاصيل الطلب والمواصفات الفنية المطلوبة *',
    'cont.detailedPlaceholder': 'يرجى كتابة أسماء المناطق المفضلة لديك (مثال: يرغاشيفي، غوجي، سيدامو)، درجات الفرز والتقييم، الكميات المطلوبة، وتفضيلات مواعيد الشحن البري والبحري المستهدفة...',
    'cont.transmitting': 'جاري تسجيل وإرسال بيانات الطلب اللوجستي الموثق...',
    'cont.submitIntake': 'إرسال طلب التوريد وتثبيته',
    'cont.locationMap': 'الموقع الجغرافي وخريطة الوصول للمقر',
    'cont.sampleRoom': 'مقر الإدارة المركزي وغرفة cupping لتذوق العينات',
    'cont.sampleRoomSub': 'تفضل بزيارة المقر الرئيسي ومختبر تقييم العينات لتذوق البن مع مقيمي الجودة المعتمدين لدينا. يبعد مقرنا مسافة قصيرة للغاية عن مطار بولي الدولي (ADD) في قلب العاصمة.',
    'cont.locationCoord': 'إحداثيات الموقع: منطقة بولي، أديس أبابا، إثيوبيا',
    'cont.transportArrangements': '• تتوفر خدمة الاستقبال والترتيبات اللوجستية لوفود الشراء الأجنبية الزائرة',

    // Cookie Banner
    'cookie.title': 'نحن نحترم خصوصية تصفحكم وتطلعاتكم اللوجستية',
    'cookie.desc': 'نستخدم ملفات تعريف الارتباط الآمنة لتحليل حركة التصفح وتحسين أداء مقدر حاويات الشحن اللوجستي لتقديم تجربة تصفح متكاملة وخالية من المتاعب. بالموافقة، تمنحنا الموافقة على سياستنا الآمنة والخاضعة لإشراف الفحص المتخصص لدينا.',
    'cookie.accept': 'الموافقة وقبول ملفات تعريف الارتباط',
    'cookie.reject': 'رفض الملفات غير الضرورية',

    // Footer
    'foot.about': 'تعد كوفي كونتينر شركة توريد وتصدير بن رائدة ومنظمة بالكامل، تعمل كجسر تواصل آمن ومستدام يربط بين الجمعيات التعاونية المحلية لصغار المزارعين في إثيوبيا وبين كبرى المحامص والمستوردين للبن المختص حول العالم. نوفر حاويات شحن فائقة التتبع والاتساق وبأعلى شهادات الموثوقية.',
    'foot.useful': 'روابط ومسارات تصفح سريعة',
    'foot.copyright': '© ٢٠٢٦ كوفي كونتينر. جميع الحقوق محفوظة ومحمية. يتم التوريد والشحن والتصدير بتتبع متكامل وشفاف بالكامل من أديس أبابا، إثيوبيا.'
  }
};

// Map high-resolution Unsplash images for each coffee variety to fulfill "add images to variety's page"
const VARIETY_IMAGES: Record<string, string> = {
  yirgacheffee: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  gesha: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
  sidamo: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80',
  limmu: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
  guji: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
  harrar: 'https://images.unsplash.com/photo-1518085033897-db9b7130e619?auto=format&fit=crop&w=600&q=80',
  teppi: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
  djimmah: 'https://images.unsplash.com/photo-1506619210596-381598452a14?auto=format&fit=crop&w=600&q=80',
  lekempti: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
};

const COFFEE_VARIETIES_TRANSLATED = {
  en: [
    {
      id: 'yirgacheffee',
      name: 'Yirgacheffe',
      description: 'Famous for its complex, fruity flavors, Yirgacheffe coffee offers a unique profile with hints of citrus and floral undertones. Sourced meticulously at high altitudes from local cooperatives.',
      aroma: 'Intense Floral, Jasmine, Citrus Bloom',
      acidity: 'Vibrant, Bright, Citrusy',
      body: 'Light, Tea-like, Silky',
      notes: ['Floral', 'Citrus', 'Jasmine', 'Tea-like'],
      characteristic: 'Complex & Fruity'
    },
    {
      id: 'gesha',
      name: 'Gesha',
      description: 'Renowned for its delicate floral notes and complex sweetness, Gesha coffee is often regarded as one of the finest and most exclusive coffee varieties in the world.',
      aroma: 'Exquisite Jasmine, Orange Blossom, Honey',
      acidity: 'Vibrant, Elegant, Multi-layered',
      body: 'Light, Silky, Refined',
      notes: ['Floral', 'Honey', 'Jasmine', 'Exquisite'],
      characteristic: 'Exquisite & Highly Prized'
    },
    {
      id: 'sidamo',
      name: 'Sidamo',
      description: 'A benchmark of complex Ethiopian coffee, Sidamo coffee boasts a smooth, balanced body with rich fruitiness and subtle hints of sweet spice.',
      aroma: 'Sweet Herbaceous, Citrus, Cardamom',
      acidity: 'Crisp, Balanced, Soft',
      body: 'Smooth, Full, Creamy',
      notes: ['Spice', 'Citrus', 'Smooth', 'Herbaceous'],
      characteristic: 'Smooth & Spicy'
    },
    {
      id: 'limmu',
      name: 'Limmu',
      description: 'Known for its floral notes and balanced acidity, Limmu coffee is a favorite among those who enjoy a clean, bright, and highly aromatic cup.',
      aroma: 'Sweet Jasmine, Orange Peel',
      acidity: 'Balanced, Clean, Medium-Bright',
      body: 'Clean, Medium, Velvety',
      notes: ['Floral', 'Balanced', 'Bright', 'Aromatic'],
      characteristic: 'Bright & Aromatic'
    },
    {
      id: 'guji',
      name: 'Guji',
      description: 'Guji coffee features a bright acidity and complex sweet flavor, often with floral and stone-fruit notes that make it highly sought after by specialty roasters.',
      aroma: 'Complex Flower, Peach, Nectarine',
      acidity: 'Bright, Sweet, Juicy',
      body: 'Smooth, Elegant, Medium',
      notes: ['Bright Acidity', 'Floral', 'Fruity', 'Peach'],
      characteristic: 'Bright & Complex'
    },
    {
      id: 'harrar',
      name: 'Harrar',
      description: 'Dry-processed and known for its wild, fruity flavor and heavy, wine-like body, Harrar is a truly distinctive and historic Ethiopian origin.',
      aroma: 'Wild Blueberry, Winey, Blackberry',
      acidity: 'Medium, Fruity, Wine-like',
      body: 'Heavy, Creamy, Full',
      notes: ['Wild Berries', 'Wine-like', 'Distinctive', 'Blueberry'],
      characteristic: 'Wild & Wine-like'
    },
    {
      id: 'teppi',
      name: 'Teppi',
      description: 'Grown in the lush, high-rainfall forests of southwestern Ethiopia, Teppi coffee is celebrated for its wild, earthy richness and deep flavor profile.',
      aroma: 'Earthy, Forest Floor, Sandalwood',
      acidity: 'Low, Mild, Soft',
      body: 'Medium-Full, Round',
      notes: ['Earthy', 'Lush Forest', 'Rich', 'Deep Flavor'],
      characteristic: 'Earthy & Rich'
    },
    {
      id: 'djimmah',
      name: 'Djimmah',
      description: 'With a bold, full-bodied character and low acidity, Djimmah coffee provides a robust, classic experience with rich hints of dark cocoa.',
      aroma: 'Roasted Cocoa, Nutty, Toasted Barley',
      acidity: 'Low, Soft',
      body: 'Bold, Heavy, Strong',
      notes: ['Dark Chocolate', 'Robust', 'Bold', 'Cocoa'],
      characteristic: 'Bold & Chocolatey'
    },
    {
      id: 'lekempti',
      name: 'Lekempti',
      description: 'Offering a sweet, nutty aroma with a subtle hint of warming spice, Lekempti coffee is a well-rounded and versatile variety.',
      aroma: 'Toasted Almond, Cinnamon, Warm Clove',
      acidity: 'Moderate, Gentle',
      body: 'Medium-Full, Rounded',
      notes: ['Nutty', 'Spicy', 'Well-rounded', 'Almond'],
      characteristic: 'Nutty & Spiced'
    }
  ],
  ar: [
    {
      id: 'yirgacheffee',
      name: 'يرغاشيفي (Yirgacheffe)',
      description: 'تتميز قهوة يرغاشيفي بنكهاتها المعقدة والفاكهية الفواحة، وتقدم نكهات فريدة مع تلميحات من الحمضيات والزهور البرية العطرة. يتم توريدها يدوياً بدقة بالغة من أرقى الارتفاعات الإثيوبية والتعاونيات الزراعية الشريكة.',
      aroma: 'زهور مكثفة، ياسمين عطري، براعم الحمضيات الممتدة',
      acidity: 'حيوية، مشرقة، حمضية ليمونية ناصعة',
      body: 'قوام خفيف، شبيه بالشاي العشبي، ملمس حريري ناعم',
      notes: ['إيحاءات زهور', 'حمضيات متميزة', 'ياسمين', 'شاي حريري'],
      characteristic: 'معقدة وفاكهية منعشة'
    },
    {
      id: 'gesha',
      name: 'غيشا (Gesha)',
      description: 'تشتهر سلالة غيشا بنكهاتها الزهرية الرقيقة وحلاوتها المعقدة الممتدة، وغالباً ما تُصنف وتعتبر واحدة من أرقى وأثمن أنواع قهوة الاختصاص وأكثرها تميزاً وحصرية على مستوى العالم.',
      aroma: 'ياسمين استثنائي، براعم البرتقال، عسل بري خالص',
      acidity: 'حيوية بالغة، أناقة زهرية، نكهات متعددة المستويات',
      body: 'خفيف جداً، ملمس حريري فائق النعومة، نهاية نقية',
      notes: ['زهور برية', 'حلاوة عسل', 'ياسمين فاخر', 'إيحاء استثنائي'],
      characteristic: 'رائعة ومطلوبة بشدة لندرتها'
    },
    {
      id: 'sidamo',
      name: 'سيدامو (Sidamo)',
      description: 'المعيار الذهبي الكلاسيكي للبن الإثيوبي المتوازن، تتميز قهوة سيدامو بقوام متوازن وسلس للغاية يبرز حلاوة فاكهية غنية وتلميحات خفيفة من التوابل العطرية الدافئة.',
      aroma: 'أعشاب عطرية حلوة، حمضيات خفيفة، هيل عطري دافئ',
      acidity: 'حمضية متوازنة، نظيفة، ناعمة للغاية ولطيفة',
      body: 'سلس، قوام غني، ملمس كريمي متناسق',
      notes: ['توابل حلوة', 'حمضيات لطيفة', 'سلس ومتزن', 'أعشاب عطرية'],
      characteristic: 'ناعمة ومتزنة وبنكهات دافئة'
    },
    {
      id: 'limmu',
      name: 'ليمو (Limmu)',
      description: 'تشتهر قهوة ليمو بلمحاتها الزهرية اللطيفة وحموضتها المتوازنة النظيفة، وهي الخيار المفضل والنموذجي لمن يفضلون فنجان قهوة نظيف ومشرق وعطري للغاية.',
      aroma: 'ياسمين حلو، قشور البرتقال المشمسة',
      acidity: 'متوازنة تماماً، نظيفة جداً، متوسطة الإشراق',
      body: 'نظيف، متوسط القوام، ملمس مخملي هادئ',
      notes: ['زهور', 'متزن ونظيف', 'مشرق', 'فواح وعطري'],
      characteristic: 'مشرقة، نقية، وعطرية'
    },
    {
      id: 'guji',
      name: 'غوجي (Guji)',
      description: 'تقدم قهوة غوجي حموضة مشرقة وحلاوة معقدة مذهلة، وغالباً ما تبرز نكهات زهرية فاخرة وفاكهية حجرية (مثل الخوخ) تجعلها مطلوبة بشدة من قبل رواد تحميص القهوة المختصة.',
      aroma: 'باقة زهور مركبة، خوخ مشمس، نكتارين ناضج',
      acidity: 'مشرقة جداً، حلاوة فاكهية عسلية، مليئة بالعصارة',
      body: 'سلس للغاية، أنيق، قوام متوسط ناعم',
      notes: ['حموضة مشرقة', 'زهور برية', 'فاكهة حجرية', 'خوخ مشمس'],
      characteristic: 'مشرقة، معقدة، وحلوة النكهة'
    },
    {
      id: 'harrar',
      name: 'هرار (Harrar)',
      description: 'قهوة معالجة بالطريقة الطبيعية (المجففة تحت الشمس)، وتشتهر بنكهاتها البرية الفواكهية الغنية وقوامها الثقيل الشبيه بقوام العنب المركز، وتعد من أعرق وأقدم مناطق زراعة البن في إثيوبيا.',
      aroma: 'توت أزرق بري، نكهة العنب المركز، توت أسود غني',
      acidity: 'متوسطة، فاكهية مركزة، قوام غني وعميق',
      body: 'ثقيل، ملمس كريمي ممتلئ، قوام قوي',
      notes: ['توت بري غني', 'نكهة العنب', 'فريد من نوعه', 'توت أزرق'],
      characteristic: 'برية، عميقة، وذات قوام ثقيل'
    },
    {
      id: 'teppi',
      name: 'تيبي (Teppi)',
      description: 'تُزرع قهوة تيبي في الغابات المطيرة المورقة وسريعة الهطول في جنوب غرب إثيوبيا، وتشتهر بنكهتها البرية الترابية الغنية وعمقها النكهي المتميز وموثوقية إنتاجها.',
      aroma: 'ترابي دافئ، خشب الصندل العتيق، عبير الغابات الرطبة',
      acidity: 'منخفضة ولطيفة، ناعمة ومخملية في الفم',
      body: 'متوسط إلى ممتلئ، قوام مستدير ناعم',
      notes: ['نكهة ترابية', 'أوراق غابات', 'غني وعميق', 'عمق نكهي ممتاز'],
      characteristic: 'ترابية، دافئة، وغنية النكهة'
    },
    {
      id: 'djimmah',
      name: 'جيما (Djimmah)',
      description: 'تتميز قهوة جيما بقوام قوي وجريء وحموضة منخفضة ولطيفة، وتوفر تجربة بن كلاسيكية ممتلئة وغنية تبرز تلميحات لذيذة من الكاكاو الداكن والشوكولاتة.',
      aroma: 'كاكاو محمص، مكسرات دافئة، شعير محمص عتيق',
      acidity: 'منخفضة جداً ولطيفة، هادئة',
      body: 'جريء، ثقيل وقوي، ملمس متين',
      notes: ['شوكولاتة داكنة', 'قوي وجريء', 'كلاسيكي قوي', 'كاكاو دافئ'],
      characteristic: 'جريئة بنكهات الكاكاو الداكنة'
    },
    {
      id: 'lekempti',
      name: 'ليكيمبتي (Lekempti)',
      description: 'تقدم قهوة ليكيمبتي نكهات دافئة وعطرة برائحة اللوز المحمص والبهارات العطرة الطيفة، وتعد واحدة من أكثر سلالات التصدير شمولية واتساقاً وملاءمة للخلطات.',
      aroma: 'لوز محمص، قرفة دافئة، كبس قرنفل بري هادئ',
      acidity: 'معتدلة، ناعمة وهادئة في الحلق',
      body: 'متوسط إلى ممتلئ، قوام مستدير متزن',
      notes: ['لوز ومكسرات', 'بهارات عطرية', 'شامل ومتناسق', 'لوز محمص'],
      characteristic: 'دافئة بنكهات اللوز والبهارات العطرية'
    }
  ]
};

const MARKET_SEGMENTS_TRANSLATED = {
  en: [
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
  ],
  ar: [
    {
      id: 'roasters',
      title: 'محامص البن العالمية المختصة',
      description: 'نتعاون مع أرقى محامص البن المختصة الباحثة عن حبوب خضراء فائقة الجودة ومنشأ واحد، لتعبر بدقة عن تعقيد وثراء النكهات الإثيوبية الأصيلة. يتم فحص محاصيلنا وفرزها وتحضيرها لتصديرها في حاويات تضمن الموثوقية التامة والاتساق.',
      icon: 'Flame'
    },
    {
      id: 'cafes',
      title: 'المقاهي ومحلات القهوة حول العالم',
      description: 'نتشارك مع مقاهٍ ومحلات بن رائدة تطمح لتقديم فنجان قهوة إثيوبي مذهل وصادق لعملائها. تتيح محاصيلنا للمقاهي تقديم قصة رائعة تحكي ثقافة المنشأ والأرض والحرفية العالية للمزارع الإثيوبي، معززةً الثقة والارتباط المباشر.',
      icon: 'Coffee'
    },
    {
      id: 'wholesalers',
      title: 'الموزعون وتجار الجملة الدوليون',
      description: 'نوفر لكبار الموزعين والشركاء الدوليين كميات ضخمة ومستمرة من البن الإثيوبي الفاخر المخصص للاستيراد السنوي. نركز على تأسيس علاقات تجارية راسخة تثمن الالتزام، الدقة في مواعيد الشحن، والاتساق الفائق عبر حاويات شحن متعددة.',
      icon: 'Globe'
    },
    {
      id: 'private-label',
      title: 'شركاء العلامات التجارية الخاصة',
      description: 'للعلامات التجارية الطامحة لتأسيس أو توسيع محفظة منتجات القهوة الخاصة بها، نوفر بن إثيوبي فاخر ومجهز بالكامل وفق متطلباتكم وبدعم شامل من شبكة لوجستيات وحاويات تصدير مستقرة وآمنة.',
      icon: 'Briefcase'
    }
  ]
};

const IMPACT_STORIES_TRANSLATED = {
  en: [
    {
      id: 'origin-sourcing',
      title: 'Direct Sourcing at Origin',
      description: 'At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with farmers, cooperatives, and suppliers across Ethiopia’s key coffee regions, building long-term relationships based on trust, fairness, and shared growth.',
      category: 'community' as const
    },
    {
      id: 'empowering-women',
      title: 'Empowering Women at Origin',
      description: 'Co-founder Omme places a strong emphasis on supporting women-led farms and cooperatives within Ethiopia’s coffee sector—encouraging access to training, leadership, fair opportunities, and improved resources to unlock financial independence.',
      category: 'women' as const
    },
    {
      id: 'sustainable-practices',
      title: 'Preserving Natural Coffee Landscapes',
      description: 'We are committed to responsible sourcing practices that protect Ethiopia’s natural coffee landscapes. We promote sustainable farming methods that preserve soil health, protect biodiversity, and secure the heritage of Ethiopian coffee for generations.',
      category: 'environment' as const
    }
  ],
  ar: [
    {
      id: 'origin-sourcing',
      title: 'التوريد المباشر من قلب المنشأ',
      description: 'في كوفي كونتينر، يرتكز أسلوب التوريد على تمكين الإنسان واحترام البيئة. نحن نعمل جنباً إلى جنب مع المزارعين والتعاونيات الزراعية في مختلف الأقاليم الإثيوبية، لبناء علاقات طويلة الأمد تقوم على الثقة والعدالة والنمو المشترك.',
      category: 'community' as const
    },
    {
      id: 'empowering-women',
      title: 'تمكين المزارعات في منشأ البن',
      description: 'تضع شريكتنا المؤسسة "أومي" تركيزاً بالغاً على دعم وإشراك المزارعات والتعاونيات النسائية في قطاع البن الإثيوبي — لدعمهن بالموارد والتدريب والفرص العادلة لتمكينهن وتحقيق الازدهار لعائلاتهن.',
      category: 'women' as const
    },
    {
      id: 'sustainable-practices',
      title: 'حماية غابات وبيئات البن الطبيعية',
      description: 'نحن ملتزمون بشدة بممارسات التوريد المسؤول التي تحافظ على البيئة الطبيعية للبن الإثيوبي. ندعم الأساليب المستدامة التي تحمي خصوبة التربة والتنوع البيولوجي المذهل لضمان أمانة المنشأ لأجيال قادمة.',
      category: 'environment' as const
    }
  ]
};

const GENERAL_INFO_TRANSLATED = {
  en: {
    companyName: 'Coffee Container',
    tagline: 'BIG DEAL WITH SIMPLE WAYS',
    location: 'Addis Ababa, Ethiopia',
    phone: '+251 92 161 1111',
    email: 'info@coffeecontainer.com',
    website: 'www.coffeecontainer.com',
    introduction: {
      title: 'A Bridge Between Origin and the World',
      text: 'Coffee Container was founded to connect Ethiopia’s finest coffee directly with global buyers through a sourcing system built on trust, consistency, and transparency. As the birthplace of coffee, Ethiopia produces some of the world’s most distinctive varieties, but complex supply chains often make sourcing challenging for international buyers. Our mission is to simplify this process by creating a direct, reliable link between producers and global markets.\n\nWorking closely with farmers and cooperatives, we manage every stage of the supply chain—from sourcing and quality control to logistics and container export. By maintaining strict standards throughout the process, we ensure every shipment delivers consistent quality, full traceability, and dependable service. Our commitment goes beyond supplying coffee; we build long-term partnerships based on integrity, reliability, and shared success, helping our clients source premium Ethiopian coffee with confidence while supporting sustainable growth for producers at origin.'
    },
    mission: {
      title: 'Our Vision',
      text: 'To connect international coffee buyers directly with Ethiopia’s finest origins through structured, transparent, and highly reliable container-based sourcing networks, simplifying logistics while guaranteeing traceability, shared prosperity, and superior quality.'
    },
    vision: {
      title: 'Mission Statement',
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
          name: 'Omme',
          role: 'Co-Founder • Sourcing & Heritage',
          bio: 'A third-generation coffee entrepreneur deeply rooted in Ethiopia’s coffee culture and family tradition. Her journey began long before the company was formed—growing up within the coffee industry, learning directly from family experience, and witnessing every stage of the coffee process from farm to trade. She developed a deep respect for farmers, an understanding of seasonal cycles, and a strong personal mission: to ensure that coffee is not only exported, but that the people behind it—especially women in farming communities—are empowered, valued, and compensated fairly.'
        },
        {
          name: 'Abdulmalik',
          role: 'Co-Founder • Global Markets',
          bio: 'A foreign partner with strong cross-cultural understanding, global trade awareness, and clear insight into how international coffee markets operate. Through his experience engaging with different markets and consumer expectations, he identified a consistent gap in the coffee supply chain: buyers were seeking reliability, traceability, and consistent quality, yet sourcing systems at origin often lacked structure, transparency, and predictability. His understanding of what global buyers truly need became one of the key foundations of Coffee Container.'
        }
      ]
    },
    qualityAssurance: {
      title: 'Quality is Not a Final Step, It Begins at Origin',
      subtitle: 'At Coffee Container, quality is a continuous commitment that follows every stage of the supply chain, from the moment coffee is selected to the final container shipment.',
      heartOfTradition: 'Our quality standards are built on deep respect for Ethiopian coffee heritage and the craftsmanship of the farmers we work with. Each batch is carefully evaluated through strict selection, sample analysis, and cup testing to ensure it meets both local excellence and international export standards.',
      consistencyAndTrust: 'We believe consistency builds trust. Every container we export reflects our values of integrity, responsibility, and attention to detail. From local selection to final shipment, we ensure every step is carefully managed. For us, quality is not just about coffee—it is about honoring the people, the process, and the promise behind every container.'
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
    }
  },
  ar: {
    companyName: 'كوفي كونتينر (Coffee Container)',
    tagline: 'صفقات كبيرة بطرق بسيطة',
    location: 'أديس أبابا، إثيوبيا',
    phone: '+251 92 161 1111',
    email: 'info@coffeecontainer.com',
    website: 'www.coffeecontainer.com',
    introduction: {
      title: 'جسر يربط منشأ القهوة الأصيل بالعالم كله',
      text: 'تأسست "كوفي كونتينر" بهدف ربط أجود أنواع البن الإثيوبي مباشرة بالمشترين الدوليين عبر نظام توريد متطور يقوم على الثقة والأمانة والشفافية. بصفتها المهد الأول للبن في العالم، تنتج إثيوبيا سلالات هي الأكثر تميزاً وتعقيداً، غير أن سلاسل التوريد التقليدية والمجزأة تجعل الاستيراد معقداً للمشترين. تكمن رسالتنا في تبسيط هذا النظام وبناء روابط مباشرة ومستقرة تماماً.\n\nمن خلال شراكتنا الوثيقة مع المزارعين المحليين والجمعيات التعاونية الرائدة، نتولى إدارة كافة مراحل سلسلة التوريد والتجهيز — من فحص الجودة والتذوق Cupping في مختبراتنا إلى اللوجستيات البرية والبحرية والتحميل والتوثيق الجمركي. نلتزم بأقصى المعايير لنضمن تتبعاً رقمياً كاملاً وجودة ممتازة ثابتة لكل شحنة. يتخطى التزامنا مجرد بيع البن؛ بل نطمح لبناء شراكات استراتيجية تعتمد على النزاهة والموثوقية، لنساعد عملائنا على استيراد محاصيلهم بثقة تامة مع المساهمة بنشاط في دعم صغار المنتجين المحليين.'
    },
    mission: {
      title: 'رؤيتنا الاستراتيجية',
      text: 'ربط مستوردي ومشتري البن الدوليين بأفضل مناطق إنتاج القهوة في إثيوبيا مباشرة عبر شبكات توريد منظمة وشفافة تعتمد على الحاويات، مما يسهل اللوجستيات مع ضمان تتبع المحصول، والازدهار المشترك، والجودة الاستثنائية.'
    },
    vision: {
      title: 'رسالتنا وقيمنا',
      text: 'نقل قطاع تجارة البن العالمي من الأساليب المفككة السابقة إلى مستقبل منظم وموثوق ومستدام — لنكون شريك المنشأ الرائد الذي يكرم الجهود والتقاليد خلف كل حاوية نصدرها.'
    },
    foundingStory: {
      title: 'رؤيتان متكاملتان وهدف واحد: قصة التأسيس',
      alignment: 'تعتبر نشأة كوفي كونتينر قصة توازن وتكامل مثالي — حيث تلاقت خبرة الشريكين وخلفياتهما المتنوعة لتأسيس نظام تصدير مبتكر يعيد الثقة والاتساق والأمانة إلى تجارة تصدير البن.',
      paragraphs: [
        'تمثل "كوفي كونتينر" تحولاً جوهرياً من التجارة التقليدية السريعة إلى روابط تصديرية موثقة ومنظمة — إيماناً منا بأن كل حاوية بن نصدرها تحمل أكثر من مجرد حبوب؛ إنها تحمل جهود المزارع وحكايته العريقة وتطلعات المشترين.',
        'من جهة، كان المزارعون الإثيوبيون — يمتلكون المعرفة الزراعية العريقة المتوارثة عبر أجيال، ويعتنون بحقولهم المرتفعة بكل أمانة وإخلاص، غير أنهم كانوا يعانون من صعوبة الوصول المباشر للأسواق وتقلبات الأسعار.',
        'ومن جهة أخرى، كان المشترون والمحامص الدولية — يطمحون للحصول على بن متميز وثابت الجودة مع تتبع كامل للمحصول، ولكنهم واجهوا لوجستيات محلية معقدة ومستويات جودة غير مستقرة.',
        'من هنا انطلقت "كوفي كونتينر" لتقريب المسافات — بالبدء في بناء علاقات وطيدة مع صغار المزارعين والتعاونيات، وفرض رقابة دقيقة وعمليات Cupping صارمة. ومع نمو أعمالنا، تبلورت الرؤية: إعادة تصميم وتطوير مسار التصدير بالكامل، والاعتماد على نموذج الحاويات المهيكلة لشحن بن فائق النقاء وبتتبع كامل.'
      ],
      founders: [
        {
          name: 'أومي (Omme)',
          role: 'شريك مؤسس • التوريد والتراث العريق',
          bio: 'رائدة أعمال من الجيل الثالث في زراعة وتجارة البن، تمتلك صلة وطيدة ومتأصلة بالثقافة الإثيوبية وتقاليد العائلة. بدأت رحلتها مبكراً بالتعلم والممارسة ومراقبة كافة مراحل الفرز والتجهيز. طورت احتراماً عميقاً للمزارعين والتزاماً راسخاً بتمكين المرأة في ريف إثيوبيا والتعاونيات الزراعية النسائية لضمان عوائد عادلة ومستقلة.'
        },
        {
          name: 'عبد المالك (Abdulmalik)',
          role: 'شريك مؤسس • الأسواق واللوجستيات العالمية',
          bio: 'شريك دولي يتمتع بفهم واسع للتجارة الخارجية واللوجستيات الدولية ومطالب المحامص والمستوردين في الأسواق العالمية. من خلال مشاركته، حدد الفجوة الكبيرة في سلاسل التوريد: حاجة المشترين لعقود توريد ثابتة وموثقة وتتبع كامل، وقام بصياغة وهيكلة نظام شحن الحاويات المطور للشركة.'
        }
      ]
    },
    qualityAssurance: {
      title: 'الجودة ليست مرحلة نهائية، بل أمانة تبدأ من المنشأ',
      subtitle: 'في كوفي كونتينر، نعتبر الجودة التزاماً مستمراً يرافق كل مرحلة من مراحل سلسلة التوريد — من اختيار المزارعين إلى فحص وتحليل العينات المخبرية وعمليات Cupping المكثفة.',
      heartOfTradition: 'تعتمد معايير الجودة الصارمة لدينا على احترامنا البالغ للتراث الإثيوبي وحرفية المزارع المحلي. يتم تقييم كل دفعة وتصنيفها من قبل خبراء معتمدين (Q-graders) لضمان تلبيتها لأعلى المواصفات الدولية للبن المختص والفاخر.',
      consistencyAndTrust: 'نحن نؤمن بأن الثبات والاتساق هما أساس بناء الثقة مع شركائنا. كل حاوية نصدرها تعكس تفانينا والتزامنا بالمسؤولية والنزاهة والفرز الدقيق. الجودة بالنسبة لنا هي تكريم الإنسان والبيئة والوفاء بالوعود خلف كل شحنة.'
    },
    growthPlans: {
      title: 'الرؤية الخمسية (٣-٥ سنوات): توسيع التوريد والانتشار اللوجستي العالمي',
      vision3to5Years: {
        title: 'رؤيتنا الاستراتيجية للخمس سنوات القادمة',
        text: 'نطمح لتوسيع نطاق أعمال تصدير الحاويات لتشمل أسواقاً عالمية جديدة مع تعزيز الشراكة المباشرة ودعم شبكات صغار المزارعين والتعاونيات في أقاليم إثيوبيا الخصبة، وتطوير البنية التحتية التكنولوجية للتتبع الرقمي للمحاصيل.'
      },
      communityImpact: {
        title: 'تمكين مجتمعات المنشأ والتعاونيات النسائية',
        text: 'بموازاة النمو اللوجستي، نلتزم بمواصلة دعم وتمكين عائلات المزارعين والنساء في أقاليم البن، من خلال برامج التدريب وتقديم أدوات ومعدات الفرز المتقدمة وتسهيل التمويل لضمان استقرارهم الاقتصادي.'
      },
      futureCafes: {
        title: 'سلسلة مقاهي كوفي كونتينر الثقافية',
        text: 'نتطلع على المدى الطويل لتأسيس سلسلة مقاهٍ ثقافية تحمل اسم "كوفي كونتينر" في الأسواق العالمية لتكون بمثابة جسر تواصل حضاري يعبر عن عراقة البن الإثيوبي وتراثه، ويقدم تجارب تذوق حية ومباشرة تعزز صلتنا بالمستهلك النهائي.'
      },
      summary: 'في كل خطوة نخطوها نحو التوسع والنمو، تظل رسالتنا راسخة وثابتة: حمل إرث وتراث القهوة الإثيوبية العريقة بكل أمانة ومسؤولية مع إحداث تأثير إيجابي حقيقي في حياة مجتمعات المنشأ.'
    }
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Read initial language from localstorage or browser language default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('coffee_container_lang');
    if (saved === 'en' || saved === 'ar') {
      return saved as Language;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('coffee_container_lang', lang);
  };

  // Sync HTML attributes for localized layout (RTL / LTR)
  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      // Update font styling if desired, Tailwind font classes will map automatically
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  // Translate helper
  const t = (key: string): string => {
    const dict = TRANSLATIONS[language];
    return (dict as any)[key] || (TRANSLATIONS['en'] as any)[key] || key;
  };

  // Localized datasets
  const varieties = COFFEE_VARIETIES_TRANSLATED[language].map(variety => ({
    ...variety,
    image: VARIETY_IMAGES[variety.id] || VARIETY_IMAGES.yirgacheffee
  }));

  const marketSegments = MARKET_SEGMENTS_TRANSLATED[language];
  const impactStories = IMPACT_STORIES_TRANSLATED[language];
  const generalInfo = GENERAL_INFO_TRANSLATED[language];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      varieties,
      marketSegments,
      impactStories,
      generalInfo
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

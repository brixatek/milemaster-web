import type { Stockist, Testimonial } from "@/types/content";

// Source: homepage testimonials + site review widget (pages 1–6) on the legacy site.
// Quotes are reproduced from the customers' published reviews with light
// spelling correction only. Do not edit their meaning.

export const reviewSummary = {
  rating: 4.8,
  count: 16,
  source: "Verified reviews published on the legacy X-Tend website",
} as const;

export const featuredTestimonials: Testimonial[] = [
  { name: "Efemena O.", product: "Oil Conditioner & Petrol Booster", quote: "After using the additive, my fuel consumption was down almost 30%. My full tank lasted much longer and the overall drive was much smoother. I would definitely use it again." },
  { name: "Tope K.", product: "Diesel & petrol generators", quote: "The effects were visible on both my generators. The noise level on the diesel generator came down and so did consumption, and the petrol generator went from 12 hours to 16 hours on a full tank." },
  { name: "Adegboyega K.", product: "Cars and generator", quote: "It's rare in Nigeria to find a product that delivers exactly what it promises. X-Tend is the real deal. I've seen a significant reduction in petrol purchases for my cars and diesel for my generator — extra cash in my pocket in these inflationary times." },
  { name: "Dagogo Y. H.", product: "Petrol Booster", quote: "I used the additive in my Mercedes and within the first five to ten minutes I noticed a big difference. The movement became swifter, and over time the fuel economy was better." },
];

export const allTestimonials: Testimonial[] = [
  ...featuredTestimonials,
  { name: "Olugbenge S.", product: "Oil Conditioner & Petrol Booster", quote: "There was a serious difference in the acceleration and movement of my car. I also noticed an improvement in fuel consumption. The product is very effective." },
  { name: "Adekunle O.", product: "Oil Conditioner & Petrol Booster", quote: "The car ran smoother and covered more mileage on a full tank. The oil drained at the next service was not as dark as before. It accelerated quicker and sounded better." },
  { name: "Ikpo C.", product: "Generator", quote: "Before the treatment my machine used to smoke at night. That stopped when I applied it. The fuel I bought no longer finished the same day. It works." },
  { name: "Emeka O.", location: "Abuja", product: "Fuel and oil treatments, generators", quote: "I would run my generator from 7pm to 6am on a full 15-litre tank, using 10–12 litres depending on load. Since using the Milemaster fuel and oil treatments, I use 4–5 litres from about 8pm to 6am." },
  { name: "Onyinye O.", product: "Fuel and oil treatment", quote: "At first it was little things — the engine sounded quieter and less strained. Then I noticed better acceleration. A tank that used to last five days of my routine now lasts eight." },
  { name: "Seyi A.", product: "Petrol Booster & generator treatment", quote: "An injector issue in my madam's car seemed to disappear after a bottle, and hasn't come back. The generator additive slowed my petrol consumption and extended engine oil life almost twofold." },
  { name: "Yewande A.", product: "Generator", quote: "We seem to have saved close to 30%. Very good indeed." },
  { name: "Mayowa O.", product: "Car", quote: "The first time, it changed the sound of the engine and gave it some life. The second time, the car picked up from where the first one stopped." },
  { name: "David E.", product: "Car", quote: "My car's steering felt freer, and it moved more smoothly." },
  { name: "Oluwole F.", product: "Generator", quote: "Plain and simple: I didn't consume as much diesel." },
  { name: "Norbert O.", product: "Vehicles", quote: "Much improved performance and fuel economy." },
  { name: "Moses G.", product: "Motorcycle", quote: "It's working fine. The sound is getting better. My bike is flying now." },
];

/** Organisations whose written testimonial letters appear on the legacy site. */
export const writtenTestimonials = [
  "Regal Seaview",
  "Rialtors",
  "Technova",
  "Union Bank",
  "Vaya",
  "AXA Mansard",
  "Probe",
  "Rakunmi",
  "Bellebricks",
  "Techcentrix",
  "Ibile",
] as const;

/** YouTube IDs harvested from the legacy Tests & Testimonials page (de-duplicated). */
export const fieldTestVideos = [
  "WZJ1vieMnd8", "FNWpnCLH0wo", "rY_yHk96uTQ", "MJYAS7JlqgI", "bPWXxOHBSeA", "vfl1oUfDVUU",
  "9CeT8TySJ2o", "_n2srGadS6s", "w8J5wEwnqkE", "aFWe3QQPBM8", "dMR4zwnU2ug", "0Yz28B-U7sc",
  "qLToTznXLJU", "PixAZ55hng4", "FBPDxzwjGW4", "cKfQGLrAllo", "e-LOewdshek", "OaKLV1c1q4I",
  "gi-8V5PgCQk", "u3Mh0mU6k4o", "nujM6IqMOtg", "dvlEbrGDS30", "D4mv_JlivAM", "3rBsuc5puW0",
  "oeGhKaE0_g4", "FYPoINd2hqE", "XpMI-GifQBc", "OZ-2JQLZfgM", "HlRCNma6lqc", "E7cOG-GhsH8",
  "K7somhAM-IE", "H7uldhSHOYM", "ZfDCIOHKuCU", "YAQDFSVIzhs", "1GOpWYsR3iw", "15WK3gONtj0",
] as const;

export const customerVideos = ["5lDjCXOqs_0", "NqtBrD2JWbk", "toZertNur0c", "9RhPG6Z0eE0", "gOQtkoNfMMU", "XQ2dXndU2A0"] as const;

export const stockists: Stockist[] = [
  { name: "Milemaster Integrated Services", address: ["Awudu Ekpekha Street", "Lekki Phase 1, Lagos"], state: "Lagos", email: "milemaster@x-tendadditives.com", phones: ["+234 (0) 809 555 9999"] },
  { name: "XFIVE Enterprise", address: ["Bankom Plaza", "Ajah, Lagos"], state: "Lagos", email: "xfive@x-tendadditives.com", phones: ["+234 (0) 913 190 9975"] },
  { name: "Titiloye Olaifa Auto Workshop", address: ["Okesuna Street", "Lafiaji, Lagos"], state: "Lagos", email: "johnson@x-tendadditives.com", phones: ["+234 (0) 803 079 9389"] },
  { name: "Smart Plan Integrated Services", address: ["Olu Akinfusile Street", "Utako, Abuja"], state: "Abuja", email: "smartplan@x-tendadditives.com", phones: ["+234 (0) 815 961 7819", "+234 (0) 903 027 0405"] },
  { name: "Sobrimo Resources", address: ["Woji Road", "Port Harcourt"], state: "Rivers", email: "sobrimo@x-tendadditives.com", phones: ["+234 (0) 805 514 5722"] },
  { name: "Chimotors", address: ["Freetown Street", "Port Harcourt"], state: "Rivers", email: "chimotors@x-tendadditives.com", phones: ["+234 (0) 817 626 9005"] },
  { name: "Alternative Options", address: ["Kano City", "Kano"], state: "Kano", email: "alternative@x-tendadditives.com", phones: ["+234 (0) 809 666 9999"] },
];

export const proofPoints = [
  { value: 30, suffix: "+", label: "years of research and field-testing behind the X-Tend formulations" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "average rating across 16 verified customer reviews" },
  { value: 36, label: "recorded field-test videos from prospects and customers" },
  { value: 7, label: "stockists across Lagos, Abuja, Rivers and Kano" },
] as const;

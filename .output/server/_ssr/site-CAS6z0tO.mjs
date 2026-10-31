//#region node_modules/.nitro/vite/services/ssr/assets/site-CAS6z0tO.js
var CURRENCY_INFO = {
	KES: {
		symbol: "KSh",
		decimals: 0
	},
	USD: {
		symbol: "$",
		decimals: 2
	},
	GBP: {
		symbol: "£",
		decimals: 2
	},
	EUR: {
		symbol: "€",
		decimals: 2
	}
};
var siteConfig = {
	brand: {
		productName: "Advion Cockroach Gel Bait",
		manufacturer: "Syngenta",
		tagline: "Target cockroaches at the source"
	},
	whatsapp: { number: "" },
	currency: {
		default: "KES",
		supported: [
			"KES",
			"USD",
			"GBP",
			"EUR"
		],
		showConversions: false
	},
	sale: {
		headline: "FLASH SALE — Explore Our Special Advion Offers!",
		deadline: null
	},
	offers: [
		{
			id: "special-offer",
			name: "Special Offer",
			quantity: null,
			quantityLabel: null,
			originalPrice: null,
			discountPercent: null,
			promoPrice: null,
			terms: null
		},
		{
			id: "extra-savings",
			name: "Extra Savings",
			quantity: null,
			quantityLabel: null,
			originalPrice: null,
			discountPercent: null,
			promoPrice: null,
			terms: null
		},
		{
			id: "premium-discount",
			name: "Premium Discount",
			quantity: null,
			quantityLabel: null,
			originalPrice: null,
			discountPercent: null,
			promoPrice: null,
			terms: null
		},
		{
			id: "best-deal",
			name: "Best Deal",
			quantity: null,
			quantityLabel: null,
			originalPrice: null,
			discountPercent: null,
			promoPrice: null,
			terms: null
		}
	],
	product: {
		packageSize: "30 g syringe applicator",
		formulation: "Gel bait",
		activeIngredient: "Indoxacarb 0.06%",
		targetPests: [
			"German cockroaches",
			"American cockroaches",
			"Oriental cockroaches",
			"Brown-banded cockroaches"
		],
		applicationLocations: [
			"Indoor cracks and crevices",
			"Kitchens and food-handling areas, per the label",
			"Residential, commercial and industrial sites, per the label"
		],
		storage: "Store in the original container, in a cool dry place, away from children and pets.",
		restrictions: "Product registration and permitted use vary by country. Confirm the product is registered and approved for sale and use in the customer's location before ordering.",
		labelNote: "Always follow the official product label and safety data sheet for your market. This site summarises publicly published product information and does not replace the label."
	},
	support: {
		localDelivery: {
			areas: [],
			charges: null,
			timeEstimate: null
		},
		regionalShipping: {
			available: false,
			zones: [],
			details: null
		},
		international: {
			acceptingEnquiries: true,
			note: "International delivery is not confirmed. Send a WhatsApp enquiry with your location and we will check product registration, import restrictions, shipping arrangements and total cost."
		},
		paymentMethods: []
	},
	contact: {
		businessName: "",
		phone: "",
		email: "",
		location: ""
	},
	reviews: [
		{
			id: "review-1",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		},
		{
			id: "review-2",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		},
		{
			id: "review-3",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		},
		{
			id: "review-4",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		},
		{
			id: "review-5",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		},
		{
			id: "review-6",
			text: null,
			name: null,
			rating: null,
			photoUrl: null,
			verifiedPurchase: false
		}
	]
};
/** True once the WhatsApp number has been configured (digits only, 8-15 digits). */
var isWhatsAppConfigured = () => /^\d{8,15}$/.test(siteConfig.whatsapp.number);
//#endregion
export { isWhatsAppConfigured as n, siteConfig as r, CURRENCY_INFO as t };

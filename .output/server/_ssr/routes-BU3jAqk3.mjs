import { n as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger$1, c as require_react, i as AccordionItem$1, l as require_jsx_runtime, n as AccordionContent$1, r as AccordionHeader, s as Slot, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as isWhatsAppConfigured, r as siteConfig, t as CURRENCY_INFO } from "./site-CAS6z0tO.mjs";
import { A as ArrowLeft, C as ClipboardCheck, D as Bug, E as Camera, O as BookOpen, S as CreditCard, T as Check, _ as Mail, a as Tag, b as Globe, c as ShoppingBasket, d as PiggyBank, f as Phone, g as MapPin, h as MapPinned, i as Thermometer, k as ArrowRight, l as ShieldCheck, m as MessageCircle, n as Truck, o as Syringe, p as Package, r as TriangleAlert, s as Star, t as Zap, u as ShieldAlert, v as Image, w as ChevronDown, x as Droplets, y as House } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BU3jAqk3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatRemaining(ms) {
	const totalMinutes = Math.max(0, Math.floor(ms / 6e4));
	const days = Math.floor(totalMinutes / 1440);
	const hours = Math.floor(totalMinutes % 1440 / 60);
	const minutes = totalMinutes % 60;
	if (days > 0) return `${days}d ${hours}h ${minutes}m`;
	if (hours > 0) return `${hours}h ${minutes}m`;
	return `${minutes}m`;
}
/**
* Slim flash-sale announcement bar. A countdown timer is shown ONLY when a
* genuine sale deadline has been configured in src/config/site.ts — it is a
* fixed timestamp, so it persists across refreshes and never restarts.
*/
function AnnouncementBar() {
	const deadline = siteConfig.sale.deadline ? new Date(siteConfig.sale.deadline) : null;
	const hasDeadline = deadline != null && !Number.isNaN(deadline.getTime());
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hasDeadline) return;
		const tick = () => setNow(Date.now());
		tick();
		const timer = setInterval(tick, 3e4);
		return () => clearInterval(timer);
	}, [hasDeadline]);
	const remainingMs = hasDeadline && now != null ? deadline.getTime() - now : null;
	const showTimer = remainingMs != null && remainingMs > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-brand-green text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-semibold sm:text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
					className: "h-3.5 w-3.5",
					"aria-hidden": "true"
				}), siteConfig.sale.headline]
			}), showTimer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rounded-full bg-white/20 px-2.5 py-0.5 text-xs tabular-nums",
				children: ["Ends in ", formatRemaining(remainingMs)]
			})]
		})
	});
}
function roundForCurrency(amount, currency) {
	const factor = 10 ** CURRENCY_INFO[currency].decimals;
	return Math.round(amount * factor) / factor;
}
function computeOfferPricing(offer) {
	const currency = siteConfig.currency.default;
	const unconfigured = {
		configured: false,
		valid: true,
		originalPrice: null,
		savings: null,
		finalPrice: null,
		discountPercent: null
	};
	const original = offer.originalPrice;
	const percent = offer.discountPercent;
	const promo = offer.promoPrice;
	if (original == null && promo == null && percent == null) return unconfigured;
	if (percent != null && promo != null) return {
		...unconfigured,
		valid: false,
		error: "Configure either a discount percentage or a fixed promotional price, not both."
	};
	if (original == null) return {
		...unconfigured,
		valid: false,
		error: "Original price is required to show discounts and savings."
	};
	if (!Number.isFinite(original) || original <= 0) return {
		...unconfigured,
		valid: false,
		error: "Original price must be a positive number."
	};
	let finalPrice = null;
	let savings = null;
	let discountPercent = null;
	if (percent != null) {
		if (!Number.isFinite(percent) || percent < 0 || percent > 100) return {
			...unconfigured,
			valid: false,
			error: "Discount percentage must be between 0 and 100."
		};
		savings = roundForCurrency(original * percent / 100, currency);
		finalPrice = roundForCurrency(original - savings, currency);
		discountPercent = percent;
	} else if (promo != null) {
		if (!Number.isFinite(promo) || promo <= 0) return {
			...unconfigured,
			valid: false,
			error: "Promotional price must be a positive number."
		};
		finalPrice = roundForCurrency(promo, currency);
		if (finalPrice > original) return {
			...unconfigured,
			valid: false,
			error: "Promotional price cannot be higher than the original price."
		};
		savings = roundForCurrency(original - finalPrice, currency);
		discountPercent = Math.round(savings / original * 1e3) / 10;
	}
	return {
		configured: true,
		valid: true,
		originalPrice: roundForCurrency(original, currency),
		savings,
		finalPrice,
		discountPercent
	};
}
/** Compute pricing for every configured offer. */
function computeAllOffersPricing(offers) {
	const map = /* @__PURE__ */ new Map();
	for (const offer of offers) map.set(offer.id, computeOfferPricing(offer));
	return map;
}
/** True when at least one offer has valid, configured pricing. */
function hasConfiguredPricing(pricing) {
	for (const p of pricing.values()) if (p.configured && p.valid && p.finalPrice != null) return true;
	return false;
}
/** Lowest configured final price, for the hero's "from" price. */
function lowestFinalPrice(pricing) {
	const values = [...pricing.values()].filter((p) => p.configured && p.valid && p.finalPrice != null).map((p) => p.finalPrice);
	return values.length ? Math.min(...values) : null;
}
function formatPrice(amount, currency = siteConfig.currency.default) {
	const { symbol, decimals } = CURRENCY_INFO[currency];
	return `${symbol}${amount.toLocaleString("en-US", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	})}`;
}
function formatPercent(value) {
	return Number.isInteger(value) ? `${value}%` : `${value}%`;
}
/**
* "BEST VALUE" may only be shown when one offer genuinely gives the most
* discount for the displayed conditions (highest effective discount).
* With placeholder/unconfigured pricing, no badge is ever shown.
*/
function findBestValueOfferId(offers, pricing) {
	const entries = offers.map((o) => ({
		offer: o,
		pricing: pricing.get(o.id)
	})).filter((e) => !!e.pricing?.configured && e.pricing.valid && e.pricing.discountPercent != null);
	if (entries.length < 2) return null;
	const maxDiscount = Math.max(...entries.map((e) => e.pricing.discountPercent));
	const winners = entries.filter((e) => e.pricing.discountPercent === maxDiscount);
	return winners.length === 1 ? winners[0]?.offer.id ?? null : null;
}
function buildWhatsAppUrl(message) {
	if (!/^\d{8,15}$/.test(siteConfig.whatsapp.number)) return null;
	return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
/**
* Prefilled enquiry message. Only fields that are actually configured are
* included — placeholder prices/quantities never appear as fake values.
*/
function buildOrderMessage(offer, pricing, currencyCode) {
	const lines = ["Hello! I am interested in Advion Cockroach Gel Bait.", ""];
	lines.push(`Selected offer: ${offer.name}`);
	if (offer.quantity != null || offer.quantityLabel) lines.push(`Quantity: ${offer.quantityLabel ?? `${offer.quantity} × pack`}`);
	if (pricing?.configured && pricing.valid) {
		if (pricing.originalPrice != null) lines.push(`Original price: ${formatPrice(pricing.originalPrice)}`);
		if (pricing.discountPercent != null) lines.push(`Discount: ${formatPercent(pricing.discountPercent)}`);
		if (pricing.finalPrice != null) lines.push(`Final price: ${formatPrice(pricing.finalPrice)}`);
		lines.push(`Currency: ${currencyCode}`);
	}
	lines.push("", "My delivery location is: [CUSTOMER TO PROVIDE]", "");
	lines.push("Please confirm availability, delivery charges, applicable product restrictions, and payment options.");
	return lines.join("\n");
}
/** Generic enquiry message (no selected offer). */
function buildGeneralEnquiryMessage() {
	return [
		"Hello! I am interested in Advion Cockroach Gel Bait.",
		"",
		"Please share the available offers, delivery options and payment methods."
	].join("\n");
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			whatsapp: "bg-brand-green text-brand-green-foreground shadow hover:bg-brand-green/90",
			navy: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/**
* Shared WhatsApp call-to-action. When the seller's WhatsApp number is not
* configured yet, the button renders disabled — no live ordering link exists.
*/
function WhatsAppCta({ message, children, variant = "whatsapp", size, className }) {
	const url = buildWhatsAppUrl(message);
	if (!url) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant,
		size,
		className,
		disabled: true,
		title: "Ordering opens once the seller's WhatsApp number is connected.",
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: url,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		"aria-label": "Continue on WhatsApp",
		children
	});
}
var NAV_LINKS = [
	{
		href: "#details",
		label: "Product Details"
	},
	{
		href: "#how-to-use",
		label: "How to Use"
	},
	{
		href: "#reviews",
		label: "Reviews"
	},
	{
		href: "#faqs",
		label: "FAQs"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					"aria-label": "Advion Cockroach Gel Bait — home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-sm font-extrabold text-brand-green-foreground",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-bold tracking-tight",
							children: "Advion Gel Bait"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-muted-foreground",
							children: "by Syngenta"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Page sections",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground",
						children: link.label
					}, link.href))
				}),
				isWhatsAppConfigured() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
					message: buildGeneralEnquiryMessage(),
					size: "sm",
					className: "h-9 rounded-lg px-3 sm:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Order on WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Order"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "whatsapp",
					size: "sm",
					className: "h-9 rounded-lg px-3 sm:px-4",
					disabled: true,
					title: "Ordering opens once the seller's WhatsApp number is connected.",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Order on WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Order"
						})
					]
				})
			]
		})
	});
}
var product_placeholder_default = "/assets/product-placeholder-WiQx_7W5.png";
/**
* Product-first hero. Short and conversion-focused: visitors move straight
* to the four offer cards below — no long descriptions or FAQs here.
*/
function Hero() {
	const pricing = computeAllOffersPricing(siteConfig.offers);
	const fromPrice = lowestFinalPrice(pricing);
	const anyConfigured = hasConfiguredPricing(pricing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "linear-gradient(160deg, var(--color-brand-green-soft) 0%, var(--color-background) 45%, var(--color-background) 100%)" },
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 mx-auto w-full max-w-md md:max-w-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product_placeholder_default,
					width: 1024,
					height: 1024,
					alt: "Advion Cockroach Gel Bait — gel applicator and product packaging",
					className: "mx-auto w-full max-w-sm rounded-3xl shadow-lg md:max-w-md",
					fetchPriority: "high"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-xs text-muted-foreground",
					children: "Placeholder product photo — the seller's authentic Advion packaging photo is added before launch."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 text-center md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}),
							siteConfig.brand.manufacturer,
							" · Gel bait for cockroaches"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
						children: "Target Cockroaches at the Source."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground md:text-lg",
						children: "Explore Advion Cockroach Gel Bait by Syngenta and choose from our available special offers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: siteConfig.brand.productName
									}),
									" —",
									" ",
									siteConfig.product.formulation,
									" · ",
									siteConfig.product.packageSize
								]
							}),
							anyConfigured && fromPrice != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-muted-foreground",
										children: "Starting at "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-extrabold text-primary",
										children: formatPrice(fromPrice)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-xs text-muted-foreground",
										children: siteConfig.currency.default
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Prices are being finalised — compare the four offers below and ask us anything on WhatsApp."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-brand-green-foreground",
								children: "Special offers are available — compare all four below."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "h-12 w-full rounded-xl px-8 text-base font-bold sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#offers",
								children: "Compare Offers"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
							message: buildGeneralEnquiryMessage(),
							variant: "outline",
							size: "lg",
							className: "h-12 w-full rounded-xl px-6 text-base font-semibold sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Ask on WhatsApp"]
						})]
					})
				]
			})]
		})]
	});
}
function quantityText(offer) {
	if (offer.quantityLabel) return offer.quantityLabel;
	if (offer.quantity != null) return `${offer.quantity} × pack`;
	return "Quantity to be confirmed";
}
function PriceRow({ offer, pricing }) {
	const currency = siteConfig.currency.default;
	if (!pricing.configured) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-dashed border-border bg-muted/50 px-3 py-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold text-muted-foreground",
			children: "Price to be confirmed"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "Offer pricing is not configured yet — this is not a live offer."
		})]
	});
	if (!pricing.valid) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-dashed border-destructive/40 bg-destructive/5 px-3 py-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium text-destructive",
			children: "Offer pricing is misconfigured and hidden until fixed."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-3xl font-extrabold tracking-tight",
				children: formatPrice(pricing.finalPrice)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-muted-foreground",
				children: currency
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex items-center justify-center gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground line-through",
				children: formatPrice(pricing.originalPrice)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rounded-full bg-brand-green px-2 py-0.5 text-xs font-bold text-brand-green-foreground",
				children: ["Save ", formatPrice(pricing.savings)]
			})]
		}),
		pricing.discountPercent != null && pricing.discountPercent > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1.5 text-center text-xs font-semibold text-brand-green-foreground",
			children: [formatPercent(pricing.discountPercent), " off the original price"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-center text-[11px] text-muted-foreground",
			children: ["Original price · ", currency]
		})
	] });
}
function OfferCard({ offer, pricing, selected, bestValue, onSelect }) {
	const buttonMessage = buildOrderMessage(offer, pricing, siteConfig.currency.default);
	const priceConfigured = pricing.configured && pricing.valid;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("relative flex h-full flex-col rounded-2xl border bg-card p-5 text-center shadow-sm transition-all", selected ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background" : "border-border hover:border-primary/50 hover:shadow-md"),
		"aria-pressed": selected,
		children: [
			bestValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-secondary-foreground shadow",
				children: "BEST VALUE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onSelect(offer.id),
				className: "absolute inset-0 z-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
				"aria-pressed": selected,
				"aria-label": `Select ${offer.name}`,
				title: selected ? "Selected" : "Select this offer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-1 flex-col pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto inline-flex items-center gap-1.5 self-start rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-brand-green-foreground",
						children: offer.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product_placeholder_default,
						width: 1024,
						height: 1024,
						alt: "",
						loading: "lazy",
						className: "mx-auto my-4 h-24 w-24 rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: quantityText(offer)
					}),
					offer.terms && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: offer.terms
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceRow, {
							offer,
							pricing
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
						message: buttonMessage,
						variant: priceConfigured ? "default" : "outline",
						size: "lg",
						className: "pointer-events-auto mt-5 h-11 w-full rounded-xl text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), priceConfigured ? "Order This Offer" : "Ask About This Offer"]
					}),
					selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						}), "Selected — order below or from the bar at the bottom"]
					})
				]
			})
		]
	});
}
/**
* The most important sales section — the four discount cards sit directly
* below the hero with no intervening content.
*/
function OffersSection({ selectedOfferId, onSelect }) {
	const pricing = computeAllOffersPricing(siteConfig.offers);
	const bestValueId = findBestValueOfferId(siteConfig.offers, pricing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "offers",
		"aria-labelledby": "offers-heading",
		className: "scroll-mt-24 bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "offers-heading",
						className: "inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight sm:text-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiggyBank, {
							className: "h-6 w-6 text-brand-green",
							"aria-hidden": "true"
						}), "Choose Your Best Offer"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xl text-muted-foreground",
						children: "Compare our four promotional offers and select the option that suits you."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4",
					children: siteConfig.offers.map((offer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
						offer,
						pricing: pricing.get(offer.id),
						selected: selectedOfferId === offer.id,
						bestValue: bestValueId === offer.id,
						onSelect
					}, offer.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: "Selecting an offer prepares a WhatsApp enquiry with that offer's details — it is not a completed order or payment. Availability, delivery charges and payment options are confirmed on WhatsApp."
				})
			]
		})
	});
}
function Bullet({ icon, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 text-sm leading-relaxed", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-foreground [&_svg]:h-5 [&_svg]:w-5",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground",
			children
		})]
	});
}
/** Product details & benefits — placed below the offer cards, two-column on desktop. */
function ProductDetails() {
	const p = siteConfig.product;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "details",
		"aria-labelledby": "details-heading",
		className: "scroll-mt-24 bg-card py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product_placeholder_default,
				width: 1024,
				height: 1024,
				alt: "Advion Cockroach Gel Bait packaging and applicator",
				loading: "lazy",
				className: "mx-auto w-full max-w-sm rounded-3xl shadow-md"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "details-heading",
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: "About Advion Cockroach Gel Bait"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						siteConfig.brand.productName,
						" by ",
						siteConfig.brand.manufacturer,
						" is a professional gel bait used to control cockroach infestations at their harbourage points."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Formulation & package:" }),
								" ",
								p.formulation,
								" · ",
								p.packageSize
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Active ingredient:" }),
								" ",
								p.activeIngredient
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bug, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Target pests:" }),
								" ",
								p.targetPests.join(", "),
								"."
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Application locations:" }),
								" ",
								p.applicationLocations.join("; "),
								"."
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Storage & handling:" }),
								" ",
								p.storage
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sale & use restrictions:" }),
								" ",
								p.restrictions
							] })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "mt-0.5 h-5 w-5 shrink-0 text-amber-600",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [p.labelNote, " The supplied packaging is directed at commercial applicators — verify the exact product label, intended user category and registration in your market before use."] })]
				})
			] })]
		})
	});
}
var STEPS = [
	{
		icon: BookOpen,
		title: "Read the label",
		text: "Review the approved instructions and safety precautions for your market before anything else."
	},
	{
		icon: MapPinned,
		title: "Identify suitable locations",
		text: "Follow the label and relevant pest-control guidance to find the right treatment points."
	},
	{
		icon: Syringe,
		title: "Apply as directed",
		text: "Use only the approved application method and quantities stated on the label."
	},
	{
		icon: ClipboardCheck,
		title: "Monitor and follow up",
		text: "Follow the label's inspection and maintenance instructions after application."
	}
];
/**
* How to use — four illustrated steps. No dosages, placement quantities or
* treatment schedules are invented; everything points back to the label.
*/
function HowToUse() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how-to-use",
		"aria-labelledby": "howto-heading",
		className: "scroll-mt-24 bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "howto-heading",
						className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
						children: "How to Use the Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xl text-muted-foreground",
						children: "Always work from the official product label — these steps summarise it."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative rounded-2xl border border-border bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-4 top-4 text-4xl font-extrabold text-brand-green-soft",
								children: index + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green text-brand-green-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-bold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: step.text
							})
						]
					}, step.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "mt-0.5 h-5 w-5 shrink-0 text-amber-600",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "Important — professional use & storage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1",
							children: ["The supplied packaging refers to commercial applicators. Verify the exact product label, intended user category and applicable registration before publishing or following consumer-facing instructions. ", siteConfig.product.storage]
						})]
					})]
				})
			]
		})
	});
}
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
/**
* Horizontal review photo carousel. Every card is a clearly identified
* placeholder — fabricated testimonials, ratings and photos are never shown.
* The seller replaces these with genuine, permitted content before launch.
*/
function ReviewsCarousel() {
	const reviews = siteConfig.reviews;
	const hasRealReviews = reviews.some((r) => r.text && r.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		"aria-labelledby": "reviews-heading",
		className: "scroll-mt-24 bg-card py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "reviews-heading",
							className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
							children: "What Customers Say"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-xl text-muted-foreground",
							children: "Genuine customer photos and reviews appear here."
						}),
						!hasRealReviews && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground",
							children: "Placeholders below — replaced with verified customer reviews before launch."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					className: "mx-auto mt-10 w-full max-w-5xl",
					opts: {
						align: "start",
						loop: false
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
							className: "-ml-4",
							children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
								className: "basis-[85%] pl-4 sm:basis-[55%] lg:basis-[38%]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "flex h-full flex-col rounded-2xl border border-dashed border-border bg-muted/40 p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-40 items-center justify-center rounded-xl bg-background",
											children: review.photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: review.photoUrl,
												alt: `Customer photo from ${review.name ?? "a customer"}`,
												loading: "lazy",
												className: "h-full w-full rounded-xl object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
													className: "h-8 w-8",
													"aria-hidden": "true"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-medium",
													children: "Genuine customer photo goes here"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex items-center gap-1",
											"aria-hidden": "true",
											children: (() => {
												const rating = review.rating;
												if (!rating) return null;
												return Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < rating ? "fill-brand-green text-brand-green" : "text-border"}` }, i));
											})()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
											className: "mt-2 flex-1 text-sm text-muted-foreground",
											children: review.text ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic",
												children: "“Real review text from a real customer will appear here — nothing is fabricated.”"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-3 flex items-center gap-2 text-xs font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-soft text-brand-green-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
													className: "h-3.5 w-3.5",
													"aria-hidden": "true"
												})
											}), review.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: review.name }), review.verifiedPurchase && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-brand-green-soft px-2 py-0.5 text-[10px] font-bold text-brand-green-foreground",
												children: "Verified purchase"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Review placeholder — replaced before launch"
											})]
										})
									]
								})
							}, review.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, {
							"aria-label": "Previous reviews",
							className: "hidden md:inline-flex"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, {
							"aria-label": "Next reviews",
							className: "hidden md:inline-flex"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "h-12 rounded-xl px-8 text-base font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#offers",
							children: "Explore Offers"
						})
					})
				})
			]
		})
	});
}
/** Local & international customer support — delivery zones, charges, payment methods. */
function SupportSection() {
	const { localDelivery, regionalShipping, international, paymentMethods } = siteConfig.support;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "support",
		"aria-labelledby": "support-heading",
		className: "scroll-mt-24 bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "support-heading",
						className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
						children: "Local & International Customer Support"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-2 max-w-2xl text-muted-foreground",
						children: [
							"We welcome enquiries from local and international customers. Currency codes are shown with every price; supported currencies are ",
							siteConfig.currency.supported.join(", "),
							". Any converted prices would be labelled as estimates."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" }),
								className: "items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold",
									children: "Local Delivery"
								})
							}), localDelivery.areas.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Delivery areas:"
										}),
										" ",
										localDelivery.areas.join(", ")
									] }),
									localDelivery.charges && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Delivery charges:"
										}),
										" ",
										localDelivery.charges
									] }),
									localDelivery.timeEstimate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Estimated time:"
										}),
										" ",
										localDelivery.timeEstimate
									] })
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Delivery areas, charges and times are being configured by the seller and will be published before launch. Ask on WhatsApp for the latest delivery information."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" }),
									className: "items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold",
										children: "Regional & International"
									})
								}),
								regionalShipping.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Regional shipping:"
										}),
										" ",
										regionalShipping.zones.join(", "),
										regionalShipping.details ? ` — ${regionalShipping.details}` : ""
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: international.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: "Product registration, import restrictions and permitted use vary by country — they are checked with you on WhatsApp before any shipping arrangement is confirmed."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5" }),
								className: "items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold",
									children: "Payment Methods"
								})
							}), paymentMethods.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: paymentMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: method }, method))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Accepted payment methods are being configured by the seller. Please confirm the available options on WhatsApp before paying."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: "Availability, product registration, shipping arrangements and the total cost are always confirmed with you on WhatsApp."
				})
			]
		})
	});
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
/**
* FAQ answers are kept in configuration so the seller can update commercial
* policies without touching components. They distinguish international
* *enquiries* from confirmed international *shipping availability*.
*/
var faqItems = [
	{
		question: "What is Advion Cockroach Gel Bait?",
		answer: "Advion Cockroach Gel Bait by Syngenta is a professional gel bait formulation used to control cockroaches at their harbourage points. See the 'About Advion Cockroach Gel Bait' section above for confirmed product characteristics."
	},
	{
		question: "What are the four available offers?",
		answer: "The offer section near the top of this page shows four promotional offers for the same product, each with its own name and terms. Where an offer has a confirmed package quantity, it is shown on the card; anything not yet configured is clearly marked as 'to be confirmed'."
	},
	{
		question: "How are the discounts calculated?",
		answer: "Savings = original price × discount percentage, and final price = original price − savings. Where a fixed promotional price is configured instead, the effective discount percentage is calculated from the original price. Prices are rounded to the currency's normal conventions."
	},
	{
		question: "How do I order through WhatsApp?",
		answer: "Select one of the four offer cards, then tap 'Order This Offer'. WhatsApp opens with a prefilled message containing your selected offer and its confirmed details — you just add your delivery location and send. Opening WhatsApp is not a completed order or payment; we confirm everything with you there."
	},
	{
		question: "Which currencies are supported?",
		answer: "Prices are displayed with their currency code. Depending on the seller's market, KES, USD, GBP and EUR are supported. Any converted prices would be clearly labelled as estimates."
	},
	{
		question: "Do you offer local delivery?",
		answer: "Confirmed delivery areas, charges and estimated times are listed in the 'Local & International Customer Support' section. Anything not listed there is not yet confirmed — please ask on WhatsApp."
	},
	{
		question: "Can I request international delivery?",
		answer: "You are welcome to send an international enquiry on WhatsApp with your location. International shipping is not confirmed in advance: product registration, import restrictions, shipping arrangements and total cost are checked with you first."
	},
	{
		question: "What payment methods are available?",
		answer: "Accepted payment methods are confirmed on WhatsApp before you pay — never pay through unsolicited links or accounts."
	},
	{
		question: "Who is permitted to use the product?",
		answer: "The supplied packaging is directed at commercial applicators. Permitted users, registration status and approved application locations vary by country — always verify the exact product label and registration in your market before use."
	},
	{
		question: "How should the product be stored?",
		answer: "Store in the original container, in a cool dry place, away from children and pets, as required by the label."
	},
	{
		question: "Where can I find the official instructions?",
		answer: "Always follow the official product label and safety data sheet applicable to your market. This website summarises publicly published product information and does not replace the label."
	}
];
/** Accessible FAQ accordion, placed near the bottom of the page. */
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faqs",
		"aria-labelledby": "faqs-heading",
		className: "scroll-mt-24 bg-card py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "faqs-heading",
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: "Frequently Asked Questions"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-8",
				children: faqItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${index}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-sm font-semibold sm:text-base",
						children: item.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm text-muted-foreground",
						children: item.answer
					})]
				}, item.question))
			})]
		})
	});
}
/** Final conversion section near the bottom of the page. */
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "final-cta-heading",
		className: "scroll-mt-24 bg-background py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "final-cta-heading",
					className: "text-2xl font-extrabold tracking-tight sm:text-3xl",
					children: "Ready to Explore Our Offers?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-muted-foreground",
					children: "Compare the four special offers, pick the one that suits you, and start your order enquiry on WhatsApp. We confirm availability, delivery and payment with you directly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
						message: buildGeneralEnquiryMessage(),
						size: "lg",
						className: "h-12 rounded-xl px-8 text-base font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Order on WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						className: "h-12 rounded-xl px-6 text-base font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#offers",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { "aria-hidden": "true" }), "Compare Offers"]
						})
					})]
				})
			]
		})
	});
}
var POLICY_LINKS = [
	{
		to: "/privacy",
		label: "Privacy Policy"
	},
	{
		to: "/terms",
		label: "Terms & Conditions"
	},
	{
		to: "/delivery-returns",
		label: "Delivery & Returns"
	}
];
function SiteFooter() {
	const { contact } = siteConfig;
	const hasContact = contact.businessName || contact.phone || contact.email || contact.location;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-sm font-extrabold text-brand-green-foreground",
							children: "A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold",
							children: "Advion Gel Bait"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: [
							siteConfig.brand.productName,
							" by ",
							siteConfig.brand.manufacturer,
							" · ",
							siteConfig.product.formulation,
							" ·",
							" ",
							siteConfig.product.packageSize
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "Advion is a product of Syngenta. All trademarks belong to their respective owners. This site is operated by an independent seller."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: "Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [POLICY_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.to,
						className: "transition-colors hover:text-foreground",
						children: link.label
					}) }, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#faqs",
						className: "transition-colors hover:text-foreground",
						children: "FAQs"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: "Contact"
				}), hasContact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						contact.businessName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: contact.businessName }),
						contact.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								contact.phone
							]
						}),
						contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								contact.email
							]
						}),
						contact.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								contact.location
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Seller contact details are being configured and will be published here before launch. Until then, use WhatsApp for all enquiries."
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-xl border border-border bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
					className: "mt-0.5 h-4 w-4 shrink-0 text-brand-green-foreground",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "Product safety disclaimer:"
				}), " Read the official product label before use. Keep out of reach of children and pets. Product registration, permitted use and application directions vary by country — this website summarises publicly published product information and does not replace the official label or safety data sheet. No effectiveness guarantees or complete-elimination claims are made."] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					contact.businessName || "Seller",
					". All rights reserved."
				]
			})]
		})]
	});
}
/**
* Compact sticky bottom bar (mobile only) showing the selected offer's price
* and an ordering button. The floating WhatsApp control sits above it.
*/
function StickyOrderBar({ selectedOfferId }) {
	const offer = siteConfig.offers.find((o) => o.id === selectedOfferId) ?? null;
	const pricing = offer ? computeAllOffersPricing(siteConfig.offers).get(offer.id) : void 0;
	const priceConfigured = pricing?.configured && pricing.valid && pricing.finalPrice != null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0",
				children: offer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs font-semibold",
					children: offer.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-extrabold",
					children: priceConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						formatPrice(pricing.finalPrice),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-medium text-muted-foreground",
							children: siteConfig.currency.default
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted-foreground",
						children: "Price to be confirmed"
					})
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Select an offer above"
				})
			}), offer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
				message: buildOrderMessage(offer, pricing, siteConfig.currency.default),
				size: "sm",
				className: "h-10 shrink-0 rounded-lg px-4 text-sm font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Order"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				className: "h-10 shrink-0 rounded-lg px-4 text-sm font-semibold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#offers",
					children: "Choose an offer"
				})
			})]
		})
	});
}
/**
* Floating WhatsApp button, fixed to the bottom-right. On mobile it sits
* above the sticky order bar so neither control is obscured.
*/
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed bottom-20 right-4 z-40 md:bottom-6"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCta, {
			message: buildGeneralEnquiryMessage(),
			size: "icon",
			className: "h-14 w-14 rounded-full shadow-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "h-6 w-6",
				"aria-hidden": "true"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Order on WhatsApp"
		})]
	});
}
/**
* Single-product sales page. Section order is fixed by the seller's spec:
* announcement bar → header → hero → four offer cards → product details →
* how to use → review carousel → support → FAQ → final CTA → footer.
* The four offer cards sit directly below the hero with nothing in between.
*/
function Index() {
	const [selectedOfferId, setSelectedOfferId] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffersSection, {
					selectedOfferId,
					onSelect: setSelectedOfferId
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetails, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToUse, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-16 md:hidden",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyOrderBar, { selectedOfferId }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
//#endregion
export { Index as component };

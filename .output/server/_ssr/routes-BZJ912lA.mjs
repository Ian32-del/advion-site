import { n as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger$1, c as require_react, i as AccordionItem$1, l as require_jsx_runtime, n as AccordionContent$1, r as AccordionHeader, s as Slot, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as siteConfig, t as isWhatsAppConfigured } from "./site-Cw0SVFfM.mjs";
import { C as Camera, D as ArrowLeft, E as ArrowRight, S as ChevronDown, T as BookOpen, _ as House, a as Syringe, b as CreditCard, c as ShieldCheck, d as Package, f as MessageCircle, g as Image, h as Mail, i as Tag, l as ShieldAlert, m as MapPin, n as TriangleAlert, o as Star, p as MapPinned, r as Thermometer, s as ShoppingBasket, t as Truck, u as Phone, v as Globe, w as Bug, x as ClipboardCheck, y as Droplets } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZJ912lA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function buildWhatsAppUrl(message) {
	if (!/^\d{8,15}$/.test(siteConfig.whatsapp.number)) return null;
	return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
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
function ProductHero({ product }) {
	const orderMessage = `Hello, I'd like to order ${product.productName}.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "linear-gradient(160deg, var(--color-brand-green-soft) 0%, var(--color-background) 45%, var(--color-background) 100%)" },
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-md md:max-w-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					width: 1024,
					height: 1024,
					alt: `${product.productName} packaging`,
					className: "mx-auto w-full max-w-sm rounded-3xl shadow-lg md:max-w-md",
					fetchPriority: "high"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-xs text-muted-foreground",
					children: "Placeholder product photo. The seller's authentic packaging photo is added before launch."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-brand-green-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}),
							product.manufacturer,
							" · ",
							product.category
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
						children: product.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground md:text-lg",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-foreground",
								children: product.productName
							}),
							":",
							" ",
							product.formulation,
							" · ",
							product.packageSize
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Target pests: ", product.targetPests.join(", ")] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhatsAppCta, {
							message: orderMessage,
							variant: "default",
							size: "lg",
							className: "h-12 w-full rounded-xl px-8 text-base font-bold sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Order on WhatsApp"]
						})
					})
				]
			})]
		})]
	});
}
var product_placeholder_default = "/assets/product-placeholder-WiQx_7W5.png";
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
var products = [{
	slug: "cockroach-gel-bait",
	productName: "Advion Demo Cockroach Gel Bait",
	manufacturer: "Syngenta",
	category: "Gel bait for cockroaches",
	headline: "Target Cockroaches at the Source.",
	description: "Placeholder description for the cockroach product.",
	formulation: "Gel bait",
	packageSize: "30 g syringe applicator",
	targetPests: ["Cockroaches"],
	image: "/assets/cockroachgel-BXHfs295.jpg"
}, {
	slug: "insect-gel-bait",
	productName: "Advion Demo Insect Gel Bait",
	manufacturer: "Syngenta",
	category: "Gel bait for insects",
	headline: "Target Insects at the Source.",
	description: "Placeholder description for the insect product.",
	formulation: "Gel bait",
	packageSize: "30 g syringe applicator",
	targetPests: ["Insects"],
	image: "/assets/insectgel-COnrEKZn.jpg"
}];
function Index() {
	const [selectedSlug, setSelectedSlug] = (0, import_react.useState)(products[0].slug);
	const selected = products.find((p) => p.slug === selectedSlug) ?? products[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-5xl px-4 pt-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold text-muted-foreground",
						children: "Choose a product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap justify-center gap-3",
						children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedSlug(product.slug),
							"aria-pressed": selected.slug === product.slug,
							className: selected.slug === product.slug ? "rounded-xl border-2 border-primary bg-primary px-5 py-2 font-bold text-primary-foreground" : "rounded-xl border-2 border-border bg-card px-5 py-2 font-bold hover:border-primary/50",
							children: product.productName
						}, product.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHero, { product: selected }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetails, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToUse, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
//#endregion
export { Index as component };

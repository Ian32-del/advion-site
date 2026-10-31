import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as siteConfig } from "./site-CAS6z0tO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-DMVUAjYJ.js
var import_jsx_runtime = require_jsx_runtime();
function PolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold tracking-tight",
				children: "Privacy Policy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-foreground",
						children: "Draft policy — to be completed by the seller."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "This site does not currently operate user accounts, databases or payment gateways. Order enquiries are made through WhatsApp directly with the seller. Before launch, the seller should publish here: what data is collected (e.g. WhatsApp enquiries), how it is used and stored, retention periods, third-party services involved, and the customer's rights and contact details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: ["Seller to confirm: ", siteConfig.contact.businessName || "[business name]"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-block text-sm font-semibold text-primary hover:underline",
				children: "← Back to the offers"
			})
		]
	});
}
//#endregion
export { PolicyPage as component };

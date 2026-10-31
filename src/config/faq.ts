export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ answers are kept in configuration so the seller can update commercial
 * policies without touching components. They distinguish international
 * *enquiries* from confirmed international *shipping availability*.
 */
export const faqItems: FaqItem[] = [
  {
    question: "What is Advion Cockroach Gel Bait?",
    answer:
      "Advion Cockroach Gel Bait by Syngenta is a professional gel bait formulation used to control cockroaches at their harbourage points. See the 'About Advion Cockroach Gel Bait' section above for confirmed product characteristics.",
  },
  {
    question: "What are the four available offers?",
    answer:
      "The offer section near the top of this page shows four promotional offers for the same product, each with its own name and terms. Where an offer has a confirmed package quantity, it is shown on the card; anything not yet configured is clearly marked as 'to be confirmed'.",
  },
  {
    question: "How are the discounts calculated?",
    answer:
      "Savings = original price × discount percentage, and final price = original price − savings. Where a fixed promotional price is configured instead, the effective discount percentage is calculated from the original price. Prices are rounded to the currency's normal conventions.",
  },
  {
    question: "How do I order through WhatsApp?",
    answer:
      "Select one of the four offer cards, then tap 'Order This Offer'. WhatsApp opens with a prefilled message containing your selected offer and its confirmed details — you just add your delivery location and send. Opening WhatsApp is not a completed order or payment; we confirm everything with you there.",
  },
  {
    question: "Which currencies are supported?",
    answer:
      "Prices are displayed with their currency code. Depending on the seller's market, KES, USD, GBP and EUR are supported. Any converted prices would be clearly labelled as estimates.",
  },
  {
    question: "Do you offer local delivery?",
    answer:
      "Confirmed delivery areas, charges and estimated times are listed in the 'Local & International Customer Support' section. Anything not listed there is not yet confirmed — please ask on WhatsApp.",
  },
  {
    question: "Can I request international delivery?",
    answer:
      "You are welcome to send an international enquiry on WhatsApp with your location. International shipping is not confirmed in advance: product registration, import restrictions, shipping arrangements and total cost are checked with you first.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Accepted payment methods are confirmed on WhatsApp before you pay — never pay through unsolicited links or accounts.",
  },
  {
    question: "Who is permitted to use the product?",
    answer:
      "The supplied packaging is directed at commercial applicators. Permitted users, registration status and approved application locations vary by country — always verify the exact product label and registration in your market before use.",
  },
  {
    question: "How should the product be stored?",
    answer:
      "Store in the original container, in a cool dry place, away from children and pets, as required by the label.",
  },
  {
    question: "Where can I find the official instructions?",
    answer:
      "Always follow the official product label and safety data sheet applicable to your market. This website summarises publicly published product information and does not replace the label.",
  },
];

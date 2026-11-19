import productImage from "@/assets/cockroachgel.jpg";
import productImageInsect from "@/assets/insectgel.jpg";

export interface AboutSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  productName: string;
  manufacturer: string;
  category: string;
  headline: string;
  description: string;
  formulation: string;
  packageSize: string;
  targetPests: string[];
  image: string;
  /** Price in KES. null = not yet configured. */
  price: number | null;
  about: {
    intro: string;
    specs: AboutSpec[];
    warning: string;
  };
}

export const products: Product[] = [
  {
    slug: "cockroach-gel-bait",
    productName: "Advion Cockroach Gel Bait",
    manufacturer: "Syngenta",
    category: "Gel bait for cockroaches",
    headline: "Target Cockroaches at the Source.",
    description: "Placeholder description for the cockroach product.",
    formulation: "Gel bait",
    packageSize: "30 g syringe applicator",
    targetPests: ["Cockroaches"],
    image: productImage,
    price: 3000,
    about: {
      intro:
        "Advion Demo Cockroach Gel Bait by Syngenta is a professional gel bait used to control cockroach infestations at their harbourage points.",
      specs: [
        { label: "Formulation & package", value: "Gel bait · 30 g syringe applicator" },
        { label: "Active ingredient", value: "Indoxacarb 0.06%" },
        { label: "Target pests", value: "German, American, Oriental and brown-banded cockroaches" },
        { label: "Application locations", value: "Indoor cracks and crevices, kitchens and food-handling areas, per the label" },
        { label: "Storage & handling", value: "Store in the original container, in a cool dry place, away from children and pets" },
      ],
      warning:
        "Always follow the official product label and safety data sheet for your market. Verify the product label, intended user and registration in your market before use.",
    },
  },
  {
    slug: "insect-gel-bait",
    productName: "Advion Ant Gel Bait",
    manufacturer: "Syngenta",
    category: "Gel bait for ants",
    headline: "Target Ants at the Source.",
    description: "Placeholder description for the insect product.",
    formulation: "Gel bait",
    packageSize: "30 g syringe applicator",
    targetPests: ["Ants"],
    image: productImageInsect,
    price: 3000,
    about: {
      intro:
        "Advion Ant Gel by Syngenta is an indoxacarb-based gel bait for controlling ants in residential, institutional, commercial and industrial areas.",
      specs: [
        { label: "Formulation & package", value: "Gel bait · 30 g (1.06 oz) syringe applicator" },
        { label: "Active ingredient", value: "Indoxacarb 0.05%" },
        { label: "Target pests", value: "Ants" },
        {
          label: "Application locations",
          value:
            "Single and multi-family residential buildings, schools, commercial and industrial facilities, warehouses, apartments, supermarkets, restaurants, motels, hotels, hospitals, food handling and storage establishments, and transportation equipment such as aircraft, trains, ships, boats and buses",
        },
        {
          label: "Storage & handling",
          value: "Keep out of reach of children. Do not treat areas that are easily accessible to children. Follow the label.",
        },
      ],
      warning:
        "Always follow the official product label and safety data sheet for your market before use. Use is restricted to the sites and users stated on the label. Confirm registration in your market before sale.",
    },
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
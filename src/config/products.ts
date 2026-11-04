import productImage from "@/assets/cockroachgel.jpg";
import productImageInsect from "@/assets/insectgel.jpg";


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
}

export const products: Product[] = [
  {
    slug: "cockroach-gel-bait",
    productName: "Advion Demo Cockroach Gel Bait",
    manufacturer: "Syngenta",
    category: "Gel bait for cockroaches",
    headline: "Target Cockroaches at the Source.",
    description: "Placeholder description for the cockroach product.",
    formulation: "Gel bait",
    packageSize: "30 g syringe applicator",
    targetPests: ["Cockroaches"],
    image: productImage,
  },
  {
    slug: "insect-gel-bait",
    productName: "Advion Demo Insect Gel Bait",
    manufacturer: "Syngenta",
    category: "Gel bait for insects",
    headline: "Target Insects at the Source.",
    description: "Placeholder description for the insect product.",
    formulation: "Gel bait",
    packageSize: "30 g syringe applicator",
    targetPests: ["Insects"],
    image: productImageInsect,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export type Category = { id: string; name: string; slug: string; icon: string; color: string };
export type Product = { id: string; name: string; price: number; image: string; category: string; slug: string , description: string };

export const CATEGORIES: Category[] = [
  { id: "c-fruits",       name: "Fruits",         slug: "fruits",         icon: "🍎", color: "#FF5E5E" },
  { id: "c-vegetables",   name: "Vegetables",     slug: "vegetables",     icon: "🥦", color: "#4CAF50" },
  { id: "c-dairy",        name: "Dairy",          slug: "dairy",          icon: "🧀", color: "#FFD93D" },
  { id: "c-bakery",       name: "Bakery",         slug: "bakery",         icon: "🥐", color: "#A0522D" },
  { id: "c-beverages",    name: "Beverages",      slug: "beverages",      icon: "🧃", color: "#4FC3F7" },
  { id: "c-snacks",       name: "Snacks",         slug: "snacks",         icon: "🥨", color: "#FF9800" },
  { id: "c-meat",         name: "Meat",           slug: "meat",           icon: "🥩", color: "#EF5350" },
  { id: "c-seafood",      name: "Seafood",        slug: "seafood",        icon: "🐟", color: "#26C6DA" },
  { id: "c-household",    name: "Household",      slug: "household",      icon: "🧹", color: "#9575CD" },
  { id: "c-frozen",       name: "Frozen Foods",   slug: "frozen",         icon: "🧊", color: "#81D4FA" },
  { id: "c-personal-care",name: "Personal Care",  slug: "personal-care",  icon: "🧴", color: "#F48FB1" },
  { id: "c-baby",         name: "Baby Products",  slug: "baby",           icon: "🍼", color: "#FFCC80" },
];

const PRODUCTS: Product[] = [
  { id: "p-apple",  name: "Red Apples (1kg)",    slug: "red-apples-1kg",    price: 3.99, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", category: "fruits", description: "Fresh red apples, perfect for snacking and cooking." },
  { id: "p-banana", name: "Bananas (1kg)",       slug: "bananas-1kg",       price: 2.49, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e", category: "fruits", description: "Sweet and ripe bananas, full of energy." },
  { id: "p-orange", name: "Fresh Oranges (1kg)", slug: "fresh-oranges-1kg", price: 3.29, image: "https://images.unsplash.com/photo-1547514701-42782101795e", category: "fruits", description: "Juicy and fresh oranges, rich in vitamin C." },
  { id: "p-grapes", name: "Green Grapes (500g)", slug: "green-grapes-500g", price: 4.19, image: "https://images.unsplash.com/photo-1596363505729-4190a9506133", category: "fruits", description: "Crisp green grapes, perfect for snacks or salads." },

  { id: "p-carrot",   name: "Carrots (1kg)",        slug: "carrots-1kg",        price: 1.99, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", category: "vegetables", description: "Fresh orange carrots, healthy and crunchy." },
  { id: "p-tomato",   name: "Fresh Tomatoes (1kg)", slug: "fresh-tomatoes-1kg", price: 2.39, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", category: "vegetables", description: "Ripe and juicy tomatoes, perfect for salads and sauces." },
  { id: "p-broccoli", name: "Broccoli (500g)",      slug: "broccoli-500g",      price: 2.79, image: "https://images.unsplash.com/photo-1584270354949-c26b0d7fce72", category: "vegetables", description: "Fresh green broccoli, full of nutrients." },

  { id: "p-milk",   name: "Whole Milk (1L)",       slug: "whole-milk-1l",       price: 1.59, image: "https://images.unsplash.com/photo-1553301803-768cd4a59b9c", category: "dairy", description: "Fresh whole milk for your daily needs." },
  { id: "p-cheese", name: "Cheddar Cheese (200g)", slug: "cheddar-cheese-200g", price: 4.99, image: "https://images.unsplash.com/photo-1617196037304-5ca5c6c1e3a3", category: "dairy", description: "Rich and creamy cheddar cheese for cooking or snacking." },
  { id: "p-yogurt", name: "Greek Yogurt",          slug: "greek-yogurt",        price: 2.29, image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec", category: "dairy", description: "Thick and creamy Greek yogurt, perfect for breakfast or desserts." },

  { id: "p-bread",     name: "Sourdough Bread",   slug: "sourdough-bread",  price: 4.5,  image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec", category: "bakery", description: "Freshly baked sourdough bread with a crispy crust." },
  { id: "p-croissant", name: "Butter Croissant",  slug: "butter-croissant", price: 2.99, image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e", category: "bakery", description: "Flaky and buttery croissant, perfect for breakfast." },
  { id: "p-muffin",    name: "Blueberry Muffin",  slug: "blueberry-muffin", price: 3.49, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec", category: "bakery", description: "Soft and sweet blueberry muffin, freshly baked." },

  { id: "p-cola",         name: "Cola (500ml)",          slug: "cola-500ml",        price: 1.25, image: "https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9", category: "beverages", description: "Refreshing cola drink, chilled and fizzy." },
  { id: "p-orange-juice", name: "Orange Juice (1L)",     slug: "orange-juice-1l",   price: 3.99, image: "https://images.unsplash.com/photo-1571079354894-321f31f0f1f1", category: "beverages", description: "Freshly squeezed orange juice, rich in vitamin C." },
  { id: "p-water",        name: "Mineral Water (1.5L)",  slug: "mineral-water-1-5l",price: 0.99, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150", category: "beverages", description: "Pure mineral water to keep you hydrated." },

  { id: "p-chips",   name: "Potato Chips",       slug: "potato-chips",      price: 2.99, image: "https://images.unsplash.com/photo-1694101493127-eca6dfef5011", category: "snacks", description: "Crispy potato chips, perfect for snacking." },
  { id: "p-cookies", name: "Chocolate Cookies",  slug: "chocolate-cookies", price: 3.59, image: "https://images.unsplash.com/photo-1604908554160-41a26f0f9f31", category: "snacks", description: "Sweet chocolate cookies for your sweet cravings." },
  { id: "p-popcorn", name: "Butter Popcorn",     slug: "butter-popcorn",    price: 1.99, image: "https://images.unsplash.com/photo-1601924579706-2a0d6d94c1bb", category: "snacks", description: "Freshly popped butter popcorn for movie nights." },

  { id: "p-chicken", name: "Chicken Breast (500g)", slug: "chicken-breast-500g", price: 5.99, image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781", category: "meat", description: "Fresh chicken breast, high protein and juicy." },
  { id: "p-beef",    name: "Beef Steak (400g)",     slug: "beef-steak-400g",     price: 9.49, image: "https://images.unsplash.com/photo-1604908177522-4325f50b0c2f", category: "meat", description: "Tender beef steak, perfect for grilling or frying." },

  { id: "p-salmon", name: "Salmon Fillet (400g)",  slug: "salmon-fillet-400g", price: 8.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947", category: "seafood", description: "Fresh salmon fillet, rich in omega-3." },
  { id: "p-shrimp", name: "Fresh Shrimp (300g)",   slug: "fresh-shrimp-300g", price: 7.49, image: "https://images.unsplash.com/photo-1565680018434-b513d6e66e5a", category: "seafood", description: "Fresh shrimp, ideal for cooking or grilling." },

  { id: "p-detergent", name: "Laundry Detergent",  slug: "laundry-detergent", price: 9.49, image: "https://images.unsplash.com/photo-1624372635282-b324bcdd4907", category: "household", description: "Powerful laundry detergent for clean and fresh clothes." },
  { id: "p-dishwash",  name: "Dishwashing Liquid", slug: "dishwashing-liquid", price: 3.79, image: "https://images.unsplash.com/photo-1617957743094-7a3d5f5b4f2a", category: "household", description: "Effective dishwashing liquid for sparkling clean dishes." },
  { id: "p-tissue",    name: "Paper Towels",       slug: "paper-towels", price: 2.99, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f", category: "household", description: "Soft and absorbent paper towels for everyday use." },
];


export function getCategories(): Category[] {
  return CATEGORIES;
}

export async function getProductsByCategory(category?: string): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 150));
  if (!category) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export async function searchProducts(query: string, category?: string): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 150));
  const base = category ? PRODUCTS.filter((p) => p.category === category) : PRODUCTS;
  const q = query.trim().toLowerCase();
  if (!q) return base;
  return base.filter((p) => p.name.toLowerCase().includes(q));
}

export type ProductWithSlug = Product & { slug: string };

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function getAllProducts(): Promise<ProductWithSlug[]> {
  await new Promise((r) => setTimeout(r, 150));
  return PRODUCTS.map((p) => ({ ...p, slug: slugify(p.name) }));
}

export async function getProductBySlug(slug: string): Promise<ProductWithSlug | null> {
  await new Promise((r) => setTimeout(r, 150));
  const p = PRODUCTS.find((item) => slugify(item.name) === slug);
  return p ? { ...p, slug } : null;
}

// export async function getAllProducts(): Promise<Product[]> {
//   await new Promise((r) => setTimeout(r, 150));
//   return PRODUCTS;
// }

// export async function getProductBySlug(slug: string): Promise<Product | null> {
//   await new Promise((r) => setTimeout(r, 150));
//   return PRODUCTS.find((p) => p.slug === slug) ?? null;
// }
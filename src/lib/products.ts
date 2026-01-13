export type Category = { id: string; name: string; slug: string; icon: string; color: string };
export type Product = { id: string; name: string; price: number; image: string; category: string };

export const CATEGORIES: Category[] = [
  { id: "c-fruits", name: "Fruits", slug: "fruits", icon: "🍎", color: "#FF5E5E" },
  { id: "c-vegetables", name: "Vegetables", slug: "vegetables", icon: "🥦", color: "#4CAF50" },
  { id: "c-dairy", name: "Dairy", slug: "dairy", icon: "🧀", color: "#FFD93D" },
  { id: "c-bakery", name: "Bakery", slug: "bakery", icon: "🥐", color: "#A0522D" },
  { id: "c-beverages", name: "Beverages", slug: "beverages", icon: "🧃", color: "#4FC3F7" },
  { id: "c-snacks", name: "Snacks", slug: "snacks", icon: "🥨", color: "#FF9800" },
  { id: "c-meat", name: "Meat", slug: "meat", icon: "🥩", color: "#EF5350" },
  { id: "c-seafood", name: "Seafood", slug: "seafood", icon: "🐟", color: "#26C6DA" },
  { id: "c-household", name: "Household", slug: "household", icon: "🧹", color: "#9575CD" },
  { id: "c-frozen", name: "Frozen Foods", slug: "frozen", icon: "🧊", color: "#81D4FA" },
  { id: "c-personal-care", name: "Personal Care", slug: "personal-care", icon: "🧴", color: "#F48FB1" },
  { id: "c-baby", name: "Baby Products", slug: "baby", icon: "🍼", color: "#FFCC80" },
];

const PRODUCTS: Product[] = [
  { id: "p-apple", name: "Red Apples (1kg)", price: 3.99, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", category: "fruits" },
  { id: "p-banana", name: "Bananas (1kg)", price: 2.49, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e", category: "fruits" },
  { id: "p-orange", name: "Fresh Oranges (1kg)", price: 3.29, image: "https://images.unsplash.com/photo-1547514701-42782101795e", category: "fruits" },
  { id: "p-grapes", name: "Green Grapes (500g)", price: 4.19, image: "https://images.unsplash.com/photo-1596363505729-4190a9506133", category: "fruits" },

  { id: "p-carrot", name: "Carrots (1kg)", price: 1.99, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", category: "vegetables" },
  { id: "p-tomato", name: "Fresh Tomatoes (1kg)", price: 2.39, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", category: "vegetables" },
  { id: "p-broccoli", name: "Broccoli (500g)", price: 2.79, image: "https://images.unsplash.com/photo-1584270354949-c26b0d7fce72", category: "vegetables" },

  { id: "p-milk", name: "Whole Milk (1L)", price: 1.59, image: "https://images.unsplash.com/photo-1553301803-768cd4a59b9c", category: "dairy" },
  { id: "p-cheese", name: "Cheddar Cheese (200g)", price: 4.99, image: "https://images.unsplash.com/photo-1617196037304-5ca5c6c1e3a3", category: "dairy" },
  { id: "p-yogurt", name: "Greek Yogurt", price: 2.29, image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec", category: "dairy" },

  { id: "p-bread", name: "Sourdough Bread", price: 4.5, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec", category: "bakery" },
  { id: "p-croissant", name: "Butter Croissant", price: 2.99, image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e", category: "bakery" },
  { id: "p-muffin", name: "Blueberry Muffin", price: 3.49, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec", category: "bakery" },

  { id: "p-cola", name: "Cola (500ml)", price: 1.25, image: "https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9", category: "beverages" },
  { id: "p-orange-juice", name: "Orange Juice (1L)", price: 3.99, image: "https://images.unsplash.com/photo-1571079354894-321f31f0f1f1", category: "beverages" },
  { id: "p-water", name: "Mineral Water (1.5L)", price: 0.99, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150", category: "beverages" },

  { id: "p-chips", name: "Potato Chips", price: 2.99, image: "https://images.unsplash.com/photo-1694101493127-eca6dfef5011", category: "snacks" },
  { id: "p-cookies", name: "Chocolate Cookies", price: 3.59, image: "https://images.unsplash.com/photo-1604908554160-41a26f0f9f31", category: "snacks" },
  { id: "p-popcorn", name: "Butter Popcorn", price: 1.99, image: "https://images.unsplash.com/photo-1601924579706-2a0d6d94c1bb", category: "snacks" },

  { id: "p-chicken", name: "Chicken Breast (500g)", price: 5.99, image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781", category: "meat" },
  { id: "p-beef", name: "Beef Steak (400g)", price: 9.49, image: "https://images.unsplash.com/photo-1604908177522-4325f50b0c2f", category: "meat" },

  { id: "p-salmon", name: "Salmon Fillet (400g)", price: 8.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947", category: "seafood" },
  { id: "p-shrimp", name: "Fresh Shrimp (300g)", price: 7.49, image: "https://images.unsplash.com/photo-1565680018434-b513d6e66e5a", category: "seafood" },

  { id: "p-detergent", name: "Laundry Detergent", price: 9.49, image: "https://images.unsplash.com/photo-1624372635282-b324bcdd4907", category: "household" },
  { id: "p-dishwash", name: "Dishwashing Liquid", price: 3.79, image: "https://images.unsplash.com/photo-1617957743094-7a3d5f5b4f2a", category: "household" },
  { id: "p-tissue", name: "Paper Towels", price: 2.99, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f", category: "household" },

  { id: "p-mango", name: "Fresh Mangoes (1kg)", price: 3.79, image: "https://images.unsplash.com/photo-1553279768-865429fa0078", category: "fruits" },
{ id: "p-pineapple", name: "Pineapple (1pc)", price: 2.99, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba", category: "fruits" },
{ id: "p-strawberry", name: "Strawberries (500g)", price: 4.99, image: "https://images.unsplash.com/photo-1560807707-8cc77767d783", category: "fruits" },
{ id: "p-watermelon", name: "Watermelon (1pc)", price: 5.49, image: "https://images.unsplash.com/photo-1563114773-84221bd62daa", category: "fruits" },
{ id: "p-peach", name: "Peaches (1kg)", price: 3.59, image: "https://images.unsplash.com/photo-1592928302904-42c4f0b96e2f", category: "fruits" },
{ id: "p-kiwi", name: "Kiwi Fruit (500g)", price: 4.29, image: "https://images.unsplash.com/photo-1589927986089-35812388d1c4", category: "fruits" },
{ id: "p-pomegranate", name: "Pomegranate (1kg)", price: 4.69, image: "https://images.unsplash.com/photo-1604335399105-77b1b4b92a58", category: "fruits" },
{ id: "p-blueberry", name: "Blueberries (250g)", price: 5.99, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc", category: "fruits" },

{ id: "p-frozen-pizza", name: "Frozen Cheese Pizza", price: 6.99, image: "https://images.unsplash.com/photo-1601924928585-2f8b8d7a90a1", category: "frozen" },
{ id: "p-frozen-fries", name: "Frozen French Fries (1kg)", price: 3.49, image: "https://images.unsplash.com/photo-1606755962773-0c6f62a6a6b2", category: "frozen" },
{ id: "p-frozen-nuggets", name: "Chicken Nuggets (500g)", price: 5.29, image: "https://images.unsplash.com/photo-1625944525533-473f1a3f6f89", category: "frozen" },
{ id: "p-frozen-icecream", name: "Vanilla Ice Cream (1L)", price: 4.99, image: "https://images.unsplash.com/photo-1505253216365-1dce5d1a20a0", category: "frozen" },

{ id: "p-shampoo", name: "Herbal Shampoo", price: 5.99, image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd", category: "personal-care" },
{ id: "p-conditioner", name: "Hair Conditioner", price: 6.49, image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90", category: "personal-care" },
{ id: "p-bodywash", name: "Body Wash Gel", price: 4.79, image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74", category: "personal-care" },
{ id: "p-toothpaste", name: "Mint Toothpaste", price: 2.49, image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5", category: "personal-care" },

{ id: "p-baby-diapers", name: "Baby Diapers (Pack)", price: 12.99, image: "https://images.unsplash.com/photo-1608613304899-ea8098577e38", category: "baby" },
{ id: "p-baby-wipes", name: "Baby Wet Wipes", price: 3.99, image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec", category: "baby" },
{ id: "p-baby-bottle", name: "Baby Feeding Bottle", price: 6.49, image: "https://images.unsplash.com/photo-1585386959984-a41552231693", category: "baby" },
{ id: "p-baby-soap", name: "Baby Bath Soap", price: 2.99, image: "https://images.unsplash.com/photo-1606335543042-7c2c8f3c7b8b", category: "baby" },

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
import { useState } from "react";
import { FaChevronRight, FaCheck, FaCartPlus } from "react-icons/fa";

const indianGroceryData = [
  // 1. ATTA, RICE & DAL
  {
    category: "Atta, Rice & Dal",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/517fd3efbf10f507.jpg?q=80",
    products: [
      {
        id: 101,
        name: "Aashirvaad Shudh Chakki Atta",
        brand: "ITC",
        price: 425,
        availableQuantity: 50,
        weight: "10kg",
        unit: "bag",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
        isAvailable: false,
        description: "Made from the finest grains.",
      },
      {
        id: 102,
        name: "India Gate Basmati Rice (Classic)",
        brand: "India Gate",
        price: 180,
        availableQuantity: 30,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        isAvailable: true,
        description: "Extra long grain aromatic rice.",
      },
      {
        id: 103,
        name: "Tata Sampann Toor Dal",
        brand: "Tata",
        price: 175,
        availableQuantity: 40,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1585996853877-ad9aa5fc1852?w=400",
        isAvailable: true,
        description: "Unpolished and rich in protein.",
      },
      {
        id: 104,
        name: "Fortune Chakki Fresh Atta",
        brand: "Fortune",
        price: 210,
        availableQuantity: 25,
        weight: "5kg",
        unit: "bag",
        image:
          "https://images.unsplash.com/photo-1543168256-418811576931?w=400",
        isAvailable: true,
        description: "100% whole wheat flour.",
      },
      {
        id: 105,
        name: "Daawat Rozana Gold Basmati",
        brand: "Daawat",
        price: 450,
        availableQuantity: 20,
        weight: "5kg",
        unit: "bag",
        image:
          "https://images.unsplash.com/photo-1591181520189-adcb0735c65d?w=400",
        isAvailable: true,
        description: "Perfect for daily biryani and pulao.",
      },
      {
        id: 106,
        name: "Tata Sampann Moong Dal",
        brand: "Tata",
        price: 160,
        availableQuantity: 15,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
        isAvailable: true,
        description: "Easy to digest yellow moong dal.",
      },
      {
        id: 107,
        name: "Organic Tattva Kabuli Chana",
        brand: "Organic Tattva",
        price: 195,
        availableQuantity: 12,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400",
        isAvailable: true,
        description: "Big size organic chickpeas.",
      },
      {
        id: 108,
        name: "24 Mantra Organic Poha",
        brand: "24 Mantra",
        price: 65,
        availableQuantity: 45,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1613220514107-550974794939?w=400",
        isAvailable: true,
        description: "Flattened rice for a healthy breakfast.",
      },
      {
        id: 109,
        name: "Rajma Chitra",
        brand: "Loose",
        price: 140,
        availableQuantity: 10,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1585996853877-ad9aa5fc1852?w=400",
        isAvailable: true,
        description: "High quality North Indian Kidney Beans.",
      },
      {
        id: 110,
        name: "Black Urad Dal (Split)",
        brand: "Tata Sampann",
        price: 155,
        availableQuantity: 18,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400",
        isAvailable: true,
        description: "Authentic taste for Dal Makhani.",
      },
    ],
  },
  // 2. OIL, GHEE & MASALA
  {
    category: "Oil, Ghee & Masala",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/b8b05ef80ab334ec.jpg?q=80",
    products: [
      {
        id: 201,
        name: "Amul Pure Ghee",
        brand: "Amul",
        price: 650,
        availableQuantity: 100,
        weight: "1L",
        unit: "tin",
        image:
          "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400",
        isAvailable: true,
        description: "Pure cow ghee with rich aroma.",
      },
      {
        id: 202,
        name: "Fortune Sunflower Oil",
        brand: "Fortune",
        price: 145,
        availableQuantity: 60,
        weight: "1L",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        isAvailable: true,
        description: "Refined oil for healthy cooking.",
      },
      {
        id: 203,
        name: "Everest Garam Masala",
        brand: "Everest",
        price: 85,
        availableQuantity: 150,
        weight: "100g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
        isAvailable: true,
        description: "Classic spice blend for Indian curries.",
      },
      {
        id: 204,
        name: "Tata Sampann Turmeric Powder",
        brand: "Tata",
        price: 45,
        availableQuantity: 200,
        weight: "200g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1615485240384-552e400a9c44?w=400",
        isAvailable: true,
        description: "High curcumin content turmeric.",
      },
      {
        id: 205,
        name: "Dhara Kachi Ghani Mustard Oil",
        brand: "Dhara",
        price: 175,
        availableQuantity: 40,
        weight: "1L",
        unit: "bottle",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        isAvailable: true,
        description: "Traditional pungent mustard oil.",
      },
      {
        id: 206,
        name: "MDH Kitchen King Masala",
        brand: "MDH",
        price: 78,
        availableQuantity: 120,
        weight: "100g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
        isAvailable: true,
        description: "The king of all masalas.",
      },
      {
        id: 207,
        name: "Saffola Gold Oil",
        brand: "Saffola",
        price: 195,
        availableQuantity: 35,
        weight: "1L",
        unit: "bottle",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        isAvailable: true,
        description: "Heart healthy blended oil.",
      },
      {
        id: 208,
        name: "Catch Red Chili Powder",
        brand: "Catch",
        price: 65,
        availableQuantity: 180,
        weight: "200g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400",
        isAvailable: true,
        description: "Spicy and vibrant red color.",
      },
      {
        id: 209,
        name: "Himalayan Pink Salt",
        brand: "Tata",
        price: 99,
        availableQuantity: 90,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
        isAvailable: true,
        description: "Pure mineral-rich salt.",
      },
      {
        id: 210,
        name: "Everest Sambhar Masala",
        brand: "Everest",
        price: 72,
        availableQuantity: 110,
        weight: "100g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
        isAvailable: true,
        description: "Perfect for South Indian Sambhar.",
      },
    ],
  },
  // 3. CEREALS & DRYFRUIT
  {
    category: "Cereals & Dryfruit",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/8fff21fa1c361933.jpg?q=80",
    products: [
      {
        id: 301,
        name: "Kellogg's Corn Flakes",
        brand: "Kellogg's",
        price: 190,
        availableQuantity: 40,
        weight: "475g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400",
        isAvailable: true,
        description: "Crispy breakfast cereal.",
      },
      {
        id: 302,
        name: "Happilo Premium Almonds",
        brand: "Happilo",
        price: 425,
        availableQuantity: 25,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=400",
        isAvailable: true,
        description: "High protein California almonds.",
      },
      {
        id: 303,
        name: "Bagrry's Rolled Oats",
        brand: "Bagrry's",
        price: 185,
        availableQuantity: 30,
        weight: "1kg",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?w=400",
        isAvailable: true,
        description: "High fiber whole grain oats.",
      },
      {
        id: 304,
        name: "Premium Cashews (W240)",
        brand: "Farmley",
        price: 350,
        availableQuantity: 20,
        weight: "250g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
        isAvailable: true,
        description: "Rich and crunchy cashews.",
      },
      {
        id: 305,
        name: "Muesli Fruit & Nut",
        brand: "Kellogg's",
        price: 320,
        availableQuantity: 15,
        weight: "500g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1517712173543-3ef46274409a?w=400",
        isAvailable: true,
        description: "Loaded with fruits and nuts.",
      },
      {
        id: 306,
        name: "Lion Dates",
        brand: "Lion",
        price: 145,
        availableQuantity: 50,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400",
        isAvailable: true,
        description: "Desert Dates rich in iron.",
      },
      {
        id: 307,
        name: "California Walnuts",
        brand: "Tulsi",
        price: 499,
        availableQuantity: 12,
        weight: "250g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1589667507963-744b27c33118?w=400",
        isAvailable: true,
        description: "Shelled walnut kernels.",
      },
      {
        id: 308,
        name: "Chocos Moons & Stars",
        brand: "Kellogg's",
        price: 165,
        availableQuantity: 35,
        weight: "350g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=400",
        isAvailable: true,
        description: "Chocolatey breakfast for kids.",
      },
      {
        id: 309,
        name: "Green Raisins (Kishmish)",
        brand: "Happilo",
        price: 120,
        availableQuantity: 40,
        weight: "250g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=400",
        isAvailable: true,
        description: "Sweet and long green raisins.",
      },
      {
        id: 310,
        name: "Quaker Oats",
        brand: "Quaker",
        price: 99,
        availableQuantity: 60,
        weight: "400g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?w=400",
        isAvailable: true,
        description: "Quick cooking white oats.",
      },
    ],
  },
  // 4. INSTANT & FROZEN FOOD
  {
    category: "Instant & Frozen Food",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/9dac608ce85adb34.jpg?q=80",
    products: [
      {
        id: 401,
        name: "Maggi Masala Noodles",
        brand: "Nestle",
        price: 96,
        availableQuantity: 200,
        weight: "560g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1612927608553-296469ca6bd3?w=400",
        isAvailable: true,
        description: "Your favorite 2-minute noodles.",
      },
      {
        id: 402,
        name: "McCain Smiles",
        brand: "McCain",
        price: 125,
        availableQuantity: 30,
        weight: "415g",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1573082818143-f255bcda54c8?w=400",
        isAvailable: true,
        description: "Crispy potato appetizers.",
      },
      {
        id: 403,
        name: "Knorr Tomato Soup",
        brand: "Knorr",
        price: 55,
        availableQuantity: 100,
        weight: "50g",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
        isAvailable: true,
        description: "Restaurant style soup at home.",
      },
      {
        id: 404,
        name: "ITC Master Chef Paneer Tikka",
        brand: "ITC",
        price: 295,
        availableQuantity: 15,
        weight: "280g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1567184109411-47a7a392855f?w=400",
        isAvailable: true,
        description: "Frozen ready-to-eat paneer tikka.",
      },
      {
        id: 405,
        name: "Top Ramen Curry Noodles",
        brand: "Nissin",
        price: 80,
        availableQuantity: 80,
        weight: "280g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1612927608553-296469ca6bd3?w=400",
        isAvailable: true,
        description: "Flat noodles with curry flavor.",
      },
      {
        id: 406,
        name: "Amul Frozen French Fries",
        brand: "Amul",
        price: 110,
        availableQuantity: 25,
        weight: "750g",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1573082818143-f255bcda54c8?w=400",
        isAvailable: true,
        description: "Perfectly sliced frozen fries.",
      },
      {
        id: 407,
        name: "MTR Ready to Eat Paneer Butter Masala",
        brand: "MTR",
        price: 130,
        availableQuantity: 20,
        weight: "300g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1567184109411-47a7a392855f?w=400",
        isAvailable: true,
        description: "Just heat and eat meal.",
      },
      {
        id: 408,
        name: "Yippee Magic Masala Noodles",
        brand: "Sunfeast",
        price: 85,
        availableQuantity: 150,
        weight: "360g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1612927608553-296469ca6bd3?w=400",
        isAvailable: true,
        description: "Long non-sticky noodles.",
      },
      {
        id: 409,
        name: "Prasuma Chicken Momos",
        brand: "Prasuma",
        price: 325,
        availableQuantity: 10,
        weight: "250g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b4?w=400",
        isAvailable: true,
        description: "Authentic frozen momos.",
      },
      {
        id: 410,
        name: "Gits Gulab Jamun Mix",
        brand: "Gits",
        price: 115,
        availableQuantity: 40,
        weight: "200g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Instant dessert mix.",
      },
    ],
  },
  // 5. CHOCOLATES & CANDIES
  {
    category: "Chocolates & Candies",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/7ad14d6e1f031ad3.jpg?q=80",
    products: [
      {
        id: 501,
        name: "Cadbury Dairy Milk Silk",
        brand: "Cadbury",
        price: 80,
        availableQuantity: 100,
        weight: "60g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400",
        isAvailable: true,
        description: "Smooth and creamy chocolate.",
      },
      {
        id: 502,
        name: "Amul Dark Chocolate",
        brand: "Amul",
        price: 120,
        availableQuantity: 60,
        weight: "150g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400",
        isAvailable: true,
        description: "90% cocoa rich dark chocolate.",
      },
      {
        id: 503,
        name: "Ferrero Rocher",
        brand: "Ferrero",
        price: 549,
        availableQuantity: 20,
        weight: "200g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=400",
        isAvailable: true,
        description: "Crispy hazelnut chocolate truffles.",
      },
      {
        id: 504,
        name: "Nestle KitKat",
        brand: "Nestle",
        price: 30,
        availableQuantity: 200,
        weight: "38g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1621447509323-570a171424ca?w=400",
        isAvailable: true,
        description: "Have a break, have a KitKat.",
      },
      {
        id: 505,
        name: "Pulse Candy Jar",
        brand: "Pulse",
        price: 150,
        availableQuantity: 30,
        weight: "500g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1582043242212-96947657989d?w=400",
        isAvailable: true,
        description: "Kachcha Aam flavor with tangy core.",
      },
      {
        id: 506,
        name: "Kinder Joy (Blue)",
        brand: "Ferrero",
        price: 45,
        availableQuantity: 80,
        weight: "20g",
        unit: "egg",
        image:
          "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400",
        isAvailable: true,
        description: "Treat with a surprise toy.",
      },
      {
        id: 507,
        name: "Snickers Peanut Bar",
        brand: "Mars",
        price: 50,
        availableQuantity: 120,
        weight: "50g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400",
        isAvailable: true,
        description: "Peanuts and caramel filling.",
      },
      {
        id: 508,
        name: "Himalaya Orange Candy",
        brand: "Himalaya",
        price: 2,
        availableQuantity: 500,
        weight: "5g",
        unit: "piece",
        image:
          "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400",
        isAvailable: true,
        description: "Zesty orange hard candy.",
      },
      {
        id: 509,
        name: "Bournville 50% Dark",
        brand: "Cadbury",
        price: 90,
        availableQuantity: 40,
        weight: "80g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400",
        isAvailable: true,
        description: "Premium dark chocolate experience.",
      },
      {
        id: 510,
        name: "Munch Nutty",
        brand: "Nestle",
        price: 20,
        availableQuantity: 150,
        weight: "32g",
        unit: "bar",
        image:
          "https://images.unsplash.com/photo-1621447509323-570a171424ca?w=400",
        isAvailable: true,
        description: "Crunchy wafer with nuts.",
      },
    ],
  },
  // 6. TEA, COFFEE & MIXERS
  {
    category: "Tea, coffee & Mixers",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/bd341a41a5106ecf.jpg?q=80",
    products: [
      {
        id: 601,
        name: "Taj Mahal Tea",
        brand: "Taj Mahal",
        price: 380,
        availableQuantity: 50,
        weight: "500g",
        unit: "box",
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4586c562?w=400",
        isAvailable: true,
        description: "Premium loose leaf Indian tea.",
      },
      {
        id: 602,
        name: "Nescafe Classic Coffee",
        brand: "Nescafe",
        price: 295,
        availableQuantity: 60,
        weight: "100g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        isAvailable: true,
        description: "100% pure instant coffee.",
      },
      {
        id: 603,
        name: "Tata Tea Gold",
        brand: "Tata Tea",
        price: 310,
        availableQuantity: 70,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4586c562?w=400",
        isAvailable: true,
        description: "Rich taste and irresistible aroma.",
      },
      {
        id: 604,
        name: "Bru Instant Coffee",
        brand: "Bru",
        price: 180,
        availableQuantity: 45,
        weight: "100g",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        isAvailable: true,
        description: "Coffee-Chicory blend.",
      },
      {
        id: 605,
        name: "Horlicks Health Drink",
        brand: "Horlicks",
        price: 245,
        availableQuantity: 40,
        weight: "500g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1556767667-0754773d55d8?w=400",
        isAvailable: true,
        description: "Classic malt health drink.",
      },
      {
        id: 606,
        name: "Society Tea",
        brand: "Society",
        price: 290,
        availableQuantity: 35,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4586c562?w=400",
        isAvailable: true,
        description: "Authentic Dust Tea for daily use.",
      },
      {
        id: 607,
        name: "Davidoff Rich Aroma",
        brand: "Davidoff",
        price: 650,
        availableQuantity: 15,
        weight: "100g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        isAvailable: true,
        description: "Premium luxury coffee.",
      },
      {
        id: 608,
        name: "Bournvita Chocolate Drink",
        brand: "Cadbury",
        price: 215,
        availableQuantity: 50,
        weight: "500g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1556767667-0754773d55d8?w=400",
        isAvailable: true,
        description: "Tan ki shakti, man ki shakti.",
      },
      {
        id: 609,
        name: "Red Label Natural Care",
        brand: "Brooke Bond",
        price: 340,
        availableQuantity: 40,
        weight: "500g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4586c562?w=400",
        isAvailable: true,
        description: "Tea with 5 Ayurvedic herbs.",
      },
      {
        id: 610,
        name: "Continental Xtra Coffee",
        brand: "Continental",
        price: 160,
        availableQuantity: 25,
        weight: "100g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        isAvailable: true,
        description: "Strong coffee-chicory blend.",
      },
    ],
  },
  // 7. SAUCES & SPREADS
  {
    category: "Sauces & Spreads",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/d2710001fafc16fb.jpg?q=80",
    products: [
      {
        id: 701,
        name: "Kissan Fresh Tomato Ketchup",
        brand: "Kissan",
        price: 145,
        availableQuantity: 60,
        weight: "1kg",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
        isAvailable: true,
        description: "Made with 100% real tomatoes.",
      },
      {
        id: 702,
        name: "Nutella Hazelnut Spread",
        brand: "Ferrero",
        price: 395,
        availableQuantity: 25,
        weight: "350g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1553531580-652231dae097?w=400",
        isAvailable: true,
        description: "Classic hazelnut and cocoa spread.",
      },
      {
        id: 703,
        name: "FunFoods Veg Mayonnaise",
        brand: "Dr. Oetker",
        price: 85,
        availableQuantity: 45,
        weight: "250g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1585325706579-1076526011e7?w=400",
        isAvailable: true,
        description: "Creamy and 100% eggless.",
      },
      {
        id: 704,
        name: "Veeba Pasta & Pizza Sauce",
        brand: "Veeba",
        price: 99,
        availableQuantity: 30,
        weight: "280g",
        unit: "bottle",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
        isAvailable: true,
        description: "Tangy sauce for Italian dishes.",
      },
      {
        id: 705,
        name: "Amul Garlic & Herbs Butter",
        brand: "Amul",
        price: 60,
        availableQuantity: 50,
        weight: "100g",
        unit: "pack",
        image:
          "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400",
        isAvailable: true,
        description: "Flavored table butter.",
      },
      {
        id: 706,
        name: "Ching's Secret Dark Soy Sauce",
        brand: "Ching's",
        price: 65,
        availableQuantity: 40,
        weight: "200ml",
        unit: "bottle",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
        isAvailable: true,
        description: "Authentic Desi-Chinese taste.",
      },
      {
        id: 707,
        name: "Peanut Butter (Crunchy)",
        brand: "Pintola",
        price: 175,
        availableQuantity: 20,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400",
        isAvailable: true,
        description: "All natural high protein butter.",
      },
      {
        id: 708,
        name: "Hershey's Chocolate Syrup",
        brand: "Hershey's",
        price: 210,
        availableQuantity: 35,
        weight: "623g",
        unit: "bottle",
        image:
          "https://images.unsplash.com/photo-1612132331213-d44e460fb947?w=400",
        isAvailable: true,
        description: "Indulgent topping for desserts.",
      },
      {
        id: 709,
        name: "Schezwan Chutney",
        brand: "Ching's",
        price: 90,
        availableQuantity: 55,
        weight: "250g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Dip, spread, or cook with it.",
      },
      {
        id: 710,
        name: "Kissan Mixed Fruit Jam",
        brand: "Kissan",
        price: 165,
        availableQuantity: 40,
        weight: "500g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1543168256-418811576931?w=400",
        isAvailable: true,
        description: "Made with 8 real fruits pulp.",
      },
    ],
  },
  // 8. PICKLES & CHUTNEY
  {
    category: "Pickles & Chutney",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/380/470/image/64d92a42e0978b55.jpg?q=80",
    products: [
      {
        id: 801,
        name: "Mother's Recipe Mango Pickle",
        brand: "Mother's Recipe",
        price: 120,
        availableQuantity: 45,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Traditional home style Aam ka Achar.",
      },
      {
        id: 802,
        name: "Priya Lime Pickle (With Garlic)",
        brand: "Priya",
        price: 110,
        availableQuantity: 30,
        weight: "300g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Spicy South Indian style lemon pickle.",
      },
      {
        id: 803,
        name: "Nilon's Mixed Pickle",
        brand: "Nilon's",
        price: 95,
        availableQuantity: 50,
        weight: "400g",
        unit: "pouch",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Mix of mango, carrot, lime, and chilies.",
      },
      {
        id: 804,
        name: "Mother's Recipe Garlic Pickle",
        brand: "Mother's Recipe",
        price: 135,
        availableQuantity: 25,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Strong and spicy garlic flavor.",
      },
      {
        id: 805,
        name: "Pravin Green Chili Pickle",
        brand: "Pravin",
        price: 85,
        availableQuantity: 35,
        weight: "200g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Hot and spicy green chilies.",
      },
      {
        id: 806,
        name: "Tops Red Chili Pickle",
        brand: "Tops",
        price: 105,
        availableQuantity: 40,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Stuffed red chili pickle.",
      },
      {
        id: 807,
        name: "Sun-Dried Gunda Pickle",
        brand: "Loose",
        price: 180,
        availableQuantity: 10,
        weight: "500g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Authentic Gujarati Lasoda pickle.",
      },
      {
        id: 808,
        name: "Priya Gongura Pickle",
        brand: "Priya",
        price: 125,
        availableQuantity: 20,
        weight: "300g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Famous Andhra sorrel leaf pickle.",
      },
      {
        id: 809,
        name: "Sweet Mango Chutney",
        brand: "Mother's Recipe",
        price: 140,
        availableQuantity: 15,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Sweet and spicy mango dip.",
      },
      {
        id: 810,
        name: "Bedekar Stuffed Chili",
        brand: "Bedekar",
        price: 160,
        availableQuantity: 12,
        weight: "400g",
        unit: "jar",
        image:
          "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400",
        isAvailable: true,
        description: "Traditional Maharashtrian pickle.",
      },
    ],
  },
];

export default function App() {
  const [groceryData, setGroceryData] = useState(indianGroceryData);
  // Store just the string name, not the whole object
  const [activeCategoryName, setActiveCategoryName] = useState(
    indianGroceryData[0].category,
  );
  const activeCategory =
    groceryData.find((cat) => cat.category === activeCategoryName) ||
    groceryData[0];

  const cartCount = groceryData
    .flatMap((cat) => cat.products)
    .filter((p) => p.cart).length;

  function handleUpdationOfCart(toAddCartCateProd) {
    const [targetCategory, targetProductId] = toAddCartCateProd;

    setGroceryData((prevGroceryData) => {
      return prevGroceryData.map((cat) => {
        // 1. Find the matching category
        if (cat.category === targetCategory) {
          return {
            ...cat,
            // 2. Map through products in that category
            products: cat.products.map((prod) => {
              // 3. Find the matching product ID
              if (prod.id === targetProductId) {
                // 4. Return product with cart: true
                return { ...prod, cart: true };
              }
              return prod;
            }),
          };
        }
        return cat; // Return unchanged categories
      });
    });
  }

  // console.log(activeCategory.category);
  return (
    <section className="h-screen py-5 overflow-hidden">
      <div className="max-w-[calc(100%-2rem)] mx-auto flex gap-3 bg-white/5 h-full rounded-3xl p-3 items-start">
        <div className="flex-3 flex bg-white/10 rounded-3xl gap-3 p-3 h-full items-start">
          {/* Left Side - Category Col*/}
          <div className="flex-1 bg-white/10 rounded-3xl p-3 flex h-full flex-col">
            {/* Category Title and No. Items */}
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg text-white font-medium">Categories</h4>
              <span className="bg-white text-black h-6 w-6 text-center  font-bold text-xs rounded-full leading-[24px]">
                {groceryData.length}
              </span>
            </div>

            {/* Categories List */}
            <CategoryList
              onSelectCategory={(cat) => setActiveCategoryName(cat.category)}
              activeCategory={activeCategory}
              groceryData={groceryData}
            />
          </div>

          {/* Middle - Product Col*/}
          <div className="flex-2 bg-white/10 rounded-3xl p-3 flex flex-col h-full">
            {/* Selected Category Title and No. Items */}
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg text-white font-medium">
                {activeCategory.category}
              </h4>
              <span className="bg-white text-black h-6 w-6 text-center  font-bold text-xs rounded-full leading-[24px]">
                {activeCategory.products.length}
              </span>
            </div>

            {/* Selected Product List */}
            <ProductList
              activeCategory={activeCategory}
              onClickAddToCart={handleUpdationOfCart}
            />
          </div>
        </div>

        <div className="flex-1 bg-white/10 rounded-3xl p-3 h-full overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg text-white font-medium">Cart Items</h4>
            <span className="bg-white text-black h-6 w-6 text-center  font-bold text-xs rounded-full leading-6">
              {cartCount}
            </span>
          </div>
          <CartList groceryData={groceryData} />
        </div>
      </div>
    </section>
  );
}

function CategoryList({ groceryData, onSelectCategory, activeCategory }) {
  return (
    <div className="overflow-y-scroll custom-scrollbar rounded-2xl pr-3">
      {groceryData.map((grocery) => (
        <CategoryItem
          key={grocery.category}
          grocery={grocery}
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
}

function CategoryItem({ grocery, onSelectCategory, activeCategory }) {
  const isActive = activeCategory?.category === grocery.category;

  function handleCategoryClick() {
    onSelectCategory(grocery);
  }
  return (
    <div
      className={`p-3 flex rounded-3xl mb-3 gap-2 transition-all duration-500 cursor-pointer ${isActive ? "bg-black" : "bg-white/10"}`}
      key={grocery.category}
      onClick={handleCategoryClick}
    >
      <div className="flex-1 aspect-[16/13.5] rounded-md relative overflow-hidden">
        <img
          src={grocery.image}
          className="object-top object-cover absolute w-full h-full left-0 top-0"
        />
      </div>
      <div className="flex-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-md text-white">{grocery.category}</p>
          <p className="text-xs text-white">
            {grocery.products.length} - Products
          </p>
        </div>
        <button
          className="text-[12px] w-6 h-6 rounded-full flex items-center justify-center bg-white text-black"
          onClick={handleCategoryClick}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
function ProductList({ activeCategory, onClickAddToCart }) {
  const products = activeCategory.products;
  return (
    <div className="overflow-y-scroll custom-scrollbar rounded-2xl pr-3 h-full">
      {products.map((product) => (
        <ProductItem
          productData={product}
          key={product.id}
          onClickAddToCart={onClickAddToCart}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
}

function ProductItem({ productData, onClickAddToCart, activeCategory }) {
  function handleAddCart() {
    const toAddCartCateProd = [activeCategory.category, productData.id];
    onClickAddToCart(toAddCartCateProd);
  }
  return (
    <div
      className={`p-3 rounded-3xl mb-3 flex items-stretch gap-3 ${!productData.isAvailable ? "pointer-events-none bg-red-600/50" : "bg-white/10"}`}
    >
      <div className="flex-1/12 aspect-16/13.5 rounded-md relative overflow-hidden">
        <img
          src={productData.image}
          className="object-center object-cover absolute w-full h-full left-0 top-0"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://picsum.photos/seed/picsum/1280/901";
          }}
        />
      </div>
      <div className="flex-4">
        <h6 className="text-xs font-extrabold">
          {productData.brand}{" "}
          {!productData.isAvailable && (
            <span className="bg-black p-1 text-[8px] rounded-full ml-2">
              Not Available
            </span>
          )}
        </h6>
        <h5 className="text-md font-bold">{productData.name}</h5>
        <p className="text-sm">{productData.description}</p>
        <p className="text-sm">
          Available Quantity : {productData.availableQuantity}
        </p>
      </div>
      <div className="flex-2 flex justify-between flex-col">
        <div>
          <p className="text-sm">Price : ₹{productData.price}</p>
          <p className="text-sm mb-2">
            Wight : {productData.weight}/{productData.unit}
          </p>
        </div>
        {productData.isAvailable &&
          (productData.cart ? (
            <button className="bg-blue-600 px-2 py-1 rounded-sm text-xs font-bold text-white flex gap-1 items-center cursor-default">
              In Cart <FaCheck />
            </button>
          ) : (
            <button
              className="flex gap-1 items-center bg-green-700 px-2 py-1 rounded-sm text-xs font-bold w-fit hover:bg-blue-500 transition-all duration-500"
              onClick={handleAddCart}
            >
              Add To Cart <FaCartPlus />
            </button>
          ))}
      </div>
    </div>
  );
}

function CartList({ groceryData }) {
  const productsInCart = groceryData
    .flatMap((category) => category.products)
    .filter((products) => products?.cart === true);
  console.log(productsInCart);
  return (
    <div className="overflow-y-scroll custom-scrollbar rounded-2xl pr-3 h-full">
      {productsInCart.length > 0 ? (
        productsInCart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))
      ) : (
        <p className="text-white/50 text-center mt-10">Cart is empty</p>
      )}
    </div>
  );
}

function CartItem({ product }) {
  return (
    <div className={`p-3 rounded-3xl mb-3 flex gap-3`}>
      <div className="flex-1 aspect-16/13.5 rounded-md relative overflow-hidden">
        <img
          src="https://picsum.photos/seed/picsum/1280/901"
          className="object-center object-cover absolute w-full h-full left-0 top-0"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://picsum.photos/seed/picsum/1280/901";
          }}
        />
      </div>
      <div className="flex-2">
        <h5 className="text-sm font-bold">productData.name</h5>
        <p className="text-sm">Total : ₹10</p>
      </div>
      <div className="flex-2">
        <p className="text-sm mb-2">Quantity</p>
        <input
          type="number"
          className="w-full px-2 py-1 border border-gray-300 rounded-sm 
         text-white placeholder-gray-400
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
         transition-all duration-200"
        />
      </div>
    </div>
  );
}

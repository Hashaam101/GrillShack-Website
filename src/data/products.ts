export type Product = {
  id: string;
  name: string;
  image: string; // path starting with "/" relative to public/
  price?: number;
  prices?: {
    tag1: string,
    tag2: number
  }[];
  points?: number;
  description: string;
  tags: string[];
  starred?: boolean;
  category: string;
};

export const products: Product[] = [
  {
    id: 'new-ujtujq5cx',
    name: 'Monday: Shack Burger & Fries',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A special Monday offer featuring our classic Shack Burger served with a side of crispy fries.',
    tags: ['Burger', 'Beef', 'Fries'],
    category: 'Lunch Offers (12 PM – 5 PM)',
    starred: false
  },
  {
    id: 'new-f2ifxatk3',
    name: 'Tuesday: 8 Grilled Wings & Fries',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A special Tuesday offer featuring eight of our signature grilled wings served with a side of crispy fries.',
    tags: ['Wings', 'Chicken', 'Fries'],
    category: 'Lunch Offers (12 PM – 5 PM)',
    starred: false
  },
  {
    id: 'new-xl27zq0i4',
    name: 'Wednesday: $1/4$ Beef Pounder & Fries',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A special Wednesday offer featuring our 1/4 pound beef burger served with a side of crispy fries.',
    tags: ['Burger', 'Beef', 'Fries'],
    category: 'Lunch Offers (12 PM – 5 PM)',
    starred: false
  },
  {
    id: 'new-ozl0zl1pp',
    name: 'Thursday: $1/4$ Chicken with Fries',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A special Thursday offer featuring a quarter of our grilled chicken served with a side of crispy fries.',
    tags: ['Chicken', 'Grilled', 'Fries'],
    category: 'Lunch Offers (12 PM – 5 PM)',
    starred: false
  },
  {
    id: 'sb-2',
    name: 'Classic Cheese Burger',
    image: 'https://i.ibb.co/5hLxZRM2/cheeseburger.png',
    price: 7.49,
    description: 'Classic beef patty with melted cheese, fresh lettuce, and house sauce.',
    tags: ['Burger', 'Beef', 'Cheese'],
    category: 'Shack Signature Burgers',
    starred: false
  },
  {
    id: 'new-oc8n7pztp',
    name: 'BBQ Feast Burger',
    price: 7.49,
    image: 'https://i.ibb.co/v4DvvCdB/bbqfeast91.png',
    description: 'A smoky BBQ burger with a juicy beef patty, crispy onions, and a rich BBQ sauce.',
    tags: ['Burger', 'Beef', 'BBQ'],
    category: 'Shack Signature Burgers',
    starred: false
  },
  {
    id: 'new-940dj8kdb',
    name: 'Halloumi Fun',
    image: 'https://i.ibb.co/hJQcHjL9/halloumifun.png',  
    price: 7.49,
    description: 'A delicious vegetarian burger with grilled halloumi, fresh salad, and a tangy sauce.',
    tags: ['Burger', 'Vegetarian', 'Halloumi'],
    category: 'Shack Signature Burgers',
    starred: false
  },
  {
    id: 'new-gqg5c4yss',
    name: 'Fully Loaded Smash',
    image: 'https://i.ibb.co/xtzpvxFk/fullyloadedsmash.png',
    price: 9.99,
    description: 'A massive burger with two smashed beef patties, double cheese, and all the toppings.',
    tags: ['Burger', 'Beef', 'Smashed'],
    category: 'Shack Signature Burgers',
    starred: false
  },
  {
    id: 'new-mu8h024mm',
    name: 'Shack Beef 1/4 Pounder',
    image: 'https://i.ibb.co/93wm3B3k/beefquaterpounder.png',
    price: 3.99,
    description: 'A simple and classic beef burger, perfect for a quick and satisfying meal.',
    tags: ['Burger', 'Beef'], 
    category: 'Shack Signature Burgers',
    starred: false
  },
  {
    id: 'new-f4zjz0ygu',
    name: 'Wings',
    image: 'https://i.ibb.co/5gp5gLKs/wings.png',
    prices: [
      {tag1: "5pcs", tag2: 4.50},
      {tag1: "10pcs", tag2: 8.00},
      {tag1: "20pcs", tag2: 15.00}
    ],
    description: 'Juicy and flavorful chicken wings, grilled to perfection and available in multiple serving sizes.',
    tags: ['Wings', 'Chicken', 'Grilled'],
    category: 'Straight Off the Grill',
    starred: false
  },
  {
    id: 'new-m7z4m67ho',
    name: 'Strips',
    image: 'https://i.ibb.co/Q3ncDhTc/strips.png',
    prices: [
      {tag1: "5pcs", tag2: 4.99},
      {tag1: "1/4pc", tag2: 4.50},
      {tag1: "1/2pc", tag2: 6.99}
    ],
    description: 'Tender and juicy chicken strips, perfect for a light meal or a satisfying snack.',
    tags: ['Chicken', 'Strips', 'Grilled'],
    category: 'Straight Off the Grill',
    starred: false
  },
  {
    id: 'new-lm4vwo65d',
    name: 'Grilled Chicken',
    image: 'https://i.ibb.co/5hqKffPh/fullchicken.png',
    prices: [
      {tag1: "Whole Chicken", tag2: 11.99},
      {tag1: "Chicken & Rice", tag2: 5.99}
    ],
    description: 'Enjoy a whole grilled chicken or a delicious chicken and rice meal.',
    tags: ['Chicken', 'Grilled', 'Rice'],
    category: 'Straight Off the Grill',
    starred: false
  },
  {
    id: 'v-4',
    name: 'Paneer Loaded Fries',
    image: '/Images/Menu/placeholder.png',
    price: 7,
    description: 'Fries loaded with paneer, cheese, and spicy sauce.',
    tags: ['Fries', 'Vegetarian', 'Paneer', 'Loaded'],
    category: 'Shack Veggie Menu',
    starred: true
  },
  {
    id: 'v-5',
    name: 'Paneer Wrap',
    image: '/Images/Menu/placeholder.png',
    price: 6.45,
    prices: [
      {tag1: "M", tag2: 4.99},
      {tag1: "L", tag2: 7.49}
    ],
    description: 'Grilled paneer with salad and sauce in a wrap.',
    tags: ['Wrap', 'Vegetarian', 'Paneer'],
    category: 'Shack Veggie Menu',
    starred: false
  },
  {
    id: 'v-3',
    name: 'Paneer Rice',
    image: '/Images/Menu/placeholder.png',
    price: 6.95,
    prices: [
      {tag1: "M", tag2: 5.99},
      {tag1: "L", tag2: 8.49}
    ],
    description: 'Spicy rice topped with grilled paneer chunks.',
    tags: ['Rice', 'Vegetarian', 'Paneer', 'Indian'],
    category: 'Shack Veggie Menu',
    starred: false
  },
  {
    id: 'new-pyq9czxhf',
    name: 'Fish Burger',
    image: '/Images/Menu/placeholder.png',
    prices: [
      {tag1: "M", tag2: 2.99},
      {tag1: "L", tag2: 5.49}
    ],
    description: 'A crispy fish fillet in a soft bun with tartar sauce and fresh lettuce.',
    tags: ['Burger', 'Fish', 'Seafood'],
    category: 'Shack Veggie Menu',
    starred: false
  },
  {
    id: 'v-1',
    name: 'Veggie Burger',
    image: 'https://i.ibb.co/0VZQVqw9/vegburger.png',
    price: 5.45,
    prices: [
      {tag1: "M", tag2: 2.49},
      {tag1: "L", tag2: 4.49}
    ],
    description: 'Crispy vegetable patty with lettuce and mayo.',
    tags: ['Burger', 'Vegetarian'],
    category: 'Shack Veggie Menu',
    starred: false
  },
  {
    id: 'v-2',
    name: 'Veggie Wrap',
    image: '/Images/Menu/placeholder.png',
    price: 5.45,
    prices: [
      {tag1: "M", tag2: 1.99},
      {tag1: "L", tag2: 4.49}
    ],
    description: 'Vegetable patty strips in a wrap with salad.',
    tags: ['Wrap', 'Vegetarian'],
    category: 'Shack Veggie Menu',
    starred: false
  },
  {
    id: 'sbd-1',
    name: 'Lamb Doner Box',
    image: 'https://i.ibb.co/nMGhccHF/lambdonerbox.png',
    price: 7,
    description: 'Classic lamb doner meat served with salad and sauce.',
    tags: ['Lamb', 'Doner', 'Kebab'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'new-n2a79d0mo',
    name: 'Doner in Burger/Pitta',
    image: '/Images/Menu/placeholder.png',
    price: 6.49,
    description: 'Your choice of a burger or pitta bread filled with delicious lamb doner meat.',
    tags: ['Lamb', 'Doner', 'Burger', 'Pitta'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'sbd-5',
    name: 'Smash Doner Box',
    image: 'https://i.ibb.co/5XdJGL2Z/smashbox.png',
    price: 14.99,
    description: 'Smash patty chopped with doner meat.',
    tags: ['Beef', 'Lamb', 'Doner', 'Box'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'new-aqucit6ac',
    name: 'Wing Wing Box',
    image: '/Images/Menu/placeholder.png',
    price: 11.99,
    description: 'A box full of our signature grilled wings, perfect for sharing.',
    tags: ['Chicken', 'Wings', 'Sharing'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'new-fw2z5djul',
    name: 'Hunger Buster Box',
    image: '/Images/Menu/placeholder.png',
    price: 11.99,
    description: 'A feast in a box, with a variety of our most popular items.',
    tags: ['Chicken', 'Beef', 'Lamb', 'Sharing', 'Meal'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'sbd-4',
    name: 'Mixed Shack-Style Meat',
    image: 'https://i.ibb.co/v6pnMm6d/mixedshackstylemeat.png',
    price: 11.99,
    description: 'A mix of lamb doner and grilled chicken strips.',
    tags: ['Lamb', 'Chicken', 'Mixed', 'Kebab'],
    category: 'Box Deals',
    starred: false
  },
  {
    id: 'sd-9',
    name: 'Loaded Fries',
    image: 'https://i.ibb.co/SD96gcWr/b-Loaded-Fries.png',
    price: 7,
    description: 'Fries topped with cheese sauce and jalapenos.',
    tags: ['Side', 'Fries', 'Cheese', 'Spicy'],
    category: 'Box Deals',
    starred: true
  },
  {
    id: 'sd-3',
    name: 'Fries',
    image: '/Images/Menu/placeholder.png',
    price: 2.49,
    description: 'Regular portion of potato fries.',
    tags: ['Side', 'Potato', 'Vegan'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'new-3r28usutg',
    name: 'Cheesy Fries',
    image: 'https://i.ibb.co/CKB9DJqB/ccheesyfries.png',
    price: 3.49,
    description: 'Our classic fries smothered in a rich and creamy cheese sauce.',
    tags: ['Side', 'Fries', 'Cheese'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'sd-8',
    name: 'Spicy Rice',
    image: 'https://i.ibb.co/hFkvHD0N/chicken-rice.png',
    price: 3.49,
    description: 'Savoury spicy rice.',
    tags: ['Side', 'Rice', 'Vegetarian'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'new-s43qyewel',
    name: 'Chicken Nuggets',
    image: 'https://i.ibb.co/Z62VTrKm/chickennuggets.png',
    prices: [
      {tag1: "M", tag2: 2.49},
      {tag1: "L", tag2: 4.49}
    ],
    description: 'Crispy and delicious chicken nuggets, available in two sizes.',
    tags: ['Side', 'Chicken', 'Nuggets'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'new-bgd3h1iid',
    name: 'Popcorn Chicken',
    image: '/Images/Menu/placeholder.png',
    prices: [
      {tag1: "M", tag2: 2.49},
      {tag1: "L", tag2: 4.49}
    ],
    description: 'Bite-sized pieces of crispy chicken, perfect for snacking.',
    tags: ['Side', 'Chicken', 'Popcorn'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'sd-5',
    name: 'Mozzarella Sticks',
    image: 'https://i.ibb.co/gM17JSM6/bmozzerallasticks.png',
    price: 2.49,
    description: 'Breaded mozzarella cheese sticks.',
    tags: ['Side', 'Cheese', 'Vegetarian'],
    category: 'Sides & Bites',
    starred: false
  },
  {
    id: 'sd-13',
    name: 'Chili Cheese Bites',
    image: '/Images/Menu/placeholder.png',
    price: 2.49,
    description: 'Spicy cheese nuggets.',
    tags: ['Side', 'Cheese', 'Spicy'],
    category: 'Sides & Bites',
    starred: false
  },

  {
    id: 'gc-6',
    name: 'Grilled Shack Chicken Burger',
    image: 'https://i.ibb.co/S20t9xH/shackgrillburger.png',
    price: 6.95,
    description: 'Grilled chicken breast fillet with lettuce and mayo in a bun.',
    tags: ['Burger', 'Chicken', 'Grilled'],
    category: 'Straight Off the Grill',
    starred: true
  },
  {
    id: 'gc-7',
    name: 'Shack Wrap',
    image: 'https://i.ibb.co/gbT48sk0/shackwrap.png',
    price: 6.45,
    description: 'Grilled chicken strips with lettuce and mayo in a soft tortilla.',
    tags: ['Wrap', 'Chicken', 'Grilled'],
    category: 'Straight Off the Grill',
    starred: false
  },
  {
    id: 'sbd-2',
    name: 'Lamb Doner with Fries',
    image: '/Images/Menu/placeholder.png',
    price: 9.95,
    description: 'Lamb doner meat served over a portion of fries.',
    tags: ['Lamb', 'Doner', 'Fries', 'Meal'],
    category: 'Shack Box Deals',
    starred: true
  },
  {
    id: 'sbd-6',
    name: 'Wings Platter 20',
    image: 'https://i.ibb.co/cSrckjZG/wingsbox.png',
    price: 19.95,
    description: '20 grilled wings with a selection of dips.',
    tags: ['Chicken', 'Wings', 'Sharing', 'Platter'],
    category: 'Shack Box Deals',
    starred: false
  },
  {
    id: 'sf-1',
    name: 'Shack Fried Twister Wrap',
    image: 'https://i.ibb.co/8Dy6hSfQ/friedtwisterwrap.png',
    price: 5.95,
    description: 'Crispy fried chicken strips with lettuce and mayo in a wrap.',
    tags: ['Wrap', 'Chicken', 'Fried'],
    category: 'Fried Options',
    starred: false
  },
  {
    id: 'sf-2',
    name: 'Shack Fried Fillet Burger',
    image: 'https://i.ibb.co/k2ftwW6F/shackfriedfilletburger.png',
    price: 6.45,
    description: 'Crispy fried chicken breast fillet burger.',
    tags: ['Burger', 'Chicken', 'Fried'],
    category: 'Fried Options',
    starred: true
  },
  {
    id: 'km-1',
    name: 'Kids Steak Burger',
    image: 'https://i.ibb.co/n9Lhdm8/kidsteakburger.png',
    price: 4.95,
    description: 'Small beef burger served with fries and a fruit shoot.',
    tags: ['Kids', 'Burger', 'Beef'],
    category: 'Kids Meal',
    starred: false
  },
  {
    id: 'km-2',
    name: 'Kids Cheeseburger',
    image: '/Images/Menu/placeholder.png',
    price: 4.95,
    description: 'Small cheeseburger served with fries and a fruit shoot.',
    tags: ['Kids', 'Burger', 'Beef', 'Cheese'],
    category: 'Kids Meal',
    starred: false
  },
  {
    id: 'km-3',
    name: 'Kids Nuggets (4)',
    image: 'https://i.ibb.co/Z62VTrKm/chickennuggets.png',
    price: 4.95,
    description: '4 Chicken nuggets served with fries and a fruit shoot.',
    tags: ['Kids', 'Chicken', 'Nuggets'],
    category: 'Kids Meal',
    starred: false
  },
  {
    id: 'sd-2',
    name: '15 Nuggets',
    image: 'https://i.ibb.co/Z62VTrKm/chickennuggets.png',
    price: 6.95,
    description: '15 Crispy chicken nuggets.',
    tags: ['Chicken', 'Side', 'Sharing'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-4',
    name: 'Piri Fries',
    image: '/Images/Menu/placeholder.png',
    price: 3.45,
    description: 'Fries dusted with spicy piri salt.',
    tags: ['Side', 'Potato', 'Spicy'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-6',
    name: 'Onion Rings (5)',
    image: 'https://i.ibb.co/sv4RNWfz/onionrings.png',
    price: 2.95,
    description: 'Crispy battered onion rings.',
    tags: ['Side', 'Vegetarian', 'Fried'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-7',
    name: 'Corn On The Cob',
    image: 'https://i.ibb.co/7xQxJ5Fg/corn.png',
    price: 2.5,
    description: 'Grilled corn on the cob.',
    tags: ['Side', 'Vegetarian', 'Healthy'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-10',
    name: 'Shack Fried Chicken Poppers',
    image: 'https://i.ibb.co/hRgkwsZG/chickenpoppers.png',
    price: 4.95,
    description: 'Bite-sized pieces of popcorn chicken.',
    tags: ['Chicken', 'Side', 'Fried'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-11',
    name: 'Mac and Cheese Bites',
    image: '/Images/Menu/placeholder.png',
    price: 4.5,
    description: 'Breaded macaroni and cheese bites.',
    tags: ['Side', 'Cheese', 'Vegetarian'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-12',
    name: 'Cheesy Nachos',
    image: '/Images/Menu/placeholder.png',
    price: 4.95,
    description: 'Tortilla chips topped with warm cheese sauce.',
    tags: ['Side', 'Nachos', 'Cheese', 'Sharing'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'sd-14',
    name: 'Wedges',
    image: 'https://i.ibb.co/DgLGZygX/wedges.png',
    price: 3.5,
    description: 'Seasoned potato wedges.',
    tags: ['Side', 'Potato', 'Vegetarian'],
    category: 'Sides',
    starred: false
  },
  {
    id: 'dr-1',
    name: 'Coke',
    image: '/Images/Menu/placeholder.png',
    price: 1.25,
    description: 'Classic Coca-Cola.',
    tags: ['Drink', 'Soda'],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-2',
    name: 'Coke Zero',
    image: 'https://i.ibb.co/d42KKcpv/cocacolazerosugar.png',
    price: 1.25,
    description: 'Sugar-free Coca-Cola.',
    tags: ['Drink', 'Soda', 'Sugar-Free'],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-3',
    name: '7-up',
    image: 'https://i.ibb.co/N6zXqk2h/7up.png',
    price: 1.25,
    description: 'Lemon and lime soda.',
    tags: [
      "Drink",
      "Soda"
    ],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-4',
    name: 'Tango Orange',
    image: 'https://i.ibb.co/CpnhzGLP/wintangoorangeoriginal.png',
    price: 1.25,
    description: 'Orange-flavored soda.',
    tags: [
      "Drink",
      "Soda",
      "Orange"
    ],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-5',
    name: 'Strawberry Miranda',
    image: 'https://i.ibb.co/9mB2qc2d/mirinda.png',
    price: 1.25,
    description: 'Strawberry-flavored soda.',
    tags: ['Drink', 'Soda', 'Strawberry'],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-6',
    name: 'Rubicon Mango',
    image: 'https://i.ibb.co/5yjfJ5G/rubiconsparklingmango.png',
    price: 1.25,
    description: 'Mango-flavored soda.',
    tags: [
      "Drink",
      "Soda",
      "Mango"
    ],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-7',
    name: 'Water',
    image: 'https://i.ibb.co/1GcFz1jS/springwater.png',
    price: 1.25,
    description: 'Bottled water.',
    tags: ['Drink', 'Water'],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-8',
    name: 'Black Currant Fruit Shoot',
    image: 'https://i.ibb.co/jPrbyjxh/fruitshootapple-blackcurrent.png',
    price: 1.25,
    description: 'Black currant-flavored kids drink.',
    tags: [
      "Drink",
      "Juice",
      "Kids"
    ],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'dr-9',
    name: 'Orange Fruit Shoot',
    image: 'https://i.ibb.co/tMqY0cR0/fruitshootorange.png',
    price: 1.25,
    description: 'Orange-flavored kids drink.',
    tags: [
      "Drink",
      "Juice",
      "Kids"
    ],
    category: 'Drinks',
    starred: false
  },
  {
    id: 'ms-1',
    name: 'Cookies & Cream Milkshake',
    image: '/Images/Menu/placeholder.png',
    price: 2.50,
    description: 'A classic milkshake made with cookies and cream.',
    tags: ['Drink', 'Milkshake', 'Cookies', 'Cream'],
    category: 'Milkshakes',
    starred: false
  },
  {
    id: 'ms-2',
    name: 'Vanilla Milkshake',
    image: '/Images/Menu/placeholder.png',
    price: 2.50,
    description: 'A classic milkshake made with vanilla ice cream.',
    tags: ['Drink', 'Milkshake', 'Vanilla'],
    category: 'Milkshakes',
    starred: false
  },
  {
    id: 'ms-3',
    name: 'Biscoff Milkshake',
    image: '/Images/Menu/placeholder.png',
    price: 2.50,
    description: 'A delicious milkshake made with Biscoff cookies.',
    tags: ['Drink', 'Milkshake', 'Biscoff'],
    category: 'Milkshakes',
    starred: false
  },
  {
    id: 'ds-1',
    name: 'Bueno Milk Cake',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A delicious milk cake with a Bueno topping.',
    tags: ['Dessert', 'Cake', 'Milk Cake', 'Bueno'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-2',
    name: 'Pistachio Milk Cake',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A delicious milk cake with a pistachio topping.',
    tags: ['Dessert', 'Cake', 'Milk Cake', 'Pistachio'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-3',
    name: 'Biscoff Milk Cake',
    image: '/Images/Menu/placeholder.png',
    price: 4.99,
    description: 'A delicious milk cake with a Biscoff topping.',
    tags: ['Dessert', 'Cake', 'Milk Cake', 'Biscoff'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-4',
    name: 'Chocolate Cake',
    image: '/Images/Menu/placeholder.png',
    price: 2.50,
    description: 'A rich and decadent chocolate cake.',
    tags: ['Dessert', 'Cake', 'Chocolate'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-5',
    name: 'Carrot Cake',
    image: '/Images/Menu/placeholder.png',
    price: 2.50,
    description: 'A moist and delicious carrot cake with cream cheese frosting.',
    tags: ['Dessert', 'Cake', 'Carrot'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-6',
    name: 'Original Kulfi',
    image: 'https://i.ibb.co/4w9Bh4rd/kulfiiceoriginal.png',
    price: 1.99,
    description: 'A traditional Indian ice cream.',
    tags: [
      "Dessert",
      "Ice Cream",
      "Kulfi"
    ],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-7',
    name: 'Mango Kulfi',
    image: 'https://i.ibb.co/v640gjGQ/Kulfiicemangoflavour.png',
    price: 1.99,
    description: 'A traditional Indian ice cream with a mango flavor.',
    tags: [
      "Dessert",
      "Ice Cream",
      "Kulfi",
      "Mango"
    ],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-8',
    name: 'Pistachio Kulfi',
    image: 'https://i.ibb.co/d4Kh98PF/kulfiicepistachioflavour.png',
    price: 1.99,
    description: 'A traditional Indian ice cream with a pistachio flavor.',
    tags: [
      "Dessert",
      "Ice Cream",
      "Kulfi",
      "Pistachio"
    ],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-9',
    name: 'Ben & Jerry\'s Cookie Dough',
    image: 'https://i.ibb.co/Dfk8SRvV/coockiedough.png',
    price: 2.50,
    description: 'A tub of delicious Ben & Jerry\'s Cookie Dough ice cream.',
    tags: ['Dessert', 'Ice Cream', 'Ben & Jerry\'s', 'Cookie Dough'],
    category: 'Desserts',
    starred: false
  },
  {
    id: 'ds-10',
    name: 'Ben & Jerry\'s Chocolate',
    image: 'https://i.ibb.co/1tStdKyB/Chocolate-Fudge-Brownie.png',
    price: 2.50,
    description: 'A tub of delicious Ben & Jerry\'s Chocolate ice cream.',
    tags: ['Dessert', 'Ice Cream', 'Ben & Jerry\'s', 'Chocolate'],
    category: 'Desserts',
    starred: false
  },
];
const INGREDIENTS = [
  {
    "ingredientId": 58,
    "recipeId": 3,
    "ingredientName": "Salami or Pepperoni",
    "amount": "1/2",
    "measurement": "pound (thinly sliced)"
  },
  {
    "ingredientId": 59,
    "recipeId": 3,
    "ingredientName": "Cheese Tortellini",
    "amount": "",
    "measurement": "cooked and drained"
  },
  {
    "ingredientId": 60,
    "recipeId": 3,
    "ingredientName": "artichooke hearts",
    "amount": "14",
    "measurement": "ounches (quartered)"
  },
  {
    "ingredientId": 61,
    "recipeId": 3,
    "ingredientName": "black olives",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 62,
    "recipeId": 3,
    "ingredientName": "provolone cheese",
    "amount": "",
    "measurement": "1 inch cubes"
  },
  {
    "ingredientId": 63,
    "recipeId": 3,
    "ingredientName": "roasted peppers",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 64,
    "recipeId": 4,
    "ingredientName": "Golden delicious apples",
    "amount": "3",
    "measurement": "thinly sliced"
  },
  {
    "ingredientId": 65,
    "recipeId": 4,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 66,
    "recipeId": 4,
    "ingredientName": "Date-nut bread",
    "amount": "12",
    "measurement": "slices"
  },
  {
    "ingredientId": 67,
    "recipeId": 4,
    "ingredientName": "Sharp cheddar cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 68,
    "recipeId": 4,
    "ingredientName": "Apple chutney",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 69,
    "recipeId": 5,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 70,
    "recipeId": 5,
    "ingredientName": "Frozen apple juice concentrate",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 71,
    "recipeId": 5,
    "ingredientName": "pecans",
    "amount": "1",
    "measurement": "tbsp"
  },
  {
    "ingredientId": 72,
    "recipeId": 6,
    "ingredientName": "Crescent rolls",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 73,
    "recipeId": 6,
    "ingredientName": "Parmesan cheese",
    "amount": "2",
    "measurement": "tbsp (grated)"
  },
  {
    "ingredientId": 74,
    "recipeId": 6,
    "ingredientName": "Cream cheese",
    "amount": "6",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 75,
    "recipeId": 6,
    "ingredientName": "Sour cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 76,
    "recipeId": 6,
    "ingredientName": "Dill",
    "amount": "1/2",
    "measurement": "tsp"
  },
  {
    "ingredientId": 77,
    "recipeId": 6,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "tsp"
  },
  {
    "ingredientId": 78,
    "recipeId": 6,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 79,
    "recipeId": 6,
    "ingredientName": "Scallion",
    "amount": "1/3",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 80,
    "recipeId": 6,
    "ingredientName": "Artichoke hearts",
    "amount": "14",
    "measurement": "ounces (drained, chopped)"
  },
  {
    "ingredientId": 81,
    "recipeId": 6,
    "ingredientName": "Diced pimiento",
    "amount": "2",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 82,
    "recipeId": 7,
    "ingredientName": "Artichoke hearts",
    "amount": "8",
    "measurement": "ounces (cut up)"
  },
  {
    "ingredientId": 83,
    "recipeId": 7,
    "ingredientName": "Mayonnaise",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 84,
    "recipeId": 7,
    "ingredientName": "Parmesan cheese",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 85,
    "recipeId": 7,
    "ingredientName": "Mozzarella cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 86,
    "recipeId": 7,
    "ingredientName": "Garlic powder",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 103,
    "recipeId": 10,
    "ingredientName": "Puff pastry",
    "amount": "1",
    "measurement": "sheet"
  },
  {
    "ingredientId": 104,
    "recipeId": 10,
    "ingredientName": "Round brie",
    "amount": "1",
    "measurement": "wheel"
  },
  {
    "ingredientId": 105,
    "recipeId": 10,
    "ingredientName": "Apricot preserves",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 106,
    "recipeId": 10,
    "ingredientName": "Pecans",
    "amount": "1/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 107,
    "recipeId": 10,
    "ingredientName": "Egg yold",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 119,
    "recipeId": 12,
    "ingredientName": "Chicken wings",
    "amount": "3",
    "measurement": "lbs"
  },
  {
    "ingredientId": 120,
    "recipeId": 12,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick (melted)"
  },
  {
    "ingredientId": 121,
    "recipeId": 12,
    "ingredientName": "Louisiana hot sauce",
    "amount": "8",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 122,
    "recipeId": 12,
    "ingredientName": "Bleu cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 123,
    "recipeId": 12,
    "ingredientName": "Heavy cream",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 124,
    "recipeId": 12,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 125,
    "recipeId": 12,
    "ingredientName": "Vinegar",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 126,
    "recipeId": 13,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick (melted)"
  },
  {
    "ingredientId": 127,
    "recipeId": 13,
    "ingredientName": "Garlic salt",
    "amount": "1 1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 128,
    "recipeId": 13,
    "ingredientName": "Worcestershire sauce",
    "amount": "4 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 129,
    "recipeId": 13,
    "ingredientName": "Corn chex",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 130,
    "recipeId": 13,
    "ingredientName": "Wheat chex",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 131,
    "recipeId": 13,
    "ingredientName": "Pretzels",
    "amount": "1",
    "measurement": "cups"
  },
  {
    "ingredientId": 132,
    "recipeId": 13,
    "ingredientName": "Nuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 144,
    "recipeId": 14,
    "ingredientName": "Egg nog",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 145,
    "recipeId": 14,
    "ingredientName": "Cornstarch",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 146,
    "recipeId": 14,
    "ingredientName": "Heavy cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 147,
    "recipeId": 14,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 148,
    "recipeId": 14,
    "ingredientName": "Sour cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 149,
    "recipeId": 14,
    "ingredientName": "Rum",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 150,
    "recipeId": 14,
    "ingredientName": "Apple wedges",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 151,
    "recipeId": 14,
    "ingredientName": "Pear wedges",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 152,
    "recipeId": 14,
    "ingredientName": "Banana slices",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 153,
    "recipeId": 14,
    "ingredientName": "Mandarin oranges",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 154,
    "recipeId": 14,
    "ingredientName": "Cherries",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 155,
    "recipeId": 15,
    "ingredientName": "Mayonnaise",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 156,
    "recipeId": 15,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 157,
    "recipeId": 15,
    "ingredientName": "Garlic mushroom soup mix (1.4 oz)",
    "amount": "1",
    "measurement": "envelope"
  },
  {
    "ingredientId": 158,
    "recipeId": 15,
    "ingredientName": "Artichoke hearts",
    "amount": "14",
    "measurement": "ounces (drained, chopped)"
  },
  {
    "ingredientId": 159,
    "recipeId": 15,
    "ingredientName": "Swiss cheese",
    "amount": "1",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 160,
    "recipeId": 15,
    "ingredientName": "Crab meat",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 161,
    "recipeId": 16,
    "ingredientName": "Delicious apples",
    "amount": "3",
    "measurement": "large"
  },
  {
    "ingredientId": 162,
    "recipeId": 16,
    "ingredientName": "Baked ham",
    "amount": "5",
    "measurement": "ounces"
  },
  {
    "ingredientId": 163,
    "recipeId": 16,
    "ingredientName": "Chives",
    "amount": "2",
    "measurement": "bunches"
  },
  {
    "ingredientId": 164,
    "recipeId": 16,
    "ingredientName": "Honey mustard mayonnaise",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 172,
    "recipeId": 19,
    "ingredientName": "French bread loaf",
    "amount": "2",
    "measurement": "sm. loaves"
  },
  {
    "ingredientId": 173,
    "recipeId": 19,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 174,
    "recipeId": 19,
    "ingredientName": "Hidden Valley Salad Dressing (original)",
    "amount": "1",
    "measurement": "envelope"
  },
  {
    "ingredientId": 175,
    "recipeId": 19,
    "ingredientName": "toppings (onion, pepper, olives, cheese)",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 176,
    "recipeId": 20,
    "ingredientName": "Ricotta cheese",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 177,
    "recipeId": 20,
    "ingredientName": "Sugar",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 178,
    "recipeId": 20,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 179,
    "recipeId": 20,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 180,
    "recipeId": 20,
    "ingredientName": "Eggs",
    "amount": "8",
    "measurement": "(hardboiled, sliced)"
  },
  {
    "ingredientId": 181,
    "recipeId": 20,
    "ingredientName": "Pepperoni",
    "amount": "1/4",
    "measurement": "pound (sliced thin)"
  },
  {
    "ingredientId": 182,
    "recipeId": 20,
    "ingredientName": "Pie crusts (pillsbury-red box)",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 183,
    "recipeId": 21,
    "ingredientName": "Swiss cheese",
    "amount": "3/4",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 184,
    "recipeId": 21,
    "ingredientName": "Thin corned beef",
    "amount": "6",
    "measurement": "slices (chopped)"
  },
  {
    "ingredientId": 185,
    "recipeId": 21,
    "ingredientName": "Thousand island salad dressing",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 186,
    "recipeId": 21,
    "ingredientName": "Sauerkraut",
    "amount": "2",
    "measurement": "tablespoons (finely chopped)"
  },
  {
    "ingredientId": 187,
    "recipeId": 21,
    "ingredientName": "Cocktail rye or pumpernickel bread",
    "amount": "12",
    "measurement": "slices"
  },
  {
    "ingredientId": 188,
    "recipeId": 21,
    "ingredientName": "Dill pickles",
    "amount": "12",
    "measurement": "small"
  },
  {
    "ingredientId": 207,
    "recipeId": 24,
    "ingredientName": "Boiled ham",
    "amount": "1/2",
    "measurement": "pound"
  },
  {
    "ingredientId": 208,
    "recipeId": 24,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 209,
    "recipeId": 24,
    "ingredientName": "Dill pickles",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 210,
    "recipeId": 25,
    "ingredientName": "Swiss cheese (6 oz)",
    "amount": "1 1/2",
    "measurement": "cups (shredded)"
  },
  {
    "ingredientId": 211,
    "recipeId": 25,
    "ingredientName": "Sauerkraut",
    "amount": "3/4",
    "measurement": "cup (drained)"
  },
  {
    "ingredientId": 212,
    "recipeId": 25,
    "ingredientName": "Thousand island salad dressing",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 213,
    "recipeId": 25,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 214,
    "recipeId": 25,
    "ingredientName": "Corned beef",
    "amount": "1/2 ",
    "measurement": "pound (chopped)"
  },
  {
    "ingredientId": 215,
    "recipeId": 25,
    "ingredientName": "Rye bread",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 216,
    "recipeId": 26,
    "ingredientName": "Potatoes",
    "amount": "6",
    "measurement": "medium"
  },
  {
    "ingredientId": 217,
    "recipeId": 26,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 218,
    "recipeId": 26,
    "ingredientName": "Corned beef",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 219,
    "recipeId": 26,
    "ingredientName": "Swiss cheese",
    "amount": "1",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 220,
    "recipeId": 26,
    "ingredientName": "Thousand island salad dressing",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 221,
    "recipeId": 27,
    "ingredientName": "Ricotta cheese",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 222,
    "recipeId": 27,
    "ingredientName": "Prosciutto",
    "amount": "1/4",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 223,
    "recipeId": 27,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 224,
    "recipeId": 27,
    "ingredientName": "Parsley",
    "amount": "1/2",
    "measurement": "cup (finely chopped)"
  },
  {
    "ingredientId": 225,
    "recipeId": 27,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 226,
    "recipeId": 27,
    "ingredientName": "Oil",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 227,
    "recipeId": 27,
    "ingredientName": "Bread crumbs",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 228,
    "recipeId": 27,
    "ingredientName": "Parmesan cheese",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 229,
    "recipeId": 28,
    "ingredientName": "Medium shrimp",
    "amount": "8",
    "measurement": "ounces (butterflied)"
  },
  {
    "ingredientId": 230,
    "recipeId": 28,
    "ingredientName": "Mushroom",
    "amount": "20",
    "measurement": "small"
  },
  {
    "ingredientId": 231,
    "recipeId": 28,
    "ingredientName": "Scallion tops",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 232,
    "recipeId": 28,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 233,
    "recipeId": 28,
    "ingredientName": "White wine",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 234,
    "recipeId": 28,
    "ingredientName": "Worchestershire sauce",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 235,
    "recipeId": 29,
    "ingredientName": "Cream cheese with Salmon",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 236,
    "recipeId": 29,
    "ingredientName": "Fresh spinach  leaves",
    "amount": "20",
    "measurement": ""
  },
  {
    "ingredientId": 237,
    "recipeId": 29,
    "ingredientName": "Roasted red peppers",
    "amount": "16",
    "measurement": "strips"
  },
  {
    "ingredientId": 238,
    "recipeId": 30,
    "ingredientName": "Spinach",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 239,
    "recipeId": 30,
    "ingredientName": "Sour cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 240,
    "recipeId": 30,
    "ingredientName": "Mayonnaise",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 241,
    "recipeId": 30,
    "ingredientName": "Knorr vegetable soup",
    "amount": "1",
    "measurement": "package"
  },
  {
    "ingredientId": 242,
    "recipeId": 30,
    "ingredientName": "Water chestnuts",
    "amount": "8",
    "measurement": "ounces (chopped)"
  },
  {
    "ingredientId": 243,
    "recipeId": 30,
    "ingredientName": "Scallion",
    "amount": "3",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 252,
    "recipeId": 32,
    "ingredientName": "Bacon",
    "amount": "3",
    "measurement": "slices (finely chopped)"
  },
  {
    "ingredientId": 253,
    "recipeId": 32,
    "ingredientName": "Onion",
    "amount": "1/4",
    "measurement": "cup (minced)"
  },
  {
    "ingredientId": 254,
    "recipeId": 32,
    "ingredientName": "Red pepper",
    "amount": "1/2",
    "measurement": "medium (minced)"
  },
  {
    "ingredientId": 255,
    "recipeId": 32,
    "ingredientName": "Cream cheese",
    "amount": "3",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 256,
    "recipeId": 32,
    "ingredientName": "Milk",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 257,
    "recipeId": 32,
    "ingredientName": "Jar of pepperoncini or Tuscan peppers",
    "amount": "20",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 258,
    "recipeId": 33,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 259,
    "recipeId": 33,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 260,
    "recipeId": 33,
    "ingredientName": "Taco sauce",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 261,
    "recipeId": 33,
    "ingredientName": "Shredded cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 262,
    "recipeId": 33,
    "ingredientName": "Green pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 263,
    "recipeId": 33,
    "ingredientName": "Onion",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 264,
    "recipeId": 33,
    "ingredientName": "Tomatoes",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 265,
    "recipeId": 33,
    "ingredientName": "Black olives",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 266,
    "recipeId": 33,
    "ingredientName": "Salsa",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 267,
    "recipeId": 33,
    "ingredientName": "Tortilla chips",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 268,
    "recipeId": 34,
    "ingredientName": "Ripe avocados",
    "amount": "3",
    "measurement": "(peel and mash)"
  },
  {
    "ingredientId": 269,
    "recipeId": 34,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 270,
    "recipeId": 34,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 271,
    "recipeId": 34,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 272,
    "recipeId": 34,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 273,
    "recipeId": 34,
    "ingredientName": "Mayonnaise",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 274,
    "recipeId": 34,
    "ingredientName": "Taco seasoning mix",
    "amount": "1",
    "measurement": "package"
  },
  {
    "ingredientId": 275,
    "recipeId": 34,
    "ingredientName": "Bean dip",
    "amount": "2",
    "measurement": "cans"
  },
  {
    "ingredientId": 276,
    "recipeId": 34,
    "ingredientName": "Scallion",
    "amount": "1",
    "measurement": "bunch (chopped)"
  },
  {
    "ingredientId": 277,
    "recipeId": 34,
    "ingredientName": "Tomatoes",
    "amount": "3",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 278,
    "recipeId": 34,
    "ingredientName": "Olives",
    "amount": "1",
    "measurement": "can (chopped)"
  },
  {
    "ingredientId": 279,
    "recipeId": 34,
    "ingredientName": "Cheddar cheese",
    "amount": "1",
    "measurement": "package (grated)"
  },
  {
    "ingredientId": 280,
    "recipeId": 35,
    "ingredientName": "Frozen tortellini (tri-colored)",
    "amount": "1",
    "measurement": "package"
  },
  {
    "ingredientId": 281,
    "recipeId": 35,
    "ingredientName": "Tomato sauce",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 282,
    "recipeId": 35,
    "ingredientName": "Ranch salad dressing",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 283,
    "recipeId": 35,
    "ingredientName": "Parmesan cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 293,
    "recipeId": 37,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 294,
    "recipeId": 37,
    "ingredientName": "Mayonnaise",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 295,
    "recipeId": 37,
    "ingredientName": "Milk",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 296,
    "recipeId": 37,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 297,
    "recipeId": 37,
    "ingredientName": "Cinnamon",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 298,
    "recipeId": 37,
    "ingredientName": "Celery",
    "amount": "1/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 299,
    "recipeId": 37,
    "ingredientName": "Raisins",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 300,
    "recipeId": 37,
    "ingredientName": "Walnuts",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 301,
    "recipeId": 37,
    "ingredientName": "Apple wedges",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 302,
    "recipeId": 37,
    "ingredientName": "Pear wedges",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 303,
    "recipeId": 38,
    "ingredientName": "Artichoke hearts",
    "amount": "14",
    "measurement": "ounces (drained, chopped)"
  },
  {
    "ingredientId": 304,
    "recipeId": 38,
    "ingredientName": "Pastrami",
    "amount": "6",
    "measurement": "ounced (finely chopped)"
  },
  {
    "ingredientId": 305,
    "recipeId": 38,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 306,
    "recipeId": 38,
    "ingredientName": "Mayonnaise",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 307,
    "recipeId": 38,
    "ingredientName": "Horseradish",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 308,
    "recipeId": 38,
    "ingredientName": "Dried dill weed",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 309,
    "recipeId": 38,
    "ingredientName": "Parmesan cheese",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 310,
    "recipeId": 38,
    "ingredientName": "Bagel chips",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 311,
    "recipeId": 39,
    "ingredientName": "Eggs",
    "amount": "12",
    "measurement": "(separated)"
  },
  {
    "ingredientId": 312,
    "recipeId": 39,
    "ingredientName": "Cream of coconut",
    "amount": "16",
    "measurement": "ounces"
  },
  {
    "ingredientId": 313,
    "recipeId": 39,
    "ingredientName": "Coconut flakes",
    "amount": "3 1/2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 314,
    "recipeId": 39,
    "ingredientName": "Milk",
    "amount": "8",
    "measurement": "cups"
  },
  {
    "ingredientId": 315,
    "recipeId": 39,
    "ingredientName": "Heavy cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 316,
    "recipeId": 40,
    "ingredientName": "Eggs",
    "amount": "12",
    "measurement": "(separated)"
  },
  {
    "ingredientId": 317,
    "recipeId": 40,
    "ingredientName": "Light cream",
    "amount": "8",
    "measurement": "cups"
  },
  {
    "ingredientId": 318,
    "recipeId": 40,
    "ingredientName": "Sugar",
    "amount": "1 1/3",
    "measurement": "cups"
  },
  {
    "ingredientId": 319,
    "recipeId": 40,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 320,
    "recipeId": 40,
    "ingredientName": "Vanilla",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 321,
    "recipeId": 40,
    "ingredientName": "Rum",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 322,
    "recipeId": 40,
    "ingredientName": "Heavy cream",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 323,
    "recipeId": 41,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 324,
    "recipeId": 41,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 325,
    "recipeId": 41,
    "ingredientName": "Milk",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 326,
    "recipeId": 41,
    "ingredientName": "Vanilla",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 327,
    "recipeId": 41,
    "ingredientName": "Whipping cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 328,
    "recipeId": 41,
    "ingredientName": "Brandy or rum",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 329,
    "recipeId": 41,
    "ingredientName": "Grated nutmeg",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 330,
    "recipeId": 42,
    "ingredientName": "Pineapple juice",
    "amount": "2",
    "measurement": "large cans"
  },
  {
    "ingredientId": 331,
    "recipeId": 42,
    "ingredientName": "Cream of coconut",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 332,
    "recipeId": 42,
    "ingredientName": "Rum",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 333,
    "recipeId": 42,
    "ingredientName": "Ginger ale",
    "amount": "2",
    "measurement": "large bottles"
  },
  {
    "ingredientId": 334,
    "recipeId": 42,
    "ingredientName": "Orange or pineapple sherbert",
    "amount": "1 1/2",
    "measurement": "gallons"
  },
  {
    "ingredientId": 335,
    "recipeId": 42,
    "ingredientName": "Vanilla ice cream",
    "amount": "1",
    "measurement": "quart"
  },
  {
    "ingredientId": 348,
    "recipeId": 44,
    "ingredientName": "Flour",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 349,
    "recipeId": 44,
    "ingredientName": "Cornmeal",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 350,
    "recipeId": 44,
    "ingredientName": "Baking powder",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 351,
    "recipeId": 44,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 352,
    "recipeId": 44,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 353,
    "recipeId": 44,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 354,
    "recipeId": 44,
    "ingredientName": "Plain yogurt",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 355,
    "recipeId": 44,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 356,
    "recipeId": 44,
    "ingredientName": "Blueberries",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 357,
    "recipeId": 45,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 358,
    "recipeId": 45,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 359,
    "recipeId": 45,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 360,
    "recipeId": 45,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 361,
    "recipeId": 45,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 362,
    "recipeId": 45,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 363,
    "recipeId": 45,
    "ingredientName": "Berries",
    "amount": "2 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 364,
    "recipeId": 45,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 365,
    "recipeId": 45,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 366,
    "recipeId": 46,
    "ingredientName": "White bread",
    "amount": "1",
    "measurement": "slice (cut in cubes)"
  },
  {
    "ingredientId": 367,
    "recipeId": 46,
    "ingredientName": "Apple",
    "amount": "1",
    "measurement": "small (diced)"
  },
  {
    "ingredientId": 368,
    "recipeId": 46,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 369,
    "recipeId": 46,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 370,
    "recipeId": 46,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 371,
    "recipeId": 46,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 372,
    "recipeId": 46,
    "ingredientName": "Cinnamon",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 373,
    "recipeId": 46,
    "ingredientName": "Nutmeg",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 374,
    "recipeId": 47,
    "ingredientName": "Broccoli",
    "amount": "2",
    "measurement": "cups (cooked chopped)"
  },
  {
    "ingredientId": 375,
    "recipeId": 47,
    "ingredientName": "Nonfat cottage cheese",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 376,
    "recipeId": 47,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 377,
    "recipeId": 47,
    "ingredientName": "Egg beaters 99%25 egg substitute",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 378,
    "recipeId": 47,
    "ingredientName": "Margarine",
    "amount": "2",
    "measurement": "tablespoons (softened)"
  },
  {
    "ingredientId": 379,
    "recipeId": 47,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 380,
    "recipeId": 47,
    "ingredientName": "Cornmeal",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 381,
    "recipeId": 48,
    "ingredientName": "Sugar",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 382,
    "recipeId": 48,
    "ingredientName": "Flour",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 383,
    "recipeId": 48,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 384,
    "recipeId": 48,
    "ingredientName": "Baking soda",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 385,
    "recipeId": 48,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 386,
    "recipeId": 48,
    "ingredientName": "Coconut",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 387,
    "recipeId": 48,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 388,
    "recipeId": 48,
    "ingredientName": "Grated carrots",
    "amount": "2",
    "measurement": "cups (about 3)"
  },
  {
    "ingredientId": 389,
    "recipeId": 48,
    "ingredientName": "Apple",
    "amount": "1",
    "measurement": "grated"
  },
  {
    "ingredientId": 390,
    "recipeId": 48,
    "ingredientName": "Crushed pineapple",
    "amount": "8",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 391,
    "recipeId": 48,
    "ingredientName": "Pecans or walnuts",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 392,
    "recipeId": 48,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 393,
    "recipeId": 48,
    "ingredientName": "Vegetable oil",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 394,
    "recipeId": 48,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 395,
    "recipeId": 49,
    "ingredientName": "Cornmeal",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 396,
    "recipeId": 49,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 397,
    "recipeId": 49,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 398,
    "recipeId": 49,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 399,
    "recipeId": 49,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 400,
    "recipeId": 49,
    "ingredientName": "Corn kernels",
    "amount": "15",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 401,
    "recipeId": 49,
    "ingredientName": "Creamed corn",
    "amount": "15",
    "measurement": "ounces"
  },
  {
    "ingredientId": 402,
    "recipeId": 49,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 403,
    "recipeId": 49,
    "ingredientName": "Milk",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 404,
    "recipeId": 49,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 405,
    "recipeId": 50,
    "ingredientName": "Cranberries",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 406,
    "recipeId": 50,
    "ingredientName": "Powdered sugar",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 407,
    "recipeId": 50,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "sticks (softened)"
  },
  {
    "ingredientId": 408,
    "recipeId": 51,
    "ingredientName": "Flour",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 409,
    "recipeId": 51,
    "ingredientName": "Whole wheat flour",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 410,
    "recipeId": 51,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 411,
    "recipeId": 51,
    "ingredientName": "Ground ginger",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 412,
    "recipeId": 51,
    "ingredientName": "Cinnamon",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 413,
    "recipeId": 51,
    "ingredientName": "Nutmeg",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 414,
    "recipeId": 51,
    "ingredientName": "Ground cloves",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 415,
    "recipeId": 51,
    "ingredientName": "Powdered mustard",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 416,
    "recipeId": 51,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 417,
    "recipeId": 51,
    "ingredientName": "Cayenne pepper",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 418,
    "recipeId": 51,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 419,
    "recipeId": 51,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "tablespoons (softened)"
  },
  {
    "ingredientId": 420,
    "recipeId": 51,
    "ingredientName": "Brown sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 421,
    "recipeId": 51,
    "ingredientName": "Molasses",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 422,
    "recipeId": 51,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 423,
    "recipeId": 51,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 424,
    "recipeId": 51,
    "ingredientName": "Boiling water",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 425,
    "recipeId": 52,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 426,
    "recipeId": 52,
    "ingredientName": "Margarine",
    "amount": "3",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 427,
    "recipeId": 52,
    "ingredientName": "Water",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 428,
    "recipeId": 52,
    "ingredientName": "Pillsbury biscuits",
    "amount": "10",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 429,
    "recipeId": 53,
    "ingredientName": "Hungry Jack biscuits",
    "amount": "2",
    "measurement": "tubes"
  },
  {
    "ingredientId": 430,
    "recipeId": 53,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 431,
    "recipeId": 53,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 432,
    "recipeId": 53,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 433,
    "recipeId": 53,
    "ingredientName": "Peanuts",
    "amount": "1/2",
    "measurement": "cup (ground)"
  },
  {
    "ingredientId": 434,
    "recipeId": 53,
    "ingredientName": "Orange rind",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 435,
    "recipeId": 54,
    "ingredientName": "Spinach",
    "amount": "1 1/2",
    "measurement": "cups (stemmed, packed)"
  },
  {
    "ingredientId": 436,
    "recipeId": 54,
    "ingredientName": "Basil",
    "amount": "1/2",
    "measurement": "cup (packed)"
  },
  {
    "ingredientId": 437,
    "recipeId": 54,
    "ingredientName": "Oil from sun-dried tomatoes",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 438,
    "recipeId": 54,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove"
  },
  {
    "ingredientId": 439,
    "recipeId": 54,
    "ingredientName": "Pizza crust",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 440,
    "recipeId": 54,
    "ingredientName": "Sun-dried tomatoes",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 441,
    "recipeId": 54,
    "ingredientName": "Mushroom",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 442,
    "recipeId": 54,
    "ingredientName": "Olive",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 443,
    "recipeId": 54,
    "ingredientName": "Feta cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 444,
    "recipeId": 54,
    "ingredientName": "Mozzarella cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 445,
    "recipeId": 55,
    "ingredientName": "Flour",
    "amount": "1 3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 446,
    "recipeId": 55,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 447,
    "recipeId": 55,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 448,
    "recipeId": 55,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 449,
    "recipeId": 55,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 450,
    "recipeId": 55,
    "ingredientName": "Ground cloves",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 451,
    "recipeId": 55,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 452,
    "recipeId": 55,
    "ingredientName": "Baking powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 453,
    "recipeId": 55,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 454,
    "recipeId": 55,
    "ingredientName": "Pumpkin",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 455,
    "recipeId": 55,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 456,
    "recipeId": 55,
    "ingredientName": "Oil",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 457,
    "recipeId": 55,
    "ingredientName": "Water",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 458,
    "recipeId": 56,
    "ingredientName": "Crescent rolls",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 459,
    "recipeId": 56,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 460,
    "recipeId": 56,
    "ingredientName": "Corn syrup",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 461,
    "recipeId": 56,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 462,
    "recipeId": 56,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 463,
    "recipeId": 56,
    "ingredientName": "Pecans",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 464,
    "recipeId": 57,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick"
  },
  {
    "ingredientId": 465,
    "recipeId": 57,
    "ingredientName": "Sugar",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 466,
    "recipeId": 57,
    "ingredientName": "Canned sweet potatoes",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 467,
    "recipeId": 57,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 468,
    "recipeId": 57,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 469,
    "recipeId": 57,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 470,
    "recipeId": 57,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 471,
    "recipeId": 57,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 472,
    "recipeId": 57,
    "ingredientName": "Nutmeg",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 473,
    "recipeId": 57,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 474,
    "recipeId": 57,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 475,
    "recipeId": 57,
    "ingredientName": "Walnuts",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 476,
    "recipeId": 58,
    "ingredientName": "Cheddar cheese",
    "amount": "8",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 477,
    "recipeId": 58,
    "ingredientName": "Ricotta cheese",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 478,
    "recipeId": 58,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 479,
    "recipeId": 58,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 480,
    "recipeId": 58,
    "ingredientName": "Almond extract",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 481,
    "recipeId": 58,
    "ingredientName": "Apple pie filling",
    "amount": "2",
    "measurement": "cans"
  },
  {
    "ingredientId": 482,
    "recipeId": 58,
    "ingredientName": "Lasagna noodles",
    "amount": "8",
    "measurement": "(cooked and drained)"
  },
  {
    "ingredientId": 483,
    "recipeId": 58,
    "ingredientName": "Flour",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 484,
    "recipeId": 58,
    "ingredientName": "Brown sugar",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 485,
    "recipeId": 58,
    "ingredientName": "Quick cooking oats",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 486,
    "recipeId": 58,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 487,
    "recipeId": 58,
    "ingredientName": "Nutmeg",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 488,
    "recipeId": 58,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 489,
    "recipeId": 58,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 490,
    "recipeId": 58,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 499,
    "recipeId": 60,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick (softened)"
  },
  {
    "ingredientId": 500,
    "recipeId": 60,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 501,
    "recipeId": 60,
    "ingredientName": "Eggs",
    "amount": "6",
    "measurement": ""
  },
  {
    "ingredientId": 502,
    "recipeId": 60,
    "ingredientName": "Sour cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 503,
    "recipeId": 60,
    "ingredientName": "Orange juice",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 504,
    "recipeId": 60,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 505,
    "recipeId": 60,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 506,
    "recipeId": 60,
    "ingredientName": "Almond extract",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 507,
    "recipeId": 60,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 508,
    "recipeId": 60,
    "ingredientName": "Cottage cheese",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 509,
    "recipeId": 60,
    "ingredientName": "Egg yolks",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 510,
    "recipeId": 60,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 511,
    "recipeId": 60,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 512,
    "recipeId": 61,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 513,
    "recipeId": 61,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 514,
    "recipeId": 61,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 515,
    "recipeId": 61,
    "ingredientName": "Butter",
    "amount": "1 1/2",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 516,
    "recipeId": 61,
    "ingredientName": "Vanilla",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 517,
    "recipeId": 61,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 518,
    "recipeId": 61,
    "ingredientName": "FILLING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 519,
    "recipeId": 61,
    "ingredientName": "Ricotta cheese",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 520,
    "recipeId": 61,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 521,
    "recipeId": 61,
    "ingredientName": "Powdered sugar",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 522,
    "recipeId": 61,
    "ingredientName": "BANANA FILL",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 523,
    "recipeId": 61,
    "ingredientName": "Banana",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 524,
    "recipeId": 61,
    "ingredientName": "Whipping cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 525,
    "recipeId": 61,
    "ingredientName": "Powdered sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 526,
    "recipeId": 61,
    "ingredientName": "Vanilla",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 527,
    "recipeId": 62,
    "ingredientName": "Sweet potatoes",
    "amount": "4",
    "measurement": "medium"
  },
  {
    "ingredientId": 528,
    "recipeId": 62,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick"
  },
  {
    "ingredientId": 529,
    "recipeId": 62,
    "ingredientName": "Maple syrup",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 530,
    "recipeId": 62,
    "ingredientName": "Brown sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 531,
    "recipeId": 62,
    "ingredientName": "Walnuts",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 532,
    "recipeId": 63,
    "ingredientName": "Brown sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 533,
    "recipeId": 63,
    "ingredientName": "Corn syrup",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 534,
    "recipeId": 63,
    "ingredientName": "Nuts",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 535,
    "recipeId": 63,
    "ingredientName": "Butter",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 536,
    "recipeId": 63,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 537,
    "recipeId": 63,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 538,
    "recipeId": 63,
    "ingredientName": "Pillsbury biscuits",
    "amount": "1",
    "measurement": "tube"
  },
  {
    "ingredientId": 539,
    "recipeId": 63,
    "ingredientName": "Raisins",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 540,
    "recipeId": 64,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 541,
    "recipeId": 64,
    "ingredientName": "Nuts",
    "amount": "3/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 542,
    "recipeId": 64,
    "ingredientName": "Butter",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 543,
    "recipeId": 64,
    "ingredientName": "Water",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 544,
    "recipeId": 64,
    "ingredientName": "Pillsbury biscuits",
    "amount": "2",
    "measurement": "tubes"
  },
  {
    "ingredientId": 545,
    "recipeId": 64,
    "ingredientName": "Cinnamon",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 546,
    "recipeId": 64,
    "ingredientName": "Corn syrup",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 547,
    "recipeId": 64,
    "ingredientName": "Raisins",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 548,
    "recipeId": 64,
    "ingredientName": "Vanilla",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 549,
    "recipeId": 65,
    "ingredientName": "Yellow cake mix",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 550,
    "recipeId": 65,
    "ingredientName": "Cherry pie filling",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 551,
    "recipeId": 65,
    "ingredientName": "Crushed pineapple with juice",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 552,
    "recipeId": 65,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "sticks (melted)"
  },
  {
    "ingredientId": 553,
    "recipeId": 66,
    "ingredientName": "Unsweetened chocolate",
    "amount": "2",
    "measurement": "squares"
  },
  {
    "ingredientId": 554,
    "recipeId": 66,
    "ingredientName": "Semi-sweet chocolate",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 555,
    "recipeId": 66,
    "ingredientName": "Almonds",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 556,
    "recipeId": 66,
    "ingredientName": "Egg whites",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 557,
    "recipeId": 66,
    "ingredientName": "Cream of tartar",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 558,
    "recipeId": 66,
    "ingredientName": "Salt",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 559,
    "recipeId": 66,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 560,
    "recipeId": 66,
    "ingredientName": "Heavy cream",
    "amount": "2 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 561,
    "recipeId": 66,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 562,
    "recipeId": 66,
    "ingredientName": "Vanilla",
    "amount": "3",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 563,
    "recipeId": 67,
    "ingredientName": "Mushroom",
    "amount": "",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 564,
    "recipeId": 67,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 565,
    "recipeId": 67,
    "ingredientName": "Canadian bacon",
    "amount": "1/4",
    "measurement": "pound"
  },
  {
    "ingredientId": 566,
    "recipeId": 67,
    "ingredientName": "Lemon juice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 567,
    "recipeId": 67,
    "ingredientName": "Flour",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 568,
    "recipeId": 67,
    "ingredientName": "Milk",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 569,
    "recipeId": 67,
    "ingredientName": "Eggs",
    "amount": "12",
    "measurement": "(hardboiled)"
  },
  {
    "ingredientId": 570,
    "recipeId": 67,
    "ingredientName": "Mozzarella cheese",
    "amount": "2/3",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 571,
    "recipeId": 68,
    "ingredientName": "White cake mix",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 572,
    "recipeId": 68,
    "ingredientName": "Flour",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 573,
    "recipeId": 68,
    "ingredientName": "Sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 574,
    "recipeId": 68,
    "ingredientName": "Brown sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 575,
    "recipeId": 68,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 576,
    "recipeId": 68,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 577,
    "recipeId": 68,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "sticks (melted)"
  },
  {
    "ingredientId": 578,
    "recipeId": 69,
    "ingredientName": "Devil%27s food cake",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 579,
    "recipeId": 69,
    "ingredientName": "Instant chocolate pudding",
    "amount": "2",
    "measurement": "boxes"
  },
  {
    "ingredientId": 580,
    "recipeId": 69,
    "ingredientName": "Cool whip",
    "amount": "2",
    "measurement": "small"
  },
  {
    "ingredientId": 581,
    "recipeId": 69,
    "ingredientName": "Heath bars",
    "amount": "10",
    "measurement": "(crushed)"
  },
  {
    "ingredientId": 582,
    "recipeId": 70,
    "ingredientName": "French vanilla instant pudding",
    "amount": "1",
    "measurement": "large box"
  },
  {
    "ingredientId": 583,
    "recipeId": 70,
    "ingredientName": "Cool whip lite",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 584,
    "recipeId": 70,
    "ingredientName": "Milk",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 585,
    "recipeId": 70,
    "ingredientName": "Graham crackers",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 586,
    "recipeId": 71,
    "ingredientName": "Medium potatoes",
    "amount": "2",
    "measurement": "(cooked, sliced)"
  },
  {
    "ingredientId": 587,
    "recipeId": 71,
    "ingredientName": "Egg",
    "amount": "4",
    "measurement": "(hardboiled)"
  },
  {
    "ingredientId": 588,
    "recipeId": 71,
    "ingredientName": "Ham",
    "amount": "1",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 589,
    "recipeId": 71,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 590,
    "recipeId": 71,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 591,
    "recipeId": 71,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 606,
    "recipeId": 73,
    "ingredientName": "Macaroni",
    "amount": "3",
    "measurement": "cups (cooked)"
  },
  {
    "ingredientId": 607,
    "recipeId": 73,
    "ingredientName": "Egg",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 608,
    "recipeId": 73,
    "ingredientName": "Vinegar",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 609,
    "recipeId": 73,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 610,
    "recipeId": 73,
    "ingredientName": "Celery",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 611,
    "recipeId": 73,
    "ingredientName": "Carrot",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 612,
    "recipeId": 73,
    "ingredientName": "Radish",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 613,
    "recipeId": 73,
    "ingredientName": "Green pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 614,
    "recipeId": 73,
    "ingredientName": "Celery seed",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 615,
    "recipeId": 73,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 616,
    "recipeId": 74,
    "ingredientName": "Ground beef",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 617,
    "recipeId": 74,
    "ingredientName": "Lettuce",
    "amount": "2",
    "measurement": "heads"
  },
  {
    "ingredientId": 618,
    "recipeId": 74,
    "ingredientName": "Tomatoes",
    "amount": "4",
    "measurement": "medium"
  },
  {
    "ingredientId": 619,
    "recipeId": 74,
    "ingredientName": "Green pepper",
    "amount": "4",
    "measurement": "medium"
  },
  {
    "ingredientId": 620,
    "recipeId": 74,
    "ingredientName": "Nacho cheese doritos",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 621,
    "recipeId": 74,
    "ingredientName": "Cheddar cheese",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 622,
    "recipeId": 74,
    "ingredientName": "Catalina dressing",
    "amount": "16",
    "measurement": "ounces"
  },
  {
    "ingredientId": 623,
    "recipeId": 74,
    "ingredientName": "Taco sauce",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 624,
    "recipeId": 75,
    "ingredientName": "Crushed pineapple",
    "amount": "20",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 625,
    "recipeId": 75,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 626,
    "recipeId": 75,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick (melted)"
  },
  {
    "ingredientId": 627,
    "recipeId": 75,
    "ingredientName": "Bread",
    "amount": "5",
    "measurement": "slices (w/o crust)"
  },
  {
    "ingredientId": 628,
    "recipeId": 75,
    "ingredientName": "Eggs",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 629,
    "recipeId": 76,
    "ingredientName": "Bread",
    "amount": "8",
    "measurement": "slices (w/o crust)"
  },
  {
    "ingredientId": 630,
    "recipeId": 76,
    "ingredientName": "Crushed pineapple",
    "amount": "20",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 631,
    "recipeId": 76,
    "ingredientName": "Eggs",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 632,
    "recipeId": 76,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "sticks (melted)"
  },
  {
    "ingredientId": 633,
    "recipeId": 76,
    "ingredientName": "Brown sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 634,
    "recipeId": 77,
    "ingredientName": "Pie crust",
    "amount": "1",
    "measurement": "(unbaked)"
  },
  {
    "ingredientId": 635,
    "recipeId": 77,
    "ingredientName": "Swiss cheese",
    "amount": "1/2",
    "measurement": "pound (grated)"
  },
  {
    "ingredientId": 636,
    "recipeId": 77,
    "ingredientName": "Eggs",
    "amount": "6",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 637,
    "recipeId": 77,
    "ingredientName": "Heavy cream",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 638,
    "recipeId": 77,
    "ingredientName": "Sugar",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 639,
    "recipeId": 77,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 640,
    "recipeId": 77,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 641,
    "recipeId": 78,
    "ingredientName": "Sweet potatoes",
    "amount": "2 1/2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 642,
    "recipeId": 78,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 643,
    "recipeId": 78,
    "ingredientName": "Heavy cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 644,
    "recipeId": 78,
    "ingredientName": "Brown sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 645,
    "recipeId": 78,
    "ingredientName": "Cinnamon",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 646,
    "recipeId": 78,
    "ingredientName": "Walnuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 647,
    "recipeId": 79,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 648,
    "recipeId": 79,
    "ingredientName": "Sweet potatoes",
    "amount": "6",
    "measurement": "cups (boiled %26 mashed)"
  },
  {
    "ingredientId": 649,
    "recipeId": 79,
    "ingredientName": "Sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 650,
    "recipeId": 79,
    "ingredientName": "Butter",
    "amount": "2/3",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 651,
    "recipeId": 79,
    "ingredientName": "Heavy cream",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 652,
    "recipeId": 79,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 653,
    "recipeId": 79,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 654,
    "recipeId": 79,
    "ingredientName": "Allspice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 655,
    "recipeId": 79,
    "ingredientName": "TOPPING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 656,
    "recipeId": 79,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 657,
    "recipeId": 79,
    "ingredientName": "Flour",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 658,
    "recipeId": 79,
    "ingredientName": "Pecans",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 659,
    "recipeId": 79,
    "ingredientName": "Butter",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 664,
    "recipeId": 81,
    "ingredientName": "Celery",
    "amount": "2",
    "measurement": "medium (finely chopped)"
  },
  {
    "ingredientId": 665,
    "recipeId": 81,
    "ingredientName": "Carrots",
    "amount": "2",
    "measurement": "medium (finely chopped)"
  },
  {
    "ingredientId": 666,
    "recipeId": 81,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium (finely chopped)"
  },
  {
    "ingredientId": 667,
    "recipeId": 81,
    "ingredientName": "Olive oil",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 668,
    "recipeId": 81,
    "ingredientName": "Plum tomatoes",
    "amount": "28",
    "measurement": "ounces"
  },
  {
    "ingredientId": 669,
    "recipeId": 81,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 670,
    "recipeId": 81,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 671,
    "recipeId": 81,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 672,
    "recipeId": 81,
    "ingredientName": "Cheese tortellini",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 673,
    "recipeId": 81,
    "ingredientName": "Heavy cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 674,
    "recipeId": 81,
    "ingredientName": "Basil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 675,
    "recipeId": 82,
    "ingredientName": "Honey",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 676,
    "recipeId": 82,
    "ingredientName": "Canola oil",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 677,
    "recipeId": 82,
    "ingredientName": "Vanilla",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 678,
    "recipeId": 82,
    "ingredientName": "Almond extract",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 679,
    "recipeId": 82,
    "ingredientName": "Cinnamon",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 680,
    "recipeId": 82,
    "ingredientName": "Bran flakes",
    "amount": "5",
    "measurement": "cups"
  },
  {
    "ingredientId": 681,
    "recipeId": 82,
    "ingredientName": "Old-fashioned oats",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 682,
    "recipeId": 82,
    "ingredientName": "Almonds",
    "amount": "1 3/4",
    "measurement": "cups (sliced)"
  },
  {
    "ingredientId": 683,
    "recipeId": 82,
    "ingredientName": "Walnuts",
    "amount": "1 3/4",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 684,
    "recipeId": 82,
    "ingredientName": "Coconut",
    "amount": "1 1/3",
    "measurement": "cups"
  },
  {
    "ingredientId": 685,
    "recipeId": 82,
    "ingredientName": "Raisins",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 686,
    "recipeId": 83,
    "ingredientName": "Crushed pineapple",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 687,
    "recipeId": 83,
    "ingredientName": "Instant pistachio pudding",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 688,
    "recipeId": 83,
    "ingredientName": "Cool whip",
    "amount": "1",
    "measurement": "container"
  },
  {
    "ingredientId": 689,
    "recipeId": 83,
    "ingredientName": "Marshmallows",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 690,
    "recipeId": 83,
    "ingredientName": "Nuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 691,
    "recipeId": 84,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 692,
    "recipeId": 84,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 693,
    "recipeId": 84,
    "ingredientName": "Egg",
    "amount": "6",
    "measurement": ""
  },
  {
    "ingredientId": 694,
    "recipeId": 84,
    "ingredientName": "Flour",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 695,
    "recipeId": 84,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 696,
    "recipeId": 84,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 697,
    "recipeId": 84,
    "ingredientName": "Sugar",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 698,
    "recipeId": 84,
    "ingredientName": "Almond extract",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 699,
    "recipeId": 84,
    "ingredientName": "ALMOND GLAZE",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 700,
    "recipeId": 84,
    "ingredientName": "Powdered sugar",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 701,
    "recipeId": 84,
    "ingredientName": "Cream cheese",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 702,
    "recipeId": 84,
    "ingredientName": "Almond extract",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 703,
    "recipeId": 84,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 704,
    "recipeId": 85,
    "ingredientName": "Blueberries",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 705,
    "recipeId": 85,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 706,
    "recipeId": 85,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 707,
    "recipeId": 85,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 708,
    "recipeId": 85,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 709,
    "recipeId": 85,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 710,
    "recipeId": 85,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 711,
    "recipeId": 85,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 712,
    "recipeId": 85,
    "ingredientName": "Cornstarch",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 713,
    "recipeId": 85,
    "ingredientName": "Boiling water",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 714,
    "recipeId": 86,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 715,
    "recipeId": 86,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 716,
    "recipeId": 86,
    "ingredientName": "Walnuts",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 717,
    "recipeId": 86,
    "ingredientName": "Butter",
    "amount": "1/3",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 718,
    "recipeId": 86,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 719,
    "recipeId": 86,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 720,
    "recipeId": 86,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 721,
    "recipeId": 86,
    "ingredientName": "Milk",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 722,
    "recipeId": 86,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 723,
    "recipeId": 86,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 724,
    "recipeId": 87,
    "ingredientName": "Cranberries",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 725,
    "recipeId": 87,
    "ingredientName": "Pecans",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 726,
    "recipeId": 87,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 727,
    "recipeId": 87,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 728,
    "recipeId": 87,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 729,
    "recipeId": 87,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 730,
    "recipeId": 87,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 731,
    "recipeId": 87,
    "ingredientName": "Almond extract",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 732,
    "recipeId": 88,
    "ingredientName": "Cream cheese",
    "amount": "24",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 733,
    "recipeId": 88,
    "ingredientName": "Eggs",
    "amount": "5",
    "measurement": ""
  },
  {
    "ingredientId": 734,
    "recipeId": 88,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 735,
    "recipeId": 88,
    "ingredientName": "Vanilla",
    "amount": "1 1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 736,
    "recipeId": 88,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 737,
    "recipeId": 88,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 738,
    "recipeId": 88,
    "ingredientName": "Vanilla",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 739,
    "recipeId": 89,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "sticks"
  },
  {
    "ingredientId": 740,
    "recipeId": 89,
    "ingredientName": "Unsweetened chocolate",
    "amount": "4",
    "measurement": "squares"
  },
  {
    "ingredientId": 741,
    "recipeId": 89,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 742,
    "recipeId": 89,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 743,
    "recipeId": 89,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 744,
    "recipeId": 89,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 745,
    "recipeId": 89,
    "ingredientName": "Walnuts",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 746,
    "recipeId": 89,
    "ingredientName": "Semisweet chocolate chips",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 747,
    "recipeId": 90,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 748,
    "recipeId": 90,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 749,
    "recipeId": 90,
    "ingredientName": "Cocoa",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 750,
    "recipeId": 90,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 751,
    "recipeId": 90,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 752,
    "recipeId": 90,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 753,
    "recipeId": 90,
    "ingredientName": "Oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 754,
    "recipeId": 90,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 755,
    "recipeId": 90,
    "ingredientName": "Nuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 756,
    "recipeId": 90,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 757,
    "recipeId": 90,
    "ingredientName": "Hot water",
    "amount": "1 3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 758,
    "recipeId": 91,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 759,
    "recipeId": 91,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 760,
    "recipeId": 91,
    "ingredientName": "Powdered sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 761,
    "recipeId": 91,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 762,
    "recipeId": 91,
    "ingredientName": "Granulated sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 763,
    "recipeId": 91,
    "ingredientName": "Baking powder",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 764,
    "recipeId": 91,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 765,
    "recipeId": 91,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 766,
    "recipeId": 91,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 767,
    "recipeId": 92,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 768,
    "recipeId": 92,
    "ingredientName": "Graham cracker crumbs",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 769,
    "recipeId": 92,
    "ingredientName": "Sweetened condensed milk",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 770,
    "recipeId": 92,
    "ingredientName": "Chocolate chips",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 771,
    "recipeId": 92,
    "ingredientName": "Coconut",
    "amount": "3 1/2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 772,
    "recipeId": 92,
    "ingredientName": "Nuts",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 773,
    "recipeId": 93,
    "ingredientName": "Unsweetened pineapple",
    "amount": "20",
    "measurement": "ounces (crushed)"
  },
  {
    "ingredientId": 774,
    "recipeId": 93,
    "ingredientName": "Angel food cake mix",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 775,
    "recipeId": 93,
    "ingredientName": "Almond extract",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 776,
    "recipeId": 94,
    "ingredientName": "Apples",
    "amount": "2",
    "measurement": "cups (peeled %26 diced)"
  },
  {
    "ingredientId": 777,
    "recipeId": 94,
    "ingredientName": "Southern Comfort",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 778,
    "recipeId": 94,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 779,
    "recipeId": 94,
    "ingredientName": "Nutmeg",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 780,
    "recipeId": 94,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 781,
    "recipeId": 94,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 782,
    "recipeId": 94,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 783,
    "recipeId": 94,
    "ingredientName": "Vegetable oil",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 784,
    "recipeId": 94,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 785,
    "recipeId": 94,
    "ingredientName": "Toffee candy",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 786,
    "recipeId": 94,
    "ingredientName": "Walnuts",
    "amount": "3/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 787,
    "recipeId": 95,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 788,
    "recipeId": 95,
    "ingredientName": "Brown sugar",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 789,
    "recipeId": 95,
    "ingredientName": "Corn syrup",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 790,
    "recipeId": 95,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 791,
    "recipeId": 95,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 792,
    "recipeId": 95,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 793,
    "recipeId": 95,
    "ingredientName": "Popcorn",
    "amount": "6",
    "measurement": "quarts"
  },
  {
    "ingredientId": 798,
    "recipeId": 97,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 799,
    "recipeId": 97,
    "ingredientName": "Corn syrup",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 800,
    "recipeId": 97,
    "ingredientName": "Cashews",
    "amount": "1",
    "measurement": "cup (salted to taste)"
  },
  {
    "ingredientId": 801,
    "recipeId": 97,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 802,
    "recipeId": 97,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 803,
    "recipeId": 97,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 804,
    "recipeId": 98,
    "ingredientName": "Saltine crackers",
    "amount": "35",
    "measurement": ""
  },
  {
    "ingredientId": 805,
    "recipeId": 98,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 806,
    "recipeId": 98,
    "ingredientName": "Brown sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 807,
    "recipeId": 98,
    "ingredientName": "Semisweet chocolate",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 808,
    "recipeId": 98,
    "ingredientName": "Walnuts",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 809,
    "recipeId": 99,
    "ingredientName": "Almonds",
    "amount": "1",
    "measurement": "cup (whole)"
  },
  {
    "ingredientId": 810,
    "recipeId": 99,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 811,
    "recipeId": 99,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 812,
    "recipeId": 99,
    "ingredientName": "Vanilla",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 813,
    "recipeId": 99,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 814,
    "recipeId": 99,
    "ingredientName": "Milk chocolate chips",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 815,
    "recipeId": 99,
    "ingredientName": "Ground walnuts",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 816,
    "recipeId": 100,
    "ingredientName": "Flour",
    "amount": "2 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 817,
    "recipeId": 100,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 818,
    "recipeId": 100,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 819,
    "recipeId": 100,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 820,
    "recipeId": 100,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup (softened)"
  },
  {
    "ingredientId": 821,
    "recipeId": 100,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 822,
    "recipeId": 100,
    "ingredientName": "Granulated sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 823,
    "recipeId": 100,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 824,
    "recipeId": 100,
    "ingredientName": "Amaretto",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 825,
    "recipeId": 100,
    "ingredientName": "Almond extract",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 826,
    "recipeId": 100,
    "ingredientName": "Semisweet chocolate chips",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 827,
    "recipeId": 100,
    "ingredientName": "Coconut",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 828,
    "recipeId": 100,
    "ingredientName": "Almonds",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 829,
    "recipeId": 101,
    "ingredientName": "Almonds",
    "amount": "1",
    "measurement": "cup (toasted)"
  },
  {
    "ingredientId": 830,
    "recipeId": 101,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 831,
    "recipeId": 101,
    "ingredientName": "Unsweetened cocoa powder",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 832,
    "recipeId": 101,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "tablespoons (softened)"
  },
  {
    "ingredientId": 833,
    "recipeId": 101,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 834,
    "recipeId": 101,
    "ingredientName": "Almond extract",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 835,
    "recipeId": 101,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 836,
    "recipeId": 101,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 837,
    "recipeId": 101,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 838,
    "recipeId": 101,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 839,
    "recipeId": 101,
    "ingredientName": "Flour",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 840,
    "recipeId": 102,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 841,
    "recipeId": 102,
    "ingredientName": "Cocoa",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 842,
    "recipeId": 102,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 843,
    "recipeId": 102,
    "ingredientName": "Baking powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 844,
    "recipeId": 102,
    "ingredientName": "Baking soda",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 845,
    "recipeId": 102,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 846,
    "recipeId": 102,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 847,
    "recipeId": 102,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 848,
    "recipeId": 102,
    "ingredientName": "Vanilla",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 849,
    "recipeId": 102,
    "ingredientName": "Maraschino cherries",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 850,
    "recipeId": 102,
    "ingredientName": "Semisweet chocolate chips",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 851,
    "recipeId": 102,
    "ingredientName": "Sweetened condensed milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 852,
    "recipeId": 103,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 853,
    "recipeId": 103,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 854,
    "recipeId": 103,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 855,
    "recipeId": 103,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup (softened)"
  },
  {
    "ingredientId": 856,
    "recipeId": 103,
    "ingredientName": "Quick-cooking oats",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 857,
    "recipeId": 103,
    "ingredientName": "Coconut",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 858,
    "recipeId": 103,
    "ingredientName": "Pecans",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 859,
    "recipeId": 103,
    "ingredientName": "Semisweet chocolate",
    "amount": "5",
    "measurement": "squares (chopped)"
  },
  {
    "ingredientId": 860,
    "recipeId": 103,
    "ingredientName": "Raspberry jam",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 868,
    "recipeId": 105,
    "ingredientName": "Coconut",
    "amount": "14",
    "measurement": "ounces"
  },
  {
    "ingredientId": 869,
    "recipeId": 105,
    "ingredientName": "Sweetened condensed milk",
    "amount": "1",
    "measurement": "can (14 oz)"
  },
  {
    "ingredientId": 870,
    "recipeId": 105,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 871,
    "recipeId": 105,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 872,
    "recipeId": 105,
    "ingredientName": "Maraschino cherries",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 873,
    "recipeId": 106,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 874,
    "recipeId": 106,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 875,
    "recipeId": 106,
    "ingredientName": "Salt",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 876,
    "recipeId": 106,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 877,
    "recipeId": 106,
    "ingredientName": "Olive oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 878,
    "recipeId": 106,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 879,
    "recipeId": 106,
    "ingredientName": "Orange juice",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 880,
    "recipeId": 106,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 881,
    "recipeId": 106,
    "ingredientName": "Dried cranberries",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 882,
    "recipeId": 106,
    "ingredientName": "Pecans",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 883,
    "recipeId": 107,
    "ingredientName": "Semisweet chocolate",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 884,
    "recipeId": 107,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 885,
    "recipeId": 107,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 886,
    "recipeId": 107,
    "ingredientName": "Egg",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 887,
    "recipeId": 107,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 888,
    "recipeId": 107,
    "ingredientName": "Quaker oats (quick or old-fashioned)",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 889,
    "recipeId": 107,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 890,
    "recipeId": 107,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 891,
    "recipeId": 107,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 892,
    "recipeId": 107,
    "ingredientName": "Powdered sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 893,
    "recipeId": 108,
    "ingredientName": "Flour",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 894,
    "recipeId": 108,
    "ingredientName": "Ginger",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 895,
    "recipeId": 108,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 896,
    "recipeId": 108,
    "ingredientName": "Cinnamon",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 897,
    "recipeId": 108,
    "ingredientName": "Ground cloves",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 898,
    "recipeId": 108,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 899,
    "recipeId": 108,
    "ingredientName": "Butter",
    "amount": "3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 900,
    "recipeId": 108,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 901,
    "recipeId": 108,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 902,
    "recipeId": 108,
    "ingredientName": "Molasses",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 903,
    "recipeId": 108,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 904,
    "recipeId": 109,
    "ingredientName": "Flour",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 905,
    "recipeId": 109,
    "ingredientName": "Baking powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 906,
    "recipeId": 109,
    "ingredientName": "Salt",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 907,
    "recipeId": 109,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": "large"
  },
  {
    "ingredientId": 908,
    "recipeId": 109,
    "ingredientName": "Sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 909,
    "recipeId": 109,
    "ingredientName": "Vanilla extract",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 910,
    "recipeId": 109,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 911,
    "recipeId": 109,
    "ingredientName": "Extra bittersweet chocolate",
    "amount": "5",
    "measurement": "ounces (chopped)"
  },
  {
    "ingredientId": 912,
    "recipeId": 109,
    "ingredientName": "Unsweetened chocolate",
    "amount": "2",
    "measurement": "ounces (chopped)"
  },
  {
    "ingredientId": 913,
    "recipeId": 109,
    "ingredientName": "Miniature chocolate chips",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 914,
    "recipeId": 110,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "pound (softened)"
  },
  {
    "ingredientId": 915,
    "recipeId": 110,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 916,
    "recipeId": 110,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 917,
    "recipeId": 110,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 918,
    "recipeId": 110,
    "ingredientName": "Ricotta cheese",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 919,
    "recipeId": 110,
    "ingredientName": "Flour",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 920,
    "recipeId": 110,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 921,
    "recipeId": 110,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 922,
    "recipeId": 111,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 923,
    "recipeId": 111,
    "ingredientName": "Cocoa",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 924,
    "recipeId": 111,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 925,
    "recipeId": 111,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 926,
    "recipeId": 111,
    "ingredientName": "Brown sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 927,
    "recipeId": 111,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 928,
    "recipeId": 111,
    "ingredientName": "Peanut butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 929,
    "recipeId": 111,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 930,
    "recipeId": 111,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 931,
    "recipeId": 112,
    "ingredientName": "Butter",
    "amount": "2/3",
    "measurement": "cup (softened)"
  },
  {
    "ingredientId": 932,
    "recipeId": 112,
    "ingredientName": "Brown sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 933,
    "recipeId": 112,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 934,
    "recipeId": 112,
    "ingredientName": "Old-fashioned oats",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 935,
    "recipeId": 112,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 936,
    "recipeId": 112,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 937,
    "recipeId": 112,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 938,
    "recipeId": 112,
    "ingredientName": "Dried cranberries",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 939,
    "recipeId": 112,
    "ingredientName": "White chocolate chips",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 940,
    "recipeId": 113,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 941,
    "recipeId": 113,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 942,
    "recipeId": 113,
    "ingredientName": "Black pepper",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 943,
    "recipeId": 113,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 944,
    "recipeId": 113,
    "ingredientName": "Ground ginger",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 945,
    "recipeId": 113,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 946,
    "recipeId": 113,
    "ingredientName": "Ground cloves",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 947,
    "recipeId": 113,
    "ingredientName": "Nutmeg",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 948,
    "recipeId": 113,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 949,
    "recipeId": 113,
    "ingredientName": "Molasses",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 950,
    "recipeId": 113,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 951,
    "recipeId": 113,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 952,
    "recipeId": 114,
    "ingredientName": "Eggs",
    "amount": "6",
    "measurement": ""
  },
  {
    "ingredientId": 953,
    "recipeId": 114,
    "ingredientName": "Flour",
    "amount": "3 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 954,
    "recipeId": 114,
    "ingredientName": "Sugar",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 955,
    "recipeId": 114,
    "ingredientName": "Vanilla or anise",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 956,
    "recipeId": 114,
    "ingredientName": "Margarine",
    "amount": "1",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 957,
    "recipeId": 114,
    "ingredientName": "Baking powder",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 966,
    "recipeId": 116,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup (softened)"
  },
  {
    "ingredientId": 967,
    "recipeId": 116,
    "ingredientName": "Sugar",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 968,
    "recipeId": 116,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 969,
    "recipeId": 116,
    "ingredientName": "Canned pumpkin",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 970,
    "recipeId": 116,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 971,
    "recipeId": 116,
    "ingredientName": "Flour",
    "amount": "2 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 972,
    "recipeId": 116,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 973,
    "recipeId": 116,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 974,
    "recipeId": 116,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 975,
    "recipeId": 116,
    "ingredientName": "Nutmeg",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 976,
    "recipeId": 116,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 977,
    "recipeId": 116,
    "ingredientName": "Almonds",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 978,
    "recipeId": 116,
    "ingredientName": "Chocolate chips",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 986,
    "recipeId": 118,
    "ingredientName": "Flour",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 987,
    "recipeId": 118,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 988,
    "recipeId": 118,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 989,
    "recipeId": 118,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 990,
    "recipeId": 118,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 991,
    "recipeId": 118,
    "ingredientName": "Brown sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 992,
    "recipeId": 118,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 993,
    "recipeId": 118,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 994,
    "recipeId": 118,
    "ingredientName": "Chocolate chips",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 995,
    "recipeId": 118,
    "ingredientName": "Walnuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1002,
    "recipeId": 120,
    "ingredientName": "Pie crust",
    "amount": "1",
    "measurement": "(unbaked)"
  },
  {
    "ingredientId": 1003,
    "recipeId": 120,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1004,
    "recipeId": 120,
    "ingredientName": "Cocoa",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1005,
    "recipeId": 120,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1006,
    "recipeId": 120,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1007,
    "recipeId": 120,
    "ingredientName": "Milk",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1008,
    "recipeId": 120,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 1009,
    "recipeId": 120,
    "ingredientName": "Cherry pie filling",
    "amount": "21",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1010,
    "recipeId": 120,
    "ingredientName": "Cool whip",
    "amount": "9",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1011,
    "recipeId": 121,
    "ingredientName": "Blueberries",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1012,
    "recipeId": 121,
    "ingredientName": "Nonfat sour cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1013,
    "recipeId": 121,
    "ingredientName": "Plain nonfat yogurt",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1014,
    "recipeId": 121,
    "ingredientName": "Brown sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1015,
    "recipeId": 122,
    "ingredientName": "Walnuts",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1016,
    "recipeId": 122,
    "ingredientName": "Pecans",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1017,
    "recipeId": 122,
    "ingredientName": "Peanuts",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1018,
    "recipeId": 122,
    "ingredientName": "Almonds",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1019,
    "recipeId": 122,
    "ingredientName": "Egg whites",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1020,
    "recipeId": 122,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1021,
    "recipeId": 122,
    "ingredientName": "Pumpkin pie spice",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1022,
    "recipeId": 122,
    "ingredientName": "Salt",
    "amount": "2/3",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1023,
    "recipeId": 122,
    "ingredientName": "Raisins",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1024,
    "recipeId": 123,
    "ingredientName": "Ricotta cheese",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1025,
    "recipeId": 123,
    "ingredientName": "Powdered sugar",
    "amount": "2 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1026,
    "recipeId": 123,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1027,
    "recipeId": 123,
    "ingredientName": "Miniature chocolate chips",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1028,
    "recipeId": 123,
    "ingredientName": "Pie crusts (chocolate is best)",
    "amount": "2",
    "measurement": "(baked)"
  },
  {
    "ingredientId": 1029,
    "recipeId": 124,
    "ingredientName": "Cream cheese",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1030,
    "recipeId": 124,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1031,
    "recipeId": 124,
    "ingredientName": "Milk",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1032,
    "recipeId": 124,
    "ingredientName": "Cool whip lite",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1033,
    "recipeId": 124,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1034,
    "recipeId": 125,
    "ingredientName": "Egg yolk",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1035,
    "recipeId": 125,
    "ingredientName": "Heavy cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1036,
    "recipeId": 125,
    "ingredientName": "Milk chocolate",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1037,
    "recipeId": 125,
    "ingredientName": "Amaretto",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1038,
    "recipeId": 125,
    "ingredientName": "Vanilla",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1039,
    "recipeId": 126,
    "ingredientName": "Butter",
    "amount": "3/4",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 1040,
    "recipeId": 126,
    "ingredientName": "Cocoa",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1041,
    "recipeId": 126,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1042,
    "recipeId": 126,
    "ingredientName": "Ground almonds",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1043,
    "recipeId": 126,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1044,
    "recipeId": 126,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": "(separated)"
  },
  {
    "ingredientId": 1045,
    "recipeId": 126,
    "ingredientName": "Water",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1046,
    "recipeId": 127,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "sticks"
  },
  {
    "ingredientId": 1047,
    "recipeId": 127,
    "ingredientName": "Sweet baking chocolate",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1048,
    "recipeId": 127,
    "ingredientName": "Sugar",
    "amount": "3 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1049,
    "recipeId": 127,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1050,
    "recipeId": 127,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1051,
    "recipeId": 127,
    "ingredientName": "Eggs",
    "amount": "8",
    "measurement": ""
  },
  {
    "ingredientId": 1052,
    "recipeId": 127,
    "ingredientName": "Vanilla",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1053,
    "recipeId": 127,
    "ingredientName": "Walnuts",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 1054,
    "recipeId": 128,
    "ingredientName": "Peaches",
    "amount": "5",
    "measurement": "cups (sliced)"
  },
  {
    "ingredientId": 1055,
    "recipeId": 128,
    "ingredientName": "Lemon juice",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1056,
    "recipeId": 128,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1057,
    "recipeId": 128,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1058,
    "recipeId": 128,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1059,
    "recipeId": 128,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 1060,
    "recipeId": 128,
    "ingredientName": "Butter",
    "amount": "6",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 1061,
    "recipeId": 128,
    "ingredientName": "Cinnamon",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1062,
    "recipeId": 129,
    "ingredientName": "Cream cheese (1/3 less fat)",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1063,
    "recipeId": 129,
    "ingredientName": "Equal sweetener",
    "amount": "12",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1064,
    "recipeId": 129,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 1065,
    "recipeId": 129,
    "ingredientName": "Vanilla",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1066,
    "recipeId": 129,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1067,
    "recipeId": 129,
    "ingredientName": "Sour cream, light",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 1068,
    "recipeId": 130,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1069,
    "recipeId": 130,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1070,
    "recipeId": 130,
    "ingredientName": "Blueberries",
    "amount": "1",
    "measurement": "pint"
  },
  {
    "ingredientId": 1071,
    "recipeId": 130,
    "ingredientName": "Lemon juice",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1077,
    "recipeId": 132,
    "ingredientName": "Pure grain alcohol",
    "amount": "1",
    "measurement": "liter"
  },
  {
    "ingredientId": 1078,
    "recipeId": 132,
    "ingredientName": "Lemon",
    "amount": "12",
    "measurement": "zest"
  },
  {
    "ingredientId": 1079,
    "recipeId": 132,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1080,
    "recipeId": 132,
    "ingredientName": "Water",
    "amount": "2",
    "measurement": "liters"
  },
  {
    "ingredientId": 1081,
    "recipeId": 133,
    "ingredientName": "Lemons",
    "amount": "15",
    "measurement": ""
  },
  {
    "ingredientId": 1082,
    "recipeId": 133,
    "ingredientName": "100 proof vodka (750 ml)",
    "amount": "2",
    "measurement": "bottles"
  },
  {
    "ingredientId": 1083,
    "recipeId": 133,
    "ingredientName": "Sugar",
    "amount": "4 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1084,
    "recipeId": 133,
    "ingredientName": "Water",
    "amount": "5",
    "measurement": "cups"
  },
  {
    "ingredientId": 1085,
    "recipeId": 134,
    "ingredientName": "Red zinfandel",
    "amount": "2",
    "measurement": "bottles (750 ml)"
  },
  {
    "ingredientId": 1086,
    "recipeId": 134,
    "ingredientName": "French cognac",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1087,
    "recipeId": 134,
    "ingredientName": "Spanish brandy",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1088,
    "recipeId": 134,
    "ingredientName": "Orange juice",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1089,
    "recipeId": 134,
    "ingredientName": "Coconut rum",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1090,
    "recipeId": 134,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1091,
    "recipeId": 134,
    "ingredientName": "Water",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1092,
    "recipeId": 134,
    "ingredientName": "Lime",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1093,
    "recipeId": 134,
    "ingredientName": "Lemon",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1094,
    "recipeId": 134,
    "ingredientName": "Oranges",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1095,
    "recipeId": 134,
    "ingredientName": "Apple",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1096,
    "recipeId": 134,
    "ingredientName": "Banana",
    "amount": "1",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 1097,
    "recipeId": 134,
    "ingredientName": "Cinnamon stick",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1102,
    "recipeId": 135,
    "ingredientName": "Pear",
    "amount": "1/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1103,
    "recipeId": 135,
    "ingredientName": "Nonfat mozzarella",
    "amount": "2",
    "measurement": "tablespoons (shredded)"
  },
  {
    "ingredientId": 1104,
    "recipeId": 135,
    "ingredientName": "Applesauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1105,
    "recipeId": 135,
    "ingredientName": "Raisins",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1106,
    "recipeId": 135,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1107,
    "recipeId": 135,
    "ingredientName": "Cinnamon",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1108,
    "recipeId": 135,
    "ingredientName": "Nonfat flour tortillas",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1109,
    "recipeId": 136,
    "ingredientName": "Chopped apples",
    "amount": "8",
    "measurement": "cups"
  },
  {
    "ingredientId": 1110,
    "recipeId": 136,
    "ingredientName": "Water",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1111,
    "recipeId": 136,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1112,
    "recipeId": 136,
    "ingredientName": "Lemon juice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1113,
    "recipeId": 136,
    "ingredientName": "Cinnamon",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1114,
    "recipeId": 137,
    "ingredientName": "Rotelle",
    "amount": "8",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 1115,
    "recipeId": 137,
    "ingredientName": "Pineapple",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1116,
    "recipeId": 137,
    "ingredientName": "Orange",
    "amount": "1",
    "measurement": "(sectioned)"
  },
  {
    "ingredientId": 1117,
    "recipeId": 137,
    "ingredientName": "Red grapes",
    "amount": "1",
    "measurement": "cup (halved)"
  },
  {
    "ingredientId": 1118,
    "recipeId": 137,
    "ingredientName": "Green grapes",
    "amount": "1",
    "measurement": "cup (halved)"
  },
  {
    "ingredientId": 1119,
    "recipeId": 137,
    "ingredientName": "Apple",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1120,
    "recipeId": 137,
    "ingredientName": "Banana",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1121,
    "recipeId": 137,
    "ingredientName": "Plain nonfat yogurt",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1122,
    "recipeId": 137,
    "ingredientName": "Frozen orange or pineapple concentrate",
    "amount": "1/4",
    "measurement": "cup (thawed)"
  },
  {
    "ingredientId": 1131,
    "recipeId": 139,
    "ingredientName": "Vegetable oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1132,
    "recipeId": 139,
    "ingredientName": "Orange juice",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1133,
    "recipeId": 139,
    "ingredientName": "Amaretto",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1134,
    "recipeId": 139,
    "ingredientName": "White wine vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1135,
    "recipeId": 139,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 1136,
    "recipeId": 139,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1137,
    "recipeId": 139,
    "ingredientName": "Red pepper flakes",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1138,
    "recipeId": 140,
    "ingredientName": "Red potatoes",
    "amount": "12",
    "measurement": "small (halved)"
  },
  {
    "ingredientId": 1139,
    "recipeId": 140,
    "ingredientName": "Honey",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1140,
    "recipeId": 140,
    "ingredientName": "Dry white wine",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1141,
    "recipeId": 140,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 1142,
    "recipeId": 140,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1143,
    "recipeId": 140,
    "ingredientName": "Pepper",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1144,
    "recipeId": 140,
    "ingredientName": "Zucchini",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1145,
    "recipeId": 140,
    "ingredientName": "Eggplant",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1146,
    "recipeId": 140,
    "ingredientName": "Green pepper",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1147,
    "recipeId": 140,
    "ingredientName": "Red pepper",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1148,
    "recipeId": 140,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1150,
    "recipeId": 142,
    "ingredientName": "Brown sugar",
    "amount": "1 1/3",
    "measurement": "cups"
  },
  {
    "ingredientId": 1151,
    "recipeId": 142,
    "ingredientName": "Lemon juice",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1152,
    "recipeId": 142,
    "ingredientName": "Onion",
    "amount": "3",
    "measurement": "tablespoons (minced)"
  },
  {
    "ingredientId": 1153,
    "recipeId": 142,
    "ingredientName": "Jack Daniels",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1154,
    "recipeId": 142,
    "ingredientName": "Crushed pineapple",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1155,
    "recipeId": 142,
    "ingredientName": "Cayenne",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1156,
    "recipeId": 142,
    "ingredientName": "Soy sauce",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1157,
    "recipeId": 142,
    "ingredientName": "Teriyaki sauce",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1158,
    "recipeId": 142,
    "ingredientName": "Pineapple juice",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1159,
    "recipeId": 142,
    "ingredientName": "Water",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1160,
    "recipeId": 142,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1161,
    "recipeId": 142,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "head"
  },
  {
    "ingredientId": 1162,
    "recipeId": 143,
    "ingredientName": "Honey",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1163,
    "recipeId": 143,
    "ingredientName": "Soy sauce",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1164,
    "recipeId": 143,
    "ingredientName": "Cider vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1165,
    "recipeId": 143,
    "ingredientName": "Vegetable oil",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1166,
    "recipeId": 143,
    "ingredientName": "Ginger",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1167,
    "recipeId": 143,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(grated)"
  },
  {
    "ingredientId": 1168,
    "recipeId": 143,
    "ingredientName": "Garlic",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1169,
    "recipeId": 143,
    "ingredientName": "Pineapple juice",
    "amount": "3",
    "measurement": "small cans"
  },
  {
    "ingredientId": 1170,
    "recipeId": 143,
    "ingredientName": "London broil",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1171,
    "recipeId": 144,
    "ingredientName": "Olive oil",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1172,
    "recipeId": 144,
    "ingredientName": "Red onion",
    "amount": "1/2",
    "measurement": "(diced)"
  },
  {
    "ingredientId": 1173,
    "recipeId": 144,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1174,
    "recipeId": 144,
    "ingredientName": "Plum tomatoes",
    "amount": "6",
    "measurement": "(peeled %26 diced)"
  },
  {
    "ingredientId": 1175,
    "recipeId": 144,
    "ingredientName": "Capers",
    "amount": "2",
    "measurement": "teaspoons (drained)"
  },
  {
    "ingredientId": 1176,
    "recipeId": 144,
    "ingredientName": "Black olives",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 1177,
    "recipeId": 144,
    "ingredientName": "Artichokes",
    "amount": "1/2",
    "measurement": "cup (cut in half)"
  },
  {
    "ingredientId": 1178,
    "recipeId": 144,
    "ingredientName": "Seafood, vegetable or chicken stock",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1179,
    "recipeId": 144,
    "ingredientName": "Salt, pepper, cayenne pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1180,
    "recipeId": 145,
    "ingredientName": "Veal cutlets",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 1181,
    "recipeId": 145,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1182,
    "recipeId": 145,
    "ingredientName": "Tomato",
    "amount": "1",
    "measurement": "small (sliced)"
  },
  {
    "ingredientId": 1183,
    "recipeId": 145,
    "ingredientName": "Avocado",
    "amount": "1",
    "measurement": "small (sliced)"
  },
  {
    "ingredientId": 1184,
    "recipeId": 145,
    "ingredientName": "Monterey jack cheese with jalapenos",
    "amount": "4",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 1185,
    "recipeId": 146,
    "ingredientName": "Chicken cutlets",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1186,
    "recipeId": 146,
    "ingredientName": "Dried beef",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1187,
    "recipeId": 146,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "large"
  },
  {
    "ingredientId": 1188,
    "recipeId": 146,
    "ingredientName": "Cream of mushroom soup",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 1189,
    "recipeId": 146,
    "ingredientName": "Bacon",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1190,
    "recipeId": 147,
    "ingredientName": "Flank steak",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1191,
    "recipeId": 147,
    "ingredientName": "Flour",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1192,
    "recipeId": 147,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1193,
    "recipeId": 147,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "large (diced)"
  },
  {
    "ingredientId": 1194,
    "recipeId": 147,
    "ingredientName": "Red wine vinegar",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1195,
    "recipeId": 147,
    "ingredientName": "Dry mustard",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1196,
    "recipeId": 147,
    "ingredientName": "Paprika",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1197,
    "recipeId": 147,
    "ingredientName": "Dried thyme",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1198,
    "recipeId": 147,
    "ingredientName": "Cayenne pepper",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1199,
    "recipeId": 147,
    "ingredientName": "Kosher salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1200,
    "recipeId": 147,
    "ingredientName": "Black pepper",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1216,
    "recipeId": 149,
    "ingredientName": "Flank steak",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1217,
    "recipeId": 149,
    "ingredientName": "Lemon juice",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1218,
    "recipeId": 149,
    "ingredientName": "Dijon mustard",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1219,
    "recipeId": 149,
    "ingredientName": "Worcestershire sauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1220,
    "recipeId": 149,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1221,
    "recipeId": 149,
    "ingredientName": "Hot pepper sauce",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1222,
    "recipeId": 149,
    "ingredientName": "HORSERADISH SAUCE",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1223,
    "recipeId": 149,
    "ingredientName": "Mayonnaise",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1224,
    "recipeId": 149,
    "ingredientName": "Sour cream",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1225,
    "recipeId": 149,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1226,
    "recipeId": 149,
    "ingredientName": "Horseradish",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1235,
    "recipeId": 151,
    "ingredientName": "Refrigerated pizza crust",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1236,
    "recipeId": 151,
    "ingredientName": "Plain nonfat yogurt",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1237,
    "recipeId": 151,
    "ingredientName": "Dijon mustard",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1238,
    "recipeId": 151,
    "ingredientName": "Horseradish",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1239,
    "recipeId": 151,
    "ingredientName": "Boiled ham",
    "amount": "6",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 1240,
    "recipeId": 151,
    "ingredientName": "Cheddar cheese",
    "amount": "3",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 1241,
    "recipeId": 151,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 1252,
    "recipeId": 153,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1253,
    "recipeId": 153,
    "ingredientName": "Beef cubes",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1254,
    "recipeId": 153,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1255,
    "recipeId": 153,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1256,
    "recipeId": 153,
    "ingredientName": "Ketchup",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1257,
    "recipeId": 153,
    "ingredientName": "Worcestershire sauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1258,
    "recipeId": 153,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1259,
    "recipeId": 153,
    "ingredientName": "Salt",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1260,
    "recipeId": 153,
    "ingredientName": "Paprika",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1261,
    "recipeId": 153,
    "ingredientName": "Dry mustard",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1262,
    "recipeId": 153,
    "ingredientName": "Cayenne",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1263,
    "recipeId": 153,
    "ingredientName": "Water",
    "amount": "1 1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1264,
    "recipeId": 153,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1265,
    "recipeId": 153,
    "ingredientName": "Water",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1318,
    "recipeId": 158,
    "ingredientName": "Water",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1319,
    "recipeId": 158,
    "ingredientName": "Vinegar",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1320,
    "recipeId": 158,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1321,
    "recipeId": 158,
    "ingredientName": "Mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1322,
    "recipeId": 158,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1323,
    "recipeId": 158,
    "ingredientName": "Black pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1324,
    "recipeId": 158,
    "ingredientName": "Red pepper",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1325,
    "recipeId": 158,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium(sliced)"
  },
  {
    "ingredientId": 1326,
    "recipeId": 158,
    "ingredientName": "Ketchup",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1327,
    "recipeId": 158,
    "ingredientName": "Worcestershire sauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1328,
    "recipeId": 158,
    "ingredientName": "Pork chops",
    "amount": "6",
    "measurement": ""
  },
  {
    "ingredientId": 1329,
    "recipeId": 159,
    "ingredientName": "Pork chops",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 1330,
    "recipeId": 159,
    "ingredientName": "Onions",
    "amount": "2",
    "measurement": "large"
  },
  {
    "ingredientId": 1331,
    "recipeId": 159,
    "ingredientName": "Potatoes",
    "amount": "3/4",
    "measurement": "pound"
  },
  {
    "ingredientId": 1332,
    "recipeId": 159,
    "ingredientName": "Cooking apples",
    "amount": "2",
    "measurement": "(cut in wedges)"
  },
  {
    "ingredientId": 1333,
    "recipeId": 159,
    "ingredientName": "Apple-cranberry juice",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1334,
    "recipeId": 159,
    "ingredientName": "Apple jelly",
    "amount": "1/4",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 1345,
    "recipeId": 161,
    "ingredientName": "Applesauce",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1346,
    "recipeId": 161,
    "ingredientName": "Nutmeg",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1347,
    "recipeId": 161,
    "ingredientName": "Cinnamon",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1348,
    "recipeId": 161,
    "ingredientName": "Ground cloves",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1349,
    "recipeId": 161,
    "ingredientName": "Cider vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1350,
    "recipeId": 161,
    "ingredientName": "Orange juice",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1351,
    "recipeId": 161,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1352,
    "recipeId": 161,
    "ingredientName": "Honey",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1353,
    "recipeId": 161,
    "ingredientName": "Horseradish",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1354,
    "recipeId": 161,
    "ingredientName": "Dark plums",
    "amount": "1",
    "measurement": "cup (thinly sliced)"
  },
  {
    "ingredientId": 1355,
    "recipeId": 161,
    "ingredientName": "Pork chops",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 1356,
    "recipeId": 161,
    "ingredientName": "Kosher salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1357,
    "recipeId": 161,
    "ingredientName": "Canola oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1389,
    "recipeId": 164,
    "ingredientName": "Prosciutto",
    "amount": "16",
    "measurement": "slices"
  },
  {
    "ingredientId": 1390,
    "recipeId": 164,
    "ingredientName": "Goat cheese",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1391,
    "recipeId": 164,
    "ingredientName": "Cream cheese",
    "amount": "2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1392,
    "recipeId": 164,
    "ingredientName": "Green onion",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1393,
    "recipeId": 164,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1394,
    "recipeId": 164,
    "ingredientName": "Olive oil",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1395,
    "recipeId": 164,
    "ingredientName": "White wine vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1396,
    "recipeId": 164,
    "ingredientName": "Shallot",
    "amount": "3",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 1397,
    "recipeId": 164,
    "ingredientName": "Mixed greens",
    "amount": "12",
    "measurement": "cups"
  },
  {
    "ingredientId": 1398,
    "recipeId": 165,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "stick"
  },
  {
    "ingredientId": 1399,
    "recipeId": 165,
    "ingredientName": "Mushrooms",
    "amount": "8",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 1400,
    "recipeId": 165,
    "ingredientName": "Parsley",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1401,
    "recipeId": 165,
    "ingredientName": "Gruyere cheese",
    "amount": "12",
    "measurement": "ounces (grated)"
  },
  {
    "ingredientId": 1402,
    "recipeId": 165,
    "ingredientName": "Roast beef",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1403,
    "recipeId": 165,
    "ingredientName": "Horseradish",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1404,
    "recipeId": 165,
    "ingredientName": "Puff pastry shells",
    "amount": "6",
    "measurement": "6x6%22 squares"
  },
  {
    "ingredientId": 1405,
    "recipeId": 165,
    "ingredientName": "SAUCE",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1406,
    "recipeId": 165,
    "ingredientName": "Sour cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1407,
    "recipeId": 165,
    "ingredientName": "Horseradish",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1408,
    "recipeId": 165,
    "ingredientName": "Garlic",
    "amount": "1/4",
    "measurement": "teaspoon (minced)"
  },
  {
    "ingredientId": 1409,
    "recipeId": 166,
    "ingredientName": "Spare ribs",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1410,
    "recipeId": 166,
    "ingredientName": "Soy sauce",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1411,
    "recipeId": 166,
    "ingredientName": "Water",
    "amount": "3/8",
    "measurement": "cup"
  },
  {
    "ingredientId": 1412,
    "recipeId": 166,
    "ingredientName": "Orange marmalade",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1413,
    "recipeId": 166,
    "ingredientName": "Garlic powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1414,
    "recipeId": 166,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1415,
    "recipeId": 166,
    "ingredientName": "Ginger",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1416,
    "recipeId": 167,
    "ingredientName": "Sweet potato",
    "amount": "",
    "measurement": "(peeled and sliced)"
  },
  {
    "ingredientId": 1417,
    "recipeId": 167,
    "ingredientName": "Red pepper",
    "amount": "",
    "measurement": "(cut in 1%22 pieces)"
  },
  {
    "ingredientId": 1418,
    "recipeId": 167,
    "ingredientName": "Snow peas",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1419,
    "recipeId": 167,
    "ingredientName": "Scallion",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1420,
    "recipeId": 167,
    "ingredientName": "Brown sugar",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1421,
    "recipeId": 167,
    "ingredientName": "Cornstarch",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1422,
    "recipeId": 167,
    "ingredientName": "Soy sauce",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1423,
    "recipeId": 167,
    "ingredientName": "Sherry",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1424,
    "recipeId": 167,
    "ingredientName": "Ground ginger",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1425,
    "recipeId": 167,
    "ingredientName": "Water",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1426,
    "recipeId": 167,
    "ingredientName": "Pork",
    "amount": "1",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 1427,
    "recipeId": 167,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1428,
    "recipeId": 168,
    "ingredientName": "Locatelli cheese",
    "amount": "1",
    "measurement": "cup (grated)"
  },
  {
    "ingredientId": 1429,
    "recipeId": 168,
    "ingredientName": "Bread crumbs",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1430,
    "recipeId": 168,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1431,
    "recipeId": 168,
    "ingredientName": "Garlic",
    "amount": "3",
    "measurement": "cloves"
  },
  {
    "ingredientId": 1432,
    "recipeId": 168,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1433,
    "recipeId": 168,
    "ingredientName": "Flank steak",
    "amount": "2 1/4",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1434,
    "recipeId": 168,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1435,
    "recipeId": 168,
    "ingredientName": "Ham",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1436,
    "recipeId": 168,
    "ingredientName": "Salami",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1437,
    "recipeId": 168,
    "ingredientName": "Mortadella",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1438,
    "recipeId": 168,
    "ingredientName": "Provolone cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1439,
    "recipeId": 168,
    "ingredientName": "Bacon",
    "amount": "1/4",
    "measurement": "pound"
  },
  {
    "ingredientId": 1440,
    "recipeId": 168,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "small (chopped)"
  },
  {
    "ingredientId": 1441,
    "recipeId": 168,
    "ingredientName": "Dry white wine",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1442,
    "recipeId": 168,
    "ingredientName": "Chopped tomatoes",
    "amount": "28",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1443,
    "recipeId": 168,
    "ingredientName": "Crushed red pepper",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1444,
    "recipeId": 169,
    "ingredientName": "Apple juice",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1445,
    "recipeId": 169,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1446,
    "recipeId": 169,
    "ingredientName": "Soy sauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1447,
    "recipeId": 169,
    "ingredientName": "Vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1448,
    "recipeId": 169,
    "ingredientName": "Ground ginger",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1449,
    "recipeId": 169,
    "ingredientName": "Garlic  powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1450,
    "recipeId": 169,
    "ingredientName": "Pepper",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1451,
    "recipeId": 169,
    "ingredientName": "Boneless pork roast",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1452,
    "recipeId": 169,
    "ingredientName": "Cornstarch",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1453,
    "recipeId": 169,
    "ingredientName": "Water",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1454,
    "recipeId": 170,
    "ingredientName": "Pumpkin",
    "amount": "15",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1455,
    "recipeId": 170,
    "ingredientName": "Spice cake mix",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 1456,
    "recipeId": 170,
    "ingredientName": "Water",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1457,
    "recipeId": 171,
    "ingredientName": "Eggplant",
    "amount": "1/2",
    "measurement": "medium"
  },
  {
    "ingredientId": 1458,
    "recipeId": 171,
    "ingredientName": "Part-skim ricotta",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1459,
    "recipeId": 171,
    "ingredientName": "Mozzarella cheese",
    "amount": "1 1/2",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 1460,
    "recipeId": 171,
    "ingredientName": "Egg white",
    "amount": "1/2",
    "measurement": "large"
  },
  {
    "ingredientId": 1461,
    "recipeId": 171,
    "ingredientName": "Fresh parsley",
    "amount": "1 1/2",
    "measurement": "teaspoons (chopped)"
  },
  {
    "ingredientId": 1462,
    "recipeId": 171,
    "ingredientName": "Garlic powder",
    "amount": "1",
    "measurement": "dash"
  },
  {
    "ingredientId": 1463,
    "recipeId": 171,
    "ingredientName": "Lasagna noodles",
    "amount": "1 1/2",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 1464,
    "recipeId": 171,
    "ingredientName": "Crushed tomatoes",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1476,
    "recipeId": 173,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1477,
    "recipeId": 173,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1478,
    "recipeId": 173,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 1479,
    "recipeId": 173,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1480,
    "recipeId": 173,
    "ingredientName": "Milk",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1481,
    "recipeId": 173,
    "ingredientName": "Water",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1482,
    "recipeId": 174,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1483,
    "recipeId": 174,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1484,
    "recipeId": 174,
    "ingredientName": "Green beans",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1485,
    "recipeId": 174,
    "ingredientName": "Broccoli",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1486,
    "recipeId": 174,
    "ingredientName": "Zucchini",
    "amount": "1/2",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 1487,
    "recipeId": 174,
    "ingredientName": "Plum tomatoes",
    "amount": "1",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 1488,
    "recipeId": 174,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1489,
    "recipeId": 174,
    "ingredientName": "Pepper",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1490,
    "recipeId": 174,
    "ingredientName": "Cooked pasta",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1491,
    "recipeId": 174,
    "ingredientName": "Parmesan cheese",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1492,
    "recipeId": 174,
    "ingredientName": "Salami",
    "amount": "1",
    "measurement": "ounce"
  },
  {
    "ingredientId": 1493,
    "recipeId": 174,
    "ingredientName": "Mozzarella cheese",
    "amount": "3/4",
    "measurement": "ounce"
  },
  {
    "ingredientId": 1494,
    "recipeId": 175,
    "ingredientName": "Scallions",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1495,
    "recipeId": 175,
    "ingredientName": "Fresh parsley",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1496,
    "recipeId": 175,
    "ingredientName": "Fresh basil",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1497,
    "recipeId": 175,
    "ingredientName": "Parmesan cheese",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1498,
    "recipeId": 175,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves"
  },
  {
    "ingredientId": 1499,
    "recipeId": 175,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1500,
    "recipeId": 175,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1501,
    "recipeId": 175,
    "ingredientName": "Scallops",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1502,
    "recipeId": 175,
    "ingredientName": "Instant chicken broth mix",
    "amount": "1",
    "measurement": "packet"
  },
  {
    "ingredientId": 1503,
    "recipeId": 175,
    "ingredientName": "Almonds",
    "amount": "2",
    "measurement": "ounces (slivered)"
  },
  {
    "ingredientId": 1504,
    "recipeId": 175,
    "ingredientName": "Lemon peel",
    "amount": "1",
    "measurement": "teaspoon (grated)"
  },
  {
    "ingredientId": 1505,
    "recipeId": 175,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1506,
    "recipeId": 175,
    "ingredientName": "White pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1507,
    "recipeId": 175,
    "ingredientName": "Pasta",
    "amount": "4 1/2",
    "measurement": "cups (cooked)"
  },
  {
    "ingredientId": 1508,
    "recipeId": 176,
    "ingredientName": "CRUST",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1509,
    "recipeId": 176,
    "ingredientName": "Cooked thin spaghetti",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1510,
    "recipeId": 176,
    "ingredientName": "Parmesan cheese",
    "amount": "1",
    "measurement": "ounce (grated)"
  },
  {
    "ingredientId": 1511,
    "recipeId": 176,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 1512,
    "recipeId": 176,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "teaspoons (softened)"
  },
  {
    "ingredientId": 1513,
    "recipeId": 176,
    "ingredientName": "FILLING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1514,
    "recipeId": 176,
    "ingredientName": "Ricotta cheese",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1515,
    "recipeId": 176,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1516,
    "recipeId": 176,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 1517,
    "recipeId": 176,
    "ingredientName": "Bell pepper",
    "amount": "1/2",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 1518,
    "recipeId": 176,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 1519,
    "recipeId": 176,
    "ingredientName": "Cooked ground beef",
    "amount": "6",
    "measurement": "ounces (crumbled)"
  },
  {
    "ingredientId": 1520,
    "recipeId": 176,
    "ingredientName": "Tomato puree",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1521,
    "recipeId": 176,
    "ingredientName": "Mozzarella cheese",
    "amount": "2",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 1522,
    "recipeId": 177,
    "ingredientName": "Boneless chicken",
    "amount": "1 1/2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1523,
    "recipeId": 177,
    "ingredientName": "Shallots",
    "amount": "2",
    "measurement": "(thinly sliced)"
  },
  {
    "ingredientId": 1524,
    "recipeId": 177,
    "ingredientName": "Apple cider vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1525,
    "recipeId": 177,
    "ingredientName": "Chicken broth",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1526,
    "recipeId": 177,
    "ingredientName": "Apricot preserves",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1527,
    "recipeId": 177,
    "ingredientName": "Honey",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1528,
    "recipeId": 177,
    "ingredientName": "Poppy seeds",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1529,
    "recipeId": 177,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1530,
    "recipeId": 178,
    "ingredientName": "Canned chicken",
    "amount": "12 1/2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1531,
    "recipeId": 178,
    "ingredientName": "Olives",
    "amount": "2 1/2",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 1532,
    "recipeId": 178,
    "ingredientName": "Artichoke hearts",
    "amount": "14",
    "measurement": "ounces (drained, chopped)"
  },
  {
    "ingredientId": 1533,
    "recipeId": 178,
    "ingredientName": "Rice",
    "amount": "2",
    "measurement": "cups (cooked)"
  },
  {
    "ingredientId": 1534,
    "recipeId": 178,
    "ingredientName": "Mayonnaise",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1543,
    "recipeId": 180,
    "ingredientName": "Chicken cutlets",
    "amount": "1 1/2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1544,
    "recipeId": 180,
    "ingredientName": "Flour",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1545,
    "recipeId": 180,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1546,
    "recipeId": 180,
    "ingredientName": "Olive oil",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1547,
    "recipeId": 180,
    "ingredientName": "Marsala wine",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1548,
    "recipeId": 180,
    "ingredientName": "Chicken broth",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1549,
    "recipeId": 180,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1550,
    "recipeId": 181,
    "ingredientName": "Orange juice",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1551,
    "recipeId": 181,
    "ingredientName": "Pineapple juice",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1552,
    "recipeId": 181,
    "ingredientName": "Lime juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1553,
    "recipeId": 181,
    "ingredientName": "Soy sauce",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1554,
    "recipeId": 181,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1555,
    "recipeId": 181,
    "ingredientName": "Vegetable oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1556,
    "recipeId": 181,
    "ingredientName": "Honey",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1557,
    "recipeId": 181,
    "ingredientName": "Black pepper",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1558,
    "recipeId": 181,
    "ingredientName": "Salad greens",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 1559,
    "recipeId": 181,
    "ingredientName": "Chicken breast",
    "amount": "1",
    "measurement": "pound (cooked and chopped)"
  },
  {
    "ingredientId": 1560,
    "recipeId": 181,
    "ingredientName": "Mango",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1561,
    "recipeId": 181,
    "ingredientName": "Pineapple",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1562,
    "recipeId": 181,
    "ingredientName": "Avocado",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1563,
    "recipeId": 181,
    "ingredientName": "Black beans",
    "amount": "15",
    "measurement": "ounces (rinsed and drained)"
  },
  {
    "ingredientId": 1564,
    "recipeId": 181,
    "ingredientName": "Cheddar cheese",
    "amount": "1/2",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 1565,
    "recipeId": 182,
    "ingredientName": "Chicken cutlets",
    "amount": "6",
    "measurement": ""
  },
  {
    "ingredientId": 1566,
    "recipeId": 182,
    "ingredientName": "Apples",
    "amount": "3",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1567,
    "recipeId": 182,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1568,
    "recipeId": 182,
    "ingredientName": "Apple brandy",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1569,
    "recipeId": 182,
    "ingredientName": "Heavy cream",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1570,
    "recipeId": 182,
    "ingredientName": "Dry mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1571,
    "recipeId": 182,
    "ingredientName": "Almonds",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1572,
    "recipeId": 183,
    "ingredientName": "Bread crumbs",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1573,
    "recipeId": 183,
    "ingredientName": "Parmesan cheese",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1574,
    "recipeId": 183,
    "ingredientName": "Oregano",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1575,
    "recipeId": 183,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1576,
    "recipeId": 183,
    "ingredientName": "Garlic powder",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1577,
    "recipeId": 183,
    "ingredientName": "Chicken",
    "amount": "2 1/2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1578,
    "recipeId": 183,
    "ingredientName": "Cream of mushroom soup",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 1579,
    "recipeId": 183,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1580,
    "recipeId": 183,
    "ingredientName": "Sour cream",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1581,
    "recipeId": 183,
    "ingredientName": "Parmesan cheese",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1582,
    "recipeId": 184,
    "ingredientName": "Cornflakes",
    "amount": "3/4",
    "measurement": "ounce"
  },
  {
    "ingredientId": 1583,
    "recipeId": 184,
    "ingredientName": "Sesame seeds",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1584,
    "recipeId": 184,
    "ingredientName": "Paprika",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1585,
    "recipeId": 184,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1586,
    "recipeId": 184,
    "ingredientName": "Chicken cutlets",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1587,
    "recipeId": 184,
    "ingredientName": "Skim milk",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1588,
    "recipeId": 184,
    "ingredientName": "Reduced calorie margarine",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1589,
    "recipeId": 185,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1590,
    "recipeId": 185,
    "ingredientName": "Chicken",
    "amount": "1",
    "measurement": "pound (cut in strips)"
  },
  {
    "ingredientId": 1591,
    "recipeId": 185,
    "ingredientName": "Cornstarch",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1592,
    "recipeId": 185,
    "ingredientName": "SAUCE",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1593,
    "recipeId": 185,
    "ingredientName": "Oil",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1594,
    "recipeId": 185,
    "ingredientName": "Sugar",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1595,
    "recipeId": 185,
    "ingredientName": "Catsup",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1596,
    "recipeId": 185,
    "ingredientName": "White vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1597,
    "recipeId": 185,
    "ingredientName": "Tahini",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1598,
    "recipeId": 185,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1599,
    "recipeId": 185,
    "ingredientName": "White pepper",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1600,
    "recipeId": 185,
    "ingredientName": "Sesame seeds",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1601,
    "recipeId": 185,
    "ingredientName": "Green onion",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1602,
    "recipeId": 186,
    "ingredientName": "Chicken breast",
    "amount": "1",
    "measurement": "pound (boneless)"
  },
  {
    "ingredientId": 1603,
    "recipeId": 186,
    "ingredientName": "Cornstarch",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1604,
    "recipeId": 186,
    "ingredientName": "Peanut oil",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1605,
    "recipeId": 186,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "small (chopped)"
  },
  {
    "ingredientId": 1606,
    "recipeId": 186,
    "ingredientName": "Red bell pepper",
    "amount": "1",
    "measurement": "(diced)"
  },
  {
    "ingredientId": 1607,
    "recipeId": 186,
    "ingredientName": "Crushed red pepper",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1608,
    "recipeId": 186,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1609,
    "recipeId": 186,
    "ingredientName": "Soy sauce",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1610,
    "recipeId": 186,
    "ingredientName": "Crunchy peanut butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1611,
    "recipeId": 186,
    "ingredientName": "Brown sugar",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1612,
    "recipeId": 186,
    "ingredientName": "Chicken broth",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1613,
    "recipeId": 186,
    "ingredientName": "Peanuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1614,
    "recipeId": 186,
    "ingredientName": "Scallion",
    "amount": "4",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1615,
    "recipeId": 186,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1630,
    "recipeId": 187,
    "ingredientName": "Butter",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1631,
    "recipeId": 187,
    "ingredientName": "Onion",
    "amount": "1/4",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 1632,
    "recipeId": 187,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 1633,
    "recipeId": 187,
    "ingredientName": "Mushrooms",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1634,
    "recipeId": 187,
    "ingredientName": "Spinach",
    "amount": "1/2",
    "measurement": "cup (cook and chop)"
  },
  {
    "ingredientId": 1635,
    "recipeId": 187,
    "ingredientName": "Ricotta cheese",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1636,
    "recipeId": 187,
    "ingredientName": "Bread crumbs",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1637,
    "recipeId": 187,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1638,
    "recipeId": 187,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1639,
    "recipeId": 187,
    "ingredientName": "Chicken breast",
    "amount": "7",
    "measurement": "ounces (skinned and boned)"
  },
  {
    "ingredientId": 1640,
    "recipeId": 187,
    "ingredientName": "Dry white wine",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1641,
    "recipeId": 187,
    "ingredientName": "Instant chicken broth, dissolved in 1 cup hot water",
    "amount": "1/2",
    "measurement": "package"
  },
  {
    "ingredientId": 1642,
    "recipeId": 187,
    "ingredientName": "Water",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1643,
    "recipeId": 187,
    "ingredientName": "Cornstarch",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1644,
    "recipeId": 188,
    "ingredientName": "Boneless chicken breasts",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1645,
    "recipeId": 188,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "large (thinly sliced)"
  },
  {
    "ingredientId": 1646,
    "recipeId": 188,
    "ingredientName": "Garlic",
    "amount": "4",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1647,
    "recipeId": 188,
    "ingredientName": "Plum tomatoes",
    "amount": "6",
    "measurement": "(diced)"
  },
  {
    "ingredientId": 1648,
    "recipeId": 188,
    "ingredientName": "Tarragon vinegar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1649,
    "recipeId": 188,
    "ingredientName": "Dried tarragon",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1650,
    "recipeId": 188,
    "ingredientName": "Dijon mustard",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1651,
    "recipeId": 188,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1652,
    "recipeId": 188,
    "ingredientName": "Heavy cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1653,
    "recipeId": 188,
    "ingredientName": "Flour",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1654,
    "recipeId": 189,
    "ingredientName": "Vegetable oil",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1655,
    "recipeId": 189,
    "ingredientName": "Sugar",
    "amount": "8",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1656,
    "recipeId": 189,
    "ingredientName": "Vinegar",
    "amount": "8",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1657,
    "recipeId": 189,
    "ingredientName": "Salt",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1658,
    "recipeId": 189,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1659,
    "recipeId": 189,
    "ingredientName": "Red pepper sauce",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1660,
    "recipeId": 190,
    "ingredientName": "Plain nonfat yogurt",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1661,
    "recipeId": 190,
    "ingredientName": "Honey",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1662,
    "recipeId": 190,
    "ingredientName": "Dijon mustard",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1663,
    "recipeId": 190,
    "ingredientName": "Cider vinegar",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1664,
    "recipeId": 191,
    "ingredientName": "Lemon, zest and juice",
    "amount": "1",
    "measurement": "medium"
  },
  {
    "ingredientId": 1665,
    "recipeId": 191,
    "ingredientName": "Cider vinegar",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1666,
    "recipeId": 191,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1667,
    "recipeId": 191,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1668,
    "recipeId": 191,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1669,
    "recipeId": 192,
    "ingredientName": "Red wine vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1670,
    "recipeId": 192,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1671,
    "recipeId": 192,
    "ingredientName": "Fresh lemon juice",
    "amount": "1/2",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1672,
    "recipeId": 192,
    "ingredientName": "Olive oil",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1673,
    "recipeId": 192,
    "ingredientName": "Fresh parsley",
    "amount": "1",
    "measurement": "tablespoon (chopped)"
  },
  {
    "ingredientId": 1674,
    "recipeId": 192,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1675,
    "recipeId": 193,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1676,
    "recipeId": 193,
    "ingredientName": "Salt",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1677,
    "recipeId": 193,
    "ingredientName": "Dry mustard",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1678,
    "recipeId": 193,
    "ingredientName": "White vinegar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1679,
    "recipeId": 193,
    "ingredientName": "Vegetable oil",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1680,
    "recipeId": 193,
    "ingredientName": "Onion",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1681,
    "recipeId": 193,
    "ingredientName": "Poppy seeds",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1682,
    "recipeId": 194,
    "ingredientName": "Vegetable oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1683,
    "recipeId": 194,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1684,
    "recipeId": 194,
    "ingredientName": "Red wine vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1685,
    "recipeId": 194,
    "ingredientName": "Parsley",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1686,
    "recipeId": 194,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1687,
    "recipeId": 194,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1688,
    "recipeId": 195,
    "ingredientName": "Cider vinegar",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1689,
    "recipeId": 195,
    "ingredientName": "Fresh lemon juice",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1690,
    "recipeId": 195,
    "ingredientName": "Dijon mustard",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1691,
    "recipeId": 195,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1692,
    "recipeId": 195,
    "ingredientName": "Black pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1693,
    "recipeId": 195,
    "ingredientName": "Safflower oil",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1702,
    "recipeId": 197,
    "ingredientName": "Head of broccoli",
    "amount": "1",
    "measurement": "large (chopped)"
  },
  {
    "ingredientId": 1703,
    "recipeId": 197,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 1704,
    "recipeId": 197,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1705,
    "recipeId": 197,
    "ingredientName": "Mayonnaise",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1706,
    "recipeId": 197,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1707,
    "recipeId": 197,
    "ingredientName": "Cider vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1708,
    "recipeId": 197,
    "ingredientName": "Bacon",
    "amount": "8",
    "measurement": "strips (crumbled)"
  },
  {
    "ingredientId": 1709,
    "recipeId": 198,
    "ingredientName": "Honey",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1710,
    "recipeId": 198,
    "ingredientName": "Red wine vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1711,
    "recipeId": 198,
    "ingredientName": "Bacon",
    "amount": "4",
    "measurement": "ounces (diced)"
  },
  {
    "ingredientId": 1712,
    "recipeId": 198,
    "ingredientName": "Boneless chicken",
    "amount": "12",
    "measurement": "ounces (cut in thin strips)"
  },
  {
    "ingredientId": 1713,
    "recipeId": 198,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1714,
    "recipeId": 198,
    "ingredientName": "Scallion",
    "amount": "1",
    "measurement": "bunch (cut in 3%22 pieces)"
  },
  {
    "ingredientId": 1715,
    "recipeId": 199,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1716,
    "recipeId": 199,
    "ingredientName": "Honey",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1717,
    "recipeId": 199,
    "ingredientName": "Mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1718,
    "recipeId": 199,
    "ingredientName": "Walnuts",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1719,
    "recipeId": 199,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1720,
    "recipeId": 200,
    "ingredientName": "Almonds",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 1721,
    "recipeId": 200,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1722,
    "recipeId": 200,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1723,
    "recipeId": 200,
    "ingredientName": "Lettuce",
    "amount": "1/4",
    "measurement": "head"
  },
  {
    "ingredientId": 1724,
    "recipeId": 200,
    "ingredientName": "Romaine lettuce",
    "amount": "1/4",
    "measurement": "bunch"
  },
  {
    "ingredientId": 1725,
    "recipeId": 200,
    "ingredientName": "Stalks of celery",
    "amount": "2",
    "measurement": "medium (sliced)"
  },
  {
    "ingredientId": 1726,
    "recipeId": 200,
    "ingredientName": "Green onions",
    "amount": "2",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1727,
    "recipeId": 200,
    "ingredientName": "Sweet and Sour Dressing",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1728,
    "recipeId": 200,
    "ingredientName": "Mandarin oranges",
    "amount": "11",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1729,
    "recipeId": 201,
    "ingredientName": "Cooked red potatoes",
    "amount": "1/2",
    "measurement": "pound (cubed)"
  },
  {
    "ingredientId": 1730,
    "recipeId": 201,
    "ingredientName": "Celery",
    "amount": "2",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 1731,
    "recipeId": 201,
    "ingredientName": "Scallions",
    "amount": "2",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 1732,
    "recipeId": 201,
    "ingredientName": "Reduced calorie ranch dressing (25 cal/tbs)",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1733,
    "recipeId": 201,
    "ingredientName": "Fresh dill",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1734,
    "recipeId": 201,
    "ingredientName": "Salt and white pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1744,
    "recipeId": 203,
    "ingredientName": "Cannellini beans",
    "amount": "4",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 1745,
    "recipeId": 203,
    "ingredientName": "Chicken broth",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1746,
    "recipeId": 203,
    "ingredientName": "Olive oil",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1747,
    "recipeId": 203,
    "ingredientName": "Red wine vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1748,
    "recipeId": 203,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove"
  },
  {
    "ingredientId": 1749,
    "recipeId": 203,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1750,
    "recipeId": 203,
    "ingredientName": "Mustard",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1751,
    "recipeId": 203,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1752,
    "recipeId": 203,
    "ingredientName": "Spinach",
    "amount": "3/4",
    "measurement": "quart"
  },
  {
    "ingredientId": 1753,
    "recipeId": 203,
    "ingredientName": "Red potatoes",
    "amount": "4",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 1754,
    "recipeId": 203,
    "ingredientName": "Red onion",
    "amount": "1/4",
    "measurement": "(thinly sliced)"
  },
  {
    "ingredientId": 1755,
    "recipeId": 204,
    "ingredientName": "Ground beef",
    "amount": "2",
    "measurement": "pounds (cooked)"
  },
  {
    "ingredientId": 1756,
    "recipeId": 204,
    "ingredientName": "Lettuce",
    "amount": "2",
    "measurement": "heads"
  },
  {
    "ingredientId": 1757,
    "recipeId": 204,
    "ingredientName": "Tomatoes",
    "amount": "4",
    "measurement": "medium (diced)"
  },
  {
    "ingredientId": 1758,
    "recipeId": 204,
    "ingredientName": "Green peppers",
    "amount": "4",
    "measurement": "medium (diced)"
  },
  {
    "ingredientId": 1759,
    "recipeId": 204,
    "ingredientName": "Doritos",
    "amount": "2",
    "measurement": "small bags (crumbled)"
  },
  {
    "ingredientId": 1760,
    "recipeId": 204,
    "ingredientName": "Cheddar cheese",
    "amount": "1",
    "measurement": "pound (shredded)"
  },
  {
    "ingredientId": 1761,
    "recipeId": 204,
    "ingredientName": "Catalina dressing",
    "amount": "16",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1762,
    "recipeId": 205,
    "ingredientName": "Lettuce",
    "amount": "1",
    "measurement": "pint"
  },
  {
    "ingredientId": 1763,
    "recipeId": 205,
    "ingredientName": "Chickpeas",
    "amount": "1/2",
    "measurement": "pound (drained)"
  },
  {
    "ingredientId": 1764,
    "recipeId": 205,
    "ingredientName": "Tomatoes",
    "amount": "1",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 1765,
    "recipeId": 205,
    "ingredientName": "Mushrooms",
    "amount": "1/2",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 1766,
    "recipeId": 205,
    "ingredientName": "Black olives",
    "amount": "10",
    "measurement": "small (sliced)"
  },
  {
    "ingredientId": 1767,
    "recipeId": 205,
    "ingredientName": "Reduced calorie Catalina dressing (18 cal/tbs)",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1768,
    "recipeId": 205,
    "ingredientName": "Jalapeno pepper",
    "amount": "1/2",
    "measurement": "small (diced)"
  },
  {
    "ingredientId": 1769,
    "recipeId": 205,
    "ingredientName": "Reduced calorie cheddar cheese",
    "amount": "3/4",
    "measurement": "ounce (shredded)"
  },
  {
    "ingredientId": 1770,
    "recipeId": 205,
    "ingredientName": "Corn chips",
    "amount": "1/2",
    "measurement": "ounce"
  },
  {
    "ingredientId": 1771,
    "recipeId": 206,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1772,
    "recipeId": 206,
    "ingredientName": "Cornstarch",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1773,
    "recipeId": 206,
    "ingredientName": "Orange juice",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 1774,
    "recipeId": 206,
    "ingredientName": "Salt",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1775,
    "recipeId": 206,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1776,
    "recipeId": 206,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1777,
    "recipeId": 207,
    "ingredientName": "Dry white wine or chicken broth",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1778,
    "recipeId": 207,
    "ingredientName": "Cider vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1779,
    "recipeId": 207,
    "ingredientName": "Shallots",
    "amount": "2",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 1780,
    "recipeId": 207,
    "ingredientName": "Thyme",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1781,
    "recipeId": 207,
    "ingredientName": "Bay leaf",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1782,
    "recipeId": 207,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1783,
    "recipeId": 207,
    "ingredientName": "Heavy cream",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1784,
    "recipeId": 207,
    "ingredientName": "Butter",
    "amount": "10",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1785,
    "recipeId": 207,
    "ingredientName": "Fresh lemon juice",
    "amount": "2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1786,
    "recipeId": 207,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1787,
    "recipeId": 208,
    "ingredientName": "Crabs",
    "amount": "1",
    "measurement": "dozen (cleaned)"
  },
  {
    "ingredientId": 1788,
    "recipeId": 208,
    "ingredientName": "Garlic",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1789,
    "recipeId": 208,
    "ingredientName": "Fresh parsley",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1790,
    "recipeId": 208,
    "ingredientName": "Fresh basil",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1791,
    "recipeId": 208,
    "ingredientName": "Hot pepper flakes",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1792,
    "recipeId": 208,
    "ingredientName": "Cayenne pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1793,
    "recipeId": 208,
    "ingredientName": "Tabasco sauce",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1794,
    "recipeId": 208,
    "ingredientName": "Kosher salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1795,
    "recipeId": 208,
    "ingredientName": "Peppercorns",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1796,
    "recipeId": 208,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1797,
    "recipeId": 208,
    "ingredientName": "Hot peppers",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1798,
    "recipeId": 208,
    "ingredientName": "Beer",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 1799,
    "recipeId": 208,
    "ingredientName": "Olive oil",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1809,
    "recipeId": 210,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 1810,
    "recipeId": 210,
    "ingredientName": "Green bell pepper",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 1811,
    "recipeId": 210,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1812,
    "recipeId": 210,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1813,
    "recipeId": 210,
    "ingredientName": "Crab meat",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1814,
    "recipeId": 210,
    "ingredientName": "Water",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 1815,
    "recipeId": 210,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1816,
    "recipeId": 210,
    "ingredientName": "Bay scallops",
    "amount": "1/2",
    "measurement": "pound"
  },
  {
    "ingredientId": 1817,
    "recipeId": 210,
    "ingredientName": "Flounder",
    "amount": "1/2",
    "measurement": "pound"
  },
  {
    "ingredientId": 1818,
    "recipeId": 210,
    "ingredientName": "Milk",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 1819,
    "recipeId": 210,
    "ingredientName": "Sharp cheddar cheese",
    "amount": "1",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 1820,
    "recipeId": 210,
    "ingredientName": "White vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1821,
    "recipeId": 210,
    "ingredientName": "Worcestershire sauce",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1822,
    "recipeId": 210,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1823,
    "recipeId": 210,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1824,
    "recipeId": 210,
    "ingredientName": "Hot red pepper sauce",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1825,
    "recipeId": 210,
    "ingredientName": "Parmesan cheese",
    "amount": "1/2",
    "measurement": "cup (grated)"
  },
  {
    "ingredientId": 1840,
    "recipeId": 213,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 1841,
    "recipeId": 213,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(grated)"
  },
  {
    "ingredientId": 1842,
    "recipeId": 213,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1843,
    "recipeId": 213,
    "ingredientName": "Water",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1844,
    "recipeId": 213,
    "ingredientName": "Vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1845,
    "recipeId": 213,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 1846,
    "recipeId": 213,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 1847,
    "recipeId": 214,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "pound (peeled and deveined)"
  },
  {
    "ingredientId": 1848,
    "recipeId": 214,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1849,
    "recipeId": 214,
    "ingredientName": "Brandy",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1850,
    "recipeId": 214,
    "ingredientName": "Milk",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1851,
    "recipeId": 214,
    "ingredientName": "Gorgonzola cheese",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1852,
    "recipeId": 214,
    "ingredientName": "Marjoram",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1853,
    "recipeId": 215,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1854,
    "recipeId": 215,
    "ingredientName": "Dijon mustard",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1855,
    "recipeId": 215,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1856,
    "recipeId": 215,
    "ingredientName": "Orange juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1857,
    "recipeId": 215,
    "ingredientName": "Louisiana hot sauce",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1858,
    "recipeId": 215,
    "ingredientName": "Mango",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1859,
    "recipeId": 215,
    "ingredientName": "Red pepper",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 1860,
    "recipeId": 215,
    "ingredientName": "Green onions",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 1861,
    "recipeId": 216,
    "ingredientName": "Olive oil",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1862,
    "recipeId": 216,
    "ingredientName": "Cajun seasoning",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1863,
    "recipeId": 216,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1864,
    "recipeId": 216,
    "ingredientName": "Fresh parsley",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1865,
    "recipeId": 216,
    "ingredientName": "Honey",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1866,
    "recipeId": 216,
    "ingredientName": "Soy sauce",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1867,
    "recipeId": 216,
    "ingredientName": "Cayenne pepper",
    "amount": "",
    "measurement": "pinch"
  },
  {
    "ingredientId": 1868,
    "recipeId": 216,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1882,
    "recipeId": 218,
    "ingredientName": "Olive oil",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1883,
    "recipeId": 218,
    "ingredientName": "Red wine vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1884,
    "recipeId": 218,
    "ingredientName": "Blue cheese",
    "amount": "2",
    "measurement": "tablespoons (crumbled)"
  },
  {
    "ingredientId": 1885,
    "recipeId": 218,
    "ingredientName": "Scallions",
    "amount": "2",
    "measurement": "(finely chopped)"
  },
  {
    "ingredientId": 1886,
    "recipeId": 218,
    "ingredientName": "Mushrooms",
    "amount": "1/3",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 1887,
    "recipeId": 218,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1888,
    "recipeId": 219,
    "ingredientName": "Butter",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1889,
    "recipeId": 219,
    "ingredientName": "Onion",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1890,
    "recipeId": 219,
    "ingredientName": "Flour",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1891,
    "recipeId": 219,
    "ingredientName": "Water",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1892,
    "recipeId": 219,
    "ingredientName": "Cheez whiz",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1893,
    "recipeId": 219,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 1894,
    "recipeId": 219,
    "ingredientName": "Chopped broccoli",
    "amount": "2",
    "measurement": "packages (drained)"
  },
  {
    "ingredientId": 1895,
    "recipeId": 220,
    "ingredientName": "Carrot",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1896,
    "recipeId": 220,
    "ingredientName": "Brussel sprouts",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1897,
    "recipeId": 220,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1898,
    "recipeId": 220,
    "ingredientName": "Mustard",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1899,
    "recipeId": 220,
    "ingredientName": "Honey",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1900,
    "recipeId": 220,
    "ingredientName": "Mustard seed",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1901,
    "recipeId": 220,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1902,
    "recipeId": 220,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1903,
    "recipeId": 221,
    "ingredientName": "Butternut squash",
    "amount": "2",
    "measurement": "pounds (seeded and peeled)"
  },
  {
    "ingredientId": 1904,
    "recipeId": 221,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1905,
    "recipeId": 221,
    "ingredientName": "Sour cream",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1906,
    "recipeId": 221,
    "ingredientName": "Maple syrup",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1907,
    "recipeId": 221,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 1908,
    "recipeId": 221,
    "ingredientName": "Cumin",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1909,
    "recipeId": 221,
    "ingredientName": "Chili powder",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1910,
    "recipeId": 222,
    "ingredientName": "Carrots",
    "amount": "1",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 1911,
    "recipeId": 222,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1912,
    "recipeId": 222,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1913,
    "recipeId": 222,
    "ingredientName": "Cheddar cheese",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1914,
    "recipeId": 223,
    "ingredientName": "Cauliflower",
    "amount": "1",
    "measurement": "head"
  },
  {
    "ingredientId": 1915,
    "recipeId": 223,
    "ingredientName": "Cream cheese",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1916,
    "recipeId": 223,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1917,
    "recipeId": 223,
    "ingredientName": "Cream",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1918,
    "recipeId": 223,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1919,
    "recipeId": 223,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1926,
    "recipeId": 225,
    "ingredientName": "Cucumber",
    "amount": "4",
    "measurement": "medium (sliced)"
  },
  {
    "ingredientId": 1927,
    "recipeId": 225,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 1928,
    "recipeId": 225,
    "ingredientName": "Pepper",
    "amount": "2",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1929,
    "recipeId": 225,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "quart"
  },
  {
    "ingredientId": 1930,
    "recipeId": 225,
    "ingredientName": "Salt",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1931,
    "recipeId": 225,
    "ingredientName": "Celery seed",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1932,
    "recipeId": 225,
    "ingredientName": "Mustard seed",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1933,
    "recipeId": 225,
    "ingredientName": "Cider vinegar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1934,
    "recipeId": 226,
    "ingredientName": "Cucumbers",
    "amount": "2",
    "measurement": "(peeled and sliced)"
  },
  {
    "ingredientId": 1935,
    "recipeId": 226,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1936,
    "recipeId": 226,
    "ingredientName": "Sour cream",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1937,
    "recipeId": 226,
    "ingredientName": "Cider vinegar",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1938,
    "recipeId": 226,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1939,
    "recipeId": 226,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1940,
    "recipeId": 227,
    "ingredientName": "Eggplant",
    "amount": "1/2",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 1941,
    "recipeId": 227,
    "ingredientName": "Brea crumbs",
    "amount": "3/8",
    "measurement": "cup"
  },
  {
    "ingredientId": 1942,
    "recipeId": 227,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 1943,
    "recipeId": 227,
    "ingredientName": "Garlic",
    "amount": "1 1/2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 1944,
    "recipeId": 227,
    "ingredientName": "Crushed tomatoes",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1945,
    "recipeId": 227,
    "ingredientName": "Dried basil",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1946,
    "recipeId": 227,
    "ingredientName": "Dried oregano",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1947,
    "recipeId": 227,
    "ingredientName": "Red pepper flakes",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1948,
    "recipeId": 227,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 1949,
    "recipeId": 227,
    "ingredientName": "Chopped broccoli",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1950,
    "recipeId": 227,
    "ingredientName": "Part-skim ricotta",
    "amount": "7/8",
    "measurement": "cup"
  },
  {
    "ingredientId": 1951,
    "recipeId": 227,
    "ingredientName": "Egg",
    "amount": "1/2",
    "measurement": "large"
  },
  {
    "ingredientId": 1952,
    "recipeId": 227,
    "ingredientName": "Parmesan cheese",
    "amount": "3/4",
    "measurement": "ounce"
  },
  {
    "ingredientId": 1953,
    "recipeId": 228,
    "ingredientName": "Eggplant",
    "amount": "1",
    "measurement": "medium"
  },
  {
    "ingredientId": 1954,
    "recipeId": 228,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1955,
    "recipeId": 228,
    "ingredientName": "Mozzarella cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1956,
    "recipeId": 228,
    "ingredientName": "Prosciutto",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1957,
    "recipeId": 228,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1958,
    "recipeId": 228,
    "ingredientName": "Parmesan cheese",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1959,
    "recipeId": 228,
    "ingredientName": "Tomato sauce",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1960,
    "recipeId": 229,
    "ingredientName": "Carrots",
    "amount": "2",
    "measurement": "pounds (sliced)"
  },
  {
    "ingredientId": 1961,
    "recipeId": 229,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1962,
    "recipeId": 229,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1963,
    "recipeId": 230,
    "ingredientName": "Onions",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 1964,
    "recipeId": 230,
    "ingredientName": "Dry sherry",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1965,
    "recipeId": 230,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1966,
    "recipeId": 230,
    "ingredientName": "Honey",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1967,
    "recipeId": 230,
    "ingredientName": "Water",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1968,
    "recipeId": 230,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 1969,
    "recipeId": 230,
    "ingredientName": "Dried thyme",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1970,
    "recipeId": 230,
    "ingredientName": "Almonds",
    "amount": "2/3",
    "measurement": "cup (slivered)"
  },
  {
    "ingredientId": 1971,
    "recipeId": 230,
    "ingredientName": "Red wine vinegar",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1972,
    "recipeId": 231,
    "ingredientName": "Cream of mushroom soup",
    "amount": "2",
    "measurement": "cans"
  },
  {
    "ingredientId": 1973,
    "recipeId": 231,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 1974,
    "recipeId": 231,
    "ingredientName": "Soy sauce",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 1975,
    "recipeId": 231,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1976,
    "recipeId": 231,
    "ingredientName": "Green beans",
    "amount": "8",
    "measurement": "cups"
  },
  {
    "ingredientId": 1977,
    "recipeId": 231,
    "ingredientName": "French%27s fried onions",
    "amount": "2 2/3",
    "measurement": "cups"
  },
  {
    "ingredientId": 1978,
    "recipeId": 232,
    "ingredientName": "Green beans",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 1979,
    "recipeId": 232,
    "ingredientName": "Mushrooms",
    "amount": "1/2",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 1980,
    "recipeId": 232,
    "ingredientName": "Red pepper",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 1981,
    "recipeId": 232,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 1982,
    "recipeId": 232,
    "ingredientName": "Cream cheese",
    "amount": "3",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 1983,
    "recipeId": 232,
    "ingredientName": "Goat cheese",
    "amount": "3",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 1984,
    "recipeId": 233,
    "ingredientName": "Green beans",
    "amount": "20",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 1985,
    "recipeId": 233,
    "ingredientName": "Roasted red peppers or sun-dried tomatoes",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1986,
    "recipeId": 233,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1987,
    "recipeId": 233,
    "ingredientName": "Cream cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1988,
    "recipeId": 233,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 1989,
    "recipeId": 233,
    "ingredientName": "Blue cheese",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 1990,
    "recipeId": 234,
    "ingredientName": "Mustard",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1991,
    "recipeId": 234,
    "ingredientName": "Olive oil",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1992,
    "recipeId": 234,
    "ingredientName": "Red wine vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 1993,
    "recipeId": 234,
    "ingredientName": "Sugar or sugar substitute",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1994,
    "recipeId": 234,
    "ingredientName": "Oregano",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 1995,
    "recipeId": 234,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1996,
    "recipeId": 234,
    "ingredientName": "Sun-dried tomatoes",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 1997,
    "recipeId": 234,
    "ingredientName": "Broccoli",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1998,
    "recipeId": 234,
    "ingredientName": "Cauliflower",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 1999,
    "recipeId": 234,
    "ingredientName": "Green beans",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2000,
    "recipeId": 234,
    "ingredientName": "Carrots",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2001,
    "recipeId": 235,
    "ingredientName": "Chestnuts",
    "amount": "1 1/2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2002,
    "recipeId": 235,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2003,
    "recipeId": 235,
    "ingredientName": "Olive oil",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2004,
    "recipeId": 235,
    "ingredientName": "Mushroom",
    "amount": "1 1/2",
    "measurement": "pounds (quartered)"
  },
  {
    "ingredientId": 2005,
    "recipeId": 235,
    "ingredientName": "Dry sherry",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2006,
    "recipeId": 235,
    "ingredientName": "Onion",
    "amount": "3/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2007,
    "recipeId": 235,
    "ingredientName": "Chicken broth",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2008,
    "recipeId": 235,
    "ingredientName": "Thyme",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2009,
    "recipeId": 235,
    "ingredientName": "Heavy cream",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2010,
    "recipeId": 235,
    "ingredientName": "Fresh parsley",
    "amount": "1 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2011,
    "recipeId": 236,
    "ingredientName": "Bread crumbs",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2012,
    "recipeId": 236,
    "ingredientName": "Parmesan cheese",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2013,
    "recipeId": 236,
    "ingredientName": "Garlic powder",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2014,
    "recipeId": 236,
    "ingredientName": "Paprika",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2015,
    "recipeId": 236,
    "ingredientName": "Pepper",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2016,
    "recipeId": 236,
    "ingredientName": "Zucchini",
    "amount": "2",
    "measurement": "medium"
  },
  {
    "ingredientId": 2017,
    "recipeId": 236,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2018,
    "recipeId": 237,
    "ingredientName": "Vegetable oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2019,
    "recipeId": 237,
    "ingredientName": "Red potatoes",
    "amount": "10",
    "measurement": "ounces (sliced 1/4%22 thick)"
  },
  {
    "ingredientId": 2020,
    "recipeId": 237,
    "ingredientName": "Mild salsa",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2021,
    "recipeId": 237,
    "ingredientName": "Cheddar cheese",
    "amount": "1 1/2",
    "measurement": "ounces (shredded)"
  },
  {
    "ingredientId": 2022,
    "recipeId": 237,
    "ingredientName": "Black olives",
    "amount": "6",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 2023,
    "recipeId": 238,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2024,
    "recipeId": 238,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium (chopped fine)"
  },
  {
    "ingredientId": 2025,
    "recipeId": 238,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2026,
    "recipeId": 238,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2027,
    "recipeId": 238,
    "ingredientName": "Plum tomatoes",
    "amount": "6",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2028,
    "recipeId": 238,
    "ingredientName": "Beef bouillon cube",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2029,
    "recipeId": 238,
    "ingredientName": "Black olives",
    "amount": "1/3",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2030,
    "recipeId": 238,
    "ingredientName": "Potatoes",
    "amount": "1",
    "measurement": "pound (sliced 1/8%22 thick)"
  },
  {
    "ingredientId": 2031,
    "recipeId": 238,
    "ingredientName": "Goat cheese",
    "amount": "3",
    "measurement": "ounces (crumbled)"
  },
  {
    "ingredientId": 2037,
    "recipeId": 240,
    "ingredientName": "Bacon",
    "amount": "6",
    "measurement": "sliced (crumbled)"
  },
  {
    "ingredientId": 2038,
    "recipeId": 240,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2039,
    "recipeId": 240,
    "ingredientName": "Ketchup",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2040,
    "recipeId": 240,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2041,
    "recipeId": 240,
    "ingredientName": "Apple cider vinegar",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2042,
    "recipeId": 240,
    "ingredientName": "Yellow mustard",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2043,
    "recipeId": 240,
    "ingredientName": "Cayenne pepper",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2044,
    "recipeId": 240,
    "ingredientName": "Baked beans",
    "amount": "28",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2045,
    "recipeId": 240,
    "ingredientName": "Lima beans",
    "amount": "15",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2046,
    "recipeId": 240,
    "ingredientName": "Black beans",
    "amount": "16",
    "measurement": "ounces (rinsed)"
  },
  {
    "ingredientId": 2047,
    "recipeId": 240,
    "ingredientName": "Chick peas",
    "amount": "15",
    "measurement": "ounces (rinsed)"
  },
  {
    "ingredientId": 2048,
    "recipeId": 241,
    "ingredientName": "Raisins",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2049,
    "recipeId": 241,
    "ingredientName": "Olive oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2050,
    "recipeId": 241,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2051,
    "recipeId": 241,
    "ingredientName": "Pine nuts",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2052,
    "recipeId": 241,
    "ingredientName": "Spinach",
    "amount": "2",
    "measurement": "10 oz bags"
  },
  {
    "ingredientId": 2053,
    "recipeId": 241,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2054,
    "recipeId": 242,
    "ingredientName": "Olive oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2055,
    "recipeId": 242,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 2056,
    "recipeId": 242,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (chopped)"
  },
  {
    "ingredientId": 2057,
    "recipeId": 242,
    "ingredientName": "Plum tomatoes",
    "amount": "2",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 2058,
    "recipeId": 242,
    "ingredientName": "Spinach",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2059,
    "recipeId": 242,
    "ingredientName": "Provolone cheese",
    "amount": "1",
    "measurement": "cup (1/4%22 pieces)"
  },
  {
    "ingredientId": 2060,
    "recipeId": 243,
    "ingredientName": "Rice",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2061,
    "recipeId": 243,
    "ingredientName": "Water",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2062,
    "recipeId": 243,
    "ingredientName": "Frozen chopped spinach",
    "amount": "2",
    "measurement": "packages"
  },
  {
    "ingredientId": 2063,
    "recipeId": 243,
    "ingredientName": "Eggs",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 2064,
    "recipeId": 243,
    "ingredientName": "Milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2065,
    "recipeId": 243,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2066,
    "recipeId": 243,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 2067,
    "recipeId": 243,
    "ingredientName": "Sharp cheddar cheese",
    "amount": "1",
    "measurement": "pound (grated)"
  },
  {
    "ingredientId": 2076,
    "recipeId": 245,
    "ingredientName": "Potatoes",
    "amount": "2 1/2",
    "measurement": "pounds (thinly sliced)"
  },
  {
    "ingredientId": 2077,
    "recipeId": 245,
    "ingredientName": "Stilton cheese",
    "amount": "8",
    "measurement": "ounces (crumbled)"
  },
  {
    "ingredientId": 2078,
    "recipeId": 245,
    "ingredientName": "Chicken broth",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2079,
    "recipeId": 245,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons (cut up)"
  },
  {
    "ingredientId": 2080,
    "recipeId": 246,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2081,
    "recipeId": 246,
    "ingredientName": "Sweet potatoes",
    "amount": "6",
    "measurement": "cups (boiled and mashed)"
  },
  {
    "ingredientId": 2082,
    "recipeId": 246,
    "ingredientName": "Sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2083,
    "recipeId": 246,
    "ingredientName": "Butter",
    "amount": "2/3",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 2084,
    "recipeId": 246,
    "ingredientName": "Heavy cream",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2085,
    "recipeId": 246,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2086,
    "recipeId": 246,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2087,
    "recipeId": 246,
    "ingredientName": "Allspice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2088,
    "recipeId": 246,
    "ingredientName": "TOPPING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2089,
    "recipeId": 246,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2090,
    "recipeId": 246,
    "ingredientName": "Flour",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2091,
    "recipeId": 246,
    "ingredientName": "Pecans",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2092,
    "recipeId": 246,
    "ingredientName": "Butter",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2093,
    "recipeId": 247,
    "ingredientName": "Sweet potato",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2094,
    "recipeId": 247,
    "ingredientName": "Orange juice",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2095,
    "recipeId": 247,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 2096,
    "recipeId": 247,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2097,
    "recipeId": 248,
    "ingredientName": "Sweet potatoes",
    "amount": "2",
    "measurement": "(cooked and peeled)"
  },
  {
    "ingredientId": 2098,
    "recipeId": 248,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2099,
    "recipeId": 248,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2100,
    "recipeId": 248,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2101,
    "recipeId": 248,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2102,
    "recipeId": 248,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2103,
    "recipeId": 248,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2104,
    "recipeId": 248,
    "ingredientName": "CRUNCHY PRALINE TOPPING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2105,
    "recipeId": 248,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 2106,
    "recipeId": 248,
    "ingredientName": "Corn flakes",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2107,
    "recipeId": 248,
    "ingredientName": "Walnuts",
    "amount": "1/2",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2108,
    "recipeId": 248,
    "ingredientName": "Brown sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2109,
    "recipeId": 249,
    "ingredientName": "Egg substitute, liquid",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2110,
    "recipeId": 249,
    "ingredientName": "Scallion",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2111,
    "recipeId": 249,
    "ingredientName": "Green pepper",
    "amount": "1/4",
    "measurement": "cup (diced)"
  },
  {
    "ingredientId": 2112,
    "recipeId": 249,
    "ingredientName": "Mushroom",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2113,
    "recipeId": 249,
    "ingredientName": "Tomato",
    "amount": "1/2",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2114,
    "recipeId": 249,
    "ingredientName": "English muffin",
    "amount": "1",
    "measurement": "(toasted)"
  },
  {
    "ingredientId": 2115,
    "recipeId": 250,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2116,
    "recipeId": 250,
    "ingredientName": "Green pepper",
    "amount": "1 1/2",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 2117,
    "recipeId": 250,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2118,
    "recipeId": 250,
    "ingredientName": "Garlic",
    "amount": "3",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2119,
    "recipeId": 250,
    "ingredientName": "Tomatoes",
    "amount": "2",
    "measurement": "28 oz cans (cut up)"
  },
  {
    "ingredientId": 2120,
    "recipeId": 250,
    "ingredientName": "Black beans",
    "amount": "1",
    "measurement": "15 oz can (drained)"
  },
  {
    "ingredientId": 2121,
    "recipeId": 250,
    "ingredientName": "Kidney beans",
    "amount": "1",
    "measurement": "15 oz can (drained)"
  },
  {
    "ingredientId": 2122,
    "recipeId": 250,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2123,
    "recipeId": 250,
    "ingredientName": "Red wine vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2124,
    "recipeId": 250,
    "ingredientName": "Chili powder",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2125,
    "recipeId": 250,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2126,
    "recipeId": 250,
    "ingredientName": "Dried basil",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2127,
    "recipeId": 250,
    "ingredientName": "Dried oregano",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2128,
    "recipeId": 250,
    "ingredientName": "Allspice",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2129,
    "recipeId": 250,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2130,
    "recipeId": 250,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2131,
    "recipeId": 250,
    "ingredientName": "Beer",
    "amount": "1",
    "measurement": "12 oz can"
  },
  {
    "ingredientId": 2132,
    "recipeId": 250,
    "ingredientName": "Cashew nuts",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2133,
    "recipeId": 250,
    "ingredientName": "Cheese",
    "amount": "1",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 2134,
    "recipeId": 251,
    "ingredientName": "Butternut squash",
    "amount": "3",
    "measurement": "pounds (cut in 1%22 cubes)"
  },
  {
    "ingredientId": 2135,
    "recipeId": 251,
    "ingredientName": "Apples",
    "amount": "3",
    "measurement": "medium (peeled, cut in cubes)"
  },
  {
    "ingredientId": 2136,
    "recipeId": 251,
    "ingredientName": "Onions",
    "amount": "2",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 2137,
    "recipeId": 251,
    "ingredientName": "DRESSING",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2138,
    "recipeId": 251,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2139,
    "recipeId": 251,
    "ingredientName": "Wine vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2140,
    "recipeId": 251,
    "ingredientName": "Soy sauce",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2141,
    "recipeId": 251,
    "ingredientName": "Butter",
    "amount": "1 1/2",
    "measurement": "sticks"
  },
  {
    "ingredientId": 2142,
    "recipeId": 252,
    "ingredientName": "Apples",
    "amount": "2",
    "measurement": "(cored and chopped)"
  },
  {
    "ingredientId": 2143,
    "recipeId": 252,
    "ingredientName": "Broccoli cole slaw",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2144,
    "recipeId": 252,
    "ingredientName": "Raisins or craisins",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2145,
    "recipeId": 252,
    "ingredientName": "Vanilla yogurt",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2146,
    "recipeId": 252,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2147,
    "recipeId": 252,
    "ingredientName": "Orange juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2148,
    "recipeId": 253,
    "ingredientName": "Skim milk",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2149,
    "recipeId": 253,
    "ingredientName": "Pudding mix powder",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2150,
    "recipeId": 253,
    "ingredientName": "Cool whip lite",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2151,
    "recipeId": 253,
    "ingredientName": "Vanilla",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2152,
    "recipeId": 253,
    "ingredientName": "Ice cubes",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 2153,
    "recipeId": 254,
    "ingredientName": "Water",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2154,
    "recipeId": 254,
    "ingredientName": "Fat-free milk",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2155,
    "recipeId": 254,
    "ingredientName": "Uncooked couscous",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2156,
    "recipeId": 254,
    "ingredientName": "Dried cranberries",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2157,
    "recipeId": 254,
    "ingredientName": "Raisins",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2158,
    "recipeId": 254,
    "ingredientName": "Brown sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2159,
    "recipeId": 254,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2160,
    "recipeId": 254,
    "ingredientName": "Salt",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2161,
    "recipeId": 255,
    "ingredientName": "Milk",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2162,
    "recipeId": 255,
    "ingredientName": "Unsweetened cocoa powder",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2163,
    "recipeId": 255,
    "ingredientName": "Sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2164,
    "recipeId": 255,
    "ingredientName": "Cornstarch",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2165,
    "recipeId": 255,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2166,
    "recipeId": 255,
    "ingredientName": "Egg yolk",
    "amount": "1",
    "measurement": "large"
  },
  {
    "ingredientId": 2167,
    "recipeId": 255,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2168,
    "recipeId": 256,
    "ingredientName": "Cream cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2169,
    "recipeId": 256,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2170,
    "recipeId": 256,
    "ingredientName": "Honey",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2171,
    "recipeId": 256,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2172,
    "recipeId": 257,
    "ingredientName": "Sugar free jello",
    "amount": "1",
    "measurement": "4 serving box"
  },
  {
    "ingredientId": 2173,
    "recipeId": 257,
    "ingredientName": "Cool whip lite",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2174,
    "recipeId": 257,
    "ingredientName": "Boiling water",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2175,
    "recipeId": 257,
    "ingredientName": "Ice cubes",
    "amount": "12",
    "measurement": ""
  },
  {
    "ingredientId": 2176,
    "recipeId": 258,
    "ingredientName": "Strawberries",
    "amount": "3",
    "measurement": "cups (sliced)"
  },
  {
    "ingredientId": 2177,
    "recipeId": 258,
    "ingredientName": "Splenda",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2178,
    "recipeId": 258,
    "ingredientName": "Cream cheese",
    "amount": "16",
    "measurement": "ounces (softened)"
  },
  {
    "ingredientId": 2179,
    "recipeId": 258,
    "ingredientName": "Milk",
    "amount": "1 1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2180,
    "recipeId": 258,
    "ingredientName": "Vanilla pudding",
    "amount": "1",
    "measurement": "package (3/4 ounce)"
  },
  {
    "ingredientId": 2181,
    "recipeId": 258,
    "ingredientName": "Cool whip",
    "amount": "2",
    "measurement": "cups (thawed)"
  },
  {
    "ingredientId": 2182,
    "recipeId": 258,
    "ingredientName": "Pound cake or angel food cake",
    "amount": "2",
    "measurement": "cups (1%22 cubes)"
  },
  {
    "ingredientId": 2183,
    "recipeId": 258,
    "ingredientName": "Semisweet chocolate",
    "amount": "1",
    "measurement": "ounce"
  },
  {
    "ingredientId": 2184,
    "recipeId": 259,
    "ingredientName": "Unsweetened apple juice",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2185,
    "recipeId": 259,
    "ingredientName": "Vanilla pudding",
    "amount": "1",
    "measurement": "package"
  },
  {
    "ingredientId": 2186,
    "recipeId": 259,
    "ingredientName": "Pumpkin",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2187,
    "recipeId": 259,
    "ingredientName": "Pumpkin pie spice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2188,
    "recipeId": 260,
    "ingredientName": "Eggplant",
    "amount": "1",
    "measurement": "large (peeled)"
  },
  {
    "ingredientId": 2189,
    "recipeId": 260,
    "ingredientName": "Olive oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2190,
    "recipeId": 260,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (halved)"
  },
  {
    "ingredientId": 2191,
    "recipeId": 260,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2192,
    "recipeId": 260,
    "ingredientName": "Green pepper",
    "amount": "1",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 2193,
    "recipeId": 260,
    "ingredientName": "Red pepper",
    "amount": "1",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 2194,
    "recipeId": 260,
    "ingredientName": "Yellow pepper",
    "amount": "1",
    "measurement": "large (sliced)"
  },
  {
    "ingredientId": 2195,
    "recipeId": 260,
    "ingredientName": "Dry white wine",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2196,
    "recipeId": 260,
    "ingredientName": "Diced tomatoes",
    "amount": "14",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 2197,
    "recipeId": 261,
    "ingredientName": "Sugar free jello",
    "amount": "1",
    "measurement": "4 serving box"
  },
  {
    "ingredientId": 2198,
    "recipeId": 261,
    "ingredientName": "Fat free yogurt",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2199,
    "recipeId": 261,
    "ingredientName": "Boiling water",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2200,
    "recipeId": 261,
    "ingredientName": "Ice cubes",
    "amount": "12",
    "measurement": ""
  },
  {
    "ingredientId": 2201,
    "recipeId": 262,
    "ingredientName": "Apples",
    "amount": "3",
    "measurement": "large (unpeeled)"
  },
  {
    "ingredientId": 2202,
    "recipeId": 262,
    "ingredientName": "Lemon juice",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2203,
    "recipeId": 262,
    "ingredientName": "Ham",
    "amount": "5",
    "measurement": "ounces (thinly sliced)"
  },
  {
    "ingredientId": 2204,
    "recipeId": 262,
    "ingredientName": "Chives",
    "amount": "2",
    "measurement": "bunches"
  },
  {
    "ingredientId": 2205,
    "recipeId": 262,
    "ingredientName": "Honey mustard mayonnaise",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2206,
    "recipeId": 262,
    "ingredientName": "Mayonnaise",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2207,
    "recipeId": 262,
    "ingredientName": "Honey mustard",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2208,
    "recipeId": 262,
    "ingredientName": "Scallions",
    "amount": "4",
    "measurement": "teaspoons (minced)"
  },
  {
    "ingredientId": 2209,
    "recipeId": 263,
    "ingredientName": "Avocados",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2210,
    "recipeId": 263,
    "ingredientName": "Goat cheese",
    "amount": "1/2",
    "measurement": "cup (crumbled)"
  },
  {
    "ingredientId": 2211,
    "recipeId": 263,
    "ingredientName": "Cilantro",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2212,
    "recipeId": 263,
    "ingredientName": "Pistachio nuts",
    "amount": "2",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 2213,
    "recipeId": 263,
    "ingredientName": "Red pepper flakes",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2214,
    "recipeId": 263,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (chopped)"
  },
  {
    "ingredientId": 2215,
    "recipeId": 264,
    "ingredientName": "Crescent rolls",
    "amount": "2",
    "measurement": "packages"
  },
  {
    "ingredientId": 2216,
    "recipeId": 264,
    "ingredientName": "Salami",
    "amount": "1/2",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 2217,
    "recipeId": 264,
    "ingredientName": "Ham",
    "amount": "1/2",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 2218,
    "recipeId": 264,
    "ingredientName": "Provolone cheese",
    "amount": "1/2",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 2219,
    "recipeId": 264,
    "ingredientName": "Eggs",
    "amount": "7",
    "measurement": ""
  },
  {
    "ingredientId": 2220,
    "recipeId": 264,
    "ingredientName": "Parmesan cheese",
    "amount": "1",
    "measurement": "cup (grated)"
  },
  {
    "ingredientId": 2221,
    "recipeId": 264,
    "ingredientName": "Roasted red peppers",
    "amount": "6",
    "measurement": "ounces (drained)"
  },
  {
    "ingredientId": 2222,
    "recipeId": 131,
    "ingredientName": "Pure grain alcohol",
    "amount": "1",
    "measurement": "liter"
  },
  {
    "ingredientId": 2223,
    "recipeId": 131,
    "ingredientName": "Lemon",
    "amount": "7",
    "measurement": "(washed and dried)"
  },
  {
    "ingredientId": 2224,
    "recipeId": 131,
    "ingredientName": "Sugar",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2225,
    "recipeId": 131,
    "ingredientName": "Half and half",
    "amount": "1",
    "measurement": "quart"
  },
  {
    "ingredientId": 2226,
    "recipeId": 131,
    "ingredientName": "Half and half",
    "amount": "20",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2227,
    "recipeId": 17,
    "ingredientName": "Crescent rolls",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 2228,
    "recipeId": 17,
    "ingredientName": "Ham",
    "amount": "4",
    "measurement": "slices"
  },
  {
    "ingredientId": 2229,
    "recipeId": 17,
    "ingredientName": "Mustard",
    "amount": "4",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2230,
    "recipeId": 17,
    "ingredientName": "Swiss cheese",
    "amount": "1",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 2231,
    "recipeId": 17,
    "ingredientName": "Sesame seeds",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2232,
    "recipeId": 18,
    "ingredientName": "Crescent rolls",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 2233,
    "recipeId": 18,
    "ingredientName": "Rondele garlci and herb cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2234,
    "recipeId": 265,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "stick (softened)"
  },
  {
    "ingredientId": 2235,
    "recipeId": 265,
    "ingredientName": "Crunchy peanut butter",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2236,
    "recipeId": 265,
    "ingredientName": "Nilla wafers",
    "amount": "3/4",
    "measurement": "cup (crushed)"
  },
  {
    "ingredientId": 2237,
    "recipeId": 265,
    "ingredientName": "Powdered sugar",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2238,
    "recipeId": 265,
    "ingredientName": "Cool whip (do not thaw)",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2239,
    "recipeId": 265,
    "ingredientName": "Semisweet chocolate",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2250,
    "recipeId": 267,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2251,
    "recipeId": 267,
    "ingredientName": "Green pepper",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2252,
    "recipeId": 267,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2253,
    "recipeId": 267,
    "ingredientName": "Ketchup",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2254,
    "recipeId": 267,
    "ingredientName": "Stewed tomatoes",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 2255,
    "recipeId": 267,
    "ingredientName": "Apple cider vinegar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2256,
    "recipeId": 267,
    "ingredientName": "Brown sugar",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2257,
    "recipeId": 267,
    "ingredientName": "Chili powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2258,
    "recipeId": 267,
    "ingredientName": "Basil",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2259,
    "recipeId": 267,
    "ingredientName": "Oregano",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2260,
    "recipeId": 267,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2261,
    "recipeId": 267,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2262,
    "recipeId": 267,
    "ingredientName": "Sirloin roast",
    "amount": "3",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2263,
    "recipeId": 268,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2264,
    "recipeId": 268,
    "ingredientName": "Mushrooms",
    "amount": "",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2265,
    "recipeId": 268,
    "ingredientName": "Butter",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2266,
    "recipeId": 268,
    "ingredientName": "Sausage",
    "amount": "2",
    "measurement": "tubes"
  },
  {
    "ingredientId": 2267,
    "recipeId": 268,
    "ingredientName": "Stove top stuffing",
    "amount": "4",
    "measurement": "boxes"
  },
  {
    "ingredientId": 2268,
    "recipeId": 269,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2269,
    "recipeId": 269,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2270,
    "recipeId": 269,
    "ingredientName": "Cinnamon",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2271,
    "recipeId": 269,
    "ingredientName": "Egg white",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2272,
    "recipeId": 269,
    "ingredientName": "Pecans",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2273,
    "recipeId": 269,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 2293,
    "recipeId": 272,
    "ingredientName": "Bacon",
    "amount": "4",
    "measurement": "slices"
  },
  {
    "ingredientId": 2294,
    "recipeId": 272,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2295,
    "recipeId": 272,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "(chopped)"
  },
  {
    "ingredientId": 2296,
    "recipeId": 272,
    "ingredientName": "Dry white wine",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2297,
    "recipeId": 272,
    "ingredientName": "Light cream",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2298,
    "recipeId": 272,
    "ingredientName": "Shrimp",
    "amount": "1 1/4",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2299,
    "recipeId": 272,
    "ingredientName": "Corn",
    "amount": "10",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2300,
    "recipeId": 272,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2301,
    "recipeId": 8,
    "ingredientName": "Wheel of brie",
    "amount": "2 1/4",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2302,
    "recipeId": 8,
    "ingredientName": "Parsley",
    "amount": "1/3",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2303,
    "recipeId": 8,
    "ingredientName": "Sundried tomatoes, oil packed",
    "amount": "1/3",
    "measurement": "cup (drained)"
  },
  {
    "ingredientId": 2304,
    "recipeId": 8,
    "ingredientName": "Phyllo dough",
    "amount": "8",
    "measurement": "sheets"
  },
  {
    "ingredientId": 2305,
    "recipeId": 8,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "tablespoons (melted)"
  },
  {
    "ingredientId": 2306,
    "recipeId": 8,
    "ingredientName": "Crackers",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2307,
    "recipeId": 8,
    "ingredientName": "Fruit - grapes, strawberries",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2308,
    "recipeId": 11,
    "ingredientName": "Olives",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2309,
    "recipeId": 11,
    "ingredientName": "Balsamic or red wine vinegar",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2310,
    "recipeId": 11,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2311,
    "recipeId": 11,
    "ingredientName": "Capers",
    "amount": "1",
    "measurement": "teaspoon (drained)"
  },
  {
    "ingredientId": 2312,
    "recipeId": 11,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2313,
    "recipeId": 11,
    "ingredientName": "Red and/or yellow tomatoes",
    "amount": "2",
    "measurement": "medium (chopped)"
  },
  {
    "ingredientId": 2314,
    "recipeId": 11,
    "ingredientName": "Green onion",
    "amount": "1/3",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2315,
    "recipeId": 11,
    "ingredientName": "Fresh basil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2316,
    "recipeId": 11,
    "ingredientName": "Pepper",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2317,
    "recipeId": 11,
    "ingredientName": "French Bread",
    "amount": "8",
    "measurement": "ounces (loaf)"
  },
  {
    "ingredientId": 2318,
    "recipeId": 11,
    "ingredientName": "Parmesan cheese",
    "amount": "1/2",
    "measurement": "cup (grated)"
  },
  {
    "ingredientId": 2319,
    "recipeId": 22,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2320,
    "recipeId": 22,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2321,
    "recipeId": 22,
    "ingredientName": "Pepper",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2322,
    "recipeId": 22,
    "ingredientName": "Oregano",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2323,
    "recipeId": 22,
    "ingredientName": "Basil",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2324,
    "recipeId": 22,
    "ingredientName": "Crushed red pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2325,
    "recipeId": 22,
    "ingredientName": "Fresh mozzarella",
    "amount": "18",
    "measurement": "ounces (cut in 1%22 cubes)"
  },
  {
    "ingredientId": 2326,
    "recipeId": 22,
    "ingredientName": "Roasted red peppers",
    "amount": "7",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2327,
    "recipeId": 22,
    "ingredientName": "Prosciutto",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2328,
    "recipeId": 104,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2329,
    "recipeId": 104,
    "ingredientName": "Powdered sugar",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2330,
    "recipeId": 104,
    "ingredientName": "Vanilla",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2331,
    "recipeId": 104,
    "ingredientName": "Unsweetened cocoa powder",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2332,
    "recipeId": 104,
    "ingredientName": "Flour",
    "amount": "1 3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2333,
    "recipeId": 104,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2334,
    "recipeId": 104,
    "ingredientName": "Chocolate glaze",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2335,
    "recipeId": 115,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup (softened)"
  },
  {
    "ingredientId": 2336,
    "recipeId": 115,
    "ingredientName": "Powdered sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2337,
    "recipeId": 115,
    "ingredientName": "Egg yolk",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2338,
    "recipeId": 115,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2339,
    "recipeId": 115,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2340,
    "recipeId": 115,
    "ingredientName": "Crushed fresh potato chips",
    "amount": "3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2341,
    "recipeId": 115,
    "ingredientName": "Pecans",
    "amount": "1/2",
    "measurement": "cup (finely chopped)"
  },
  {
    "ingredientId": 2342,
    "recipeId": 115,
    "ingredientName": "Powdered sugar",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2343,
    "recipeId": 138,
    "ingredientName": "Cooked chicken or turkey",
    "amount": "2",
    "measurement": "cups (cubed)"
  },
  {
    "ingredientId": 2344,
    "recipeId": 138,
    "ingredientName": "Grapes",
    "amount": "1",
    "measurement": "cup (halved)"
  },
  {
    "ingredientId": 2345,
    "recipeId": 138,
    "ingredientName": "Cantaloupe",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2346,
    "recipeId": 138,
    "ingredientName": "Water chestnuts",
    "amount": "8",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 2347,
    "recipeId": 138,
    "ingredientName": "Shrimp",
    "amount": "4 1/2",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 2348,
    "recipeId": 138,
    "ingredientName": "Banan",
    "amount": "1",
    "measurement": "small"
  },
  {
    "ingredientId": 2349,
    "recipeId": 138,
    "ingredientName": "Mayonnaise",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2350,
    "recipeId": 138,
    "ingredientName": "Lemon juice",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2351,
    "recipeId": 150,
    "ingredientName": "Pasta",
    "amount": "2",
    "measurement": "ounces (1 1/2 cups)"
  },
  {
    "ingredientId": 2352,
    "recipeId": 150,
    "ingredientName": "Zucchini",
    "amount": "1",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2353,
    "recipeId": 150,
    "ingredientName": "Scallion",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2354,
    "recipeId": 150,
    "ingredientName": "Cornstarch",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2355,
    "recipeId": 150,
    "ingredientName": "Dried marjoram",
    "amount": "1",
    "measurement": "dash"
  },
  {
    "ingredientId": 2356,
    "recipeId": 150,
    "ingredientName": "Dried basil",
    "amount": "1",
    "measurement": "dash"
  },
  {
    "ingredientId": 2357,
    "recipeId": 150,
    "ingredientName": "Evaporated skim milk (13 oz can)",
    "amount": "7/8",
    "measurement": "cup"
  },
  {
    "ingredientId": 2358,
    "recipeId": 150,
    "ingredientName": "Cooked ham",
    "amount": "2 1/2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2359,
    "recipeId": 152,
    "ingredientName": "Italian salad dressing",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2360,
    "recipeId": 152,
    "ingredientName": "Dry mustard",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2361,
    "recipeId": 152,
    "ingredientName": "Bacon",
    "amount": "6",
    "measurement": "slices"
  },
  {
    "ingredientId": 2362,
    "recipeId": 152,
    "ingredientName": "Oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2363,
    "recipeId": 152,
    "ingredientName": "Mushroom",
    "amount": "1",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2364,
    "recipeId": 152,
    "ingredientName": "Green onion",
    "amount": "1",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 2365,
    "recipeId": 152,
    "ingredientName": "Boneless chicken",
    "amount": "3/4",
    "measurement": "pound (bite size pieces)"
  },
  {
    "ingredientId": 2366,
    "recipeId": 152,
    "ingredientName": "Romaine lettuce",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2367,
    "recipeId": 152,
    "ingredientName": "Leaf lettuce",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2368,
    "recipeId": 152,
    "ingredientName": "Hard-boiled eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2369,
    "recipeId": 156,
    "ingredientName": "Beef",
    "amount": "1/2",
    "measurement": "pound"
  },
  {
    "ingredientId": 2370,
    "recipeId": 156,
    "ingredientName": "Onion",
    "amount": "1/2",
    "measurement": "small"
  },
  {
    "ingredientId": 2371,
    "recipeId": 156,
    "ingredientName": "Soy sauce",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2372,
    "recipeId": 156,
    "ingredientName": "Lime juice",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2373,
    "recipeId": 156,
    "ingredientName": "Sugar",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2374,
    "recipeId": 156,
    "ingredientName": "Ground cumin",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2375,
    "recipeId": 156,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2376,
    "recipeId": 156,
    "ingredientName": "Chicken broth",
    "amount": "2 2/3",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2377,
    "recipeId": 156,
    "ingredientName": "Peanut butter",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2378,
    "recipeId": 156,
    "ingredientName": "Molasses",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2379,
    "recipeId": 156,
    "ingredientName": "Soy sauce",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2380,
    "recipeId": 156,
    "ingredientName": "Crushed red pepper",
    "amount": "1",
    "measurement": "dash"
  },
  {
    "ingredientId": 2381,
    "recipeId": 156,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2382,
    "recipeId": 157,
    "ingredientName": "Boneless pork top loin",
    "amount": "1",
    "measurement": "pound (bite size pieces)"
  },
  {
    "ingredientId": 2383,
    "recipeId": 157,
    "ingredientName": "Apple juice or cider",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2384,
    "recipeId": 157,
    "ingredientName": "Cornstarch",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2385,
    "recipeId": 157,
    "ingredientName": "Instant beef bouillon",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2386,
    "recipeId": 157,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2387,
    "recipeId": 157,
    "ingredientName": "Oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2388,
    "recipeId": 157,
    "ingredientName": "Apples",
    "amount": "2",
    "measurement": "(thin wedges)"
  },
  {
    "ingredientId": 2389,
    "recipeId": 157,
    "ingredientName": "Green onion",
    "amount": "6",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 2390,
    "recipeId": 157,
    "ingredientName": "Raisins",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2391,
    "recipeId": 157,
    "ingredientName": "Rice",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2392,
    "recipeId": 172,
    "ingredientName": "Scallops",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 2393,
    "recipeId": 172,
    "ingredientName": "Linguine",
    "amount": "12",
    "measurement": "ounces (cooked)"
  },
  {
    "ingredientId": 2394,
    "recipeId": 172,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2395,
    "recipeId": 172,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2396,
    "recipeId": 172,
    "ingredientName": "Chicken broth",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2397,
    "recipeId": 172,
    "ingredientName": "Vermouth or dry white wine",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2398,
    "recipeId": 172,
    "ingredientName": "Lemon juice",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2399,
    "recipeId": 172,
    "ingredientName": "Green onions",
    "amount": "3/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2400,
    "recipeId": 172,
    "ingredientName": "Fresh parsley",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2401,
    "recipeId": 172,
    "ingredientName": "Dried dill weed",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2402,
    "recipeId": 172,
    "ingredientName": "Pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2403,
    "recipeId": 179,
    "ingredientName": "Plain yogurt",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2404,
    "recipeId": 179,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2405,
    "recipeId": 179,
    "ingredientName": "Carrot",
    "amount": "1/2",
    "measurement": "medium (cut in thin strips)"
  },
  {
    "ingredientId": 2406,
    "recipeId": 179,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2407,
    "recipeId": 179,
    "ingredientName": "Zucchini",
    "amount": "1",
    "measurement": "medium (cut in thin strips)"
  },
  {
    "ingredientId": 2408,
    "recipeId": 179,
    "ingredientName": "Oil",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2409,
    "recipeId": 179,
    "ingredientName": "Chicken",
    "amount": "6",
    "measurement": "ounces (in bite size pieces)"
  },
  {
    "ingredientId": 2410,
    "recipeId": 179,
    "ingredientName": "Noodles",
    "amount": "1",
    "measurement": "cup (cooked)"
  },
  {
    "ingredientId": 2411,
    "recipeId": 202,
    "ingredientName": "Fresh spinach",
    "amount": "6",
    "measurement": "cups"
  },
  {
    "ingredientId": 2412,
    "recipeId": 202,
    "ingredientName": "Oranges",
    "amount": "2",
    "measurement": "medium (sectioned)"
  },
  {
    "ingredientId": 2413,
    "recipeId": 202,
    "ingredientName": "Red onion",
    "amount": "1",
    "measurement": "small (sliced)"
  },
  {
    "ingredientId": 2414,
    "recipeId": 202,
    "ingredientName": "Water chestnuts",
    "amount": "4",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 2415,
    "recipeId": 202,
    "ingredientName": "Orange juice",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2416,
    "recipeId": 202,
    "ingredientName": "Olive oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2417,
    "recipeId": 202,
    "ingredientName": "Honey",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2418,
    "recipeId": 202,
    "ingredientName": "Sesame seeds",
    "amount": "1",
    "measurement": "teaspoon (toasted)"
  },
  {
    "ingredientId": 2419,
    "recipeId": 202,
    "ingredientName": "Mustard",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2420,
    "recipeId": 209,
    "ingredientName": "Broccoli",
    "amount": "5",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2421,
    "recipeId": 209,
    "ingredientName": "Crab",
    "amount": "3",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 2422,
    "recipeId": 209,
    "ingredientName": "Mushrooms",
    "amount": "1",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2423,
    "recipeId": 209,
    "ingredientName": "Garlic",
    "amount": "1/2",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2424,
    "recipeId": 209,
    "ingredientName": "Butter",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2425,
    "recipeId": 209,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2426,
    "recipeId": 209,
    "ingredientName": "Milk",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2427,
    "recipeId": 209,
    "ingredientName": "Cheddar cheese",
    "amount": "2",
    "measurement": "tablespoons (shredded)"
  },
  {
    "ingredientId": 2428,
    "recipeId": 209,
    "ingredientName": "Parmesan cheese",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2429,
    "recipeId": 212,
    "ingredientName": "Shrimp or crabmeat",
    "amount": "4 1/2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2430,
    "recipeId": 212,
    "ingredientName": "Tomato",
    "amount": "1",
    "measurement": "small (chopped)"
  },
  {
    "ingredientId": 2431,
    "recipeId": 212,
    "ingredientName": "Cheddar cheese",
    "amount": "1/2",
    "measurement": "cup (shredded)"
  },
  {
    "ingredientId": 2432,
    "recipeId": 212,
    "ingredientName": "Celery",
    "amount": "1/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2433,
    "recipeId": 212,
    "ingredientName": "Almonds",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2434,
    "recipeId": 212,
    "ingredientName": "Green onions",
    "amount": "1",
    "measurement": "tablespoon (sliced)"
  },
  {
    "ingredientId": 2435,
    "recipeId": 212,
    "ingredientName": "Sour cream",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2436,
    "recipeId": 212,
    "ingredientName": "Croissants",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 2437,
    "recipeId": 217,
    "ingredientName": "Shrimp",
    "amount": "1/2",
    "measurement": "pound"
  },
  {
    "ingredientId": 2438,
    "recipeId": 217,
    "ingredientName": "Water",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2439,
    "recipeId": 217,
    "ingredientName": "Ketchup",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2440,
    "recipeId": 217,
    "ingredientName": "Soy sauce",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2441,
    "recipeId": 217,
    "ingredientName": "Dry sherry",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2442,
    "recipeId": 217,
    "ingredientName": "Cornstarch",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2443,
    "recipeId": 217,
    "ingredientName": "Honey",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2444,
    "recipeId": 217,
    "ingredientName": "Crushed red pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2445,
    "recipeId": 217,
    "ingredientName": "Ground ginger",
    "amount": "",
    "measurement": "dash"
  },
  {
    "ingredientId": 2446,
    "recipeId": 217,
    "ingredientName": "Green onion",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2447,
    "recipeId": 217,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2448,
    "recipeId": 217,
    "ingredientName": "Peanut oil",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2449,
    "recipeId": 217,
    "ingredientName": "Hot cooked rice",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2450,
    "recipeId": 9,
    "ingredientName": "Goat cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2451,
    "recipeId": 9,
    "ingredientName": "Cream cheese",
    "amount": "4",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2452,
    "recipeId": 9,
    "ingredientName": "Salsa, mild",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2453,
    "recipeId": 23,
    "ingredientName": "Sauce",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2454,
    "recipeId": 23,
    "ingredientName": "Honey",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2455,
    "recipeId": 23,
    "ingredientName": "Lime juice",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2456,
    "recipeId": 23,
    "ingredientName": "Quesadillas",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2457,
    "recipeId": 23,
    "ingredientName": "Peaches",
    "amount": "1",
    "measurement": "cup (peeled and sliced)"
  },
  {
    "ingredientId": 2458,
    "recipeId": 23,
    "ingredientName": "Chives",
    "amount": "1",
    "measurement": "tablespoon (chopped)"
  },
  {
    "ingredientId": 2459,
    "recipeId": 23,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2460,
    "recipeId": 23,
    "ingredientName": "Brie",
    "amount": "4",
    "measurement": "ounces (sliced)"
  },
  {
    "ingredientId": 2461,
    "recipeId": 23,
    "ingredientName": "Flour tortilla",
    "amount": "4",
    "measurement": "8 inch"
  },
  {
    "ingredientId": 2462,
    "recipeId": 31,
    "ingredientName": "Mushrooms",
    "amount": "1",
    "measurement": "lb"
  },
  {
    "ingredientId": 2463,
    "recipeId": 31,
    "ingredientName": "nion",
    "amount": "2",
    "measurement": "tablespoons (chopped)"
  },
  {
    "ingredientId": 2464,
    "recipeId": 31,
    "ingredientName": "Butter",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2465,
    "recipeId": 31,
    "ingredientName": "Bread crumbs",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2466,
    "recipeId": 31,
    "ingredientName": "Lemon juice",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2467,
    "recipeId": 31,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2468,
    "recipeId": 31,
    "ingredientName": "Worcestershire sauce",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2469,
    "recipeId": 31,
    "ingredientName": "Cheddar cheese",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2482,
    "recipeId": 59,
    "ingredientName": "Red delicious apples",
    "amount": "2",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 2483,
    "recipeId": 59,
    "ingredientName": "Winesap apples",
    "amount": "2",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 2484,
    "recipeId": 59,
    "ingredientName": "Maraschino cherries",
    "amount": "1",
    "measurement": "small jar (reserve juice)"
  },
  {
    "ingredientId": 2485,
    "recipeId": 59,
    "ingredientName": "Heavy cream",
    "amount": "1",
    "measurement": "pint"
  },
  {
    "ingredientId": 2486,
    "recipeId": 59,
    "ingredientName": "Sugar",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2487,
    "recipeId": 59,
    "ingredientName": "Walnuts",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2488,
    "recipeId": 59,
    "ingredientName": "Dates or raisins",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2489,
    "recipeId": 59,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2490,
    "recipeId": 72,
    "ingredientName": "Sweet potatoes",
    "amount": "3",
    "measurement": "large"
  },
  {
    "ingredientId": 2491,
    "recipeId": 72,
    "ingredientName": "Pineapple chunks in juice",
    "amount": "20",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2492,
    "recipeId": 72,
    "ingredientName": "Orange",
    "amount": "1",
    "measurement": "small (sliced)"
  },
  {
    "ingredientId": 2493,
    "recipeId": 72,
    "ingredientName": "Lemon",
    "amount": "1/2",
    "measurement": "medium (sliced)"
  },
  {
    "ingredientId": 2494,
    "recipeId": 72,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2495,
    "recipeId": 72,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2496,
    "recipeId": 72,
    "ingredientName": "Butter",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2497,
    "recipeId": 72,
    "ingredientName": "Cinnamon",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2498,
    "recipeId": 72,
    "ingredientName": "Nutmeg",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2499,
    "recipeId": 72,
    "ingredientName": "Allspice",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2500,
    "recipeId": 72,
    "ingredientName": "Mandarin oranges",
    "amount": "11",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2501,
    "recipeId": 72,
    "ingredientName": "Bananas",
    "amount": "2",
    "measurement": "medium (sliced)"
  },
  {
    "ingredientId": 2502,
    "recipeId": 72,
    "ingredientName": "Pecans",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2503,
    "recipeId": 72,
    "ingredientName": "Marshmallows",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2508,
    "recipeId": 96,
    "ingredientName": "Butterscotch chips",
    "amount": "1",
    "measurement": "package"
  },
  {
    "ingredientId": 2509,
    "recipeId": 96,
    "ingredientName": "Peanut butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2510,
    "recipeId": 96,
    "ingredientName": "Chinese noodles",
    "amount": "5",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2511,
    "recipeId": 96,
    "ingredientName": "Marshmallows",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2512,
    "recipeId": 117,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2513,
    "recipeId": 117,
    "ingredientName": "Sugar",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2514,
    "recipeId": 117,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2515,
    "recipeId": 117,
    "ingredientName": "Flour",
    "amount": "2 3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2516,
    "recipeId": 117,
    "ingredientName": "Cream of tartar",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2517,
    "recipeId": 117,
    "ingredientName": "Baking soda",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2518,
    "recipeId": 117,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2519,
    "recipeId": 119,
    "ingredientName": "Milk",
    "amount": "3 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2520,
    "recipeId": 119,
    "ingredientName": "Instanct French vanilla pudding",
    "amount": "2",
    "measurement": "boxes (3 1/2 oz)"
  },
  {
    "ingredientId": 2521,
    "recipeId": 119,
    "ingredientName": "Sweetened condensed milk",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 2522,
    "recipeId": 119,
    "ingredientName": "Cool whip lite",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2523,
    "recipeId": 119,
    "ingredientName": "Bananas",
    "amount": "7-8",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 2524,
    "recipeId": 119,
    "ingredientName": "Vanilla wafer cookies",
    "amount": "1",
    "measurement": "box"
  },
  {
    "ingredientId": 2525,
    "recipeId": 148,
    "ingredientName": "Olive oil",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2526,
    "recipeId": 148,
    "ingredientName": "Red bell peppers",
    "amount": "1/2",
    "measurement": "medium (finely diced)"
  },
  {
    "ingredientId": 2527,
    "recipeId": 148,
    "ingredientName": "Scallions",
    "amount": "3",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2528,
    "recipeId": 148,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2529,
    "recipeId": 148,
    "ingredientName": "Red onion",
    "amount": "1 1/2",
    "measurement": "cups (finely chopped)"
  },
  {
    "ingredientId": 2530,
    "recipeId": 148,
    "ingredientName": "Bread crumbs",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2531,
    "recipeId": 148,
    "ingredientName": "Corn kernels",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2532,
    "recipeId": 148,
    "ingredientName": "Fresh basil",
    "amount": "1",
    "measurement": "tablespoon (minced)"
  },
  {
    "ingredientId": 2533,
    "recipeId": 148,
    "ingredientName": "Kosher salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2534,
    "recipeId": 148,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": "(beaten)"
  },
  {
    "ingredientId": 2535,
    "recipeId": 148,
    "ingredientName": "Flank steak",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2536,
    "recipeId": 148,
    "ingredientName": "Flour",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2537,
    "recipeId": 148,
    "ingredientName": "Crushed tomatoes",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2538,
    "recipeId": 148,
    "ingredientName": "Dry red wine",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2539,
    "recipeId": 148,
    "ingredientName": "Beef broth",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2540,
    "recipeId": 154,
    "ingredientName": "Mushroom",
    "amount": "1",
    "measurement": "pound (sliced)"
  },
  {
    "ingredientId": 2541,
    "recipeId": 154,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2542,
    "recipeId": 154,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2543,
    "recipeId": 154,
    "ingredientName": "Nutmeg",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2544,
    "recipeId": 154,
    "ingredientName": "Sour cream",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2545,
    "recipeId": 154,
    "ingredientName": "Bread crumbs",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2546,
    "recipeId": 154,
    "ingredientName": "Ketchup",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2547,
    "recipeId": 154,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2548,
    "recipeId": 154,
    "ingredientName": "Worcestershire sauce",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2549,
    "recipeId": 154,
    "ingredientName": "Ground beef",
    "amount": "2",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2550,
    "recipeId": 154,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2551,
    "recipeId": 155,
    "ingredientName": "Pork chops",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 2552,
    "recipeId": 155,
    "ingredientName": "Olive oil",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2553,
    "recipeId": 155,
    "ingredientName": "Mushrooms",
    "amount": "1 3/4",
    "measurement": "cups (finely chopped)"
  },
  {
    "ingredientId": 2554,
    "recipeId": 155,
    "ingredientName": "Carrots",
    "amount": "2",
    "measurement": "medium (finely chopped)"
  },
  {
    "ingredientId": 2555,
    "recipeId": 155,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2556,
    "recipeId": 155,
    "ingredientName": "Shallot",
    "amount": "1",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2557,
    "recipeId": 155,
    "ingredientName": "Soy sauce",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2558,
    "recipeId": 155,
    "ingredientName": "Bread crumbs",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2559,
    "recipeId": 155,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2560,
    "recipeId": 155,
    "ingredientName": "Fresh parsley",
    "amount": "2",
    "measurement": "tablespoons (minced)"
  },
  {
    "ingredientId": 2561,
    "recipeId": 155,
    "ingredientName": "Dried tarragon",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2562,
    "recipeId": 155,
    "ingredientName": "Kosher salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2563,
    "recipeId": 155,
    "ingredientName": "Flour",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2564,
    "recipeId": 155,
    "ingredientName": "Chicken broth",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2565,
    "recipeId": 155,
    "ingredientName": "Onion",
    "amount": "1 1/2",
    "measurement": "cups (finely diced)"
  },
  {
    "ingredientId": 2566,
    "recipeId": 155,
    "ingredientName": "Bay leaf",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2567,
    "recipeId": 155,
    "ingredientName": "Clove",
    "amount": "1",
    "measurement": "whole"
  },
  {
    "ingredientId": 2568,
    "recipeId": 155,
    "ingredientName": "Escarole",
    "amount": "2 1/2",
    "measurement": "cups (torn)"
  },
  {
    "ingredientId": 2569,
    "recipeId": 160,
    "ingredientName": "Pork chops",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2570,
    "recipeId": 160,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2571,
    "recipeId": 160,
    "ingredientName": "Olive oil",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2572,
    "recipeId": 160,
    "ingredientName": "Mushrooms",
    "amount": "5",
    "measurement": "ounces (thinly sliced)"
  },
  {
    "ingredientId": 2573,
    "recipeId": 160,
    "ingredientName": "Shallot",
    "amount": "1",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2574,
    "recipeId": 160,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2575,
    "recipeId": 160,
    "ingredientName": "Beef broth",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2576,
    "recipeId": 160,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2577,
    "recipeId": 160,
    "ingredientName": "Sour cream",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2578,
    "recipeId": 160,
    "ingredientName": "Dijon mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2579,
    "recipeId": 162,
    "ingredientName": "Pork chops",
    "amount": "4",
    "measurement": ""
  },
  {
    "ingredientId": 2580,
    "recipeId": 162,
    "ingredientName": "Olive oil",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2581,
    "recipeId": 162,
    "ingredientName": "Sun-dried tomatoes",
    "amount": "",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2582,
    "recipeId": 162,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2583,
    "recipeId": 162,
    "ingredientName": "Shallot",
    "amount": "1",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2584,
    "recipeId": 162,
    "ingredientName": "Prosciutto",
    "amount": "1/3",
    "measurement": "cup (finely diced)"
  },
  {
    "ingredientId": 2585,
    "recipeId": 162,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2586,
    "recipeId": 162,
    "ingredientName": "Fresh parsley",
    "amount": "2",
    "measurement": "tablespoons (minced)"
  },
  {
    "ingredientId": 2587,
    "recipeId": 162,
    "ingredientName": "Fresh basil",
    "amount": "1",
    "measurement": "tablespoon (minced)"
  },
  {
    "ingredientId": 2588,
    "recipeId": 162,
    "ingredientName": "Dried oregano",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2589,
    "recipeId": 162,
    "ingredientName": "Bread crumbs",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2590,
    "recipeId": 162,
    "ingredientName": "Kosher salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2591,
    "recipeId": 162,
    "ingredientName": "Flour",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2592,
    "recipeId": 162,
    "ingredientName": "Chianti or red wine",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2593,
    "recipeId": 162,
    "ingredientName": "Tomato paste",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2594,
    "recipeId": 163,
    "ingredientName": "Pork loin",
    "amount": "5",
    "measurement": "pounds"
  },
  {
    "ingredientId": 2595,
    "recipeId": 163,
    "ingredientName": "Pitted prunes (12 oz package)",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2596,
    "recipeId": 163,
    "ingredientName": "Dry white wine",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2597,
    "recipeId": 163,
    "ingredientName": "Apple jack or Calvados",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2598,
    "recipeId": 163,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "large (finely diced)"
  },
  {
    "ingredientId": 2599,
    "recipeId": 163,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2600,
    "recipeId": 163,
    "ingredientName": "Dried sage",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2601,
    "recipeId": 163,
    "ingredientName": "Ground cloves",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2602,
    "recipeId": 163,
    "ingredientName": "Sweet potatoes",
    "amount": "3",
    "measurement": "large (cut in 1/2%22 slices)"
  },
  {
    "ingredientId": 2603,
    "recipeId": 163,
    "ingredientName": "Cayenne",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2604,
    "recipeId": 163,
    "ingredientName": "Shallots",
    "amount": "2",
    "measurement": "(minced)"
  },
  {
    "ingredientId": 2605,
    "recipeId": 163,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2606,
    "recipeId": 163,
    "ingredientName": "Kosher salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2607,
    "recipeId": 163,
    "ingredientName": "Chicken broth",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2608,
    "recipeId": 163,
    "ingredientName": "Fresh parsley",
    "amount": "1/4",
    "measurement": "cup (minced)"
  },
  {
    "ingredientId": 2609,
    "recipeId": 163,
    "ingredientName": "Dried sage",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2610,
    "recipeId": 196,
    "ingredientName": "Plain nonfat yogurt",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2611,
    "recipeId": 196,
    "ingredientName": "Reduced calorie mayo",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2612,
    "recipeId": 196,
    "ingredientName": "White wine vinegar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2613,
    "recipeId": 196,
    "ingredientName": "Celery seed",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2614,
    "recipeId": 196,
    "ingredientName": "Broccoli",
    "amount": "2",
    "measurement": "cups (chopped)"
  },
  {
    "ingredientId": 2615,
    "recipeId": 196,
    "ingredientName": "Cauliflower",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2616,
    "recipeId": 196,
    "ingredientName": "Scallions",
    "amount": "1/4",
    "measurement": "cup (sliced)"
  },
  {
    "ingredientId": 2617,
    "recipeId": 196,
    "ingredientName": "Peanuts",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2618,
    "recipeId": 211,
    "ingredientName": "Shrimp",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 2619,
    "recipeId": 211,
    "ingredientName": "Flour",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2620,
    "recipeId": 211,
    "ingredientName": "Salt",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2621,
    "recipeId": 211,
    "ingredientName": "Ginger",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2622,
    "recipeId": 211,
    "ingredientName": "Pina colada mix",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2623,
    "recipeId": 211,
    "ingredientName": "Coconut",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2624,
    "recipeId": 239,
    "ingredientName": "Red skinned potatoes",
    "amount": "3",
    "measurement": "pounds (halved)"
  },
  {
    "ingredientId": 2625,
    "recipeId": 239,
    "ingredientName": "Vegetable oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2626,
    "recipeId": 239,
    "ingredientName": "Horseradish",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2627,
    "recipeId": 239,
    "ingredientName": "Dijon mustard",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2628,
    "recipeId": 239,
    "ingredientName": "Butter",
    "amount": "1/4",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 2629,
    "recipeId": 244,
    "ingredientName": "Onions",
    "amount": "2",
    "measurement": "large"
  },
  {
    "ingredientId": 2630,
    "recipeId": 244,
    "ingredientName": "Frozen spinach",
    "amount": "10",
    "measurement": "ounces (chopped)"
  },
  {
    "ingredientId": 2631,
    "recipeId": 244,
    "ingredientName": "Cream cheese",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2632,
    "recipeId": 244,
    "ingredientName": "Pimiento",
    "amount": "2",
    "measurement": "tablespoons (diced)"
  },
  {
    "ingredientId": 2633,
    "recipeId": 244,
    "ingredientName": "Bacon",
    "amount": "2",
    "measurement": "slices (crumbled)"
  },
  {
    "ingredientId": 2634,
    "recipeId": 244,
    "ingredientName": "Nutmeg",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2635,
    "recipeId": 244,
    "ingredientName": "Bread crumbs",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2636,
    "recipeId": 244,
    "ingredientName": "Butter",
    "amount": "1",
    "measurement": "tablespoon (melted)"
  },
  {
    "ingredientId": 2637,
    "recipeId": 266,
    "ingredientName": "Graham crackers",
    "amount": "12",
    "measurement": "whole"
  },
  {
    "ingredientId": 2638,
    "recipeId": 266,
    "ingredientName": "Oats",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2639,
    "recipeId": 266,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2640,
    "recipeId": 266,
    "ingredientName": "Brown sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2641,
    "recipeId": 266,
    "ingredientName": "Flour",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2642,
    "recipeId": 266,
    "ingredientName": "Butter",
    "amount": "2/3",
    "measurement": "cup (melted)"
  },
  {
    "ingredientId": 2643,
    "recipeId": 266,
    "ingredientName": "Egg",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2644,
    "recipeId": 266,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2645,
    "recipeId": 266,
    "ingredientName": "Semisweet chocolate chips",
    "amount": "12",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2646,
    "recipeId": 266,
    "ingredientName": "Almonds",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2647,
    "recipeId": 270,
    "ingredientName": "Chicken wings",
    "amount": "30",
    "measurement": ""
  },
  {
    "ingredientId": 2648,
    "recipeId": 270,
    "ingredientName": "Olive oil",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2649,
    "recipeId": 270,
    "ingredientName": "Salt",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2650,
    "recipeId": 270,
    "ingredientName": "Pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2651,
    "recipeId": 270,
    "ingredientName": "THAI HONEY AND SPICE SAUCE",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2652,
    "recipeId": 270,
    "ingredientName": "Honey",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2653,
    "recipeId": 270,
    "ingredientName": "Soy sauce",
    "amount": "4",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2654,
    "recipeId": 270,
    "ingredientName": "Worcestershire sauce",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2655,
    "recipeId": 270,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2656,
    "recipeId": 270,
    "ingredientName": "Red pepper flakes",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2657,
    "recipeId": 270,
    "ingredientName": "Black pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2658,
    "recipeId": 270,
    "ingredientName": "Juice of 1 lime",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2659,
    "recipeId": 43,
    "ingredientName": "Oil",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2660,
    "recipeId": 43,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2661,
    "recipeId": 43,
    "ingredientName": "Baking powder",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2662,
    "recipeId": 43,
    "ingredientName": "Baking soda",
    "amount": "1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2663,
    "recipeId": 43,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2664,
    "recipeId": 43,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2665,
    "recipeId": 43,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2666,
    "recipeId": 43,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2667,
    "recipeId": 43,
    "ingredientName": "Instant vanilla pudding",
    "amount": "1",
    "measurement": "small box"
  },
  {
    "ingredientId": 2668,
    "recipeId": 43,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2669,
    "recipeId": 43,
    "ingredientName": "Nuts",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2670,
    "recipeId": 43,
    "ingredientName": "Raisins",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2671,
    "recipeId": 80,
    "ingredientName": "Sweet potatoes",
    "amount": "6",
    "measurement": "(cooked and sliced)"
  },
  {
    "ingredientId": 2672,
    "recipeId": 80,
    "ingredientName": "Apples",
    "amount": "4",
    "measurement": "(sliced)"
  },
  {
    "ingredientId": 2673,
    "recipeId": 80,
    "ingredientName": "Butter",
    "amount": "6",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2674,
    "recipeId": 80,
    "ingredientName": "Brown sugar",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2685,
    "recipeId": 274,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2686,
    "recipeId": 274,
    "ingredientName": "Artichoke Hearts",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2687,
    "recipeId": 274,
    "ingredientName": "Potatoes",
    "amount": "1",
    "measurement": "pound, thinly sliced"
  },
  {
    "ingredientId": 2688,
    "recipeId": 274,
    "ingredientName": "Mushrooms",
    "amount": "",
    "measurement": "thinly sliced"
  },
  {
    "ingredientId": 2689,
    "recipeId": 274,
    "ingredientName": "Goat Cheese",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2690,
    "recipeId": 274,
    "ingredientName": "Garlic",
    "amount": "1",
    "measurement": "clove (minced)"
  },
  {
    "ingredientId": 2691,
    "recipeId": 274,
    "ingredientName": "Parmesan cheese",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2692,
    "recipeId": 274,
    "ingredientName": "Dry White Wine",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2693,
    "recipeId": 275,
    "ingredientName": "Butter",
    "amount": "1 1/2",
    "measurement": "sticks"
  },
  {
    "ingredientId": 2694,
    "recipeId": 275,
    "ingredientName": "Flour",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2695,
    "recipeId": 275,
    "ingredientName": "Baking powder",
    "amount": "2 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2696,
    "recipeId": 275,
    "ingredientName": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2697,
    "recipeId": 275,
    "ingredientName": "Ricotta Cheese",
    "amount": "1 1/2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2698,
    "recipeId": 275,
    "ingredientName": "Sugar",
    "amount": "1 1/2 ",
    "measurement": "cups + 1 tablespoon"
  },
  {
    "ingredientId": 2699,
    "recipeId": 275,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2700,
    "recipeId": 275,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2701,
    "recipeId": 275,
    "ingredientName": "Orange",
    "amount": "1",
    "measurement": "zested"
  },
  {
    "ingredientId": 2702,
    "recipeId": 275,
    "ingredientName": "Amaretto",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2703,
    "recipeId": 275,
    "ingredientName": "Confectioners Sugar",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2704,
    "recipeId": 276,
    "ingredientName": "Arborio Rice",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2705,
    "recipeId": 276,
    "ingredientName": "Butter",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2706,
    "recipeId": 276,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "chopped"
  },
  {
    "ingredientId": 2707,
    "recipeId": 276,
    "ingredientName": "Pork Sausage",
    "amount": "3/4",
    "measurement": "pound"
  },
  {
    "ingredientId": 2708,
    "recipeId": 276,
    "ingredientName": "Garlic",
    "amount": "2",
    "measurement": "cloves (minced)"
  },
  {
    "ingredientId": 2709,
    "recipeId": 276,
    "ingredientName": "Tomato Paste",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2710,
    "recipeId": 276,
    "ingredientName": "Chicken Broth",
    "amount": "2 ",
    "measurement": "cups"
  },
  {
    "ingredientId": 2711,
    "recipeId": 276,
    "ingredientName": "Breadcrumbs",
    "amount": "2-3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2712,
    "recipeId": 276,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2713,
    "recipeId": 276,
    "ingredientName": "Parmesan Cheese",
    "amount": "1 ",
    "measurement": "cups"
  },
  {
    "ingredientId": 2714,
    "recipeId": 276,
    "ingredientName": "Provolone Cheese",
    "amount": "2",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2715,
    "recipeId": 277,
    "ingredientName": "Butter",
    "amount": "1 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2716,
    "recipeId": 277,
    "ingredientName": "Confectioners Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2717,
    "recipeId": 277,
    "ingredientName": "Flour",
    "amount": "2 1/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2718,
    "recipeId": 277,
    "ingredientName": "Craisins",
    "amount": "6",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2719,
    "recipeId": 277,
    "ingredientName": "Chocolate chips",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2720,
    "recipeId": 224,
    "ingredientName": "Sour cream",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2721,
    "recipeId": 224,
    "ingredientName": "Worcestershire sauce",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2722,
    "recipeId": 224,
    "ingredientName": "Salt",
    "amount": "3/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2723,
    "recipeId": 224,
    "ingredientName": "Corn kernels (5 ears)",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2724,
    "recipeId": 224,
    "ingredientName": "Red bell pepper",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2725,
    "recipeId": 224,
    "ingredientName": "Green onion",
    "amount": "1",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2737,
    "recipeId": 279,
    "ingredientName": "Flour",
    "amount": "2 3/4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2738,
    "recipeId": 279,
    "ingredientName": "Sugar",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2739,
    "recipeId": 279,
    "ingredientName": "Baking powder",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2740,
    "recipeId": 279,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2741,
    "recipeId": 279,
    "ingredientName": "Canola oil",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2742,
    "recipeId": 279,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2743,
    "recipeId": 279,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2744,
    "recipeId": 279,
    "ingredientName": "Sugar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2745,
    "recipeId": 279,
    "ingredientName": "Cinnamon",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2746,
    "recipeId": 279,
    "ingredientName": "Egg White",
    "amount": "1",
    "measurement": ""
  },
  {
    "ingredientId": 2747,
    "recipeId": 280,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2748,
    "recipeId": 280,
    "ingredientName": "Baking powder",
    "amount": "1 1/2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2749,
    "recipeId": 280,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2750,
    "recipeId": 280,
    "ingredientName": "Butter",
    "amount": "1/2",
    "measurement": "cup"
  },
  {
    "ingredientId": 2751,
    "recipeId": 280,
    "ingredientName": "Salt",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2752,
    "recipeId": 280,
    "ingredientName": "Eggs",
    "amount": "2",
    "measurement": ""
  },
  {
    "ingredientId": 2753,
    "recipeId": 280,
    "ingredientName": "Pistachios",
    "amount": "3/4",
    "measurement": "cup (chopped)"
  },
  {
    "ingredientId": 2754,
    "recipeId": 280,
    "ingredientName": "Dried Cranberries",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2755,
    "recipeId": 280,
    "ingredientName": "White Chocolate",
    "amount": "12 ",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2756,
    "recipeId": 280,
    "ingredientName": "",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2757,
    "recipeId": 281,
    "ingredientName": "Bacon",
    "amount": "1/4",
    "measurement": "pound"
  },
  {
    "ingredientId": 2758,
    "recipeId": 281,
    "ingredientName": "Potatoes",
    "amount": "1 1/2",
    "measurement": "pounds, peeled and diced"
  },
  {
    "ingredientId": 2759,
    "recipeId": 281,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "medium, diced"
  },
  {
    "ingredientId": 2760,
    "recipeId": 281,
    "ingredientName": "Sweet Potato",
    "amount": "1",
    "measurement": "large, peeled and diced"
  },
  {
    "ingredientId": 2761,
    "recipeId": 281,
    "ingredientName": "Chicken Broth",
    "amount": "4-5",
    "measurement": "cups"
  },
  {
    "ingredientId": 2762,
    "recipeId": 281,
    "ingredientName": "Brown sugar",
    "amount": "1/4 ",
    "measurement": "cup"
  },
  {
    "ingredientId": 2763,
    "recipeId": 281,
    "ingredientName": "Corn",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2764,
    "recipeId": 281,
    "ingredientName": "Scallions",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2765,
    "recipeId": 281,
    "ingredientName": "Heavy cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2766,
    "recipeId": 281,
    "ingredientName": "Salt and pepper",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2777,
    "recipeId": 282,
    "ingredientName": "Olive oil",
    "amount": "2",
    "measurement": "teaspoons"
  },
  {
    "ingredientId": 2778,
    "recipeId": 282,
    "ingredientName": "Onion",
    "amount": "1",
    "measurement": "small, chopped"
  },
  {
    "ingredientId": 2779,
    "recipeId": 282,
    "ingredientName": "Sweet Potato",
    "amount": "12",
    "measurement": "ounces, cubed"
  },
  {
    "ingredientId": 2780,
    "recipeId": 282,
    "ingredientName": "Chicken Broth",
    "amount": "28",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2781,
    "recipeId": 282,
    "ingredientName": "Ground Cumin",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2782,
    "recipeId": 282,
    "ingredientName": "Corn",
    "amount": "11",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2783,
    "recipeId": 282,
    "ingredientName": "Mild Salsa",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2784,
    "recipeId": 282,
    "ingredientName": "Diced Tomatoes",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2785,
    "recipeId": 282,
    "ingredientName": "Black beans",
    "amount": "15",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2786,
    "recipeId": 282,
    "ingredientName": "Sour cream",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2787,
    "recipeId": 283,
    "ingredientName": "Cream cheese, softened",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2788,
    "recipeId": 283,
    "ingredientName": "Nilla wafers, finely crushed",
    "amount": "70",
    "measurement": ""
  },
  {
    "ingredientId": 2789,
    "recipeId": 283,
    "ingredientName": "Caramel Ice Cream Topping",
    "amount": "3",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2790,
    "recipeId": 283,
    "ingredientName": "Semisweet chocolate",
    "amount": "8",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2791,
    "recipeId": 283,
    "ingredientName": "",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2799,
    "recipeId": 284,
    "ingredientName": "Ground Sausage",
    "amount": "1",
    "measurement": "pound"
  },
  {
    "ingredientId": 2800,
    "recipeId": 284,
    "ingredientName": "Bisquick",
    "amount": "3",
    "measurement": "cups"
  },
  {
    "ingredientId": 2801,
    "recipeId": 284,
    "ingredientName": "Cheddar Cheese, grated",
    "amount": "4",
    "measurement": "cups"
  },
  {
    "ingredientId": 2802,
    "recipeId": 284,
    "ingredientName": "pepper",
    "amount": "1/8",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2803,
    "recipeId": 284,
    "ingredientName": "",
    "amount": "Dip%3A",
    "measurement": ""
  },
  {
    "ingredientId": 2804,
    "recipeId": 284,
    "ingredientName": "Mayonnaise",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2805,
    "recipeId": 284,
    "ingredientName": "Mustard",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2806,
    "recipeId": 285,
    "ingredientName": "Cinnamon Crumble%3A",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2807,
    "recipeId": 285,
    "ingredientName": "Sugar",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2808,
    "recipeId": 285,
    "ingredientName": "Flour",
    "amount": "1/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2809,
    "recipeId": 285,
    "ingredientName": "Cinnamon ",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2810,
    "recipeId": 285,
    "ingredientName": "Butter, softened",
    "amount": "1/2",
    "measurement": "stick"
  },
  {
    "ingredientId": 2811,
    "recipeId": 285,
    "ingredientName": "Batter%3A",
    "amount": "",
    "measurement": ""
  },
  {
    "ingredientId": 2812,
    "recipeId": 285,
    "ingredientName": "Flour",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "ingredientId": 2813,
    "recipeId": 285,
    "ingredientName": "Baking powder",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2814,
    "recipeId": 285,
    "ingredientName": "Cinnamon ",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2815,
    "recipeId": 285,
    "ingredientName": "Salt",
    "amount": "1/2 ",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2816,
    "recipeId": 285,
    "ingredientName": "Baking soda",
    "amount": "1/4 ",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2817,
    "recipeId": 285,
    "ingredientName": "Eggs",
    "amount": "3",
    "measurement": ""
  },
  {
    "ingredientId": 2818,
    "recipeId": 285,
    "ingredientName": "Sugar",
    "amount": "3/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2819,
    "recipeId": 285,
    "ingredientName": "Butter, melted",
    "amount": "1",
    "measurement": "stick"
  },
  {
    "ingredientId": 2820,
    "recipeId": 285,
    "ingredientName": "Sour cream",
    "amount": "1",
    "measurement": "cup"
  },
  {
    "ingredientId": 2821,
    "recipeId": 285,
    "ingredientName": "Vanilla",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2822,
    "recipeId": 286,
    "ingredientName": "Cream cheese, softened",
    "amount": "3",
    "measurement": "ounces"
  },
  {
    "ingredientId": 2823,
    "recipeId": 286,
    "ingredientName": "Blue cheese, crumbles",
    "amount": "2/3",
    "measurement": "cup"
  },
  {
    "ingredientId": 2824,
    "recipeId": 286,
    "ingredientName": "Orange marmalade",
    "amount": "1/4",
    "measurement": "cup"
  },
  {
    "ingredientId": 2825,
    "recipeId": 286,
    "ingredientName": "Balsamic vinegar",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2826,
    "recipeId": 286,
    "ingredientName": "Dried figs, chopped (about 1 cup)",
    "amount": "16",
    "measurement": ""
  },
  {
    "ingredientId": 2827,
    "recipeId": 286,
    "ingredientName": "Crescent roll",
    "amount": "1",
    "measurement": "can"
  },
  {
    "ingredientId": 2838,
    "recipeId": 287,
    "ingredientName": "Chili powder",
    "amount": "2 1/2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2839,
    "recipeId": 287,
    "ingredientName": "Cumin",
    "amount": "2",
    "measurement": "tablespoons"
  },
  {
    "ingredientId": 2840,
    "recipeId": 287,
    "ingredientName": "Coriander",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2841,
    "recipeId": 287,
    "ingredientName": "Sea salt",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2842,
    "recipeId": 287,
    "ingredientName": "Paprika",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2843,
    "recipeId": 287,
    "ingredientName": "Brown sugar",
    "amount": "1",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2844,
    "recipeId": 287,
    "ingredientName": "Black pepper",
    "amount": "1/2",
    "measurement": "tablespoon"
  },
  {
    "ingredientId": 2845,
    "recipeId": 287,
    "ingredientName": "Cayenne pepper",
    "amount": "1/4",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2846,
    "recipeId": 287,
    "ingredientName": "Dried mustard",
    "amount": "1/2",
    "measurement": "teaspoon"
  },
  {
    "ingredientId": 2847,
    "recipeId": 287,
    "ingredientName": "Garlic powder",
    "amount": "1/2 ",
    "measurement": "teaspoon"
  }
]

export default INGREDIENTS;
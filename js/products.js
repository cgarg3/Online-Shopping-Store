/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "09651b8f-5705-4642-a50b-6a1c312bb0ae",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 10995,
    imageUrl: "https://trendz.fashion/static/media/red1.3aefc183.webp",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    discontinued: false,
    categories: ["MEN-CLOTHES"]
  },

  {
    id: "5dcfea24-a582-4736-9145-0ded9730982b",
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 2230,
    imageUrl: "https://m.media-amazon.com/images/I/71dC1+6WdZL._AC_SY606_.jpg",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    categories: ["MEN-CLOTHES"],
    discontinued: false
  },
  {
    discontinued: false,
    id: "3aea93bf-e115-43c6-9bc0-c6539e81a538",
    name: "Mens Cotton Jacket",
    imageUrl: "https://trendz.fashion/static/media/red1.3aefc183.webp",
    price: 5599,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    categories: ["MEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "81c1dac9-cd95-498c-8b81-53bbb3189589",
    name: "Mens Casual Slim Fit",
    price: 1599,
    imageUrl: "https://m.media-amazon.com/images/I/61J0Ah8fuHL._AC_UX342_.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    categories: ["MEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "30ccce43-1eb0-4f04-9eb4-03b992bfa7bc",
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 69500,
    imageUrl: "https://m.media-amazon.com/images/I/7192GlcVjeL._AC_UY500_.jpg",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    categories: ["JEWELRY"]
  },
  {
    discontinued: false,
    id: "25d0f1b7-736f-4425-8d4d-46be9494b790",
    name: "Solid Gold Petite Micropave ",
    price: 16800,
    imageUrl: "https://m.media-amazon.com/images/I/710pUsBM-WL._AC_UX385_.jpg",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    categories: ["JEWELRY"]
  },
  {
    discontinued: false,
    id: "d2d8cd9f-9780-4262-bb4f-8f6638a227d2",
    name: "White Gold Plated Princess",
    price: 999,
    imageUrl: "https://m.media-amazon.com/images/I/71QbO5WNYsL._AC_UX522_.jpg",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    categories: ["JEWELRY"]
  },
  {
    discontinued: false,
    id: "afd48432-4776-476b-a0fe-eef2d18e603f",
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    imageUrl: "https://m.media-amazon.com/images/I/51UDEzMJVpL._AC_UX466_.jpg",
    price: 1099,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    categories: ["JEWELRY"]
  },
  {
    discontinued: false,
    id: "715aa7ca-8eaa-45b2-92c4-ae6751bbe6fc",
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 6400,
    imageUrl: "https://m.media-amazon.com/images/I/91mlqrT75WL._AC_SY450_.jpg",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "23ba035b-5ad5-46ab-9812-b9af3b7afbc6",
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    imageUrl: "https://m.media-amazon.com/images/I/71J4Q8zM72L._AC_SX450_.jpg",
    price: 10900,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "94971f6d-a76e-4dcf-b44b-56208c1b5218",
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    imageUrl: "https://m.media-amazon.com/images/I/71ic6-0e2KL._AC_SY450_.jpg",
    price: 10900,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "d3958e3d-b432-4c29-90e0-9e66bf6b4bab",
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    imageUrl:
      "https://i5.walmartimages.com/asr/c2925134-0589-45b8-bad9-31acd5009daf_1.b4018fe6441e0e06240fd312f840f459.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    price: 11400,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "ae166b0b-1060-49ad-9a4a-526b06436d5e",
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    imageUrl: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SY450_.jpg",
    price: 59900,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "c34c089f-69da-4426-9103-78106fbb4b09",
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81Butfqtj5L.__AC_SY300_SX300_QL70_ML2_.jpg",
    price: 99999,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    categories: ["ELECTRONICS"]
  },
  {
    discontinued: false,
    id: "9d5824ed-61f8-4038-aaad-a8f72478e617",
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    imageUrl:
      "https://amazon-clone-pi-eight.vercel.app/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51Y5NI-I5jL._AC_UX679_.jpg&w=640&q=75",
    price: 5699,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    categories: ["WOMEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "02a9d92f-b445-48e4-bea6-bad3c2caa649",
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2995,
    imageUrl: "https://m.media-amazon.com/images/I/81RK6KNQ-aL._AC_UY550_.jpg",
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    categories: ["WOMEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "e53dd517-7302-4a15-a9c4-9ac1e90fdd0e",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 3999,
    imageUrl: "https://m.media-amazon.com/images/I/71F+jjD80+S._AC_UX342_.jpg",
    description:
      "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    categories: ["WOMEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "b27a1d14-31ea-447f-8948-049a853a70ce",
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    imageUrl: "https://m.media-amazon.com/images/I/81m9jVT-aYL._AC_UX342_.jpg",
    price: 985,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    categories: ["WOMEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "72df0023-13fb-4c23-9d80-6755c4c7a8a4",
    name: "Opna Women's Short Sleeve Moisture",
    imageUrl: "https://m.media-amazon.com/images/I/51TSYv1OUFL._AC_UX342_.jpg",
    price: 795,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    categories: ["WOMEN-CLOTHES"]
  },
  {
    discontinued: false,
    id: "4e8cca38-e1ea-4104-acff-e80a76f44d38",
    name: "DANVOUY Women's T Shirt Casual Cotton Short",
    price: 1299,
    imageUrl: "https://m.media-amazon.com/images/I/61JgqGOI1OL._AC_UX342_.jpg",
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    categories: ["WOMEN-CLOTHES"]
  }
];

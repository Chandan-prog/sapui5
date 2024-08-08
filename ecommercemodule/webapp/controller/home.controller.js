sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", // Correct import
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
  ],
  function (Controller, JSONModel,  Filter, FilterOperator, Sorter) {
    "use strict";
    return Controller.extend("ep.ecommercemodule.controller.home", {
      onInit: function () {
        var oModel = new JSONModel({
            products: [
                {
                  id: "P001",
                  name: "Laptop",
                  price: 1000,
                  category: "Electronics",
                  description: "High-performance laptop",
                  descriptionList: [
                    "High-performance laptop.",
                    "Equipped with the latest technology.",
                    "Perfect for both work and gaming.",
                    "Sleek and portable design.",
                    "Long-lasting battery life.",
                    "Affordable for its specifications."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/1/4/-original-imaguyt4gyzmcm9y.jpeg?q=70",
                },
                {
                  id: "P002",
                  name: "T-shirt",
                  price: 20,
                  category: "Clothing",
                  description: "Comfortable cotton T-shirt",
                  descriptionList: [
                    "Comfortable cotton T-shirt.",
                    "Soft and breathable fabric.",
                    "Available in multiple colors.",
                    "Suitable for casual wear.",
                    "Durable and easy to maintain.",
                    "Perfect fit for all body types."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/c/c/m-bw-hs-rn-white-being-wanted-original-imagk5kcadpqwrzg.jpeg?q=70",
                },
                {
                  id: "P003",
                  name: "Book",
                  price: 15,
                  category: "Books",
                  description: "Inspiring autobiography",
                  descriptionList: [
                    "Inspiring autobiography.",
                    "Captivating and engaging narrative.",
                    "Written by a renowned author.",
                    "Provides valuable life lessons.",
                    "A must-read for enthusiasts.",
                    "Ideal gift for book lovers."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/kjkbv680-0/book/p/r/m/wings-of-fire-original-imafz3pawzphkecj.jpeg?q=70",
                },
                {
                  id: "P004",
                  name: "Smartphone",
                  price: 800,
                  category: "Electronics",
                  description: "Latest model with high-end features",
                  descriptionList: [
                    "Latest model with high-end features.",
                    "Stunning display with vibrant colors.",
                    "Fast performance with the latest processor.",
                    "Excellent camera quality for photos and videos.",
                    "Long battery life for extended use.",
                    "Sleek and modern design."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
                },
                {
                  id: "P005",
                  name: "Headphones",
                  price: 150,
                  category: "Electronics",
                  description: "Noise-cancelling headphones",
                  descriptionList: [
                    "Noise-cancelling headphones.",
                    "Crystal-clear sound quality.",
                    "Comfortable for long listening sessions.",
                    "Adjustable headband and cushioned ear cups.",
                    "Long battery life with quick charging.",
                    "Ideal for both travel and home use."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/a/x/-original-imahfcgyxfjhhh7r.jpeg?q=70",
                },
                {
                  id: "P006",
                  name: "Sunglasses",
                  price: 80,
                  category: "Accessories",
                  description: "Stylish sunglasses with UV protection",
                  descriptionList: [
                    "Stylish sunglasses with UV protection.",
                    "High-quality lenses to protect your eyes.",
                    "Trendy design suitable for all occasions.",
                    "Durable and long-lasting.",
                    "Comfortable fit for various face shapes.",
                    "Includes a protective case."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/w/n/p429gr3v-one-size-fits-all-fastrack-original-imagp3eugdafnpdq.jpeg?q=70",
                },
                {
                  id: "P007",
                  name: "Watch",
                  price: 200,
                  category: "Accessories",
                  description: "Elegant wristwatch with leather strap",
                  descriptionList: [
                    "Elegant wristwatch with leather strap.",
                    "Sophisticated design with classic appeal.",
                    "Precise timekeeping with a reliable movement.",
                    "Suitable for both formal and casual wear.",
                    "Durable and stylish.",
                    "A great accessory for any outfit."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/c/w/1-sk-pg-4078-wyt-brwn-basic-with-day-and-date-display-provogue-original-imah2wff4m8yczey.jpeg?q=70",
                },
                {
                  id: "P008",
                  name: "Shoes",
                  price: 120,
                  category: "Footwear",
                  description: "Comfortable running shoes",
                  descriptionList: [
                    "Comfortable running shoes.",
                    "Excellent cushioning for shock absorption.",
                    "Breathable material for ventilation.",
                    "Stylish design suitable for various activities.",
                    "Durable and high-quality construction.",
                    "Available in different sizes and colors."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/t/n/-original-imahfrsp9ufhpvqz.jpeg?q=70",
                },
                {
                  id: "P009",
                  name: "Jacket",
                  price: 150,
                  category: "Clothing",
                  description: "Warm and stylish winter jacket",
                  descriptionList: [
                    "Warm and stylish winter jacket.",
                    "Provides excellent insulation against cold weather.",
                    "Durable and high-quality material.",
                    "Fashionable design suitable for various occasions.",
                    "Available in multiple sizes.",
                    "Easy to care for and maintain."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/c/n/h/l-no-62184802-puma-original-imagshjqze9pbbqg.jpeg?q=70",
                },
                {
                  id: "P010",
                  name: "Bag",
                  price: 60,
                  category: "Accessories",
                  description: "Spacious backpack with multiple compartments",
                  descriptionList: [
                    "Spacious backpack with multiple compartments.",
                    "Ideal for carrying books, laptops, and personal items.",
                    "Durable and comfortable to wear.",
                    "Adjustable straps for a perfect fit.",
                    "Stylish design suitable for school or work.",
                    "Includes a padded compartment for electronic devices."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/kiulxu80-0/backpack/n/l/o/pioneer-i-i-pioneer-ii-backpack-puma-original-imafyjm2ushae7b4.jpeg?q=70",
                },
                {
                  id: "P011",
                  name: "Coffee Maker",
                  price: 90,
                  category: "Home Appliances",
                  description: "Easy-to-use coffee maker",
                  descriptionList: [
                    "Easy-to-use coffee maker.",
                    "Brews rich and aromatic coffee quickly.",
                    "Compact design suitable for any kitchen.",
                    "Includes a programmable timer for convenience.",
                    "Durable and easy to clean.",
                    "Perfect for home or office use."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-maker/u/z/4/ep3221-40-philips-original-imah25chz8rrpn9s.jpeg?q=70",
                },
                {
                  id: "P012",
                  name: "Blender",
                  price: 70,
                  category: "Home Appliances",
                  description: "Powerful blender for smoothies",
                  descriptionList: [
                    "Powerful blender for smoothies.",
                    "High-speed motor for efficient blending.",
                    "Durable and easy to clean.",
                    "Includes multiple speed settings.",
                    "Suitable for making smoothies, soups, and sauces.",
                    "Compact and stylish design."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/ktizdzk0/hand-blender/w/9/r/egg-beater-lassi-butter-milk-maker-royatto-original-imag6ughehfpdc5n.jpeg?q=70",
                },
                {
                  id: "P013",
                  name: "Tablet",
                  price: 400,
                  category: "Electronics",
                  description: "High-resolution screen tablet",
                  descriptionList: [
                    "High-resolution screen tablet.",
                    "Ideal for both work and entertainment.",
                    "Lightweight and portable.",
                    "Long battery life for extended use.",
                    "Fast performance with a powerful processor.",
                    "Compatible with various accessories."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/k/w/-original-imagj72ttsqcrehk.jpeg?q=70",
                },
                {
                  id: "P014",
                  name: "Camera",
                  price: 600,
                  category: "Electronics",
                  description: "DSLR camera with multiple lenses",
                  descriptionList: [
                    "DSLR camera with multiple lenses.",
                    "High-quality image capture with advanced features.",
                    "Ideal for both amateur and professional photographers.",
                    "Includes various shooting modes and settings.",
                    "Durable build and ergonomic design.",
                    "Great for capturing detailed and vibrant photos."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
                },
                {
                  id: "P015",
                  name: "Mixer Grinder",
                  price: 80,
                  category: "Home Appliances",
                  description: "Efficient mixer grinder for daily use",
                  descriptionList: [
                    "Efficient mixer grinder for daily use.",
                    "Powerful motor for quick blending and grinding.",
                    "Includes multiple jars for different purposes.",
                    "Durable and easy to clean.",
                    "Compact design fits easily in any kitchen.",
                    "Ideal for making pastes, chutneys, and smoothies."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/t/g/p/-original-imagtt6q7gzbtheg.jpeg?q=70",
                },
                {
                  id: "P016",
                  name: "Microwave",
                  price: 130,
                  category: "Home Appliances",
                  description: "Compact microwave oven",
                  descriptionList: [
                    "Compact microwave oven.",
                    "Ideal for quick heating and cooking.",
                    "Includes various pre-set cooking modes.",
                    "Easy to use with a user-friendly interface.",
                    "Durable and space-saving design.",
                    "Perfect for small kitchens or offices."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/y/t/t/-original-imagqkfykrwhpfqs.jpeg?q=70",
                },
                {
                  id: "P017",
                  name: "Refrigerator",
                  price: 500,
                  category: "Home Appliances",
                  description: "Large capacity refrigerator",
                  descriptionList: [
                    "Large capacity refrigerator.",
                    "Spacious compartments for food storage.",
                    "Energy-efficient cooling technology.",
                    "Stylish design to match any kitchen decor.",
                    "Includes adjustable shelves and door bins.",
                    "Reliable and durable build."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/c/2/v/-original-imagtsct6d7sgege.jpeg?q=70",
                },
                {
                  id: "P018",
                  name: "Toaster",
                  price: 40,
                  category: "Home Appliances",
                  description: "Two-slice toaster with adjustable settings",
                  descriptionList: [
                    "Two-slice toaster with adjustable settings.",
                    "Perfect for toasting bread, bagels, and more.",
                    "Includes multiple browning levels.",
                    "Compact design for easy storage.",
                    "Easy to clean with a removable crumb tray.",
                    "Durable and user-friendly."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/pop-up-toaster/t/8/d/crisp-pop-up-kent-original-imag92gysyxsrtzf.jpeg?q=70",
                },
                {
                  id: "P019",
                  name: "Electric Kettle",
                  price: 35,
                  category: "Home Appliances",
                  description: "Fast boiling electric kettle",
                  descriptionList: [
                    "Fast boiling electric kettle.",
                    "Ideal for quickly heating water.",
                    "Includes an automatic shut-off feature.",
                    "Compact and easy to store.",
                    "Durable build with a sleek design.",
                    "Perfect for home or office use."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/l/z/x/-original-imagpgnyh2vxg5pu.jpeg?q=70",
                },
                {
                  id: "P020",
                  name: "Air Conditioner",
                  price: 700,
                  category: "Home Appliances",
                  description: "Energy-efficient air conditioner",
                  descriptionList: [
                    "Energy-efficient air conditioner.",
                    "Provides effective cooling for large rooms.",
                    "Includes multiple cooling modes and settings.",
                    "Quiet operation for a comfortable environment.",
                    "Durable and reliable performance.",
                    "Stylish design to complement any room decor."
                  ],
                  imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/l/k/o/-original-imagqe65rrgkabbd.jpeg?q=70",
                },
              ],
        });
        this.getView().setModel(oModel);
      },
      onSearch: function (oEvent) {
        var sQuery = oEvent.getParameter("newValue");
        var oFilter = new Filter("name", FilterOperator.Contains, sQuery);
        var oBinding = this.byId("productFlexBox").getBinding("items");
        oBinding.filter([oFilter]);
    },

    onCategoryFilter: function (oEvent) {
        var sKey = oEvent.getParameter("selectedItem").getKey();
        var oBinding = this.byId("productFlexBox").getBinding("items");
        var aFilters = [];
        if (sKey) {
            aFilters.push(new Filter("category", FilterOperator.EQ, sKey));
        }
        oBinding.filter(aFilters);
    },

    onSortOrderChange: function (oEvent) {
        var sKey = oEvent.getParameter("selectedItem").getKey();
        var bDescending = sKey === "desc";
        var oBinding = this.byId("productFlexBox").getBinding("items");

        var oSorter = new Sorter("price", bDescending);
        oBinding.sort(oSorter);
      },

    });
  }
);

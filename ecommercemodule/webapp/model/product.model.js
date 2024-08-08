sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
    "use strict";
    
    return {
      getProductsModel: function () {
        var oModel = new JSONModel({
            products: [
                {
                  id: "P001",
                  name: "Laptop",
                  price: 1000,
                  category: "Electronics",
                  description: "High-performance laptop",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/1/4/-original-imaguyt4gyzmcm9y.jpeg?q=70",
                },
                {
                  id: "P002",
                  name: "T-shirt",
                  price: 20,
                  category: "Clothing",
                  description: "Comfortable cotton T-shirt",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/c/c/m-bw-hs-rn-white-being-wanted-original-imagk5kcadpqwrzg.jpeg?q=70",
                },
                {
                  id: "P003",
                  name: "Book",
                  price: 15,
                  category: "Books",
                  description: "Inspiring autobiography",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/kjkbv680-0/book/p/r/m/wings-of-fire-original-imafz3pawzphkecj.jpeg?q=70",
                },
                {
                  id: "P004",
                  name: "Smartphone",
                  price: 800,
                  category: "Electronics",
                  description: "Latest model with high-end features",
                  availability: "not available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
                },
                {
                  id: "P005",
                  name: "Headphones",
                  price: 150,
                  category: "Electronics",
                  description: "Noise-cancelling headphones",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/a/x/-original-imahfcgyxfjhhh7r.jpeg?q=70",
                },
                {
                  id: "P006",
                  name: "Sunglasses",
                  price: 80,
                  category: "Accessories",
                  description: "Stylish sunglasses with UV protection",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/w/n/p429gr3v-one-size-fits-all-fastrack-original-imagp3eugdafnpdq.jpeg?q=70",
                },
                {
                  id: "P007",
                  name: "Watch",
                  price: 200,
                  category: "Accessories",
                  description: "Elegant wristwatch with leather strap",
                  availability: "not available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/c/w/1-sk-pg-4078-wyt-brwn-basic-with-day-and-date-display-provogue-original-imah2wff4m8yczey.jpeg?q=70",
                },
                {
                  id: "P008",
                  name: "Shoes",
                  price: 120,
                  category: "Footwear",
                  description: "Comfortable running shoes",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/t/n/-original-imahfrsp9ufhpvqz.jpeg?q=70",
                },
                {
                  id: "P009",
                  name: "Jacket",
                  price: 150,
                  category: "Clothing",
                  description: "Warm and stylish winter jacket",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/c/n/h/l-no-62184802-puma-original-imagshjqze9pbbqg.jpeg?q=70",
                },
                {
                  id: "P010",
                  name: "Bag",
                  price: 60,
                  category: "Accessories",
                  description: "Spacious backpack with multiple compartments",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/kiulxu80-0/backpack/n/l/o/pioneer-i-i-pioneer-ii-backpack-puma-original-imafyjm2ushae7b4.jpeg?q=70",
                },
                {
                  id: "P011",
                  name: "Coffee Maker",
                  price: 90,
                  category: "Home Appliances",
                  description: "Easy-to-use coffee maker",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-maker/u/z/4/ep3221-40-philips-original-imah25chz8rrpn9s.jpeg?q=70",
                },
                {
                  id: "P012",
                  name: "Blender",
                  price: 70,
                  category: "Home Appliances",
                  description: "Powerful blender for smoothies",
                  availability: "not available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/ktizdzk0/hand-blender/w/9/r/egg-beater-lassi-butter-milk-maker-royatto-original-imag6ughehfpdc5n.jpeg?q=70",
                },
                {
                  id: "P013",
                  name: "Tablet",
                  price: 400,
                  category: "Electronics",
                  description: "High-resolution screen tablet",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/k/w/-original-imagj72ttsqcrehk.jpeg?q=70",
                },
                {
                  id: "P014",
                  name: "Camera",
                  price: 600,
                  category: "Electronics",
                  description: "DSLR camera with multiple lenses",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
                },
                {
                  id: "P015",
                  name: "Mixer Grinder",
                  price: 80,
                  category: "Home Appliances",
                  description: "Efficient mixer grinder for daily use",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/t/g/p/-original-imagtt6q7gzbtheg.jpeg?q=70",
                },
                {
                  id: "P016",
                  name: "Microwave",
                  price: 130,
                  category: "Home Appliances",
                  description: "Compact microwave oven",
                  availability: "not available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/y/t/t/-original-imagqkfykrwhpfqs.jpeg?q=70",
                },
                {
                  id: "P017",
                  name: "Refrigerator",
                  price: 500,
                  category: "Home Appliances",
                  description: "Large capacity refrigerator",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/c/2/v/-original-imagtsct6d7sgege.jpeg?q=70",
                },
                {
                  id: "P018",
                  name: "Toaster",
                  price: 40,
                  category: "Home Appliances",
                  description: "Two-slice toaster with adjustable settings",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/pop-up-toaster/t/8/d/crisp-pop-up-kent-original-imag92gysyxsrtzf.jpeg?q=70",
                },
                {
                  id: "P019",
                  name: "Electric Kettle",
                  price: 35,
                  category: "Home Appliances",
                  description: "Fast boiling electric kettle",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/l/z/x/-original-imagpgnyh2vxg5pu.jpeg?q=70",
                },
                {
                  id: "P020",
                  name: "Air Conditioner",
                  price: 700,
                  category: "Home Appliances",
                  description: "Energy-efficient air conditioner",
                  availability: "available",
                  imageUrl:
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/l/k/o/-original-imagqe65rrgkabbd.jpeg?q=70",
                },
              ],
        });
        return oModel;
      },
    };
  });
  
var products = [

  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  }

];

// -------------------------------

// Exercise 1

// let productTitles = products.map((products) => products.title)
// console.log(productTitles);

// -------------------------------

// Exercise 2

// let blackclrProd = products.filter((product) => {

//   let find = product.variations.filter((variations) => variations.color === "black")

//   return find

// })
// console.log(blackclrProd);

// -------------------------------


// Exercise 3

// let totalStock = products.reduce((acc , product) => {

//   let productStock = product.variations.reduce((acc , curr) => acc + curr.quantity, 0)

//   return acc + productStock
  
// }, 0)

// console.log(totalStock)

// -------------------------------

// Exercise 4  

// let averageRatings = products.map((products) => {

//   // Filter reviews with status: true
//   let trueReviews = products.reviews.filter((review) => review.status === true)
  
//   // Sum up ratings using reduce
//   let totalRating = trueReviews.reduce((sum , review) => sum + review.rating , 0) 
  
//   // Calculate average rating
//   let average = trueReviews.length > 0 ? totalRating / trueReviews.length : 0

//   return {
//     title : products.title ,
//     averageRating : average
//   }

// })
// console.log(averageRatings)

// -------------------------------

// Exercise 5

// let fiveStarProducts = products.filter((products) => {

//   let find = products.reviews.find((review) => review.rating === 5.0)
  
//   return find

// })
// console.log(fiveStarProducts)

// -------------------------------

// Exercise 6

// let formattedProducts = products.map(products => {

//   return {
//     title: products.title,
//     variations: products.variations.map(variation => ({

//       color: variation.color,
//       price: variation.price,
//       quantity: variation.quantity

//     }))
//   };
// });

// console.log(formattedProducts);

// -------------------------------

// Exercise 7

// let totalRevenue = products.reduce((acc , products) => {

//   let sumPrice = products.variations.reduce((acc , variations) => acc + variations.price , 0)

//   return acc + sumPrice

// } ,0)
// console.log(totalRevenue);

// -------------------------------

// Exercise 8

// let more5Items = products.filter((products) => {

//   let check = products.variations.find((variations) => variations.quantity > 5)

//   return check
// })
// console.log(more5Items);

// -------------------------------

// Exercise 9

// let summaryProd = products.map((products) => ({

//   title     : products.title,
//   variations: products.variations.length,
//   reviews   : products.reviews.length

// }))
// console.log(summaryProd);

// -------------------------------

// Exercise 10

// let highstStckPrdct = products.map((products) => ({

//   title : products.title ,
//   totalStock : products.variations.reduce((sum , variations) => sum + variations.quantity , 0)

// })).reduce((max , curr) => curr.totalStock > max.totalStock ? curr : max)

// console.log(highstStckPrdct)

// -------------------------------
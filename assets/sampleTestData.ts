import faker from "faker";
import { categoryOptions } from "@/assets/categories";
import { countryOptions } from "@/assets/countries";

const estates = [
  //Data copied directly from MongoDB Atlas personal Cluster & Database
  {
    _id: faker.datatype.uuid(),
    title: faker.random.words(3),
    price: faker.finance.amount(100, 20000),
    status: Math.random() < 0.5 ? "sale" : "rent",
    address: faker.address.streetAddress(true),
    province: faker.address.state(),
    postal_code: faker.address.zipCode(),
    country:
      countryOptions[Math.floor(Math.random() * countryOptions.length)].value,
    category:
      categoryOptions[Math.floor(Math.random() * categoryOptions.length)].value,
    bedrooms: faker.datatype.number(10),
    baths: faker.datatype.number(5),
    surface_area: faker.datatype.number(10000),
    property_briefing: faker.lorem.sentences(5),
    additional_info: faker.lorem.sentences(5),
    cooling: Math.random() < 0.5,
    heating: Math.random() < 0.5,
    internet: Math.random() < 0.5,
    furniture: Math.random() < 0.5,
    parking: Math.random() < 0.5,
    email: faker.internet.email(),
    telephone: faker.phone.phoneNumber("+############"),
    createDate: new Date(),
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/real-estate-2ff9c.appspot.com/o/Estates?alt=media&token=03b46643-93ed-4057-adf1-b8308cdaabbb",
    rating: faker.datatype.number(5),
    reviews: faker.datatype.number(100),
    totalRating: faker.datatype.number(100),
  },
  {
    _id: faker.datatype.uuid(),
    title: faker.random.words(3),
    price: faker.finance.amount(100, 20000),
    status: Math.random() < 0.5 ? "sale" : "rent",
    address: faker.address.streetAddress(true),
    province: faker.address.state(),
    postal_code: faker.address.zipCode(),
    country:
      countryOptions[Math.floor(Math.random() * countryOptions.length)].value,
    category:
      categoryOptions[Math.floor(Math.random() * categoryOptions.length)].value,
    bedrooms: faker.datatype.number(10),
    baths: faker.datatype.number(5),
    surface_area: faker.datatype.number(10000),
    property_briefing: faker.lorem.sentences(5),
    additional_info: faker.lorem.sentences(5),
    cooling: Math.random() < 0.5,
    heating: Math.random() < 0.5,
    internet: Math.random() < 0.5,
    furniture: Math.random() < 0.5,
    parking: Math.random() < 0.5,
    email: faker.internet.email(),
    telephone: faker.phone.phoneNumber("+############"),
    createDate: new Date(),
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/real-estate-2ff9c.appspot.com/o/Estates?alt=media&token=03b46643-93ed-4057-adf1-b8308cdaabbb",
    rating: faker.datatype.number(5),
    reviews: faker.datatype.number(100),
    totalRating: faker.datatype.number(100),
  },
];

export { estates };

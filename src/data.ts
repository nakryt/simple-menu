export enum TypeOfFood {
  "breakfast" = "breakfast",
  "lunch" = "lunch",
  "shake" = "shake",
  "all" = "all",
}

export type Data = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  typeOfFood: TypeOfFood;
};

const data: Data[] = [
  {
    id: "1",
    title: "Buttermilk Pancakes",
    price: 15,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    image: "item-1",
    typeOfFood: TypeOfFood.breakfast,
  },
  {
    id: "2",
    title: "Diner Double",
    price: 30,
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    image: "item-2",
    typeOfFood: TypeOfFood.lunch,
  },
  {
    id: "3",
    title: "Godzilla Milkshake",
    price: 10,
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    image: "item-3",
    typeOfFood: TypeOfFood.shake,
  },
  {
    id: "4",
    title: "Country Delight",
    price: 25,
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    image: "item-4",
    typeOfFood: TypeOfFood.breakfast,
  },
  {
    id: "5",
    title: "Egg Attack",
    price: 15,
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    image: "item-5",
    typeOfFood: TypeOfFood.lunch,
  },
  {
    id: "6",
    title: "Oreo Dream",
    price: 17,
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    image: "item-6",
    typeOfFood: TypeOfFood.shake,
  },
  {
    id: "7",
    title: "Bacon Overflow",
    price: 30,
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    image: "item-7",
    typeOfFood: TypeOfFood.breakfast,
  },
  {
    id: "8",
    title: "American Classic",
    price: 35,
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    image: "item-8",
    typeOfFood: TypeOfFood.lunch,
  },
  {
    id: "9",
    title: "Quarantine Buddy",
    price: 30,
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    image: "item-9",
    typeOfFood: TypeOfFood.shake,
  },
];

export default data;

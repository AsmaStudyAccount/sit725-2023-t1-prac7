// This would be where you interact with a database in a real app
var cardData = [
  {
    title: "Kitten 2",
    image: "images/kitten2.png",
    link: "About Kitten 2",
    description: "Demo description about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.png",
    link: "About Kitten 3",
    description: "Demo description about kitten 3",
  },
];

exports.getCardData = () => {
  return cardData;
};

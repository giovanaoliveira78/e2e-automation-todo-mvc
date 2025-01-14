export function getRandomItem() {
  const fruitsAndVegetables = [
    'Pear', 'Apple', 'Grape', 'Pitaya', 'Melon', 'Pineapple', 
    'Strawberry', 'Blueberry', 'Orange', 'Mango', 'Potato', 
    'Carrot', 'Broccoli', 'Zucchini', 'Bell pepper', 'String bean', 'Kale'
  ];
  
  const randomIndex = Math.floor(Math.random() * fruitsAndVegetables.length);
  return fruitsAndVegetables[randomIndex];
}
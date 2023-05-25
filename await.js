console.log('person1 shows ticket');
console.log('person2 shows ticket');

const getColdDrinks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
  });
};

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });
  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I don't like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  console.log(`Husband: Anything else, darling?`);
  console.log(`Wife: Let's go; we are going to miss the preview`);
  console.log(`Husband: Thanks for the reminder *grin*`);

  let drinks = await getColdDrinks();
  console.log(`Husband: Here are ${drinks}`);

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

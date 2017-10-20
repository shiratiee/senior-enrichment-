const db = require("./db");
const Campuses = require("./db/models/campuses")
const Student = require("./db/models/student")


const campuses = [{
  "name": "Mars University",
  "image": "https://qph.ec.quoracdn.net/main-qimg-d5a99432422e87f07acfa7c5fe21858c-c"
}, {
  "name": "Venus University",
  "image": "http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2005/07/mariner_10_image_of_venus_cloud_tops/10179851-2-eng-GB/Mariner_10_image_of_Venus_cloud_tops_large.jpg"
}, {
  "name": "Saturn University",
  "image": "https://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg"
}, {
  "name": "Neptune University",
  "image": "https://solarsystem.nasa.gov/images/galleries/Neptune_Full_br.jpg"
}];

const students = [{
    "name": "Sailor Moon",
    "email": "sailormoon@gmail.com",
    "campusId": 3
  }, {
    "name": "Sailor Venus",
    "email": "sailorvenus@gmail.com",
    "campusId": 1
  }, {
    "name": "Sailor Mars",
    "email": "sailormars@gmail.com",
    "campusId": 2
  }, {
    "name": "Sailor Jupiter",
    "email": "sailorjupiter@gmail.com",
    "campusId": 2
  }
  , {
    "name": "Sailor Pluto",
    "email": "sailorpluto@gmail.com",
    "campusId": 3
  }, {
    "name": "Sailor Mercury",
    "email": "sailormercury@gmail.com",
    "campusId": 4
  }, {
    "name": "Sailor Earth",
    "email": "sailorearth@gmail.com",
    "campusId": 3
  }, {
    "name": "Sailor Deimos ",
    "email": "sailordeimos@gmail.com",
    "campusId": 1
  }, {
    "name": "Sailor Phobos ",
    "email": "sailorphobos@gmail.com",
    "campusId": 1
  }, {
    "name": "Sailor Triton ",
    "email": "sailortriton@gmail.com",
    "campusId": 4
  }];

  const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campuses.create(campus))
  ))
  .catch(err => {
    console.log("Error in Promise");
    console.log(err.stack);
  })





const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding database...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
    });
};



  main();
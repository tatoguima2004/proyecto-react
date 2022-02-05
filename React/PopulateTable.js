const mongoose = require('mongoose');
const User = require('./models/User');

const db = 'mongodb+srv://tato2004:tato123456@cluster0.0akxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const user= [
    {
        id: 1,
        name: 'ELpepe',
        mail: 'etesech@gmail.com',
        password:'potaxio'
    },
    {
        id: 2,
        name: 'Joaquin',
        mail: 'elpro@hotmail.com',
        password:'123456'
    },
    {
        id: 3,
        name: 'ivo',
        mail: 'elaguacate@yahoo.com',
        password:'esunafruta123'
    },
    {
        id: 4,
        name: 'fede',
        mail: 'fede46@gmail.com',
        password:'fedepro2005'
    },
];

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(user, (err, user) => {
      if (err) throw err;
      console.log(`${user.length} documents inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
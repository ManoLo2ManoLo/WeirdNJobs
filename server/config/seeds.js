const db = require('./connection');
const { County } = require('../models');

db.once('open', async () => {
    await County.deleteMany();

    await County.insertMany([
        { name: 'Atlantic' }, 
        { name: 'Bergen' }, 
        { name: 'Burlington' }, 
        { name: 'Camden' }, 
        { name: 'Cape May' }, 
        { name: 'Cumberland' }, 
        { name: 'Essex' }, 
        { name: 'Gloucester' },
        { name: 'Hudson' }, 
        { name: 'Hunterdon' }, 
        { name: 'Mercer' }, 
        { name: 'Middlesex' }, 
        { name: 'Monmouth' }, 
        { name: 'Morris' }, 
        { name: 'Ocean' }, 
        { name: 'Passaic' }, 
        { name: 'Salem' },
        { name: 'Somerset' }, 
        { name: 'Sussex' }, 
        { name: 'Union' }, 
        { name: 'Warren' }
    ]);

    console.log('counties seeded');

    process.exit();
})
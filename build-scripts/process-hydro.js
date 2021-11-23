const fs = require('fs');
const turf = require('@turf/turf)');

// read the California hydrography file 
fs.readFile(__dirname + '/../project-files/california-rivers.json', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log('file read');

    // parse the string to geojson, calling the parse function with 'data' parameter
    const caRivers = JSON.parse(data)

    console.log('successfully parsed')

    // set Turf simplify options
    const options = {tolerance: 0.01, highQuality: false};

    // declare variable and call simplify function
    const simplified = turf.simplify(caRivers, options);
    //const outFileName = 'C:\NewMapsPlus\Map675\675-assignment-03\project-files';

    // create new file with writeFile and stringify functions from files that have been simplified
    fs.writeFrile(__dirname + '/../data/caSimpleRivers.json', JSON.stringify(simplified), 'utf-8', (err) => {
        if (err) throw err;
        console.log(outFileName + 'written to file!')
    });

});

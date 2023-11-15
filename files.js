const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

//writing files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was written');
});

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    // Remove files inside the directory before removing it
    fs.readdirSync('./assets').forEach((file) => {
        const filePath = './assets/' + file;
        fs.unlinkSync(filePath);
    });

    // Now, remove the directory
    fs.rmdirSync('./assets');
    console.log('folder deleted');
}


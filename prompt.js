//Trying the package Inquirer

const { fstat } = require('fs');
const inquirer = require('inquirer');
const qr = require('qr-image');

inquirer
    .prompt([
        {
        message: 'Enter the name of the webiste to create QR code',
        name: 'URL',
        },
    ])

    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        //qr_svg.pipe(require('fs').createWriteStream('output.png'));
        qr_svg.pipe(fs.createWriteStream("qr_image.png"));
        fs.writeFile("URL.txt", url,(err) =>{
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })

    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
const prompt = require('prompt-sync') ();

const pinCode = '1234';

const passCode = prompt('Please enter the pass code. ');
if (passCode === '1234') {
    console.log('success');
}
if (passCode !== '1234') {
    console.log('failure');
}
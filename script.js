function convertLength() {
    const input = document.getElementById('lengthInput').value;
    const unit = document.getElementById('lengthUnit').value;
    let result;

    switch(unit) {
        case 'meter':
            result = input + ' meters is equal to ' + (parseFloat(input) * 0.001).toFixed(2) + ' kilometers';
            break;
        case 'kilometer':
            result = input + ' kilometers is equal to ' + (parseFloat(input) * 1000).toFixed(2) + ' meters';
            break;
        case 'mile':
            result = input + ' miles is equal to ' + (parseFloat(input) * 1.60934).toFixed(2) + ' kilometers';
            break;
        default:
            result = 'Invalid unit';
    }

    document.getElementById('lengthResult').innerText = result;
}

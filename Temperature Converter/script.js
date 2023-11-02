function convertTemp() {

    var num = parseFloat(document.getElementById("num").value);
    var unitInput = document.getElementById("inputTemp").value;
    var unitOutput = document.getElementById("outputTemp").value;
    var result = document.getElementById("result");


    if (unitInput === 'cel') {

        if (unitOutput === 'cel') {
            result.innerHTML = num;

        } else if (unitOutput === 'fah') {
            let f = (num * 9 / 5) + 32;
            result.innerHTML = f;

        } else if (unitOutput === 'kel') {
            let k = num + 273.15;
            result.innerHTML = k;

        }

    } else if (unitInput === 'fah') {

        if (unitOutput === 'cel') {
            let c = ((num - 32) * 5) / 9;
            result.innerHTML = c;

        } else if (unitOutput === 'fah') {
            result.innerHTML = num;

        } else if (unitOutput === 'kel') {
            let k = ((num - 32) * 5) / 9 + 273.15;
            result.innerHTML = k;

        }

    } else if (unitInput === 'kel') {

        if (unitOutput === 'cel') {
            let c = num - 273.15;
            result.innerHTML = c;

        } else if (unitOutput === 'fah') {
            let f = ((num - 273.15) * 9) / 5 + 32;
            result.innerHTML = f;

        } else if (unitOutput === 'kel') {
            result.innerHTML = num;

        }

    }

}
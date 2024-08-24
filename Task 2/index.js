function temperatureConverter() {
    let tempreture = document.getElementById("temp").value;

    document.getElementById("answer").innerHTML = tempreture * (9 / 5) + 32;

    return false;
}

document.querySelector('#click-me').onclick = lifetimeSupply;

function lifetimeSupply () {
    let age = document.querySelector('#age').value;
    let maxAge = document.querySelector('#max-age').value;
    let item = document.querySelector('#item').value;
    let dailyNum = document.querySelector('#num-per-day').value;

    let solution = (maxAge - age) * dailyNum * 365;

    document.querySelector('#solution').innerHTML = solution;
    document.querySelector('#drink').innerHTML = item;
}
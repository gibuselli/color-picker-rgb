function changeColor () {
    let red = document.getElementById('red-range').value;
    let green = document.getElementById('green-range').value;
    let blue = document.getElementById('blue-range').value;

    let colorRgb = `rgb(${red},${green},${blue})`;
    
    let colorBox = document.querySelector('.color-box');
    colorBox.style.backgroundColor = colorRgb;

    let textRgb = document.querySelector('.rgb');

    textRgb.textContent = colorRgb;
}

document.getElementById('red-range').addEventListener('input', changeColor);

document.getElementById('green-range').addEventListener('input', changeColor);

document.getElementById('blue-range').addEventListener('input', changeColor);


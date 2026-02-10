// Simple computeArea function that reads inputs and writes the result
function computeArea() {
    const in1 = document.getElementById('input1');
    const in2 = document.getElementById('input2');
    const out = document.getElementById('result');
    const b = parseFloat(in1.value);
    const h = parseFloat(in2.value);
    if (Number.isNaN(b) || Number.isNaN(h) || b <= 0 || h <= 0) {
        out.textContent = 'Please enter positive numbers for base and height.';
        return;
    }
    const area = (b * h) / 2;
    out.textContent = 'The area of the triangle is: ' + area;
}
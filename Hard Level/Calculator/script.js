
function calculate() {
    let first_num = document.getElementById('num1').value;
    let sec_num = document.getElementById('num2').value;
    let work_type = document.getElementById('operators').value;
    let result_box = document.querySelector('.results');

    let num_first = parseFloat(first_num);
    let num_sec = parseFloat(sec_num);

    let result = 0;
    let operation_type = '';

    if (work_type === 'plus') {
        result = num_first + num_sec;
        operation_type = "Addition";
    } else if (work_type === 'minus') {
        result = num_first - num_sec;
        operation_type = 'Subtraction';
    } else if (work_type === 'multiply') {
        result = num_first * num_sec;
        operation_type = 'Multiplication';
    } else {
        result = num_first / num_sec;
        operation_type = 'Divison';
    }

    if (first_num != '' && sec_num != '') {
        result_box.style.display = 'block';
        result_box.innerHTML = `The ${operation_type} of ${num_first} and ${num_sec} is = ${result}`;
    } else {
        result_box.style.display = 'none';
    }

}

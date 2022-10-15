// Задача 1
function buttonClick() {
    var input = document.getElementById("input")
    alert(input.value)
}
// Задача 2
function Change() {
    var change1 = document.getElementById('change');
    var change2 = document.getElementById('change2');
    var change1Value = change1.value;
    var change2Value = change2.value;
    change1.value = change2Value;
    change2.value = change1Value;
}

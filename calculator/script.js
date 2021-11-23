// for clear button
function deleteMe() {
    document.getElementById('result').value = null;
}
deleteMe();


// for adding any value
function addMe(newValue) {
    document.getElementById('result').value += newValue;
}


// for output
function outPut() {
    let getId = document.getElementById('result').value;
    let answer = eval(getId);

    document.getElementById('result').value = answer;
}
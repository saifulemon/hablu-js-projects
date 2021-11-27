// all selector
const AppBody = document.querySelector('.appbody'),
    dragText = AppBody.querySelector('h3'),
    button = AppBody.querySelector('button'),
    input = AppBody.querySelector('input');

let MyFile;

button.onclick = () => {
    input.click()
}

input.addEventListener('change', function() {
    MyFile = this.files[0];
    AppBody.classList.add('active');

    showMe();
})

AppBody.addEventListener('dragover', (event) => {
    event.preventDefault();
    AppBody.classList.add('active');
    dragText.textContent = 'Release to Upload File';
})


AppBody.addEventListener('dragleave', () => {
    AppBody.classList.remove('active');
    dragText.textContent = 'Drag and Drop';
})


AppBody.addEventListener('drop', (event) => {
    event.preventDefault();
    MyFile = event.dataTransfer.files[0];

    showMe();
})


// main function
function showMe() {
    let fileType = MyFile.type;
    let validEx = ['image/jpg', 'image/jpeg', 'image/png'];

    if (validEx.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let imgSrc = `<img src="${imgUrl}" alt="">`

            AppBody.innerHTML = imgSrc;
        }
        fileReader.readAsDataURL(MyFile);
    } else {
        alert('This file is not valid');
        AppBody.classList.remove('active');
        dragText.textContent = 'Drag and Drop';
    }
}
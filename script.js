const user = '{"name":"Taro", "age":42, "gender": "male"}';
const userObj = JSON.parse(user);
console.log(userObj);

const User = { name: "Taro", Age: 13, gender: "male" };
const JSONFormat = JSON.stringify(User);
console.log(JSONFormat);

const newBtn = document.getElementById("submitBtn");
newBtn.addEventListener("click",()=>{
    const textClear = document.querySelectorAll(".error");
    textClear.forEach(src => src.textContent = "");

    const nameText = document.getElementById("nameInput").value;
    const ageText = document.getElementById("ageInput").value;
    const emailText = document.getElementById("emailInput").value;
    const phoneText = document.getElementById("phoneInput").value;

    const nameCheckError = /[\x01-\x7E\uFF61-\uFF9F]/.test(nameText);
    if(nameText === "" || nameCheckError){
        const nameCheck = document.getElementById("nameError");
        nameCheck.textContent = "正しい名前を入力してください";
    }

    const ageCheckError = /^[0-9]+$/.test(ageText);
    if(ageText === "" || !ageCheckError){
        const ageCheck = document.getElementById("ageError");
        ageCheck.textContent = "正しい年齢を入力してください"
    }

    const emailCheckError = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(emailText);
    if(emailText === "" || !emailCheckError){
        const emailCheck = document.getElementById("emailError");
        emailCheck.textContent = "正しいメールアドレスを入力してください"
    }

    if(phoneText === "" || phoneText.length !== 11 || isNaN(phoneText)){
        const phoneCheck = document.getElementById("phoneError");
        phoneCheck.textContent = "正しい電話番号を入力してください"
    }
});
const user = '{"name":"Taro", "age":42, "gender": "male"}';
const userObj = JSON.parse(user);
console.log(userObj);

const User = { name: "Taro", Age: 13, gender: "male" };
const JSONFormat = JSON.stringify(User);
console.log(JSONFormat);

const validationCheck = (targetId, regex, errorId, errorMessage)=>{
    const targetText = document.getElementById(targetId).value;
    const checkRegexError = !regex.test(targetText);
    if(targetText === "" || checkRegexError){
        const targetError = document.getElementById(errorId);
        targetError.textContent = errorMessage;
    }
}

const newBtn = document.getElementById("submitBtn");
newBtn.addEventListener("click",()=>{
    const textClear = document.querySelectorAll(".error");
    textClear.forEach(src => src.textContent = "");

    validationCheck("nameInput",  /^[^\x01-\x7E\uFF61-\uFF9F]+$/, "nameError",  "正しい名前を入力してください");
    validationCheck("ageInput", /^[0-9]+$/, "ageError", "正しい年齢を入力してください");
    validationCheck("emailInput", /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/, "emailError", "正しいメールアドレスを入力してください");

    const phoneText = document.getElementById("phoneInput").value;
    if(phoneText === "" || phoneText.length !== 11 || isNaN(phoneText)){
        const phoneCheck = document.getElementById("phoneError");
        phoneCheck.textContent = "正しい電話番号を入力してください"
    }
});
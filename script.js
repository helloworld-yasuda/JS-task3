const user = '{"name":"Taro", "age":42, "gender": "male"}';
const userObj = JSON.parse(user);
console.log(userObj);

const profile = { name: "Taro", Age: 13, gender: "male" };
const jsonFormat = JSON.stringify(profile);
console.log(jsonFormat);

// form課題
const newBtn = document.getElementById("submitBtn");

// 正規表現はここから
const nameRegex =  /^[^\x01-\x7E\uFF61-\uFF9F]+$/;
const ageRegex = /^[0-9]+$/;
const emailRegex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const phoneRegex = /^[0-9]{11}$/;

const validationCheck = (targetId, regex, errorId, message) => {
    const targetText = document.getElementById(targetId).value;
    const checkRegexError = !regex.test(targetText);
    if(targetText === "" || checkRegexError){
        const targetError = document.getElementById(errorId);
        targetError.textContent = createMessage(message);
    }
}

const clearErrors = () => {
    const textClear = document.querySelectorAll(".error");
    textClear.forEach(src => src.textContent = "");
}

const createMessage = (message) => {
    return `正しい${message}を入力してください`;
}

const allValidationCheck = () => {
    clearErrors();
    validationCheck("nameInput", nameRegex, "nameError", createMessage("名前"));
    validationCheck("ageInput",ageRegex, "ageError", createMessage("年齢"));
    validationCheck("emailInput", emailRegex, "emailError", createMessage("メールアドレス"));
    validationCheck("phoneInput", phoneRegex, "phoneError", createMessage("電話番号"));
}

newBtn.addEventListener("click", allValidationCheck)
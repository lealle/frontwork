function validata() {
    const inputId = document.getElementById('userId');
    const inputPw = document.getElementById('userPw');
    const checkPw = document.getElementById('checkPw');
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    //id 첫글자는 반드시 영문자하고 영문자, 숫자포함 총4~12자로 입력하시오
    let regExp = /^[a-z][a-z\d]{3,11}/i;
    // 영문자 숫자 특수기호가 반드시 1개씩은 들어가야됨

    if (!regExp.test(inputId.value)) {
        alert('유효하지 않은 아이디입니다.')
        inputId.value = '';
        inputId.focus();
        return false;
    }

    // pw 영문자,숫자,특수문자로 총 8~15문자로 입력하시오
    regExp = /^[a-z\d!@#$%^&*]{8,15}$/i;

    //영문자,숫자,특수문자 1개씩은 들어가야됨
    // ?= 앞부분 일치;
    // regExp = /(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,15}$/i;

    if (!regExp.test(inputPw.value)) {
        alert('유효하지 않은 비밀번호입니다.')
        inputPw.value = '';
        inputPw.focus();
        return false;
    }

    // checkPw

    if (checkPw.value != inputPw.value) {
        alert('비밀번호가 일치하지 않습니다.')
        checkPw.value = '';
        checkPw.focus();
        return false;
    }


    // name
    // 한글로만 이루어져 있어야 되며 2글자 이상
    regExp = /^[가-힣]{2,}$/i;

    if (!regExp.test(name.value)) {
        alert('유효한 이름을 입력하시오.')
        name.value = '';
        name.focus();
        return false;
    }

    //email
    //이메일 형식에 맞춰 입력하시오.
    regExp = /^[a-zA-Z\d]+@[a-z]+\.[a-z]{2,5}$/;
    // regExp = /^\w+@[a-z]+(\.[a-z]+)?/;
    if (!regExp.test(email.value)) {
        alert('유효한 이름을 입력하시오.')
        email.value = '';
        email.focus();
        return false;
    }





















}

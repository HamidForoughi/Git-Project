const register = () => {

  const $ = document;
  const nameInput = $.getElementById('name');
  const usernameInput = $.getElementById('username');
  const emailInput = $.getElementById('email');
  const phoneInput = $.getElementById('phone');
  const passwordInput = $.getElementById('password');

  const newUserInfos = {
    name: nameInput.value.trim(),
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
    confirmPassword: passwordInput.value.trim()
  };

  fetch(`http://localhost:3000/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserInfos)
  })
  .then((res) => {
    if(res.status === 201) {
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: 'success',
        buttons: 'ورود به پنل'
      })
    } else if (res.status === 409) {
      swal({
        title: "نام کاربری یا ایمیل قبلا استفاده شده",
        icon: 'error',
        buttons: 'تصحیح اطلاعات'
      })
    }
    return res.json()
  })
  .then((result) => console.log(result));

};

export { register };
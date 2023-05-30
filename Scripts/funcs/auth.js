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
      return res.json(); // return the response in the next then block
    } else if (res.status === 409) {
      throw new Error("نام کاربری یا ایمیل قبلا استفاده شده"); // throw an error to be caught in the next catch block
    } else {
      throw new Error("خطایی رخ داده است، لطفا دوباره تلاش کنید"); // throw an error to be caught in the next catch block
    }
  })
  .then((result) => {
    swal({
      title: "ثبت نام با موفقیت انجام شد",
      icon: 'success',
      buttons: 'ورود به پنل'
    }).then(() => {
      // redirect the user to the panel after successful registration
      window.location.href = "/panel";
    });
  })
  .catch((err) => {
    // show the error message to the user
    swal({
      title: err.message,
      icon: 'error',
      buttons: 'تصحیح اطلاعات'
    });
  });
};

export { register };

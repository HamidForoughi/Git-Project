const handleRegistrationFormSubmit = async () => {
  const nameInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');

  const newUserInfos = {
    name: nameInput.value.trim(),
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
    confirmPassword: passwordInput.value.trim()
  };

  if (!newUserInfos.name || !newUserInfos.username || !newUserInfos.email || !newUserInfos.password) {
    new swal({
      title: 'لطفا تمامی فیلدهای مورد نیاز را پر کنید',
      icon: 'warning',
      buttons: 'تأیید'
    });
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserInfos)
    });

    if (response.status === 201) {
      const result = await response.json();
      new swal({
        title: 'ثبت نام با موفقیت انجام شد',
        icon: 'success',
        buttons: 'ورود به پنل'
      }).then(() => {
        location.replace('/panel'); // redirect the user to the panel after successful registration
      });
    } else if (response.status === 409) {
      throw new Error('نام کاربری یا ایمیل قبلا استفاده شده');
    } else {
      throw new Error('خطایی رخ داده است، لطفا دوباره تلاش کنید');
    }
  } catch (err) {
    new swal({
      title: err.message,
      icon: 'error',
      buttons: 'تصحیح اطلاعات'
    });
  }
};

export { handleRegistrationFormSubmit };

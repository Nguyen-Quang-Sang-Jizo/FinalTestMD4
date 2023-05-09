function showFormLogin() {
    let htmlFormLogin = `
    <div class="login-form">
    <h2>Đăng nhập</h2>
    <div class="form-group">
      <label for="username">Tên đăng nhập:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
      <label for="password">Mật khẩu:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button onclick="logIn()" class="btn btn--success">Đăng nhập</button>
    <button onclick="showFormRegister()" class="btn btn--success">Đăng ký</button>

  </div>`
    $('#body').html(htmlFormLogin)
}
showFormLogin()

function logIn() {
    let username = $('#username').val();
    let password = $('#password').val();
    if (!username || !password) {
        alert('Tên đăng nhập và mật khẩu là bắt buộc phải nhập!');
        return;
    }
    let user = {
        username: username,
        password: password
    }
    console.log(user);
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/auth/login",
        headers: {
            'Content-Type': 'application/json',

        },
        data: JSON.stringify(user),
        success: (token) => {
            localStorage.setItem('token', token)
            showHome()
        }
    })
}
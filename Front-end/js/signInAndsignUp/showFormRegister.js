function showFormRegister() {
    let htmlFormRegister = `<div class="login-form" >
        <h2>Đăng ký</h2>
        <div class="form-group">
            <label for="username">Tên đăng nhập:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
            <label for="image">Hình ảnh:</label>
            <input type="hidden" id="image" name="image">
            <div id="imgDiv"></div>
            <input type="file" id="fileButton" onchange="uploadImage(event)"><br>
        </div>
        <button onclick="register()" class="btn btn--success">Đăng Ký</button>
        <button onclick="showFormLogin()" class="btn btn--success">Đăng Nhập</button>
    </div>`
    $('#body').html(htmlFormRegister)
}

function register() {
    let username = $('#username').val();
    let password = $('#password').val();
    let image = $('#image').val();
    // Validate ô input username và password bắt buộc phải nhập
    if (!username || !password) {
        alert('Tên đăng nhập và mật khẩu là bắt buộc phải nhập!');
        return;
    }
    let user = {
        username: username,
        password: password,
        image: image
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/auth/register",
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success: () => {
            showFormLogin();
        },
    });
}
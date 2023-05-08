function showFormLogin() {
    let htmlFormLogin = `<input type="text" id="username">
                    <input type="text" id="password">
                    <button onclick="logIn()">dangnhap</button>`
    $('#body').html(htmlFormLogin)
}

function logIn() {
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password
    }
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
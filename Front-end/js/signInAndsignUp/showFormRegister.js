function showFormRegister() {
    let htmlFormLogin = `<input type="text" id="username">
                     <input type="text" id="password">
                     <input type="text" id="image">
                     <button onclick="register()">dangky</button>`
    $('#body').html(htmlFormLogin)
}

function register() {
    let username = $('#username').val();
    let password = $('#password').val();
    let image = $('#image').val();
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
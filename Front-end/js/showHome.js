function showHome() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/post',
        headers: {
            'Content-Type': 'application/json'
        },
        success: (posts) => {
            console.log(posts)
            let html = ``;
            posts.forEach(item => {

                html += `<tr>
            <td>${item.id}
            </td>
            <td>
            ${item.title}</td>
            <td>
            ${item.content}</td>
            <td>
            <td>
            ${item.date_created}</td>
            <td><td>
            ${item.date_updated}</td>
            <td>
            <img src="${item.image}">
            </td>
            </tr>`
            })

            $('#body').html(html)
        }
    })
}

function showFormLogin() {
    let htmlFormLogin = `<input type="text" id="username">
                    <input type="text" id="password">
                    <button onclick="dangnhap()">dangnhap</button>`
    $('#body').html(htmlFormLogin)
}

function dangnhap() {
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

function logout() {
    localStorage.removeItem("token")
    showFormLogin()
}

function showFormDangKy() {
    let htmlFormLogin = `<input type="text" id="username">
                    <input type="text" id="password">
                    <input type="text" id="image">
                    <button onclick="dangky()">dangky</button>`
    $('#body').html(htmlFormLogin)
}


function dangky() {
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
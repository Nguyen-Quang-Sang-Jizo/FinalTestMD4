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
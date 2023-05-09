function showHome() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: (posts) => {

            console.log(posts)
            let html = ``;
            posts.forEach(item => {

                html += ` <div style="margin-top:10px;border-radius:10px;width:500px; background-color:white; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                <div class="post__top">
                <img class="user__avatar post__avatar" src="${item.author.image}"
                    alt="" />
                <div class="post__topInfo">
                    <h3>${item.author.username}</h3>
                    <p>${item.date_updated}</p>
                </div>
            </div>

            <div class="post__bottom">
                <p>${item.content}</p>
            </div>

            <div class="post__image">
                <img src="${item.image}" alt="" />
            </div>

            <div class="post__options">
                <div class="post__option">
                    <span class="material-icons"> thumb_up </span>
                    <p>Like</p>
                </div>

                <div class="post__option">
                    <span class="material-icons"> chat_bubble_outline </span>
                    <p>Comment</p>
                </div>

                <div class="post__option">
                    <span class="material-icons"> near_me </span>
                    <p>Share</p>
                </div>
            </div>
            </div>`
            })

            $('#body').html(html)
        }
    })
}
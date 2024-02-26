fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => {
        return response.json()
    })
    .then((jsondata) => {
        // console.log(json);
        let data = "";
        jsondata.map((values) => {
            data += `
                <div class="datas">
                    <p>postId : ${values.postId}</p>
                    <p>id : ${values.id}</p>
                    <p>name : ${values.name}</p>
                    <p>email : ${values.email}</p>
                    <p>body : ${values.body}</p>
                </div>`
        })
    document.getElementById("postdata").innerHTML =data;
    }) 
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => {
        return response.json()
    })
    .then((jsondata) => {
        // console.log(json);
        let data = "";
        jsondata.map((values) => {
            data += `
                <div class="datas">
                    <p>userId : ${values.userId}</p>
                    <p>id : ${values.id}</p>
                    <p>title : ${values.title}</p>
                    <p>body : ${values.body}</p>
                </div>`
        })
    document.getElementById("userdata").innerHTML = data;
    }) 
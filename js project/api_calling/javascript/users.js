// api data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    })
    .then((jsondata) => {
        // console.log(json);
        let data = "";
        jsondata.map((values) => {
            data += `
                <div class="datas">
                    <p>id : ${values.id}</p>
                    <p>name : ${values.name}</p>
                    <p>username : ${values.username}</p>
                    <p>email : ${values.email}</p>
                    <div class="address">
                        <p>street : ${values.address.street}</p>
                        <p>suite : ${values.address.suite}</p>
                        <p>city : ${values.address.city}</p>
                        <p>zipcode : ${values.address.zipcode}</p>
                        <div class="geo">
                            <p>lat : ${values.address.geo.lat}</p>
                            <p>lng : ${values.address.geo.lng}</p>
                        </div>
                    </div>
                    <p>phone : ${values.phone}</p>
                    <p>website : ${values.website}</p>
                    <div>
                        <p>company name : ${values.company.name}</p>
                        <p>company catchPhrase : ${values.company.catchPhrase}</p>
                        <p>company bs : ${values.company.bs}</p>
                     </div>
                </div>`
        })
    document.getElementById("output").innerHTML = data;
    }) 
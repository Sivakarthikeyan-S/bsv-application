let walletBalance = async() => {
    var config = {
        method: 'post',
        url: "https://api.relysia.com/v1/send",
        headers: { authToken: document.getElementById("authToken").value },
        data: {
             "dataArray": [
                {
                  "to": "17n2JVhrCf1oYSMkZtZNjcf1deteUEKQsH",
                  "amount": 0.0000001
                }
              ]
        }
    };
            
     let p = document.getElementById("response");
     const res = await axios(config)
    .then((response) => {
      p.innerHTML = JSON.stringify(response.data.data.msg, null, "<br/>");
    }).catch(function (error) {
        return error.message
    })
};
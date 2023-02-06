let walletBalance = () => {
    var config = {
        method: 'get',
        url: "https://api.relysia.com/v1/balance",
        headers: { authToken: document.getElementById("authToken").value },
    };
            
    axios(config)
    .then((response) => {
      let p = document.getElementById("token");
      console.log(response.data.data);
      p.innerHTML = JSON.stringify(response.data.data.coins, null, "<br/>");
    })
};
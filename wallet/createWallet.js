let createWallet = () => {
    var config = {
        method: 'get',
        url: "https://api.relysia.com/v1/createWallet",
        headers: { authToken: document.getElementById("authToken").value, 
                   walletTitle: 'default2' }
    };
            
    axios(config)
    .then((response) => {
      let p = document.getElementById("token");
      p.innerHTML = JSON.stringify(response.data.data, null, "<br>");
    })
};

let showWallets = () => {
    var config = {
        method: 'get',
        url: "https://api.relysia.com/v1/wallets",
        headers: { authToken: document.getElementById("authToken").value }
    };
            
    axios(config)
    .then((response) => {
      let p2 = document.getElementById("wallets");
      p2.innerHTML = JSON.stringify(response.data.data, null, "<br>");
    })
};
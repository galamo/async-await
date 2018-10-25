const config = {
    countries_url: "https://restcountries.eu/rest/v2/name/",

}

let getCryptoUrl = (from, to) => {
    return `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`;
}
const HTTP_METHOD = {
    GET: "GET"
}




let getCountryByName = (name) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: HTTP_METHOD.GET,
            url: config.countries_url + name,
            success: (response) => {
                if (response.length > 1) {
                    reject({ status: 1, msg: "Only one country is needed" });
                }
                else {
                    resolve(response[0].currencies[0].code)
                }
            }, error: (error) => {
                reject({ status: 2, msg: "wrong url" });
            }
        })
    })
}

let convert = (from, to) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: HTTP_METHOD.GET,
            url: getCryptoUrl(from, to),
            success: (response) => {
                resolve(response)

            }, error: (error) => {
                reject(error);
            }
        })
    })
}





let exchange = async () => {
    let inputSearch = $("#searchInput").val();

    getCountryByName(inputSearch).then((from) => {
        let currencies = $("#sortable2").children()
        if (currencies.length > 0) {
            let result = [];
            for (let index = 0; index < currencies.length; index++) {

                result.push(currencies[index].innerHTML);
            }
            let to = result.join(",")
            return { from, to }//responsechain
        }
        else {
            throw new Error({ status: 4, msg: "no selected exchange currnecies" });
        }
    }).then((responsechain) => {
        convert(responsechain.from, responsechain.to).then((response) => {
            $("#result").html(JSON.stringify(response))
        })
    }).catch((err) => {
        console.error(err.msg);
    })


}


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





// let exchange = async () => {
//     let inputSearch = $("#searchInput").val();
//     let result = [];
//     let to;

//     try {
//         let countryCode = await getCountryByName(inputSearch);
//         let currencies = $("#sortable2").children()
//         if (currencies.length > 0) {

//             for (let index = 0; index < currencies.length; index++) {

//                 result.push(currencies[index].innerHTML);
//             }
//             to = result.join(",")

//         } else {
//             throw new Error("No Selected exchanges")
//         }
//         let exchangeResult = await convert(countryCode, to);
//         $("#result").html(JSON.stringify(exchangeResult))
//     } catch (error) {
//         $("#result").html(JSON.stringify(error))
//     }





// }


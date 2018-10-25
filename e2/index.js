const config = {
    countries_url: "https://restcountries.eu/rest/v2/all",

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
            url: config.countries_url,
            success: (response) => {

                resolve(response[0].currencies[0].code)

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

console.log("start operation?");
async function getCountryCurrencyCode() {
    console.log("start getCountryCurrencyCode?");
    let countryCode = await getCountryByName("israel");
    let exchangeReulst = await convert(countryCode, "USD,EUR");
    console.log(exchangeReulst);

    console.log("end getCountryCurrencyCode?1");
    console.log("end getCountryCurrencyCode?2");
    console.log("end getCountryCurrencyCode?3");
}
// getCountryCurrencyCode();
console.log("end operation?");


async function getCountryCurrencyCode3() {
    let countryCode = await getCountryByName("israel");
    console.log(countryCode)
}



async function getCountryCurrencyCode2() {
    let exchangeReulst = await convert("XRP", "USD,EUR");
    console.log(exchangeReulst);
}




getCountryCurrencyCode2();
console.log("what ever;");
getCountryCurrencyCode3();
console.log("what ever;");


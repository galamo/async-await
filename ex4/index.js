let getRandomUser = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://randomuser.me/ap/',
            dataType: 'json',
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject("error from getRandomUser")
            }
        });
    })
}

function testPromise() {
    getRandomUser().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.warn(err);
    })

    console.log("hi noam look the error is handled")
}

function testAsync() {
    asyncAwaitUser();
    console.log("hi noam look the error is handled")
}

async function asyncAwaitUser() {
    try {
        let result = await getRandomUser();
        console.log("the result:", result);
    }
    catch (err) {
        console.warn(err)
    }

}


let getRepos = (element) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://api.github.com/users/' + element + '/repos',
            dataType: 'json',
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject("error from getRepos")
            }
        });
    })
}

let q = [];
let names = ["galamo", "noamhrg", "hadarhaviv"];



function promiseAll() {

    names.forEach(name => {
        q.push(getRepos(name))
    });

    try {
        Promise.race(q2).then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response)
        })
    } catch (err) {
        console.log("q2 is not defined ")
    }



}



fetchi();
function fetchi() {
    fetch('https://randomuser.me/api/')
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
        })
}



try {

    console.log(noam);

} catch (err) {
    console.log(err);
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


exports.handler= async function(event, context){
    const geoapify = process.env.REACT_APP_GEOAPIFY;
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&format=json&apiKey=${geoapify}`;
    let tempresult=null;
    fetch(url)
    .then(response => response.json())
    .then(result => {
            tempresult=result;
    })
    .catch(error => console.log('error', error));
    return {
        statuscode: 200,
        body: tempresult
    };
}
const {Client} = require("@googlemaps/google-maps-services-js")
const client = new Client({})

const addrLookup = async () => {
    const results = await client.geocode({
        params: {
            address: '537 N 3rd St, Philadelphia, PA 19123',
            key: '<API KEY>'
        },
        timeout: 1000, // milliseconds
    })
    return results.data.results[0]
}


const latlngLookup = async() => {
    const results = await client.geocode({
        params: {
            latlng: '39.9610185,-75.14306839999999',
            key: '<API KEY>'
        },
        timeout: 1000, // milliseconds
    })
    return results.data.results[0]
    latlng
}


latlngLookup().then(console.log).catch(console.error)
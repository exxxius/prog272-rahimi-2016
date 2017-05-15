/**
 * Created by bcuser on 5/13/17.
 */
fetch('./addresses.json').then(function(data) {
    const addresses = data.json();
    console.log(addresses);
    return addresses;
}).then(function(data) {
    console.log(JSON.stringify(data, null, 4));
    that.addresses = data;
    that.setLocalStorage();
}).catch(function(err) {
    logger.log(err);
});

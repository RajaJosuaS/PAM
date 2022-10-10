function user(name, greeting, callback) {
    return callback(name, greeting);
}

var cetak = user('Raja', 'Hai ', function(name, greeting) {
    return greeting+name;
});

console.log(cetak);//Hai Raja
var countUpBy = function(multiple, goal) {
    var multiples = [];

    for (var i = multiple; i <= goal; i += multiple){
        multiples.push(i);
    }

    return multiples;
}

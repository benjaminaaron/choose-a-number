
var Card = function(max, pow) {
    this.value = Math.pow(2, pow);
    this.values = [];
    var i = this.value;
    while (i <= max) { // solve this more elegant
        for (var k = 0; k < this.value; k++) {
            if (i <= max) {
                this.values.push(i++);
            }
        }
        i += this.value;
    }
};

Card.prototype = {
    getTable: function() {
        var table = document.createElement("table");
        var tr, td;
        for (var row = 0; row < 10; row ++) { // make this dependent on actual numbers
            tr = document.createElement("tr");
            for (var col = 0; col < 3; col ++) {
                td = document.createElement("td");
                var idx = row + col * 10;
                if (idx < this.values.length) {
                    td.innerHTML = this.values[row + col * 10];
                } else {
                    td.innerHTML = "";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }
};

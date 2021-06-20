function add(a, b) {
    if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined") {
        return null;
    }
    if (isNaN(a)||isNaN(b)) {
        return null;
    }
    return parseFloat(a)+ parseFloat(b);
}

function substract(a, b) {
    if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined") {
        return null;
    }
    if (isNaN(a)||isNaN(b)) {
        return null;
    }
    return parseFloat(a)- parseFloat(b);
}

function multiply(a, b) {
    if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined") {
        return null;
    }
    if (isNaN(a)||isNaN(b)) {
        return null;
    }
    return parseFloat(a)* parseFloat(b);
}

function divide(a, b) {
    if (a == null || b == null || typeof a == "undefined" || typeof b == "undefined") {
        return null;
    }
    if (isNaN(a)||isNaN(b)) {
        return null;
    }
    return parseFloat(a)/ parseFloat(b);
}

module.exports = {
    add,substract,multiply,divide
}
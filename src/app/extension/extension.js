Date.prototype.format = function () {
    let dat = new Date(this.valueOf());
    var mes = dat.getMonth();
    return dat.toLocaleDateString();
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay.format());
};

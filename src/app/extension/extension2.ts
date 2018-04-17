interface Date {

    //metodos
    format(): string;

}


 Date.prototype.format = function():string{
    let dat = new Date(this.valueOf());
    // var mes = dat.getMonth();
    //return `${dat.getDate}/${++mes}/${dat.getFullYear}`;
    return dat.toLocaleDateString();
 
 }

window.onload = function(){
    //polimorfismo a currentDay se le asigna Date
    var currentDay = new Date();
    //aqui manda a imprimir
    console.log(currentDay.format());
   // console.log(currentDay.addDaysToCurrentDay(7));
}
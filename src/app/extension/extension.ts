interface Date {

    //metodos
  addDaysToCurrentDay(days: number): Date;


}


Date.prototype.addDaysToCurrentDay = function(days: number): Date{
   let dat = new Date(this.valueOf());
   dat.setDate(dat.getDate() + days);
   return dat;

}



window.onload = function(){
    //polimorfismo a currentDay se le asigna Date
    var currentDay = new Date();
    //aqui manda a imprimir
    console.log(currentDay.format());
   // console.log(currentDay.addDaysToCurrentDay(7));
}
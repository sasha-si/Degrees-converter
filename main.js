class Converter {
   constructor(temp, key) {
     this.temp = temp;
     this.key = key;
     this.createResult();
   }
   createResult() {
     if (this.key === "C" || this.key === "С") {
       this.result = {};
       this.result.F = this.cToF(this.temp);
       this.result.K = this.cToK(this.temp);
     }
     if (this.key === "F") {
       this.result = {};
       this.result.C = this.fToC(this.temp);
       this.result.K = this.fToK(this.temp);
     }
     if (this.key === "K" || this.key === "К") {
       this.result = {};
       this.result.C = this.kToC(this.temp);
       this.result.F = this.kToF(this.temp);
     }
   }
   cToF() {
     let val = Math.round((this.temp * 9) / 5 + 32);
     return val;
   }
   cToK() {
     let val = Math.round(this.temp + 273.15);
     return val;
   }
   fToC() {
     let val = Math.round((this.temp - 32) * (5 / 9));
     return val;
   }
   fToK() {
     let val = Math.round((this.temp - 32) * (5 / 9) + 273.15);
     return val;
   }
   kToC() {
     let val = Math.round(this.temp - 273.15);
     return val;
   }
   kToF() {
     let val = Math.round(((this.temp - 273.15) * 9) / 5 + 32);
     return val;
   }
 }
 
 function getInputValues(x) {
   let temp = getTemp(x);
   let key = getKey(x);
   let one = new Converter(temp, key);
   return JSON.stringify(one.result);
 }
 function getTemp(x) {
   let param = Number(x.slice(0, -1));
   return param;
 }
 function getKey(x) {
   let param = x.slice(-1);
   return param.toUpperCase();//chek the "Key" to upper case!
 }
 console.log(getInputValues('10k'));
 
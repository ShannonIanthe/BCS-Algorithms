var Universe = function(amount, obj){
   var self = this

   this.matter = {total : 0,
     destroy(amount, obj){
       this.matter.total -= amount
       this.energy.total += amount
     },
     create(amount, obj){
       this.matter.total += amount
       this.energy.total -= amount
     }
   }
   this.energy = {total : (0),
     destroy(amount, obj){
       this.energy.total -= amount
       this.matter.total += amount
     },
     create(amount, obj){
       this.energy.create += amount
       this.matter.destroy -= amount
     }
   };

     if(amount === 0 || !amount){
       return  `matter and universe total should be ${this.matter.total} if no initial value is added`
     } else {
       return `matter total should be ${this.matter.total}, energy total should be ${this.energy.total}`
     }

 }
module.exports = {
    Universe
}
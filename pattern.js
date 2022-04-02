class student{
    static count(){
        student.counter = (student.counter || 0 ) + 1;
        return;
        }
    constructor(name, age, phone, marks){
        student.count();
      this.name = name;
      this.age = age;
      this.phone = phone;
      this.marks = marks;
    }
    getinfo(){
        console.log(`
        Name         : ${this.name}
        Age          : ${this.age}
        Phone Number : ${this.phone}
        Board Marks  : ${this.marks}
        `)
    }

    isEligible(){     
      if(this.marks>=40){
        console.log(`${this.name} is eligible`)
      }
      else{
          console.log(`${this.name} is not eligible`)
      }
    }
    eligibleForPlacements = () => {
        if(this.age>20 && this.marks >= 40){
            console.log(`${this.name} is eligible for placements`)
        }
        else{
          console.log(`${this.name} is not eligible for placements`)
        }
    }
  }



  const s1 = new student("syed", 23, 1234, 45);
  const s2 = new student("shoieb", 22, 4567, 55);
  const s3 = new student("javeed", 24, 7890, 41);
  const s4 = new student("aman", 24, 2345, 39);
  const s5 = new student("rushda", 22, 6789, 40); 

s4.getinfo();
s4.isEligible();
s1.eligibleForPlacements()
s2.eligibleForPlacements()
s3.eligibleForPlacements()
s4.eligibleForPlacements()
s5.eligibleForPlacements()
console.log(student.counter)

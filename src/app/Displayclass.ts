export class person {

//class with a private member function Roll number
private Rollnumber:number;
        Name:string;
        age:number;

  //custructor function
  constructor(Rollnumber:number,name:string,age:number) {

    this.Rollnumber=Rollnumber;
    this.age=age;
    this.Name=name;

   }

   //display fuction called to return the value of the class members
   Display():string{
   
      //console.log(`details of the student is ${this.age},${this.Name}`);
      return `age of student ${this.age}, Name is ${this.Name}, Roll number is ${this.Rollnumber}`
    }
};
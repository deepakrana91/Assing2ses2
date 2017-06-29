export class person {

private Rollnumber:number;
        Name:string;
        age:number;

  constructor(Rollnumber:number,name:string,age:number) {

    this.Rollnumber=Rollnumber;
    this.age=age;
    this.Name=name;

   }

   Display():string{
   
      //console.log(`details of the student is ${this.age},${this.Name}`);
      return `age of student ${this.age}, Name is ${this.Name}, Roll number is ${this.Rollnumber}`
    }
};
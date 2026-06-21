
class QaMember {
constructor(name, level) {    
    this.name = name;
    this.level = level;
  }
introduce() {
    return `${this.name} is a ${this.level} QA.`;
}
 createBugTitle(featureName) {
    return `${featureName} is not working - reported by ${this.name}`;
  }
}
const kazi = new QaMember('kazi', 'Junior');
const Hossain = new QaMember('Hossain', 'Senior');

const rahim = new QaMember('Rahim', 'Senior');
console.log(rahim.introduce());
console.log(kazi.introduce());
console.log(Hossain.introduce());






   
  



  
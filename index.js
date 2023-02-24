
// Question 1 

function InstagramPost(handleOfAuthor, content, imageLInk, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLInk = imageLInk;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
//---------------------------------------------------------------------------------------------------------------------



// Question 2 
const InstagramPost2 = new InstagramPost("chidinma cynthia", "dairy of ikorodu girl", "www.sophieikorodu.com" ,5, 2,)
console.log(InstagramPost2);

const InstagramPost3 = new InstagramPost("sophie ukazu", "dairy of mbaise girl", "www.sophie_u.com", 10 ,7,)
console.log(InstagramPost3);
//---------------------------------------------------------------------------------------------------------------------


// Question 3 
// 3(a)
// Define the createPerson() factory function
function createPerson(name, age, location){
   return{ 
    name,
    age,
    location,
   };
}
const musa = createPerson("musa dawodu", 19, "lekki, lagos-state");
console.log(musa)

// 3(b)
// Define the createJambScores() factory function

function createJambScores(english, govt, lit, crk){
    return{
        english:english,   
        govt:govt,
        lit:lit,
        crk:crk,
    };
} 
const jambScores = createJambScores(70, 85, 82, 94);
console.log(jambScores);

musa.jambScore = jambScores
console.log(musa)
//-------------------------------------------------------------------------------------------------------------------

// Question 4:
/* Using the spread operator: 
The spread operator allows us to create a shallow copy of an 
object by spreading its properties into a new object. Here's an example:
*/
const obj1 = {a: 1, b: 2};
const clone1 = {... obj1};
console.log(clone1); // Output: { a: 1, b: 2 }

/* Using Object.assign():
The Object.assign() method also allows us to create a shallow copy of an object
 by copying its properties into a new object. Here's an example:
*/
const obj2 = { a: 1, b: 2 };
const clone2 = Object.assign({}, obj2);
console.log(clone2); // Output: { a: 1, b: 2 }

/*Using the JSON.parse() and JSON.stringify() methods: 
This method creates a deep copy of an object, which means that all properties and 
sub-properties are also cloned. 
However, it has some limitations, such as not being able to clone functions or objects with circular references.
 Here's an example:
*/
const obj3 = { a: 1, b: { c: 2 } };
const clone3 = JSON.parse(JSON.stringify(obj3));
console.log(clone3); // Output: { a: 1, b: { c: 2 } }


/* Using the Object.create() method: 
The Object.create() method allows us to create a new object with a specified prototype. 
This method is useful when we want to create an object with the same prototype as another object. 
Here's an example:
*/
const obj4 = { a: 1, b: 2 };
const clone4 = Object.create(Object.getPrototypeOf(obj4));
Object.assign(clone4, obj4);
console.log(clone4); // Output: { a: 1, b: 2 }

/*Using the ES6 class syntax: 
We can also create a new object by extending an existing class 
and using the super() method to call the constructor of the parent class. 
Here's an example:
*/
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const john = new Person("John", 25);
  const clone5 = new Person(john.name, john.age);
  console.log(clone5); // Output: Person { name: 'John', age: 25 }
//----------------------------------------------------------------------------------------------------------------------


// Question 5:
// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
//Using (for..in loops)
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
 for (const party in presidentialCandidates) {
     console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
   }

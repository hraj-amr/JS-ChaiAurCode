class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){              // static un method ya un properties ko karane se rok deta hai jo bhi ham niche const harshit me karaenge
        return `123`
    }
}
const harshit = new User("harshit")
// console.log(harshit.createId())          // error due to static

class Teacher extends User {
    constructor (username, email){
        super(username)
        this.email = email
    }
}

const hp = new Teacher("hp", "hp@laptop.com")
console.log(hp.createId());     // error due to static
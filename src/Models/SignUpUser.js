export default class SignInUser {
    username = '';
    password = '';
    id = 0    
    phone =''
    department ='New Employee'
    address=''
    birthDate=''
    roleID = 5

    constructor(username,password,phone,address,birthDate){
        this.username = username
        this.password=password
        this.phone=phone
        this.address=address
        this.birthDate =birthDate
    }

}

"use strict";

class User {
    constructor(id, username, first_name, last_name, gender, address, mobile_number, email_address, password) {
        this.id = id;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.address = address;
        this.mobile_number = mobile_number;
        this.email_address = email_address;
        this.password = password;

}

getId() {
        return this.id;
    }
getusername() {
        return this.username;
    }
getfirst_name() {
        return this.first_name;
    }
getlast_name() {
        return this.last_name;
    }
getgender() {
        return this.gender;
    }
getaddress() {
        return this.address;
    }
getmobile_number() {
        return this.mobile_number;
    }
getemail_address() {
    return this.email_address;
    }
getpassword() {
    return this.password
    }


setusername(username) {
    this.username = username;
}
setFirst_name(first_name) {
    this.first_name = first_name;
}
setLast_name(last_name) {
    this.last_name = last_name;
}
setGender(gender) {
    this.gender = gender;
}
setAddress(address) {
    this.address = address;
}
setMobile_number(mobile_number) {
    this.mobile_number = mobile_number;
}
setEmail_address(email_address) {
    this.email_address = email_address;
}
setPassword(password) {
    this.password = password;
}

}

module.exports = User;
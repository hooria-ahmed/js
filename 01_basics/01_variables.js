const accountId = 144553
let accountEmail = "hooria.2006.haq@gmail.com"
var accountPassword = "12345" // don't use 'var' due to block space issue.
accountCity = "Karachi"
let accountStatus;

// accountId = 2 //not allowed!, bcz 'accounId' is declared constant previously.


accountEmail = "random@gmail.com"
accountPassword = "2121212"
accountCity = "Islamabad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])



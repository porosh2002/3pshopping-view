
import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5'
const PassGen = () => {
const Symbols = ['/','%','@',"#",'.',',','?','*','{','&',':',';','"','`','_',']','}','(',')']
const ID = uuidv4();
const First_Two = ID.slice(0,3) + Symbols[Math.floor(Math.random() * 5)]
const Mid_Two = ID.slice(15,18) + Symbols[Math.floor(Math.random() * 10)]
const Last_Two = md5(ID).slice(28,30) + Symbols[Math.floor(Math.random() * 14)]
// Current Date 
const Current_Date = new Date().getTime().toString().slice(10,13)
//  Stage one
const Password_Stage = First_Two.toUpperCase() + Mid_Two + Last_Two + Current_Date
return Password_Stage
}
export default PassGen
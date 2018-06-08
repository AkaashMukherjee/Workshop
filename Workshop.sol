pragma solidity ^0.4.18;

contract Workshop {
    
   string name;
   uint age;
   
   function setPerson(string _name, uint _age) public {
       name = _name;
       age = _age;
   }
   
   function getPerson() public constant returns (string, uint) {
       return (name, age);
   }
    
}

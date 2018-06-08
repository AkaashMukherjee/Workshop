var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setPerson",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPerson",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

if(typeof web3 !== "undefined") {
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
}

web3.eth.defaultAccount = web3.eth.accounts[0]

var WorkshopContract = web3.eth.contract(abi)
var contractAddress = "0xae41e58c43736629edee3d854cf3790aaf13fdc0"
var Workshop = WorkshopContract.at(contractAddress)
console.log(Workshop);

function updatePerson(){
	Workshop.getPerson(function(err, res){
    	if(!err && res){
        	$("#person").html(res[0] + " (" + res[1] + " years old)")
        	console.log(res)
        } else {
        	console.error(err);
        }
    })
}

function setPerson(){
	Workshop.setPerson($("#name").val(), $("#age").val(), function(err, res){
    	if(err){
        	console.log(err)
        }
    })
}

updatePerson()

function isInstalled() {
   if (typeof web3 !== 'undefined'){
      console.log('MetaMask is installed')
   } 
   else{
      console.log('MetaMask is not installed')
   }
}

$(document).ready(function() {



  console.log("ready!");

	console.log ('test') ;
 isInstalled();

  const uploadBtn = document.querySelector("#upload-btn");

  uploadBtn.addEventListener("click", function(e) {
    //
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      console.log(reader.result)
     //preview.src = reader.result;
    };
    
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position.coords.latitude,position.coords.longitude)       
      
    }, function(){
      console.log("error")
    });

    //console.log("cl", file.result);
	//0x501e8bf00d42d7858f7b48bf391856d8fba4f726

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "geox",
				"type": "uint8"
			},
			{
				"name": "geoy",
				"type": "uint8"
			}
		],
		"name": "add",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "geox",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "geoy",
				"type": "uint8"
			}
		],
		"name": "AddToken",
		"type": "event"
	}
];


//const address = '0x501e8bf00d42d7858f7b48bf391856d8fba4f726'
//const address = '0xc377c4bfb98b5df5c8d4ab4c26e94db18d6254d2' ;
const address = '0x09286bed1f8012c2ddaa1791fb63e9881c62cfd2' ;


var account = web3.eth.accounts[0] ;

var MyContract = web3.eth.contract(abi);
// initiate contract for an address
var yourContractInstance = MyContract.at(address);
// call constant function

//var yourContractInstance = new web3.eth.Contract(abi, address);
//myContract.methods.add(1,2).call().then(console.log);

console.log (web3.version);
console.log("yourContractInstance",yourContractInstance)
console.debug (yourContractInstance);

handleSubmit = async () => {
 
	console.log("aza")
	console.dir(yourContractInstance.add)
    const hash = await yourContractInstance.add(1, 2, {
      from: account,
      // if payable, specify value
      // value: web3js.toWei(value, 'ether')
    }, function(err, result){  });
    
 
};

console.log ('rezrtg') ;
handleSubmit();

/*
  const MiniToken = contract(abi)
  const miniToken = MiniToken.at(address)*/


    /*var MyContract = web3.eth.contract(abi);
    var myContractInstance = MyContract.at('0x501e8bf00d42d7858f7b48bf391856d8fba4f726');
*/
/*
console.log ('test');
var myContract = web3.eth.contract(abi, '0x501e8bf00d42d7858f7b48bf391856d8fba4f726');
myContract.methods.add(1,2).call().then(console.log);
*/

/*
myContractInstance.methods.add(1,2).send({from: '0x501e8bf00d42d7858f7b48bf391856d8fba4f726'}, (error, transactionHash) => {
    
});
*/
    
	console.log (web3.eth.accounts);
  });
});


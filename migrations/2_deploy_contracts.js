const Timelock = artifacts.require("Timelock");
const PalmToken = artifacts.require("PalmToken");
const CoconutPalm = artifacts.require("CoconutPalm");
const MasterChef = artifacts.require("MasterChef");
let admin = "0x4ff7266278A8DB3676367dbB4ef964DEF616527b"
let startBlock = 5881529
let timelockEta = 46800   
module.exports = function(deployer) {
  // 1st deployment
	deployer.deploy(Timelock, admin, timelockEta ).then(function(zero){
	
	return deployer.deploy(PalmToken).then(function() {
		return deployer.deploy(CoconutPalm, PalmToken.address).then(function() {
			return deployer.deploy(MasterChef, PalmToken.address, CoconutPalm.address, admin, "1000000000000000000", startBlock)
		  
	  })
	  })
    })
};
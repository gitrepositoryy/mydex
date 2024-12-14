const { ethers } = require("hardhat")
const { expect } = require("chai")

const weiValue = function (num) {
    return ethers.utils.parseUnits(num.toString(), "ether")
    }

describe("Token Contract", function() {
let token 

beforeEach( async function () {
    const Token = await ethers.getContractFactory("Token")
    token = await Token.deploy("MBTBA Token","MBTBA", 100000)
    //token = await Token.deploy()
})

describe ("Deployment", function (){
    const _name = "MBTBA Token"
    const _symbol = "MBTBA"
   const _decimals = 18
    const _totalSupply = weiValue(100000)
    })

it("has the correct name", async function () {
        const name = await token.name()
        expect(name).to.equal(name)
    })
	
it("has the correct symbol", async function () {
        const symbol = await token.symbol()
        expect(symbol).to.equal(symbol)
    })	

it("has the correct no of decimals", async function () {
        const decimals = await token.decimals()
        expect(decimals).to.equal(decimals)
    })	

    it("has the correct total supply", async function () {
        const totalSupply = await token.totalSupply()
        expect(totalSupply).to.equal(totalSupply)
    })	
})
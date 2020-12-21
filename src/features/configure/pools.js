// import BigNumber from "bignumber.js";
// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
  {
    id: 'ht',
    name: 'HT',  
    token: 'HT',
    tokenDescription: 'HT',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWHT',
    earnedTokenAddress: '0x3FeE0377ab18944d1E6e8bCA3139A4dda4d802b7',
    earnContractAddress: '0x3FeE0377ab18944d1E6e8bCA3139A4dda4d802b7',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    id: 'wht',
    name: 'WHT',  
    token: 'WHT',
    tokenDescription: 'WHT',
    tokenAddress: '0xB49f19289857f4499781AaB9afd4A428C4BE9CA8',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWHT',
    earnedTokenAddress: '0x3FeE0377ab18944d1E6e8bCA3139A4dda4d802b7',
    earnContractAddress: '0x3FeE0377ab18944d1E6e8bCA3139A4dda4d802b7',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  }
]
// async function depositToAaveV2() {
//     try {
//         const tokenAmount = document.getElementById('tokenAmount').value;
//         if (!tokenAmount || isNaN(tokenAmount)) {
//             console.log('Please enter a valid token amount');
//             return;
//         }


        document.getElementById('depositButton').onclick = async function () {
            try {
                const tokenAmount = document.getElementById('tokenAmount').value;
                if (!tokenAmount || isNaN(tokenAmount)) {
                    console.log('Please enter a valid token amount');
                    return;
                }



        const lendingPoolCoreAddress = '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9'; //  Aave v2 LendingPoolCore address
        const erc20TokenAddress = '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0'; // ERC20 token address 

        const lendingPoolCoreABI = [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowRateMode",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowRate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_originationFee",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowBalanceIncrease",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint16",
                        "name": "_referral",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "Borrow",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint16",
                        "name": "_referral",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "Deposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_target",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_totalFee",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_protocolFee",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "FlashLoan",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_collateral",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_purchaseAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_liquidatedCollateralAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_accruedBorrowInterest",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_liquidator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "_receiveAToken",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "LiquidationCall",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_collateral",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_feeLiquidated",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_liquidatedCollateralForFee",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "OriginationFeeLiquidated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_newStableRate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowBalanceIncrease",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "RebalanceStableBorrowRate",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "RedeemUnderlying",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_repayer",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_amountMinusFees",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_fees",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowBalanceIncrease",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "Repay",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "ReserveUsedAsCollateralDisabled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "ReserveUsedAsCollateralEnabled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_newRateMode",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_newRate",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_borrowBalanceIncrease",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "Swap",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "LENDINGPOOL_REVISION",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "UINT_MAX_VALUE",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "addressesProvider",
                "outputs": [
                    {
                        "internalType": "contract LendingPoolAddressesProvider",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "core",
                "outputs": [
                    {
                        "internalType": "contract LendingPoolCore",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "dataProvider",
                "outputs": [
                    {
                        "internalType": "contract LendingPoolDataProvider",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "parametersProvider",
                "outputs": [
                    {
                        "internalType": "contract LendingPoolParametersProvider",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "contract LendingPoolAddressesProvider",
                        "name": "_addressesProvider",
                        "type": "address"
                    }
                ],
                "name": "initialize",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_referralCode",
                        "type": "uint16"
                    }
                ],
                "name": "deposit",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_aTokenBalanceAfterRedeem",
                        "type": "uint256"
                    }
                ],
                "name": "redeemUnderlying",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_interestRateMode",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_referralCode",
                        "type": "uint16"
                    }
                ],
                "name": "borrow",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "_onBehalfOf",
                        "type": "address"
                    }
                ],
                "name": "repay",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    }
                ],
                "name": "swapBorrowRateMode",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "rebalanceStableBorrowRate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "_useAsCollateral",
                        "type": "bool"
                    }
                ],
                "name": "setUserUseReserveAsCollateral",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_collateral",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_purchaseAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "_receiveAToken",
                        "type": "bool"
                    }
                ],
                "name": "liquidationCall",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_params",
                        "type": "bytes"
                    }
                ],
                "name": "flashLoan",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    }
                ],
                "name": "getReserveConfigurationData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "ltv",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidationThreshold",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidationBonus",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "interestRateStrategyAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "usageAsCollateralEnabled",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "borrowingEnabled",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "stableBorrowRateEnabled",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    }
                ],
                "name": "getReserveData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "totalLiquidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "availableLiquidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBorrowsStable",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBorrowsVariable",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidityRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "variableBorrowRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stableBorrowRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "averageStableBorrowRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "utilizationRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidityIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "variableBorrowIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "aTokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint40",
                        "name": "lastUpdateTimestamp",
                        "type": "uint40"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "getUserAccountData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "totalLiquidityETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCollateralETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBorrowsETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalFeesETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "availableBorrowsETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentLiquidationThreshold",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ltv",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "healthFactor",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_reserve",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "getUserReserveData",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "currentATokenBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentBorrowBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "principalBorrowBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowRateMode",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidityRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "originationFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "variableBorrowIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastUpdateTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "usageAsCollateralEnabled",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getReserves",
                "outputs": [
                    {
                        "internalType": "address[]",
                        "name": "",
                        "type": "address[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const erc20ABI = [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ];

        const lendingPoolCoreContract = new window.web3.eth.Contract(lendingPoolCoreABI, lendingPoolCoreAddress);
        const erc20TokenContract = new window.web3.eth.Contract(erc20ABI, erc20TokenAddress);

        const userAddress = await window.web3.eth.getCoinbase();
        const amount = window.web3.utils.toWei(tokenAmount.toString(), 'ether');

        const allowance = await erc20TokenContract.methods.allowance(userAddress, lendingPoolCoreAddress).call();

        if (allowance < amount) {
            const approveTx = await erc20TokenContract.methods.approve(lendingPoolCoreAddress, amount).send({ from: userAddress });
            console.log('Approval transaction:', approveTx);
        }

        const depositTx = await lendingPoolCoreContract.methods.deposit(erc20TokenAddress, amount, 0).send({ from: userAddress });
        console.log('Deposit transaction:', depositTx);
    } catch (error) {
        console.error(error);
    }
}
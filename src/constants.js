export const ETHEREUM_NETWORKS = [1, 3, 4, 5, 42]
export const SUPPORTED_NETWORKS = [1, 4, 42, 56, 77, 97, 100, 137, 31337, 80001]
// TODO: Remove once we have versioning package
export const NETWORKS_TO_IGNORE_VERSION_CHECKS = [56, 77, 97, 100, 137, 31337, 80001]
export const NETWORKS_WITHOUT_LOGS = [137, 80001]

export const SECONDS_PER_BLOCK = 14
export const SECONDS_PER_DAY = 86400

export const DEFAULT_TOKEN_PRECISION = 18

export const DAI_MAINNET_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

export const POOL_ALIASES = {
    'dpi': {
      alias: 'dpi',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: '',
      tokenAddress: ''
    },
    'rai': {
      alias: 'rai',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: '',
      tokenAddress: ''
    },
    'basis': {
      alias: 'basis',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: ''
    },
    'sushi': {
      alias: 'sushi',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: ''
    },
    'bond': {
      alias: 'bond',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: '',
      tokenAddress: ''
    },
    'synthetix': {
      alias: 'synthetix',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: ''
    },
    'aave': {
      alias: 'aave',
      chainId: 1,
      networkName: 'mainnet',
      poolAddress: ''
    },
    'rinkeby-test': {
      alias: 'rinkeby-test',
      chainId: 4,
      networkName: 'rinkeby',
      poolAddress: ''
    },
  
    'polygon-usdt': {
      alias: 'polygon-usdt',
      chainId: 137,
      networkName: 'matic',
      poolAddress: ''
    },
    'matic-usdt': {
      alias: 'matic-usdt',
      chainId: 137,
      networkName: 'matic',
      poolAddress: ''
    },
    'polygon-dai': {
      alias: 'polygon-dai',
      chainId: 137,
      networkName: 'matic',
      poolAddress: ''
    },
    'matic-dai': {
      alias: 'matic-dai',
      chainId: 137,
      networkName: 'matic',
      poolAddress: ''
    }
  }

export const QUERY_KEYS = {
    readProvider: 'readProvider',
    fetchUserChainData: 'fetchUserChainData',
    fetchPoolChainData: 'fetchPoolChainData',
    fetchExternalErc20Awards: 'fetchExternalErc20Awards',
    fetchExternalErc721Awards: 'fetchExternalErc721Awards',
    contractVersions: 'contractVersions',
    poolContractAddresses: 'poolContractAddresses',
    coingeckoTokenData: 'coingeckoTokenData',
    useAllCreatedPrizePools: 'useAllCreatedPrizePools',
    useAllCreatedPrizePoolsWithTokens: 'useAllCreatedPrizePoolsWithTokens',
    useAllUserTokenBalances: 'useAllUserTokenBalances'
}

export const WALLETS = Object.freeze({
    metamask: 'MetaMask'
  })
  
  export const NO_REFETCH_QUERY_OPTIONS = Object.freeze({
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })
import { AlgorandModels, ChainEntityName, EosModels, EthereumMultisigGnosisModels, PublicKey } from './chainjs'

/** Physical structure of account */
export enum AccountType {
  Native = 'native', // Native
  Pending = 'pending', // Pending
  VirtualLiquid = 'liquid', // VirtualLiquid
  VirtualNested = 'nested', // VirtalNested
}

export type AlgorandMultisigCreateAccountOptions = AlgorandModels.AlgorandMultisigOptions // same for create account and transaction
export type EosMultisigCreateAccountOptions = EosModels.EosMultisigCreateAccountOptions
export type EthMultisigCreateAccountOptions = EthereumMultisigGnosisModels.EthereumGnosisMultisigCreateAccountOptions
export type MultisigCreateAccountOptions =
  | AlgorandMultisigCreateAccountOptions
  | EosMultisigCreateAccountOptions
  | EthMultisigCreateAccountOptions

export type AlgorandMultisigTransactionOptions = AlgorandModels.AlgorandMultisigOptions // same for create account and transaction
export type EosMultisigTransactionOptions = null
export type EthMultisigTransactionOptions = EthereumMultisigGnosisModels.EthereumGnosisMultisigTransactionOptions
export type MultisigTransactionOptions =
  | AlgorandMultisigTransactionOptions
  | EosMultisigTransactionOptions
  | EthMultisigTransactionOptions

export enum UserActionHistory {}
// todo chainjs populate this

export enum ChainActionHistory {
  LinkAction = 'chain_link_action',
}

export enum CredentialLocation {
  Database = 'db',
  External = 'external',
  /** managed by the Coincover.com backup service */
  ExternalCoinCover = 'coincover',
  /** managed by the Republic.co recovery service */
  ExternalRepublic = 'republic',
  WebAuthN = 'webAuthN',
}

/** structure of password backup */
export enum KeyRecoveryType {
  /** all keys needed are in managed credentials */
  ManagedCredentials = 'managedCredentials',
  /** first/outer key is held by republic */
  Republic = 'republic',
}

/** Whether the account is native or virtual
 *  Maps to value in AppRegistration.ChainNetworks.forAccountType */
// export enum AccountMode {
//   Native = 'native',
//   Virtual = 'virtual',
// }

export type AppId = string

export type UserId = string

export type ChainAccount = string

export type ChainAction = {
  contract: ChainContractName
  action: ChainActionName
  actor?: ChainAccountName
  permission?: ChainPermissionName
  publicKey?: PublicKey
  data?: any
  nativeAction?: any
}

export type ChainAccountName = ChainEntityName

export type ChainContractName = ChainEntityName

export type ChainPermissionName = ChainEntityName

export type ChainActionName = string

export type ChainTransaction = object

/** Reason airdrop function was triggered - usualyl NewAccount or bonus airdrop */
export enum AirdropType {
  NewAccount = 'NewAccount',
  Misc = 'Misc',
}

export enum AppNetworkType {
  MainAlgo = 'MAIN-ALGO',
  TestAlgoTest = 'TEST-ALGO-TEST',
  TestAlgoBeta = 'TEST-ALGO-BETA',
  MainEth = 'MAIN-ETH',
  TestEthRopsten = 'TEST-ETH-ROPSTEN',
  TestEthRinkeby = 'TEST-ETH-RINKEBY',
  MainEos = 'MAIN-EOS',
  TestEosJungle = 'TEST-EOS-JUNGLE',
  TestEosKylin = 'TEST-EOS-KYLIN',
  MainOre = 'MAIN-ORE',
  TestOre = 'TEST-ORE',
  MainTelos = 'MAIN-TELOS',
  TestTelos = 'TEST-TELOS',
  MainUx = 'MAIN-UX',
  /** UX doesnt have a test net. But we need a 'test' template. The template for TestUx actually points to the ux_main chain */
  TestUx = 'TEST-UX',
  MainWax = 'MAIN-WAX',
  TestWax = 'TEST-WAX',
  MainPolygon = 'MAIN-POLYGON',
  TestPolygonMumbai = 'TEST-POLYGON-MUMBAI',
}

/** All Chain functions supported by any chain
 *  Intended as a global list of all possible functions across all chains */
export enum ChainFunction {
  Permissions = 'Permissions',
  AddPermission = 'AddPermission',
  DeletePermission = 'DeletePermission',
  LinkAction = 'LinkAction',
  UnlinkAction = 'UnlinkAction',
}

/** Named chain network */
export enum ChainNetwork {
  // Algo
  AlgoMain = 'algo_main',
  AlgoBeta = 'algo_beta',
  AlgoTest = 'algo_test',
  // EOS
  DspEosKylin1 = 'kylin-dsp-1.liquidapps.io',
  DspEosKylin2 = 'kylin-dsp-2.liquidapps.io',
  DspMoonlighting = 'eos_moon_blockstartdsp_com',
  DspMoonlightingTest = 'eos_moontest_blockstartdsp_com',
  EosMain = 'eos_main',
  EosKylin = 'eos_kylin',
  EosJungle = 'eos_jungle',
  MigrateEosMain = 'migrate_eos_main',
  // TELOS
  TelosMain = 'telos_main',
  TelosTest = 'telos_test',
  // UX
  UxMain = 'ux_main',
  // UxTest = 'ux_test', (there is no test network) - this is left here as a placeholder
  // WAX
  WaxMain = 'wax_main',
  WaxTest = 'wax_test',
  // ORE
  OreMain = 'ore_main',
  OreTest = 'ore_test',
  // ETH
  EthMain = 'eth_main',
  EthRopsten = 'eth_ropsten',
  EthRinkeby = 'eth_rinkeby',
  // ETH Layer 2
  PolygonMain = 'polygon_main',
  PolygonMumbai = 'polygon_mumbai',
}

/** Flavor of chain network */
export enum ChainPlatformType {
  algorand = 'algorand',
  eos = 'eos',
  ethereum = 'ethereum',
  ore = 'ore',
}

/** Either Oauth IdTokenRaw or AccessToken */
export type JwtToken = AccessToken | IdTokenRaw

export type AccessToken = {
  iss?: string
  sub?: string
  aud?: string | string[]
  azp?: string
  exp?: number
  iat?: number
  scope?: string
} & Lookup

// Fields defined here: https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
/** Raw data extracted from OAuth IDToken */
export type IdTokenRaw = {
  sub: string
  azp?: string
  nickname?: string
  phone_number?: string
  email?: string
  picture?: string
  name?: string
  email_verified?: boolean
  phone_number_verified?: boolean
  given_name?: string
  family_name?: string
  birthdate?: string
  locale?: string
  updated_at?: string
  iss?: string
} & Lookup

/** Data from Oauth IdToken (using camel case) */
export type IdToken = {
  sub: string
  azp?: string
  nickname?: string
  phoneNumber?: string
  email?: string
  picture?: string
  name?: string
  emailVerified?: boolean
  phoneNumberVerified?: boolean
  givenName?: string
  familyName?: string
  birthdate?: string
  locale?: string
  updatedAt?: string
} & Lookup

/** JWT token including body, header, and signature */
export type JwtTokenComplete = {
  body: JwtToken
  header: JwtHeader
  signature: JwtSignature
}

export type JwtHeader = {
  alg: string // e.g. RS256
  typ?: string // expected to be JWT
  cty?: string
  crit?: Array<string | Exclude<keyof JwtHeader, 'crit'>>
  jku?: string
  kid?: string
  x5u?: string | string[]
  'x5t#S256'?: string
  x5t?: string
  x5c?: string | string[]
}

export type JwtSignature = string

/** Secrets passed to client */
export enum Secret {
  SECRET_CARBON_API_KEY_PRODUCTION = 'carbon_api_key_production',
  SECRET_CARBON_API_KEY_SANDBOX = 'carbon_api_key_sandbox',
}

export enum ServiceAccountUsedFor {
  AccountMigration = 'accountMigration',
  AdminPasswordReset = 'adminPasswordReset',
  Airdrop = 'airdrop',
  AdminAccess = 'adminAccess',
  AutoSigning = 'autoSigning',
  ChangePassword = 'changePassword',
  CreateUser = 'createUser',
  ProxySigning = 'proxySigning',
  TokenFunding = 'tokenFunding',
}

export type Email = string
export type PhoneNumber = string

export enum AuthProvider {
  Apple = 'apple',
  Email = 'email',
  Facebook = 'facebook',
  Github = 'github',
  Google = 'google',
  Instagram = 'instagram',
  Kakao = 'kakao',
  Line = 'line',
  LinkedIn = 'linkedin',
  Phone = 'phone',
  Twitch = 'twitch',
  Twitter = 'twitter',
}

export enum OAuthIssuer {
  Auth0Oreid = 'auth0oreid',
  OreId = 'oreid',
  // tokens signed by native providers
  Apple = 'apple',
  Facebook = 'facebook',
  Github = 'github',
  Google = 'google',
  Instagram = 'instagram',
  Kakao = 'kakao',
  Line = 'line',
  LinkedIn = 'linkedin',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Unknown = 'unknown',
}

export enum LoginType {
  Apple = 'apple',
  Email = 'email',
  Facebook = 'facebook',
  Github = 'github',
  Google = 'google',
  Instagram = 'instagram',
  Kakao = 'kakao',
  Line = 'line',
  LinkedIn = 'linkedin',
  Phone = 'phone',
  Twitch = 'twitch',
  Twitter = 'twitter',
  // not an AuthProvider
  Custodial = 'custodial',
}

export enum ExternalWalletType {
  AlgoSigner = 'algosigner',
  Keycat = 'keycat',
  Ledger = 'ledger',
  Lynx = 'lynx',
  Meetone = 'meetone',
  Metro = 'metro',
  Portis = 'portis',
  Scatter = 'scatter',
  SimpleEos = 'simpleos',
  TokenPocket = 'tokenpocket',
  Web3 = 'web3',
  WhaleVault = 'whalevault',
}

/** Structure returned from DFuse query */
export type DfuseResult = {
  results: {
    cursor: string
    trace?: {
      block?: {
        id: string
        num: number
        timestamp: string
      }
      matchingActions?: {
        receiver: string
        account: string
        name: string
        data?: Record<string, any>
      }[]
    }
  }[]
}

/** standard result object */
export type Result = {
  success: boolean
  modifiedCount?: number
  _id?: string
  errorCode?: string
  errorMessage?: string
  /** processId for tracking process flow */
  processId?: string
}

export type ResultInt = {
  /** generic string return */
  number: number
  /** error code if problem */
  errorCode?: string
  /** error message if problem */
  errorMessage?: string
  /** processId for tracking process flow */
  processId?: string
}

export type ResultBoolean = {
  /** generic string return */
  boolean: boolean
  /** error code if problem */
  errorCode?: string
  /** error message if problem */
  errorMessage?: string
  /** processId for tracking process flow */
  processId?: string
}

export type ResultString = {
  /** generic string return */
  string: string
  /** error code if problem */
  errorCode?: string
  /** error message if problem */
  errorMessage?: string
  /** processId for tracking process flow */
  processId?: string
}

export enum UserStatType {
  ClearInvalidPassword = 'clearInvalidPassword',
  InvalidPassword = 'invalidPassword',
  Login = 'login',
  SignedTransaction = 'signedTransaction',
}

export interface Lookup {
  [key: string]: any
}

/** Maps to specific password rules */
export enum PasswordType {
  /** used for multisig accounts where no password is required */
  Empty = 'empty',
  Pin4 = 'pk4',
  Pin6 = 'pk6',
  Password8DigitMinAverage = 'pw8a',
  Password8DigitMinStrong = 'pw8b',
}

export enum PasswordFormat {
  Pin = 'pin',
  Password = 'password',
}

export enum AppFeatures {
  SharedWallet = 'sharedWallet',
}

export enum ChainTransactionStatus {
  Cancelled = 'cancelled',
  Expired = 'expired',
  Failed = 'failed',
  PendingSignatures = 'pendingSignatures',
  Sent = 'sent',
  Submitted = 'submitted',
  ReadyToSend = 'readyToSend',
}

export enum SettingType {
  ChainAccounts = 'CHAIN_ACCOUNTS',
  ChainCommunicationSettings = 'CHAIN_COMMUNICATION_SETTINGS',
  ChainNetworks = 'VALID_CHAIN_NETWORKS',
  DisableAppAccessTokenSingleUse = 'DISABLE_APP_ACCESS_TOKEN_SINGLE_USE',
  TemplateNewAppReg = 'TEMPLATE_NEWAPPREG',
  TestAppUrls = 'TEST_APP_URLS',
  TracingEnabled = 'TRACING_ENABLED',
  TemplateEmail = 'TEMPLATE_EMAIL',
  ServiceUnavailableReason = 'SERVICE_UNAVAILABLE_REASON',
  SupportedCarbonTokens = 'SUPPORTED_CARBON_TOKENS',
  SupportTokens = 'SUPPORTED_TOKENS',
  WalletTypes = 'VALID_WALLET_TYPES',
}

export type OauthProviderInfo = {
  iss?: string
  jwksUri?: string
  authProvider?: AuthProvider
  oauthProvider: OAuthIssuer
}

export enum ChainAssetType {
  Currency = 'currency',
  Token = 'token',
  NFT = 'nft',
}

export enum ChainContractType {
  DefaultToken = 'defaulttoken',
  EthERC20 = 'ethErc20',
  EthERC721 = 'ethErc721',
  EthERC1155 = 'ethErc1155',
}

export type ChainContractActionArgs<ChainActionType, ChainActionArgsType> = {
  contractType: ChainContractType
  actionType: ChainActionType
  actionArgs: ChainActionArgsType
  doesNotSupportAmount?: boolean
}

export type AnalyticsData = {
  appId?: string
  processId?: string
} & Lookup

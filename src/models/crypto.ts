import { Models } from '@open-rights-exchange/chain-js'
import GenericCrypto = Models.ModelsCryptoGeneric
import Crypto_Asymmetric = Models.ModelsCryptoAsymmetric

export enum AsymEncryptionSchemesForOreId {
  /** this approach uses s1 = walletAccountName */
  DefaultSecp256K1 = 'asym.chainjs.secp256k1',
  DefaultEd25519 = 'asym.chainjs.ed25519',
  OreIdRepublic = 'asym.chainjs.secp256k1.oreid.republic',
}

export enum EncryptionMethod {
  Asymmetric = 'asym',
  Symmetric = 'sym',
}

export type EncryptedDataString = GenericCrypto.EncryptedDataString
export type SymmetricEncryptedDataString = GenericCrypto.SymmetricEncryptedDataString
export type AsymmetricEncryptedDataString = Crypto_Asymmetric.AsymmetricEncryptedDataString

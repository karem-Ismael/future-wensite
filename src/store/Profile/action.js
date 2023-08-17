export const PROFILEIMAGE = "PROFILEIMAGE";
export const WALLETTRANSACTIONS="WALLETTRANSACTIONS"
export const WALLETBALANCE="WALLETBALANCE"
export const INVOICE="INVOICE"
export const PROFILINFO="PROFILINFO"
export const ALLWALLETTRANSACTIONS="ALLWALLETTRANSACTIONS"
export function AddProfileImage(payload) {
  return {
    type: PROFILEIMAGE,
    payload,
  };
}

export function WalletTransactions(payload) {
  return {
    type: WALLETTRANSACTIONS,
    payload,
  };
}
export function GetWalletTransactions(payload) {
  return {
    type: ALLWALLETTRANSACTIONS,
    payload,
  };
}



export function WalletBallance(payload) {
  return {
    type: WALLETBALANCE,
    payload,
  };
}
export function CustomerInvoice(payload) {
  return {
    type: INVOICE,
    payload,
  };
}
export function GetProfileInfo(payload){
  return{
    type:PROFILINFO,
    payload
  }
}
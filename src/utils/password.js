import CryptoJS from '../../node_modules/crypto-js'

export const encryptPassword = (password, key) => CryptoJS.AES.encrypt(password, key).toString()
/*!
 * qwebs-crypto
 * Copyright(c) 2017 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
 
"use strict";

const DataError = require("qwebs").DataError;
const crypto = require("crypto");

class CryptoService {
    constructor($config) {
        this.$config = $config;
    };

    /* Methods -------------------------------- */

    encrypt(source, password) {
        if (!source) throw new DataError({ message: "Source is not defined." });
        if (!password) throw new DataError({ message: "Password is not defined." });

        let algorithm = "aes-256-ctr";
        let cipher = crypto.createCipher(algorithm, password);
        let crypted = cipher.update(source, "utf8", "hex");
        crypted += cipher.final("hex");
        return crypted;
    };

    decrypt(source, password) {
        if (!source) throw new DataError({ message: "Source is not defined." });
        if (!password) throw new DataError({ message: "Password is not defined." });

        let algorithm = "aes-256-ctr";
        let decipher = crypto.createDecipher(algorithm, password);
        let dec = decipher.update(source,"hex","utf8");
        dec += decipher.final("utf8");
        return dec;
    };

};

exports = module.exports = CryptoService;
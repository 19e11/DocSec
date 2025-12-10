const imgKit = require('imagekit');

const ImageKit = new imgKit({
    publicKey: process.env.IK_PUBKEY,
    privateKey: process.env.IK_PVTKEY,
    urlEndpoint: process.env.IK_URL_ENDPOINT  
});

module.exports = ImageKit;
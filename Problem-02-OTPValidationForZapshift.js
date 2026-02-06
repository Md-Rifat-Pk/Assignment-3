function validOtp(otp) {
    if (typeof otp !== 'string') {
        return 'Invalid'
    }

    const eightCharter = otp.length === 8;
    const startWith = otp.startsWith("ph-");

    if (eightCharter && startWith) {
        return true;
    }
    else {
        return false;
    }
}

import bcrypt from 'bcryptjs';

const cryptPassword = async(text) => {
    const hash = await bcrypt.hash(text,10)
    return hash
}

const comparePass = async(passText, hashPass) => {
    return await bcrypt.compare(passText, hashPass)
}

export { cryptPassword, comparePass };


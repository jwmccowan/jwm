import { genSaltSync, hashSync } from 'bcryptjs';

const hashPassword = password => hashSync(password, genSaltSync(12));

export default hashPassword;

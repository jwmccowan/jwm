import { compareSync } from 'bcryptjs';

const passwordCompareSync = (passwordToTest, passwordHash) => compareSync(passwordToTest, passwordHash);

export default passwordCompareSync;

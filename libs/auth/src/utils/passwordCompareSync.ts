import { compareSync } from 'bcryptjs';

const passwordCompoareSync = (passwordToTest, passwordHash) => compareSync(passwordToTest, passwordHash);

export default passwordCompoareSync;

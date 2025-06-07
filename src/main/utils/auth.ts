import bcrypt from 'bcryptjs';


export const checkPassword = async (saved: string, provided: string) =>
  await bcrypt.compare(saved, provided);

export const generatePassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};


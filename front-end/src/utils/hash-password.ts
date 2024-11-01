import bcrypt from "bcryptjs";

/**
 * Hashes a password with bcrypt synchronously.
 * @param password - The plain text password to hash.
 * @returns The hashed password.
 */
function hashPasswordSync(password: string): string {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}

export default hashPasswordSync;

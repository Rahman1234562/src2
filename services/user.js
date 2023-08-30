import fs from "fs";
import path from "path";
import bcrypt from 'bcrypt';

const filePath = path.join(process.cwd(), "src", "db", "user.json");

export const getAllUsers = () => {
  const users = fs.readFileSync(filePath);
  return JSON.parse(users);
};

export const getByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

export const verifyPassword = async (hashPassword, password) =>  {
    const isValid = await bcrypt.compare(password, hashPassword);
    return isValid
}

export const registerUser = async (email, password) => {
    console.log(email, password);
  const users = getAllUsers();
  const found = getByEmail(email);
  if (found) {
    throw new Error("user exist");
  }

  const hashPassword = await bcrypt.hash(password, 12)
users.push({
    id: users.length + 1,
    email,
    password: hashPassword
  });
  fs.writeFileSync(filePath, JSON.stringify(users));
}


import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "db", "user.json");

export const getAllUsers = () => {
  const users = fs.readFileSync(filePath);
  return JSON.parse(users);
};

export const getByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

export const registerUser = (email, password) => {
    console.log(email, password);
  const users = getAllUsers();
  const found = getByEmail(email);
  if (found) {
    throw new Error("user exist");
  }
users.push({
    id: users.length + 1,
    email,
    password
  });
  fs.writeFileSync(filePath, JSON.stringify(users));
}


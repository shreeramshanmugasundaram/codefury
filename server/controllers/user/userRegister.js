import userSchema from "../../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { usernames } from "../../tp/usernames.js";
import fs from "fs/promises";

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, cpassword } = req.body;

    // Validate input
    if (!email || !password || !cpassword) {
      return res.status(400).json({ message: "Please fill all the required inputs" });
    }

    if (password !== cpassword) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const existingUser = await userSchema.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const username = generateRandomUsername();
    deleteUsername(username);

    const result = await userSchema.create({
      email,
      password: hashedPassword,
      username: username,
    });

    const jsonKey = process.env.JSONTOKEN; // Make sure this is securely stored

    const token = jwt.sign({ phone: result.phone, id: result._id }, jsonKey, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      result: { email },
      token,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong, please try later" });
  }
};

function generateRandomUsername() {
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex];
}

async function deleteUsername(usernameToDelete) {
  const indexToDelete = usernames.indexOf(usernameToDelete);

  if (indexToDelete !== -1) {
    usernames.splice(indexToDelete, 1); // Removes 1 element at the index
    console.log(`Deleted ${usernameToDelete} from the array.`);

    // Serialize and save the updated array back to the file
    const serializedArray = `export const usernames = ${JSON.stringify(usernames, null, 2)};`;
    await fs.writeFile('./tp/usernames.js', serializedArray);
  } else {
    console.log(`${usernameToDelete} not found in the array.`);
  }
}

export default registerUser;

import primaClient from "./database/dbConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
    async login(req, res) {
        const { username, password } = req.body;
        const user = await primaClient.user.findUnique({ where: { email } });

        if (!user)return res.status(404).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
            return res.status(401).json({ message: "Invalid password" });
        

        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET,
             { expiresIn: "1h" }
        );
        
        res.json({ 
            status: true,
            message: "Login success",
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                access_token: token,
            }
        });
    }
};

export default authController;
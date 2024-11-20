"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.handleLogin = handleLogin;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, passwordHash } = req.body;
            // TODO:
            // 1. Check if existing user with username or email exists
            // 2. If exists, return appropriate response
            // 3. Else, create a new user in the database
            console.log("Received: ", username, email, passwordHash);
            return res.status(200).json({ message: "Successfully received create user request" });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Unhandled error when creating user." });
        }
    });
}
function handleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}

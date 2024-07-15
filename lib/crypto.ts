import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "./types/User"

type CryptoOptions = {
  jwtSecret: string
  jwtTokenDuration: string
  hashAlgo: string
  saltLen: number
}

const CRYPTO_CONFIG: CryptoOptions = {
  jwtSecret: process.env.JWT_SECRET ?? "",
  jwtTokenDuration: process.env.JWT_TOKEN_DURATION ?? "",
  hashAlgo: "whirlpool",
  saltLen: 10,
}

async function genSalt(len: number): Promise<string> {
  return bcrypt.genSalt(len)
}

async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(CRYPTO_CONFIG.saltLen)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

async function checkPassword(
  hashedPassword: string,
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

function createUserJwtToken(
  payload: User,
  expiresIn = CRYPTO_CONFIG.jwtTokenDuration,
  jwtSecret = CRYPTO_CONFIG.jwtSecret
): string {
  return jwt.sign(
    {
      id: payload.id,
      email: payload.email,
      userType: payload.role,
    },
    jwtSecret,
    { expiresIn }
  )
}

export { checkPassword, createUserJwtToken, hashPassword }
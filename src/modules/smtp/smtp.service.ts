import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from '@/config/env.js';

export const mailer = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

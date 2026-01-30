import 'dotenv/config';

export const PORT = process.env.PORT || 3001;
export const SERVER_DOMAIN = process.env.SERVER_DOMAIN || 'localhost:3001';
export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || 'localhost:3000';

export const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecretkey';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.provider.com"
export const EMAIL_PORT = process.env.EMAIL_PORT || 100
export const EMAIL_USER = process.env.EMAIL_USER || "exemple@domain.com"
export const EMAIL_PASS = process.env.EMAIL_PASS || "passwordapp"


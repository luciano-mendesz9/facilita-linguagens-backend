import { CookieOptions, Request, Response, Router } from 'express';
import AuthService, { ProvidersAuthType, UserSocialAuthType } from './auth.service.js';
import { verificationClientHTMLTemplate } from './auth.html.js';
import { authMiddleware, AuthRequest } from '@/middleware/authMiddleware.js';
import UserService from '../user/user.service.js';

const AuthRoutes = Router();

const auth = new AuthService();
const userService = new UserService();

const TOKEN_COOKIE_KEY = 'auth_token';

AuthRoutes.get('/test', async (req, res) => {

  const token = req.cookies[TOKEN_COOKIE_KEY];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const data = auth.verifyToken(token);
  if (!data) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.json({ message: 'Usuário autenticado' });
});

AuthRoutes.get("/validation", async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(404).send('404 - Page Not Found');
  }

  const isValidated = await auth.validateAccount(String(token));
  return res.send(verificationClientHTMLTemplate({ isValidated }));
});


AuthRoutes.post('/sign-up', async (req: Request, res: Response) => {
  try {

    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ error: 'Há campos inválidos' });
    }

    const data = await auth.signUp({ email, password, firstName, lastName });

    if (!data) {
      return res.status(400).json({ message: 'Não foi possível cadastrar usuário com as credenciais informadas' });
    }

    // área de cookies
    res.cookie(TOKEN_COOKIE_KEY, data.token, auth.generateCookieConfig() as CookieOptions);

    return res.status(201).json({ ...data.user, token: undefined, password: undefined, id: undefined });

  } catch (error) {
    console.error('Error in sign-up route:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

AuthRoutes.post('/sign-in', async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Há campos inválidos' });
    }

    const data = await auth.signIn({ email, password });

    if (!data) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    res.cookie(TOKEN_COOKIE_KEY, data.token, auth.generateCookieConfig() as CookieOptions);
    return res.status(200).json({ ...data.user, token: undefined, password: undefined, id: undefined });

  } catch (error) {
    console.error('Erro ao fazer login', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

AuthRoutes.post('/providers/:provider', async (req: Request, res: Response) => {
  try {

    const { provider } = req.params as { provider: 'google' };
    const { email, firstName, image, lastName, sub } = req.body as UserSocialAuthType;

    if (!provider || !email || !firstName || !lastName || !sub) {
      return res.status(401).json({ message: 'Provider and data is required' });
    }

    if (provider !== 'google') {
      return res.status(400).json({ message: 'Unsupported provider' });
    }

    const data = await auth.socialAuth({
      provider: provider.toUpperCase() as ProvidersAuthType,
      user: {
        email,
        firstName,
        lastName,
        image,
        sub: provider.toUpperCase() + '-' + sub,
      }
    })

    const { user, token } = data || {};

    if (!user || !token) {
      throw new Error(`Erro ao autenticar com ${provider}`);
    }

    //res.cookie(TOKEN_COOKIE_KEY, token, auth.generateCookieConfig() as CookieOptions);
    //return res.status(200).json({ ...user, id: undefined, token });
    return res.status(200).json({ token });

  } catch (error) {
    console.error('Erro no login com Google', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

AuthRoutes.post('/me', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {

    if (!req.user?.publicUserId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await userService.getUserByPublicId(req.user.publicUserId);

    const data = {
      ...user,
      password: undefined,
      id: undefined,
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Erro ao buscar usuário', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
})

export default AuthRoutes;

import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import swaggerUi from 'swagger-ui-express';
import { openApiDoc } from './docs/swagger.js';

import { CLIENT_DOMAIN, IS_PRODUCTION, PORT } from '@/config/env.js';
import { mailer } from './modules/smtp/smtp.service.js';
import AuthRoutes from './modules/auth/auth.controller.js';
import UserRoutes from './modules/user/user.controller.js';
import { prisma } from './lib/prisma.js';
import UserPermissions from './config/permissions.js';
import GenreRoutes from './modules/genre/genre.controller.js';
import LoadImagesRoutes from './modules/load-images/load-image.controller.js';
import TextRoutes from './modules/text/text.controller.js';

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: IS_PRODUCTION ? `https://${CLIENT_DOMAIN}` : 'http://localhost:3000',
  credentials: true,
}));

if (!IS_PRODUCTION) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDoc));
}

app.get('/email', async (req, res) => {
  const token = '1234';
  const validationLink = `https://site.com/validation?token=${token}`;

  await mailer.sendMail({
    from: '"Facilita Linguagens" <seuemail@gmail.com>',
    to: 'mdevsystems@gmail.com',
    subject: 'Confirme sua conta no Facilita Linguagens 🚀',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Confirmação de Conta</title>
        </head>
        <body style="
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f4f8fb;
        ">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="
                  background-color: #ffffff;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                ">
                  
                  <!-- Header -->
                  <tr>
                    <td style="
                      background-color: #0d6efd;
                      padding: 30px;
                      text-align: center;
                      color: #ffffff;
                    ">
                      <h1 style="margin: 0; font-size: 26px;">
                        Facilita Linguagens
                      </h1>
                      <p style="margin: 8px 0 0; font-size: 14px;">
                        Aprenda, pratique e evolua 🚀
                      </p>
                    </td>
                  </tr>

                  <!-- Conteúdo -->
                  <tr>
                    <td style="padding: 30px; color: #333333;">
                      <h2 style="margin-top: 0;">
                        Olá, Lucas 👋
                      </h2>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Seja muito bem-vindo ao <strong>Facilita Linguagens</strong>!
                      </p>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Somos uma plataforma <strong>gamificada</strong> criada para
                        te impulsionar e estimular na leitura e interpretação de
                        textos cobrados em vestibulares como o <strong>ENEM</strong>.
                      </p>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Para começar sua jornada e liberar todos os recursos,
                        confirme sua conta clicando no botão abaixo:
                      </p>

                      <!-- Botão -->
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="${validationLink}"
                          style="
                            background-color: #0d6efd;
                            color: #ffffff;
                            padding: 15px 30px;
                            text-decoration: none;
                            font-size: 16px;
                            font-weight: bold;
                            border-radius: 6px;
                            display: inline-block;
                          "
                        >
                          ✔️ Verificar minha conta
                        </a>
                      </div>

                      <p style="font-size: 14px; color: #666666;">
                        Se você não criou uma conta no Facilita Linguagens,
                        pode ignorar este email com segurança.
                      </p>

                      <p style="font-size: 14px; color: #666666;">
                        Este link expira em <strong>5 minutos</strong>.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="
                      background-color: #f1f5f9;
                      padding: 20px;
                      text-align: center;
                      font-size: 12px;
                      color: #777777;
                    ">
                      © ${new Date().getFullYear()} Facilita Linguagens<br/>
                      Todos os direitos reservados.
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  console.log('✅ Email enviado!');

  return res.send('Email enviado com sucesso!');
});

// Rotas Auth
app.use('/auth', AuthRoutes);

// Rotas Users
app.use('/users', UserRoutes);

app.use('/attachments/texts', TextRoutes);
app.use('/attachments/genres', GenreRoutes);
app.use('/attachments/images', LoadImagesRoutes);


async function bootstrap() {
  console.log('Sincronizando lista permissões...');

  for (const key of Object.values(UserPermissions)) {
    await prisma.permission.upsert({
      where: { key },
      update: {},
      create: { key },
    });
  }

  console.log('Lista de Permissões sincronizadas com sucesso!');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();

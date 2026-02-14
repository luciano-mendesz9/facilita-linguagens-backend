import { CLIENT_DOMAIN, SERVER_DOMAIN } from "@/config/env.js";

export const verificationEmailHTMLTemplate = ({ token, name }: { token: string, name: string }) => {

  const link = `${CLIENT_DOMAIN}/validation?token=${token}`;
  return `
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
                        Olá, ${name} 👋
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
                        Para começar sua jornada e liberar todos os recursos da sua conta,
                        confirme sua conta clicando no botão abaixo:
                      </p>

                      <!-- Botão -->
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="${token}"
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
                          Verificar minha conta
                        </a>
                      </div>

                      <p style="font-size: 14px; color: #666666;">
                        Se você não criou uma conta no Facilita Linguagens,
                        pode ignorar este email com segurança.
                      </p>

                      <p style="font-size: 14px; color: #666666;">
                        Este link expira em <strong>15 minutos</strong>.
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
`
};


export const alertCreateAdminHTMLTemplate = ({ name, publicUserId }: { name: string, publicUserId: string }) => {
  const loginLink = `http://${CLIENT_DOMAIN}/auth/bind?id=${publicUserId}`;
  return `
<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Confirmação de Conta Administrativa</title>
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
                        VOCÊ FOI PROMOVIDO À COLABORADOR 🚀
                      </p>
                    </td>
                  </tr>

                  <!-- Conteúdo -->
                  <tr>
                    <td style="padding: 30px; color: #333333;">
                      <h2 style="margin-top: 0;">
                        Olá, ${name} 👋
                      </h2>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Seja muito bem-vindo ao <strong>Facilita Linguagens ADMIN</strong>!
                      </p>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Você está recebendo este e-mail pois um dos administradores do <strong>Facilita Linguagens</strong>
                        vinculou seu e-mail ao time colaborativo. Faça login normalmente na plataforma e você encontrará uma nova opção no menu lateral como 'Área Administrativa'.
                      </p>

                      <p style="font-size: 16px; line-height: 1.6;">
                        Para começar sua jornada e liberar todos os recursos da sua conta,
                        confirme sua conta clicando no botão abaixo:
                      </p>

                      <!-- Botão -->
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="${loginLink}"
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
                         Fazer Log-in
                        </a>
                      </div>

                      <p style="font-size: 14px; color: #666666;">
                        Se você desconhece essa ação do Facilita Linguagens,
                        pode ignorar este email para sua segurança.
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
`
}

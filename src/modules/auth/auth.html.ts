export const verificationClientHTMLTemplate = ({ isValidated }: { isValidated: boolean }) => {

    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Validação de conta | Facilita Linguagens</title>

        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-slate-50 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">

          ${isValidated
            ? `
                <h1 class="text-2xl font-bold text-slate-800 mb-4">
                  🎉 Conta validada com sucesso!
                </h1>

                <p class="text-slate-600 mb-6">
                  Parabéns! Você validou sua conta no
                  <span class="font-semibold text-blue-600">Facilita Linguagens</span>.
                  Agora você já pode acessar seu dashboard.
                </p>

                <a
                  href="http://localhost:3001/dashboard"
                  class="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold
                         hover:bg-blue-700 transition"
                >
                  Acessar meu dashboard
                </a>
              `
            : `
                <h1 class="text-2xl font-bold text-red-600 mb-4">
                  ⏰ Link expirado
                </h1>

                <p class="text-slate-600 mb-6">
                  Este link de validação expirou, não válido ou já foi utilizado.
                  Abra a plataforma do
                  <span class="font-semibold text-blue-600">Facilita Linguagens</span>
                  e solicite um novo e-mail de validação.
                </p>

                <a
                  href="http://localhost:3001"
                  class="inline-block w-full bg-slate-600 text-white py-3 rounded-xl font-semibold
                         hover:bg-slate-700 transition"
                >
                  Acessar a plataforma
                </a>
              `
        }

        </div>
      </body>
    </html>
  `

}
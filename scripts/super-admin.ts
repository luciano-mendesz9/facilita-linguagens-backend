import bcrypt from 'bcrypt';
import readline from 'readline';
import UserService from '../src/modules/user/user.service';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

async function createSuperAdmin() {
    const userService = new UserService();

    const email = await question("Email: ");
    console.clear();
    const fullname = await question("Nome completo: ");
    console.clear();
    const password = await question("Senha: ");
    console.clear();
    const confirmPassword = await question("Confirmar senha: ");
    console.clear();

    if (password !== confirmPassword) {
        console.log("❌ As senhas não coincidem.");
        rl.close();
        return;
    }

    const superPass = process.env.SUPER_ADMIN_PASSWORD || "superadmin";
    console.clear();
    const superAdminPass = await question("Informe a senha de super admin: ");
    console.clear();

    if (superAdminPass !== superPass) {
        console.log("❌ Senha de super admin incorreta.");
        rl.close();
        return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const [firstName, ...rest] = fullname.split(" ");
    const lastName = rest.join(" ");

    const user = await userService.createUser({
        email,
        firstName,
        lastName,
        hashPassword,
    });

    await userService.updateUserByPublicId(user.publicId, {
        status: 'ACTIVE',
        role: 'DESENVOLVEDOR',
        isSuperAdmin: true,
        isCollaborator: true,
    });

    console.log("✅ Super Admin criado com sucesso!\n");
    rl.close();
}

createSuperAdmin();

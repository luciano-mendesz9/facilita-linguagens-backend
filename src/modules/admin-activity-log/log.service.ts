import { prisma } from "@/lib/prisma.js";

class AdminActivityLogService {
    async addActivityLog(data: { activity: string, userId: number }) {
        try {
            await prisma.adminActivityLog.create({
                data: {
                    action: data.activity,
                    userId: data.userId,
                }
            });
        } catch (error) {
            console.log('Error adding activity log:', error);
            return false;
        }
    }

    async getActivityLogs({ userId }: { userId?: number }) {

        try {

            const logs = await prisma.adminActivityLog.findMany({
                where: {
                    userId: userId || undefined,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });

            return logs;

        } catch (error) {
            console.log('Error fetching activity logs:', error);
            return null;
        }

    }
}

export default AdminActivityLogService;


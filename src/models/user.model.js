
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

module.exports = {
    getUsers: async function() {
        let result = await prisma.address.findMany();
        console.log("result", result)
    }
}
const prisma = require("../config/prisma");

const createPlan = async (data) => {
    return await prisma.plan.create({
        data
    });
};

const getPlanes = async () => {
    return await prisma.plan.findMany({
        orderBy: {
            id: "asc"
        }
    });
};

module.exports = {
    createPlan,
    getPlanes
};
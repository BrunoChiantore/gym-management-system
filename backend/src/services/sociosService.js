const prisma = require("../config/prisma");
// crear socio
const createSocio = async(datosSocio)=> {
    const nuevoSocio = await prisma.socio.create({
        data: datosSocio
    });

    return {
        mensaje: "Socio creado correctamente",
        socio: nuevoSocio
    };
};

// Obtener todos los socios
const getSocios = async()=> {
    const socios = await prisma.socio.findMany({
        orderBy: {
            id: "asc"
        }
    });
    return socios;
};


// Obtener un socio por su id
const getSocioById = async(id)=> {
    const socio = await prisma.socio.findUnique({
        where: {
            id: id
        }
    });
    return socio;
};

// Eliminar socio
const deleteSocio = async(id)=> {
    const socio = await prisma.socio.delete({
        where: { id }
    });
    return socio;
};

// Actualizar socio
const updateSocio = async(id, datos)=> {
    const socioActualizado = await prisma.socio.update({
        where: { id },
        data: datos
    });
    return socioActualizado;
};

module.exports = {
    createSocio,
    getSocios,
    getSocioById,
    deleteSocio,
    updateSocio
};
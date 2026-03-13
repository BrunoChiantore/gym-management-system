const sociosService = require("../services/sociosService");

const createSocio = async (req, res) => {
  try {
    const { nombre, apellido, dni, telefono, email, observaciones } = req.body;

    if (!nombre || !apellido || !dni) {
      return res.status(400).json({
        error: "Los campos nombre, apellido y dni son obligatorios"
      });
    }

    const resultado = await sociosService.createSocio({
      nombre,
      apellido,
      dni,
      telefono,
      email,
      observaciones
    });

    return res.status(201).json(resultado);
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      return res.status(409).json({
        error: "Ya existe un socio con ese DNI"
      });
    }

    return res.status(500).json({
      error: "Error al crear el socio"
    });
  }
};

const getSocios = async(req, res)=> {
  try {
    const socios = await sociosService.getSocios();

    return res.status(200).json(socios);
  } catch(error) {
    console.error(error);

    return res.status(500).json({
      error: "Error al obtener los socios"
    });
  }
};

const getSocioById = async(req, res)=> {
  try {
    const id = Number(req.params.id);

    if(isNaN(id)) {
      return res.status(400).json({
        error: "El id debe ser un número válido"
      });
    }

    const socio = await sociosService.getSocioById(id);

    if(!socio) {
      return res.status(404).json({
        error: "Socio no encontrado"
      });
    }

    return res.status(200).json(socio);
  } catch(error) {
    console.error(error);

    return res.status(500).json({
      error: "Error al obtener el socio"
    });
  }
};

const deleteSocio = async(req, res)=> {
  try {
    const id = Number(req.params.id);

    if(isNaN(id)){
      return res.status(400).json({
        error: "El id debe ser un número válido"
      });
    }

    const socio = await sociosService.getSocioById(id);

    if(!socio){
      return res.status(404).json({
        error: "Socio no encontrado"
      });
    }
    
    await sociosService.deleteSocio(id);

    return res.status(200).json({
      mensaje: "Socio eliminado correctamente"
    });
  } catch(error) {
    console.error(error);

    return res.status(500).json({
      error: "Error al eliminar el socio"
    });
  }
};

module.exports = {
  createSocio,
  getSocios,
  getSocioById,
  deleteSocio
};
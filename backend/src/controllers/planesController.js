const planesService = require("../services/planesService");

const createPlan = async (req, res) => {
    try {
        const { nombre, precio, duracionMeses } = req.body;

        if (!nombre || !precio || !duracionMeses) {
            return res.status(400).json({
                error: "Todos los campos son obligatorios"
            });
        }

        const plan = await planesService.createPlan({
            nombre,
            precio,
            duracionMeses
        });

        return res.status(201).json(plan);

    } catch(error) {
        console.error(error);

        if (error.code === "P2002") {
            return res.status(409).json({
                error: "Ya existe un plan con ese nombre"
            });
        }

        return res.status(500).json({
            error: "Error al crear el plan"
        });
    }
};

const getPlanes = async (req, res) => {
  try {
    const planes = await planesService.getPlanes();

    return res.status(200).json(planes);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error al obtener los planes"
    });
  }
};

module.exports = {
    createPlan,
    getPlanes
};
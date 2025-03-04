import routesData from "../data/routes-data.json" with { type: "json" };

export const routeList = async (req, res) => {
  res.json(routesData);
};

export const routeDetails = async (req, res) => {
    const { id } = req.params;
    const route = routesData.routes.find((route) => route.id === id);
    
    if (route) {
        res.json(route);
    } else {
        res.status(404).json({ message: `Route with id ${id} not found` });
    }
}
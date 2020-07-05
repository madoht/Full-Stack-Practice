import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "OhTube";
    res.locals.routes = routes;
    next();
}; 
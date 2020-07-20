import express from "express";
import routes from "../routes";
import {
    home,
    search
} from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    githubLogin,
    githubAuth,
    postGuthubLogin,
    getMe,
    facebookLogin,
    facebookAuth,
    postFacebookLogin
} from "../controllers/userController";
import {
    onlyPublic
} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

//Github
globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, githubAuth, postGuthubLogin);

globalRouter.get(routes.me, getMe);

// Facebook
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(routes.facebookCallback, facebookAuth, postFacebookLogin);

export default globalRouter;
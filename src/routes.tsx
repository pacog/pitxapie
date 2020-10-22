import Animals from "pages/Animals";
import Faces from "pages/Faces";
import WhackAnimals from "pages/WhackAnimals";

export interface IRouteInfo {
    pathname: string;
    component: () => JSX.Element;
}

export const routes: IRouteInfo[] = [
    {
        pathname: "/faces",
        component: Faces,
    },
    {
        pathname: "/whack-animals",
        component: WhackAnimals,
    },
    {
        pathname: "/",
        component: Animals,
    },
];

import Animals from "pages/Animals";
import Faces from "pages/Faces";

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
        pathname: "/",
        component: Animals,
    },
];

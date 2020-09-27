import React from "react";
import LongPressButton from "components/LongPressButton";
import { useLocation, useHistory } from "react-router-dom";
import { getRandomFromArray } from "utils/random";
import { IRouteInfo } from "../../routes";

function LocationChanger({ routes }: { routes: IRouteInfo[] }) {
    const location = useLocation();
    const history = useHistory();

    const onRouteChangeRequest = () => {
        const otherRoutes = routes.filter(
            (route) => route.pathname !== location.pathname
        );
        const nextRoute = getRandomFromArray(otherRoutes);
        history.replace(nextRoute);
    };

    return <LongPressButton onPress={onRouteChangeRequest} />;
}

export default LocationChanger;

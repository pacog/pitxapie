import React from "react";
import LongPressButton from "components/LongPressButton";
import { useLocation, useHistory } from "react-router-dom";
import { getRandomFromArray } from "utils/random";

const ALL_ROUTES = ["/", "/faces"];

function LocationChanger() {
    const location = useLocation();
    const history = useHistory();

    const onRouteChangeRequest = () => {
        const otherRoutes = ALL_ROUTES.filter(
            (route) => route !== location.pathname
        );
        const nextRoute = getRandomFromArray(otherRoutes);
        history.replace(nextRoute);
    };

    return <LongPressButton onPress={onRouteChangeRequest} />;
}

export default LocationChanger;

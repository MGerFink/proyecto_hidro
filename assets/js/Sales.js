import { Prod } from "./Prod.js";
import URI from "./config.js";

const PARENT ="Gridsales";

// Transformo datos obtenidos en la API a objetos de clase Prod (productos)
const transformToProd = (datos) => {
    return datos.map(
        (dato) =>
            new Prod(
                dato.IDp,
                dato.Descrip,
                dato.Price,
                dato.Obs,
                dato.Stock,
                dato.Sold,
                dato.URLimg
            ),
    );
};
/*toma los datos de la API, los transforma mediante la función transformToProd a objetos de clase Prod
 y mediante la función injectProd los inyecta en el html*/
const recibirDatos = () => {
    fetch(URI, {
        method: "GET",
    })
        .then((datos) => datos.json())
        .then((datos) =>
            transformToProd(datos).forEach((dato) => dato.injectProd(PARENT)),
        )
        .catch((e) => console.log(e));
};

// evento a ejecutarse al cargarse la página
window.onload = () => recibirDatos();

import * as movimientos from './movimiento.service'
import Comida from '../models/comida';

export const crear = async (data) => {
    let nueva_comida = await Comida.create(data);

    await movimientos.crear(nueva_comida, 'creado', nueva_comida.totalUnit, nueva_comida.date);

    return nueva_comida;
}
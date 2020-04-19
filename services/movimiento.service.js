import Movimiento from '../models/movimiento';
import * as updateComida from '../controllers/ComidaController';
import * as Comida from '../models/comida';


export const crear = async (comida, accion, valor, date) => {
    let nuevo_movimiento = await Movimiento.create({
        comida: comida,
        accion: accion,
        valor: valor,
        date: date
    });
    return nuevo_movimiento;
};

export const buscar = async(comida) => {
    let movimiento = await Movimiento.find({ comida: comida});
    console.log(movimiento, comida)
    return movimiento;
};
    

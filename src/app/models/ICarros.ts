import { IMarcas } from "./IMarcas";
import { ICores } from "./ICores";
export interface ICarros {
    id?: number
    nomeCarro: string;
    anoFabricacaoCarro: number;
    anoModeloCarro: number;
    modeloCarro: string;
    marca?: IMarcas;
    cores?: ICores[];
}

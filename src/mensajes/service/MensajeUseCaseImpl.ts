import { CreateMensajeDto } from "../dto/create-mensaje-dto/create-mensaje-dto";
import { MensajeUseCases } from "./MensajeUseCases";

export class MensajeUseCaseImpl implements MensajeUseCases {
    save(mensajeDto: CreateMensajeDto): void {
        throw new Error("Method not implemented.");
    }
    
}
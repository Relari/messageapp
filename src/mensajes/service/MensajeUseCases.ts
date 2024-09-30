import { CreateMensajeDto } from "../dto/create-mensaje-dto/create-mensaje-dto";

export interface MensajeUseCases {

    save(mensajeDto: CreateMensajeDto) : void

}
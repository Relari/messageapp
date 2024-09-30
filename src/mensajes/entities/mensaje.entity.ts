import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateMensajeDto } from "../dto/create-mensaje-dto/create-mensaje-dto";

@Entity()
export class Mensaje {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    mensaje: string;

    /**
     * Metodo estatico que convierte el DTO en la entidad.
     * @param mensajeDto {@link CreateMensajeDto}
     * @returns El objeto {@link Mensaje}
     */
    static map(mensajeDto: CreateMensajeDto): Mensaje {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeDto.mensaje;
        nuevo.nick = mensajeDto.nick;
        return nuevo;
    }
}

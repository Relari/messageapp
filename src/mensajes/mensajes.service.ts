import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { Mensaje } from './entities/mensaje.entity';

@Injectable()
export class MensajesService {

    private readonly log = new Logger(MensajesService.name);

    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
    ) {}

    async getAll(): Promise<Mensaje[]> {
        this.log.debug('Listado los mensajes.');
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje> {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        let data = Mensaje.map(mensajeNuevo);

        return this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(id: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje> {

        const mensajeUpdate = await this.mensajeRepository.findOneBy({ id });

        mensajeUpdate.mensaje = mensajeActualizar.mensaje;
        mensajeUpdate.nick = mensajeActualizar.nick;

        return this.mensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(idMensaje: number): Promise<any> {
        return await this.mensajeRepository.delete(idMensaje);
    }
}

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { Mensaje } from './entities/mensaje.entity';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {

    constructor(
        private readonly mensajesService: MensajesService
    ) {}

    @Post()
    create(@Body() createMensajesDto:CreateMensajeDto, @Res() response) {
        // return 'Mensaje creado.';
        this.mensajesService.createMensaje(createMensajesDto)
        .then(
            mensaje => {
                response.status(HttpStatus.OK).json(mensaje)
            }
        ).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la creacion del mensaje.'})
        });
    }

    @Get()
    findAll(@Res() response) {
        //return 'Listado de mensajes.'

        this.mensajesService.getAll()
        .then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        })
        .catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la obtencion de los mensajes.'});
        });
    }
 
    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto,
    @Param('id') idMensaje, @Res() response) {
        //return 'Mensaje actualizado.';

        this.mensajesService.updateMensaje(idMensaje, updateMensajeDto)
        .then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la edicion del mensaje.'});
        });
    }

    @Delete(':id')
    delete(@Param('id') idMensaje, @Res() response) {
        //return 'Mensaje eliminado.';
        this.mensajesService.deleteMensaje(idMensaje)
        .then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la eliminacion del mensaje.'});
        });
    }

}

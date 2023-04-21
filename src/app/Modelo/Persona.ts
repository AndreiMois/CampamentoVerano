export class Persona {
    id: number;

    /*Ninio*/
    nombre:string;
    direccion: string;
    curso: string;
    fechaNac: Date;
    empadronamiento: string;

    /*Madre*/
    nombreMadre: string;
    dniMadre: string;
    contactoMadre: string;

    /*Padre*/
    nombrePadre: string;
    dniPadre: string;
    contactoPadre: string;

    /*Autorizado*/
    nombreAutorizado: string;
    parentesco: string;
    dniAutorizado: string;
    contactoAutorizado: string;

    /*Sale Solo*/
    saleSolo: boolean;

    /*Familia Numerosa*/
    familiaNumerosa: boolean;

    /*Discapacidad*/
    discapaciada: boolean;

    /*Importe*/
    importe: number;

    /*Cuenta*/
    titularCuenta: string;
    nieTitular: string;
    es: string;
    iban: string;
    oficina: string;
    dc: string;
    cuenta: string;

    /*Pisicina*/
    piscina: string;

    /*Nadar*/
    nadar: string;

    /*Imagenes*/
    imagenes: string;

}
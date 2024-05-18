export class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  celular: string;
  fecha: string;
  ubicacion: string;
  constructor() {
      this.id = 0;
      this.nombre = "";
      this.apellido = "";
      this.correo = "";
      this.celular = "";
      this.fecha = "";
      this.ubicacion = "";
    }
}

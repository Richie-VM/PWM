import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programas',
  imports: [CommonModule,RouterLink],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent {

  public programas: any[ ] = [
    {titulo: 'Finance and Accounting for the Nonfinancial Executive', Duracion: '81 sesiones (182 horas)', Horarios: 'Lunes, Martes, Jueves - 7:00 pm a 9:00 pm', Tipo: 'In-Person', Modalidad: 'Modalidad Hibrido', Fecha: '03 Febrero 2025'},
    {titulo: 'Design Thinking Bootcamp: Make Impact and Drive Growth in Your Organization', Duracion: '81 sesiones (182 horas)', Horarios: 'Lunes, Martes, Jueves - 7:00 pm a 9:00 pm', Tipo: 'In-Person', Modalidad: 'Modalidad Hibrido', Fecha: '03 Febrero 2025'},
    {titulo: 'The Strategic Chief Sustainability Officer Program', Duracion: '81 sesiones (182 horas)', Horarios: 'Lunes, Martes, Jueves - 7:00 pm a 9:00 pm', Tipo: 'In-Person', Modalidad: 'Modalidad Hibrido', Fecha: '03 Febrero 2025'},
    {titulo: 'Executive Leadership Development', Duracion: '81 sesiones (182 horas)', Horarios: 'Lunes, Martes, Jueves - 7:00 pm a 9:00 pm', Tipo: 'In-Person', Modalidad: 'Modalidad Hibrido', Fecha: '03 Febrero 2025'},
  ];
}

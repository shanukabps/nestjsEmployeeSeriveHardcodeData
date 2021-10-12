import { Employee } from './schemas/employee.schema';

export class VehicleCreateDto {
  id: string;

  make: string;

  model: string;

  vin: string;

  employeeId: string;
}

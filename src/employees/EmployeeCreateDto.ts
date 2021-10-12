import { IsEmpty, IsNotEmpty, NotEquals } from 'class-validator';
import { EmployeeStatus, EmployeeTier } from './employee.enum';

export class EmployeeCreateDto {
  id: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @NotEquals('CEO')
  designation: string;
  nearestcity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

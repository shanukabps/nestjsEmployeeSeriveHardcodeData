import { IsIn } from 'class-validator';
import { EmployeeStatus } from './employee.enum';

export class EmployeeSearchDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}

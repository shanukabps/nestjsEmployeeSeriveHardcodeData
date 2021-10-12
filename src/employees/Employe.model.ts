import { EmployeeStatus, EmployeeTier } from './employee.enum';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  nearestcity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

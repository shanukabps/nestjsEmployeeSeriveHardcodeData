import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from './employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Vehicle, VehicleSchema } from './schemas/Vehicle.schema';
import { VehicleController } from './vehicle.controller';
import { VehicleRepository } from './vehicle.repository';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ]),
  ],
  controllers: [EmployeesController, VehicleController],
  providers: [
    EmployeesService,
    EmployeeRepository,
    VehicleService,
    VehicleRepository,
  ],
})
export class EmployeesModule {}

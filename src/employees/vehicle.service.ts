import { Injectable } from '@nestjs/common';
import { Vehicle } from './schemas/Vehicle.schema';
import { VehicleRepository } from './vehicle.repository';
import { VehicleCreateDto } from './VehicleCreateDto';

@Injectable()
export class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) {}

  getAllVehicle(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  createVehicle(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    return this.vehicleRepository.create(vehicleCreateDto);
  }
}

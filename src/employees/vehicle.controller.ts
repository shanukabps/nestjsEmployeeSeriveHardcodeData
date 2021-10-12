import { Body, Controller, Get, Post } from '@nestjs/common';
import { Vehicle } from './schemas/Vehicle.schema';
import { VehicleService } from './vehicle.service';
import { VehicleCreateDto } from './VehicleCreateDto';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  async geALLEmployees(): Promise<Vehicle[]> {
    return await this.vehicleService.getAllVehicle();
  }

  @Post()
  async createVehicle(
    @Body() vehicleCreateDto: VehicleCreateDto,
  ): Promise<Vehicle> {
    return await this.vehicleService.createVehicle(vehicleCreateDto);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleCreateDto } from './VehicleCreateDto';
import { Vehicle, VehicleDocument } from './schemas/vehicle.schema';

@Injectable()
export class VehicleRepository {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  async create(createVehicleDto: VehicleCreateDto): Promise<Vehicle> {
    let newVehicle = new this.vehicleModel(createVehicleDto);
    return await newVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleModel
      .find()
      .populate('employeeId', ['firstName', 'lastName']);
  }
}

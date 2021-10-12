//one to meny emp can have meny vehicle

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Employee } from './employee.schema';

export type VehicleDocument = Vehicle & mongoose.Document;

@Schema()
export class Vehicle {
  @Prop()
  id: string;
  @Prop()
  make: string;
  @Prop()
  model: string;
  @Prop()
  vin: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  employeeId: Employee;
}
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

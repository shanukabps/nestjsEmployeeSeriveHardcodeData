import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { EmployeeTier } from './employees/employee.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value);
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException(`${value.tier} is not valid`);
    }
    return value;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { request } from 'http';
import { NotFoundError } from 'rxjs';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { EmployeeCreateDto } from './EmployeeCreateDto';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdateDto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  //@UsePipes(ValidationPipe)
  geALLEmployees(@Query() param: EmployeeSearchDto) {
    //dosomething
    console.log(`param`, param);
    if (Object.keys(param).length) {
      // console.log(`filtter`);
      return this.employeeService.employeeSearch(param);
    } else {
      // console.log(`Without filtter`);
      return this.employeeService.getAllEmployees();
    }
  }
  //@Body('tier', EmployeeTierValidationPipe) tier: string,
  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new EmployeeTierValidationPipe())
  createEmployee(@Body() employeeCreateDto: EmployeeCreateDto) {
    return this.employeeService.createEmployee(employeeCreateDto);
  }

  @Get('/:id')
  findEmployeeById(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(id);
  }

  @Put('/:id/city')
  updateEmployee(
    @Param('id') id: string,
    @Body() employeeUpdateDto: EmployeeUpdateDto,
  ) {
    employeeUpdateDto.id = id;
    return this.employeeService.updateEmployee(employeeUpdateDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteEmployee(@Param('id') id: string) {
    if (!this.employeeService.deleteEmployee(id)) {
      throw new NotFoundException('Employee Does Not Exist');
    }
  }
}

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
import { Employee } from './schemas/employee.schema';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  //@UsePipes(ValidationPipe)
  async geALLEmployees(@Query() param: EmployeeSearchDto): Promise<Employee[]> {
    //dosomething
    // console.log(`param`, param);
    // if (Object.keys(param).length) {
    //   // console.log(`filtter`);
    //   return this.employeeService.employeeSearch(param);
    // } else {
    //   // console.log(`Without filtter`);
    //   return this.employeeService.getAllEmployees();
    // }
    return await this.employeeService.getAllEmployees();
  }
  //@Body('tier', EmployeeTierValidationPipe) tier: string,
  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new EmployeeTierValidationPipe())
  async createEmployee(
    @Body() employeeCreateDto: EmployeeCreateDto,
  ): Promise<Employee> {
    return await this.employeeService.createEmployee(employeeCreateDto);
  }

  // @Get('/:id')
  // findEmployeeById(@Param('id') id: string) {
  //   return this.employeeService.getEmployeeById(id);
  // }

  // @Put('/:id/city')
  // updateEmployee(
  //   @Param('id') id: string,
  //   @Body() employeeUpdateDto: EmployeeUpdateDto,
  // ) {
  //   employeeUpdateDto.id = id;
  //   return this.employeeService.updateEmployee(employeeUpdateDto);
  // }

  // @Delete('/:id')
  // @HttpCode(204)
  // deleteEmployee(@Param('id') id: string) {
  //   if (!this.employeeService.deleteEmployee(id)) {
  //     throw new NotFoundException('Employee Does Not Exist');
  //   }
  // }
}

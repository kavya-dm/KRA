// Section Application Entry Point
// This section starts the NestJS application

import { NestFactory } from '@nestjs/core'
import { Module, Controller, Get, Post, Param, Body, Injectable } from '@nestjs/common'



// Section Bootstrap Function
// This function creates and runs the NestJS server

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}

bootstrap()



// Section Module Definition
// A module groups controllers and services
// It defines how dependency injection is configured

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class AppModule {}



// Section Service Definition
// A service contains business logic
// Injectable allows NestJS to manage this class

@Injectable()
export class EmployeeService {
  // This method returns employee data
  getEmployeeById(id: string): string {
    return 'Employee data for id ' + id
  }

  // This method processes input data
  createEmployee(name: string): string {
    return 'Employee created with name ' + name
  }
}



// Section Controller Definition
// A controller handles incoming HTTP requests

@Controller('employees')
export class EmployeeController {
  // The service is injected automatically
  constructor(private readonly employeeService: EmployeeService) {}

  // Section Get Decorator Usage
  // This method handles read requests

  @Get(':id')
  fetchEmployee(@Param('id') id: string): string {
    return this.employeeService.getEmployeeById(id)
  }

  // Section Post Decorator Usage
  // This method handles create requests

  @Post()
  addEmployee(@Body('name') name: string): string {
    return this.employeeService.createEmployee(name)
  }
}



// Section Decorator Summary
// Module defines application structure
// Controller defines request handling logic
// Injectable enables dependency injection
// Get maps read operations
// Post maps create operations
// Param extracts route values
// Body extracts request data

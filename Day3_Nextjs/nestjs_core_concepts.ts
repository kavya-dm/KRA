// This section represents main.ts
// It is the entry point of the NestJS application

async function bootstrap() {
  // NestFactory creates the application instance using the root module
  const app = await NestFactory.create(AppModule);

  // The application starts listening on port 3000
  await app.listen(3000);
}

// This function call starts the application
bootstrap();



// This section represents app.module.ts
// A module groups controllers and services together

@Module({
  // Controllers handle incoming HTTP requests
  controllers: [UserController],

  // Services contain business logic
  providers: [UserService],
})
export class AppModule {}



// This section represents a controller
// Controllers decide which method handles a request

@Controller('users')
export class UserController {
  // UserService is injected into the controller
  constructor(private readonly userService: UserService) {}

  // This method handles GET requests
  @Get()
  getUsers(): string {
    // The controller delegates logic to the service
    return this.userService.fetchUsers();
  }
}



// This section represents a service
// Services contain the actual business logic

@Injectable()
export class UserService {
  // This method performs processing and returns data
  fetchUsers(): string {
    return 'List of users returned from service';
  }
}



// Summary of decorators used
// Module defines a module
// Controller defines a controller
// Injectable enables dependency injection
// Get maps HTTP GET requests

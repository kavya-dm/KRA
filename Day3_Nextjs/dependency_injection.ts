
// This section represents main.ts
// It is the entry point of the application

async function bootstrap() {
  // NestFactory creates the application using the root module
  const app = await NestFactory.create(AppModule);

  // The application listens on port 3000
  await app.listen(3000);
}

// Starting the application
bootstrap();



// This section represents the module
// The module registers services and controllers

@Module({
  // Controllers receive requests
  controllers: [ProductController],

  // Providers are injectable services
  providers: [ProductService],
})
export class AppModule {}



// This section represents a service
// Services contain business logic
// Injectable allows NestJS to manage this class

@Injectable()
export class ProductService {
  // This method contains application logic
  getProduct(): string {
    return 'Product data returned from service';
  }
}



// This section represents a controller
// Controllers depend on services

@Controller('products')
export class ProductController {
  // ProductService is injected by NestJS
  // The controller does not create the service manually
  constructor(private readonly productService: ProductService) {}

  // This method handles GET requests
  @Get()
  getProduct(): string {
    // The controller calls the service method
    return this.productService.getProduct();
  }
}



// Summary of key decorators
// Injectable allows a class to be injected
// Module registers providers
// Controller handles requests
// Get maps HTTP GET requests

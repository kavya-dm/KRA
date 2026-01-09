import {
Controller,
Get,
Post,
Body,
Param,
Query,
UseGuards,
ParseIntPipe,
ParseBoolPipe,
DefaultValuePipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { CapitalizePipe } from '../common/pipes/capitalize.pipe';


@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
constructor(private readonly usersService: UsersService) {}


@Post()
create(@Body() dto: CreateUserDto) {
return this.usersService.create(dto);
}


@Get()
findAll(@Query('active', ParseBoolPipe) active: boolean) {
return this.usersService.findAll(active);
}


@Get('search')
search(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
return { page };
}


@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
return this.usersService.findOne(id);
}


@Get('name/:name')
findByName(@Param('name', CapitalizePipe) name: string) {
return { name };
}
}
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';


@Injectable()
export class CapitalizePipe implements PipeTransform<string, string> {
transform(value: string): string {
if (typeof value !== 'string') {
throw new BadRequestException('Expected a string');
}
return value.charAt(0).toUpperCase() + value.slice(1);
}
}
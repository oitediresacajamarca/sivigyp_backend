import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidaFechaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    return value;
  }
}

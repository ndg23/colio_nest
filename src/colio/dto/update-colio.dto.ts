import { PartialType } from '@nestjs/mapped-types';
import { CreateColioDto } from './create-colio.dto';

export class UpdateColioDto extends PartialType(CreateColioDto) {}

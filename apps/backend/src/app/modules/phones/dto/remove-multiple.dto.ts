import {
  IsArray,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsJSON,
} from 'class-validator';

export class RemoveMultiplePhonesDto {
  @IsArray()
  @IsNotEmpty()
  readonly ids: Array<string>;
}

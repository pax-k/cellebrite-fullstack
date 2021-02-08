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

export class CreatePhoneDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly serial: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly color: string;

  // @MaxLength(200)
  // @IsJSON()
  @IsOptional()
  readonly metadata: unknown;
}

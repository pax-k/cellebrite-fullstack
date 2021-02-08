import {
  IsArray,
  IsDefined,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdatePhoneDto {
  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  serial: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsOptional()
  metadata: unknown;
}

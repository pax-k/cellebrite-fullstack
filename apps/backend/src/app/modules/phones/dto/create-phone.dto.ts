import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
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

  @IsOptional()
  readonly metadata: unknown;
}

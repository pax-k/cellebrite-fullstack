import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchParams {
  @IsOptional()
  @Type(() => String)
  @IsString()
  search: string;

  @IsOptional()
  @Type(() => String)
  @IsString()
  field: string;
}

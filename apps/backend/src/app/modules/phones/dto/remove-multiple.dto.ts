import {
  IsArray,
  IsNotEmpty,
} from 'class-validator';

export class RemoveMultiplePhonesDto {
  @IsArray()
  @IsNotEmpty()
  readonly ids: Array<string>;
}

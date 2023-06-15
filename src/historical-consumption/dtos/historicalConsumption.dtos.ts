import { IsDate, IsNotEmpty } from 'class-validator';

export class HistorialConsumptionDto {
  @IsDate()
  @IsNotEmpty()
  readonly initialDate: Date;

  @IsDate()
  @IsNotEmpty()
  readonly finalDate: Date;
}

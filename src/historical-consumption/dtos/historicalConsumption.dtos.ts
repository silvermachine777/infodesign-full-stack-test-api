import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class HistorialConsumptionDto {
  @IsDate()
  @IsNotEmpty()
  readonly initialDate: Date;

  @IsDate()
  @IsNotEmpty()
  readonly finalDate: Date;

  @IsString()
  @IsNotEmpty()
  readonly historyType: string;
}

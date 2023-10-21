import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  IsInt,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name_company: string;

  @IsString()
  rua_company: string;

  @IsString()
  name_owner: string;

  @IsString()
  cep_company: string;

  @IsString()
  number_adress: string;

  @IsString()
  cpf_owner: string;

  @IsString()
  number_owner: string;

  @IsString()
  contact_company: string;

  @IsInt()
  type: number;
}

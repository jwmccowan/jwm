import { IsEmail, MinLength } from 'class-validator';

export class SignUpInputDto {
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;

  readonly role?: string;

  readonly name?: string;
}

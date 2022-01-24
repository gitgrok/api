import { IsDefined, IsEmail } from "class-validator";

export class AuthRequestDto {
  @IsEmail()
  @IsDefined()
  username: string;
  
  @IsDefined()
  password: string;
  
  data?: any;
}

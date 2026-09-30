import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @MaxLength(20, { message: 'Name must be at most 20 characters long' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Gender must be a string' })
  @IsNotEmpty({ message: 'Gender is required' })
  @IsIn(['male', 'female'], { message: 'Gender must be either male or female' })
  gender: string;
}

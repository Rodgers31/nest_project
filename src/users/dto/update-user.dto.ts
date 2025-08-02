import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // This class will inherit all properties from CreateUserDto
  // and make them optional for the update operation.
  // No additional properties are needed here.
}

import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { getUserFromContext } from '../../utils/getUserFromContext';

export const AuthUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const user = getUserFromContext(context);
  if (!user) {
    throw new UnauthorizedException();
  }
  return user;
});

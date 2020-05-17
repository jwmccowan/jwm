import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CustomGraphQLContext } from './customGraphQLContext';

export function getGqlResponse(context: ExecutionContext) {
  const graphqlContext = GqlExecutionContext.create(context);
  return graphqlContext.getContext<CustomGraphQLContext>()?.res || null;
}

export const ResGql = createParamDecorator((data: unknown, context: ExecutionContext) => getGqlResponse(context));

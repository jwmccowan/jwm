import { ExecutionContext } from '@nestjs/common';
import { Request, Response } from 'express';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { CustomGraphQLContext } from '@jwm/graphql';

export function getUserFromContext(context: ExecutionContext) {
  if (context.getType() === 'ws') {
    const client = context.switchToWs().getClient();
    return client.user || null;
  } else if (context.getType() === 'http') {
    const request = context.switchToHttp().getRequest<Request>();
    return request.user || null;
  } else if (context.getType<GqlContextType>() === 'graphql') {
    const graphqlContext = GqlExecutionContext.create(context);
    return graphqlContext.getContext<CustomGraphQLContext>()?.req?.user || null;
  }
}

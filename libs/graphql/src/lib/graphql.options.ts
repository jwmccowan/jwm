import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { CustomGraphQLContext } from '@jwm/auth';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      context: ({ req, res, connection }): CustomGraphQLContext => ({
        req: req || connection?.context?.req,
        res: res || connection?.context?.res,
      }),
      typePaths: ['./**/*.graphql'], // path for gql schema files
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        // will generate .ts types from gql schema files
        path: join(process.cwd(), 'libs/graphql/src/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: false,
    };
  }
}

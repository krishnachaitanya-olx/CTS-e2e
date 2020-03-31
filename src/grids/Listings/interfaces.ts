import { DocumentNode } from 'graphql';
import { ReactNode } from 'react';

interface SourceGql {
    query: DocumentNode | undefined;
    variables?: {
      filters?: {
        // TODO: Change the key name to "filter" once the refactoring is done
        [propName: string]: any;
      };
      [propName: string]: any;
    };
}

interface OptionsInterface {
  viaOauth?: boolean;
  withCredentials?: boolean;
}

interface SourceRest {
  url: string;
  extraConfig?: OptionsInterface;
  params?: {
    [propName: string]: any;
  };
  modifyData?: Function;
}

export interface ListingInterface {
  dataSourceGql?: SourceGql;
  dataSourceRest?: SourceRest;
  children: ReactNode;
  title: ReactNode;
}

export interface ListingGqlData {
  nodes: {
    totalCount: number;
    edges: Array<object>;
    pageInfo: {
      hasNextPage: boolean;
      totalPages: number;
      pageNumber: number;
    };
  };
}

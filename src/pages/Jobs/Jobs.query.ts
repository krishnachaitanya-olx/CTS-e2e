import { gql } from 'apollo-boost';

const jobShape = `
    id
    title
`;

const jobsQuery = gql`
    query JobListQuery(
        $filters: FilterInput
        $first: Int
        $after: Int
        $searchterm: String
        $sort: String
    ) {
        nodes(
            type: Job
            filter: $filters
            first: $first
            after: $after
            query: $searchterm
            sort: $sort
        ) {
            totalCount
            edges {
              ... on Job {
                ${jobShape}
              }
            }
            pageInfo {
              hasNextPage
              totalPages
              pageNumber
            }
          }
    }
`;

export default jobsQuery;

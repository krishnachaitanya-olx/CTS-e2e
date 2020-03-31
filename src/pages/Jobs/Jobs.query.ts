import { gql } from 'apollo-boost';

const jobShape = `
    id
    title
    organization {
      popular_name
      name
      id
    }
    functional_area {
      id
      name
    }
    state
    stage
    pricing_plan_type
    contract_type
    client_approval_required
    is_screening_required
    is_resume_subscribed
    vacancies
    locations {
      place {
        city
        locality
      }
    }
    expectation {
      degree_requirements {
        degree {
          name
        }
      }
      work_exp_requirements {
        min_experience
        max_experience
      }
    }
    offer {
      salary_format
      min_offered_salary
      max_offered_salary
    }
    associated_cse {
      user {
        first_name
        last_name
      }
    }
`;

const jobsQuery = gql`
    query getJobList(
        $filters: FilterInput
        $first: Int
        $after: Int
    ) {
        nodes(
            type: Job
            filter: $filters
            first: $first
            after: $after
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

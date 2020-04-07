import React, { ReactNode } from 'react';
import {
 JobColumn, CompanyColumn, JobTypeColumn, OpeningsColumn, ImportantPeopleColumn,
} from './Columns.component';

const columns = [
    {
        title: 'Job',
        key: 'Job',
        render:
            (text: string, record: any): ReactNode => <JobColumn text={text} record={record} />,
        width: '10%',
    },
    {
        title: 'Company',
        key: 'Company',
        render:
            (text: string, record: any): ReactNode => <CompanyColumn text={text} record={record} />,
        width: 200,
    },
    {
        title: 'Job type',
        key: 'Job type',
        width: 200,
        render:
        (text: string, record: any): ReactNode => <JobTypeColumn text={text} record={record} />,
    },
    {
        title: 'Openings',
        key: 'Openings',
        width: 200,
        render:
        (text: string, record: any): ReactNode => <OpeningsColumn text={text} record={record} />,
    },
    {
        title: 'Important people',
        key: 'Important people',
        width: 200,
        render:
            (
                text: string, record: any,
            ): ReactNode => <ImportantPeopleColumn text={text} record={record} />,
    },
];

export default columns;

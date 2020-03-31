import {
    EditOutlined, CalendarOutlined, FileAddOutlined,
    UserAddOutlined, PhoneTwoTone, UserSwitchOutlined, CalendarTwoTone, FileTextTwoTone,
} from '@ant-design/icons';
import {
 Typography, Button, Row, Col, Tooltip, Menu, Dropdown,
} from 'antd';
import { get, map } from 'lodash';
import React, { FC, memo } from 'react';
import numberSuffix from 'utils/salary/numberSuffix';

interface Columns {
    text: string;
    record: any;
}

const { Title, Text, Paragraph } = Typography;
const { Item } = Menu;

export const JobColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row>
            <Col span={24}>
                <Title level={4} className='no-margin'>
                    { get(record, 'title', '') }
                </Title>
            </Col>
            <Col span={24}>
                <Text type='secondary'>
                    { get(record, 'functional_area.name', '') }
                </Text>
            </Col>
            {
                get(record, 'stage', '') !== 'APPROVED'
                && (
                    <Col span={24}>
                        <Text type='danger'>
                            { get(record, 'stage', '') }
                        </Text>
                    </Col>
                )
            }
            {
                get(record, 'state', '') !== 'OPEN'
                && (
                    <Col span={24}>
                        <Text type='danger'>
                            { get(record, 'state', '') }
                        </Text>
                    </Col>
                )
            }
            <Col span={24} style={{ marginTop: '1em' }}>
                <Row gutter={8}>
                    <Col>
                        <Tooltip
                          title='Edit'
                          placement='bottom'
                          arrowPointAtCenter
                        >
                            <EditOutlined
                              className='listing-action-icons'
                            />
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip
                          title='Add Slots'
                          placement='bottom'
                          arrowPointAtCenter
                        >
                            <CalendarOutlined className='listing-action-icons' />
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip
                          title='Add Applications'
                          placement='bottom'
                          arrowPointAtCenter
                        >
                            <FileAddOutlined className='listing-action-icons' />
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip
                          title='Source Candidates'
                          placement='bottom'
                          arrowPointAtCenter
                        >
                            <UserAddOutlined className='listing-action-icons' />
                        </Tooltip>
                    </Col>
                </Row>
            </Col>
        </Row>
    ),
);

export const CompanyColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row>
            <Col span={24}>
                <Text>
                    {get(record, 'organization.popular_name', '')}
                </Text>
            </Col>
            <Col span={24}>
                <Text ellipsis>
                    {get(record, 'organization.name', '')}
                </Text>
            </Col>
            <Col span={24} style={{ marginTop: '1em' }}>
                <Text style={{ color: get(record, 'pricing_plan_type', '') === 'TEMP_STAFFING' ? '#29c3c3' : '#db3361' }}>
                    ●
                    {' '}
                    {get(record, 'pricing_plan_type', '')}
                </Text>
                -
                <Text>
                    {get(record, 'contract_type', '')}
                </Text>
            </Col>
        </Row>
    ),
);

const Slots: FC<Columns> = memo(({ record }) => {
    if (get(record, 'recent_slot')) {
        return (
            <Button
              type='link'
              className='no-padding'
              icon={
                <CalendarTwoTone twoToneColor='#fa9f34' />
              }
            >
                <b>Next Slot:</b>
                {' '}
                { get(record, 'recent_slot') }
            </Button>
        );
    }
    return (
        <Button
          type='link'
          className='no-padding'
          disabled
          icon={
            <CalendarTwoTone twoToneColor='grey' />
          }
        >
            No slots available
        </Button>
    );
});

export const JobTypeColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row>
            <Col span={24}>
                <Tooltip
                  title={get(record, 'client_approval_required', false) ? 'Client approval required' : 'Client approval not required'}
                  placement='bottom'
                >
                    <Button
                      size='small'
                      disabled
                      className={get(record, 'client_approval_required', false) ? 'car-button' : 'ncar-button'}
                    >
                        {get(record, 'client_approval_required', '') ? 'CAR' : 'NCAR'}
                    </Button>
                </Tooltip>
            </Col>
            {
                get(record, 'is_screening_required', false)
                && (
                    <Col span={24}>
                        <Button
                          type='link'
                          className='no-padding'
                          icon={
                            <PhoneTwoTone rotate={100} twoToneColor='#fa9f34' />
                          }
                        >
                            Screening Required
                        </Button>
                    </Col>
                )
            }
            {
                !get(record, 'is_screening_required')
                && !get(record, 'client_approval_required')
                && (
                    <Col span={24}>
                        <Button
                          type='link'
                          className='no-padding'
                          icon={
                            <UserSwitchOutlined style={{ color: 'grey' }} />
                          }
                        >
                            Walk-in Job
                        </Button>
                    </Col>
                )
            }
            {
                get(record, 'is_resume_subscribed')
                && (
                    <Col span={24}>
                        <Button
                          type='link'
                          className='no-padding'
                          icon={
                            <FileTextTwoTone twoToneColor='grey' />
                          }
                        >
                            Resume Required
                        </Button>
                    </Col>
                )
            }
            <Col span={24}>
                <Slots record={record} text='' />
            </Col>
        </Row>
    ),
);

export const OpeningsColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row gutter={8}>
            <Col span={10}>
                <Button style={{ boxSizing: 'content-box', height: 44 }}>
                    <Row>
                        <Col span={24} style={{ textAlign: 'left' }}>
                            <Text>VACANCIES </Text>
                        </Col>
                        <Col span={20}>
                            <Text strong style={{ float: 'left' }}>
                                {get(record, 'vacancies', '')}
                            </Text>
                        </Col>
                        <Col span={4}>
                            <EditOutlined />
                        </Col>
                    </Row>
                </Button>
            </Col>
            {
                record.locations && Array.isArray(record.locations) && record.locations.length > 0
                && (
                    <Col span={14}>
                        <Dropdown
                          overlay={record.locations.length > 1
                            ? (
                            <Menu>
                                {
                                    map(record.locations, (obj) => (
                                            obj?.place?.locality && <Item key={get(obj, 'place.locality')}>{get(obj, 'place.locality')}</Item>
                                        ))
                                }
                            </Menu>
                          ) : <></>}
                        >
                            <Button style={{ boxSizing: 'content-box', height: 44 }}>
                                <Row>
                                    <Col span={24} style={{ textAlign: 'left' }}>
                                        <Text>{get(record, 'locations[0].place.city')}</Text>
                                    </Col>
                                    <Col span={20}>
                                        <Paragraph
                                          ellipsis={{
                                            rows: 1,
                                            expandable: false,
                                            suffix: record.locations.length > 1
                                                ? `...+${String(record.locations.length - 1)}` : undefined,
                                          }}
                                          strong
                                          style={{ textAlign: 'left' }}
                                        >
                                            {
                                                get(record, 'locations[0].place.locality', '')
                                            }
                                            {
                                                get(record, 'locations[0].place.locality', '')
                                                && get(record, 'locations[1].place.locality', '')
                                                && (<>,</>)
                                            }
                                            {
                                                get(record, 'locations[1].place.locality', '')
                                            }
                                        </Paragraph>
                                    </Col>
                                </Row>
                            </Button>
                        </Dropdown>
                    </Col>
                )
            }
            <Col span={24} style={{ marginTop: '1em' }}>
                <Text strong>Edu: </Text>
                { get(record, 'expectation.degree_requirements.degree.name', 'NA') }
                {' | '}
                <Text strong>Exp: </Text>
                {
                    !get(record, 'expectation.work_exp_requirements.min_experience')
                    && 'NA'
                }
                {
                    get(record, 'expectation.work_exp_requirements.min_experience', 'NA') > 11
                    ? `${get(record, 'expectation.work_exp_requirements.min_experience', 'NA') * 0.0833334} yrs - `
                    : get(record, 'expectation.work_exp_requirements.min_experience', null)
                    && `${get(record, 'expectation.work_exp_requirements.min_experience', 'NA')} mo - `
                }
                {
                    get(record, 'expectation.work_exp_requirements.max_experience', 'NA') > 11
                    ? `${get(record, 'expectation.work_exp_requirements.max_experience', 'NA') * 0.0833334} yrs`
                    : get(record, 'expectation.work_exp_requirements.max_experience', null)
                    && `${get(record, 'expectation.work_exp_requirements.max_experience', 'NA')} mo`
                }
            </Col>
            <Col span={24}>
                <Text strong>Salary: </Text>
                {
                    numberSuffix(get(record, 'offer.min_offered_salary'))
                }
                -
                {
                    numberSuffix(get(record, 'offer.max_offered_salary'))
                }
                {' '}
                {
                    get(record, 'offer.salary_format')
                }
            </Col>
        </Row>
    ),
);

export const ImportantPeopleColumn: FC<Columns> = memo(
    ({ record }) => (
        <Row>
            <Col span={24}>
                <Row gutter={8}>
                    <Col>
                        <Text strong>CSE  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'associated_cse.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={8}>
                    <Col>
                        <Text strong>KAM  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'associated_cse.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={8}>
                    <Col>
                        <Text strong>GFI  </Text>
                    </Col>
                    <Col>
                        <Text ellipsis>
                            {
                                `${get(record, 'associated_cse.user.first_name', '')} ${get(record, 'associated_cse.user.last_name', '')}`
                            }
                        </Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Text>Visible to ALL partners</Text>
            </Col>
        </Row>
    ),
);
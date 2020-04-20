/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { FC, memo } from 'react';
import AddApplication from './AddApplication.component';
import MakeCampaign from './MakeCampaign.component';
import Recommendations from './Recommendation.component';
import SampleResume from './SampleResume.component';
import ShareJd from './ShareJd.component';
import SourceCandidates from './SourceCandidate.component';
import ViewAllInterviews from './ViewAllInterviews.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const ApplicationActions: FC<SidebarInterface> = (props) => (
    <Row gutter={8}>
        <AddApplication {...props} />
        <SourceCandidates {...props} />
        <Recommendations {...props} />
        <Col>
            <ShareJd {...props} />
        </Col>
        <MakeCampaign {...props} />
        <SampleResume {...props} />
        <ViewAllInterviews {...props} />
    </Row>
);

export default memo(ApplicationActions);

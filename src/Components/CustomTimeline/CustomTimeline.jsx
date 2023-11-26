import { Timeline } from '@mui/icons-material'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

function CustomTimeline() {
  return (
    <Timeline className={'timeline'}>
      <TimelineItem>
<TimelineSeparator>


  <TimelineDot>
    {icon}
  </TimelineDot>
  <TimelineConnector/>
</TimelineSeparator>
<TimelineContent>
  <Typography>
    {title}
  </Typography>
</TimelineContent>

      </TimelineItem>
{children}
    </Timeline>
  );
};
export const CustomTimelineSeparator = ()=>(
  <TimelineSeparator>
    <TimelineDot/>
    <TimelineConnector/>
  </TimelineSeparator>
);

export default CustomTimeline;
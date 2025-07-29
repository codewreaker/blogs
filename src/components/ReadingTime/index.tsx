import React, {memo} from 'react';
import { useDark } from 'rspress/runtime';

import { BlogPost } from 'types';


export const ReadingTime: React.FC<{readingTimeData: BlogPost['readingTimeData']}> = ({ readingTimeData }) => {

    const dark = useDark();

    return (
        <span className="read-time">{readingTimeData?.text}</span>
    );
};

export default memo(ReadingTime);
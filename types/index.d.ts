import type { BaseRuntimePageInfo } from '@rspress/shared';
import type { ReadTimeResults } from 'reading-time';

export interface BlogPost extends BaseRuntimePageInfo {
    frontmatter: BaseRuntimePageInfo['frontmatter'] & {
        tags?: string[];
        category?: string;
    };
    readingTimeData?: ReadTimeResults;
}
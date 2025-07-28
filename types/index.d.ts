import type { BaseRuntimePageInfo } from '@rspress/shared';

export interface BlogPost extends BaseRuntimePageInfo {
    frontmatter: BaseRuntimePageInfo['frontmatter'] & {
        tags?: string[];
        category?: string;
    };
}
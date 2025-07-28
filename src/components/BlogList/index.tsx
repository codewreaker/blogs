import { FC } from 'react';
import { usePageData, useNavigate } from 'rspress/runtime';
import {
  Badge,
  LastUpdated,
  HomeHero,
  HomeFooter
} from '@theme'

import { formatDate, getExcerpt, getCategory } from '../../utils/index.js';
import './blog-list.css';
import type { BlogPost } from 'types/index.js';


const BlogList = () => {
  const { siteData } = usePageData();
  const navigate = useNavigate();

  // Filter for blog posts only and exclude index page
  const blogPosts = siteData.pages.filter(
    (page) => page.routePath.startsWith('/blog/') && page.routePath !== '/blog/'
  );

  const home =  siteData.pages.find((page) => page.routePath === '/') as BlogPost;

  console.log(siteData);
  const featuredPost = blogPosts[0]; // Most recent post
  const allPosts = blogPosts.slice(1); // Rest of the posts

  const handlePostClick = (post: BlogPost) => {
    navigate(post.routePath);
  };



  return (
    <>
      <HomeHero routePath={home?.routePath} frontmatter={{...home.frontmatter}}/>
      <div className="blog-wrapper">
      <div id="blog" className="blog-container">
        <div className="blog-content">
          {featuredPost && (
            <article
              className="featured-post"
              onClick={() => handlePostClick(featuredPost)}
              style={{ cursor: 'pointer' }}
            >
              <div className="featured-badge">Latest</div>
              <div className="featured-image">
                <img
                  src="/placeholder.svg"
                  alt={featuredPost.title || 'Featured post'}
                />
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="category">{getCategory(featuredPost.frontmatter)}</span>
                  <span className="date">
                    {formatDate(new Date().toISOString())}
                  </span>
                  <span className="read-time">{`${Math.ceil(featuredPost.toc.length / 2)} min read`}</span>
                </div>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{getExcerpt(featuredPost.toc)}</p>
                <button className="portfolio-btn">Read Article</button>
              </div>
            </article>
          )}
          <div className="related-posts">
            <div className="related-grid">
              {allPosts.map((post: BlogPost) => (
                <article
                  key={post.routePath}
                  className="related-post"
                  onClick={() => handlePostClick(post)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="related-image">
                    <img
                      src="/placeholder.svg"
                      alt={post.title}
                    />
                  </div>
                  <div className="related-content">
                    <div className="post-meta">
                      <span className="category">{getCategory(post.frontmatter)}</span>
                      <span className="read-time">{`${Math.ceil(post.toc.length / 2)} min read`}</span>
                    </div>
                    <h4 className="related-post-title">{post.title}</h4>
                    <p className="related-excerpt">{getExcerpt(post.toc)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export const Tags: FC<{ frontMatter: BlogPost['frontmatter'] }> = ({ frontMatter }) => {
  console.log('frontMatter', frontMatter);
  const { tags = [] } = frontMatter;

  return (
    <div className="tags-container">
      {tags.map((tag) => (
        <Badge text={tag} type='info' />
      ))}
    </div>
  );
}

export default BlogList;


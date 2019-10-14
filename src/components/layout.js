import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layoutNew.css';

const Layout = ({ children, showFooter }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }

        logoImage: file(relativePath: { eq: "logo_expanded.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        logoImage2: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div style={{
          borderTop: '3px solid #0099ff',
        }}
        >
          <div style={{
            height: 'auto',
            maxWidth: '100%',
            margin: '0 auto',
          }}
          >
            <Header />
            <div
              style={{
                margin: '0 auto',
                padding: '0',
              }}
            >
              {children}
            </div>
            <Footer
              showing={showFooter}
            />
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
};

export default Layout;

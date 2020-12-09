import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`

const Footer = ({ showing }) => (
  <div
    style={{
      textAlign: 'center',
      padding: '2em 0',
      display: `${showing === false ? 'none' : 'block'}`,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '1em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <Container>
        <h4>{"Let's Talk"}</h4>
        <p>
          {'Wanna get in touch or talk about a project?'}
          <br />
          {'Feel free to contact me via email at '}

          <a href="mailto:babak.chehraz@gmail.com">
            <span style={{ color: '#0099ff', fontWeight: 'bold' }}>
              babak.chehraz@gmail.com
            </span>
          </a>
          <br />
          {/* {'or drop a line in the form at the '}
          <Link to="/contact">
            <span style={{ color: '#0099ff', fontWeight: 'bold' }}>
              contact page
            </span>
          </Link> */}
        </p>
      </Container>
    </div>
  </div>
)

Footer.propTypes = {
  showing: PropTypes.bool,
}

export default Footer

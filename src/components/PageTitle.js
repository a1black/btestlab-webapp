import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

/**
 * Generates value for title tag.
 *
 * @param {string} title - The title of current page.
 * @return {string} Complete page title.
 */
function makePageTitle(title) {
  // @todo Add internalization for provided title.
  // eslint-disable-next-line no-undef
  return `${title} | ${process.env.REACT_APP_TITLE}`
}

/**
 * Sets new title and description for displayed page.
 */
const PageTitle = ({ title, desc }) => {
  return !title ? null : (
    <Helmet>
      <title>{makePageTitle(title)}</title>
      {desc && <meta name='description' content={desc} />}
    </Helmet>
  )
}

PageTitle.propTypes = {
  /** Page name. */
  title: PropTypes.string,
  /** Page description. */
  desc: PropTypes.string
}

export default PageTitle

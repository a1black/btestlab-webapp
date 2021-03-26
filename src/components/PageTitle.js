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
  // eslint-disable-next-line no-undef
  const prefix = process.env.REACT_APP_TITLE
    ? /* eslint-disable-next-line no-undef*/
      ` | ${process.env.REACT_APP_TITLE}`
    : ''
  return `${title.trim()}${prefix}`
}

/**
 * Sets new title and description for displayed page.
 */
export default function PageTitle({ title, desc }) {
  return (
    <Helmet>
      <title>{makePageTitle(title)}</title>
      {desc && <meta name='description' content={desc} />}
    </Helmet>
  )
}

PageTitle.propTypes = {
  /** Page name. */
  title: PropTypes.string.isRequired,
  /** Page description. */
  desc: PropTypes.string
}

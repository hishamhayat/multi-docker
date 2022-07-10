import React from 'react'
import { Link } from 'react-router-dom'

const OtherPage = () => (
  <>
    I'm someother page
    <Link to={'/'}>Go back home</Link>
  </>
)

export default OtherPage
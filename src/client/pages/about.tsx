import React, { useState } from 'react'
import loadable from '@loadable/component'

import Layout from '../components/layout'

const Image = loadable(() => import('../components/image'))

const AboutPage = () => {
  const [showImage, setShowImage] = useState(false)

  return (
    <Layout title="About">
      {showImage && <Image />}
      {!showImage && (
        <button onClick={() => setShowImage(true)}>Show Image</button>
      )}
    </Layout>
  )
}

export default AboutPage

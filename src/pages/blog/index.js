import React, {useState} from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default () => {
    const [desiredTags, setDesiredTags] = useState(['tagA','tagB','tagC','tagD','tagE','tagF','tagG','tagH'])
    const handleToggle = (event, target) => {
      console.log(target)
    }
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/home-jumbotron.jpg')`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <h1
            className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              textShadow:'5px 5px 10px rgba(0,0,0,0.5)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              position: 'relative',
              top: '-130px'
            }}
          >
            Blog
          </h1>
          <div style ={{
            display:'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '90%',
            marginBottom: '10px'
          }}>
            {desiredTags.map(tag => (
              <div className='tagPill' key={'tag_'+tag} id={'tag_'+tag} onClick={handleToggle}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
}

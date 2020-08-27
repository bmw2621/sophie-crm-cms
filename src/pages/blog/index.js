import React, {useState} from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default () => {
    const tags = ['brewing','chemex','jamaica','green beans','flavor','tasting']
    const [desiredTags, setDesiredTags] = useState([])

    const handleToggle = (event, target) =>{
      const value = event.target.innerHTML

      if(desiredTags.includes(value)){
        setDesiredTags(desiredTags.filter(el => el !== value))
      } else {
        setDesiredTags([...desiredTags,value])
      }
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
            {tags.map(tag => (
              <div 
                className={`tagPill ${desiredTags.includes(tag) ? 'tagPillSelected' : ''}`}
                key={'tag_'+tag} 
                id={'tag_'+tag} 
                onClick={handleToggle}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll tags={desiredTags} />
            </div>
          </div>
        </section>
      </Layout>
    )
}

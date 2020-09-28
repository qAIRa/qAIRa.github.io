import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>qAIRaMap-OpenSource</>,
    imageUrl: 'img/qairito_moderada.gif',
    description: (
      <>
        qAIRaMap is a website for air quality monitoring using information from our low-cost measurement modules named qHAWAX and also from our Andean Drone.
      </>
    ),
  },
  {
    title: <>qAIRaMapAPI-OpenSource</>,
    imageUrl: 'img/qairito_buena.gif',
    description: (
      <>
        qAIRaMapAPI is an API conected to our low-cost measurement modules named qHAWAX and also from our Andean Drone. It's the API behind our website.
      </>
    ),
  },
  {
    title: <>qHAWAX</>,
    imageUrl: 'img/qHAWAX_v3.png',
    description: (
      <>
        Our low-cost modules with sensors for gases:<code>CO, NO2, O3, H2S, SO2</code>, dust: <code>PM2,5 and PM10</code>, UV, Noise, Humidity and Temperature.
      </>
    ),
  },
  {
    title: <>Andean Drone</>,
    imageUrl: 'img/andeanDrone.png',
    description: (
      <>
        Our Andean Drone has all the same characteristics of our qHAWAX with the advantage of flight.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`qAIRa ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Our Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

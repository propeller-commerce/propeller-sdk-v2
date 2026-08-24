import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/intro">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/api/">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

type Card = {title: string; to: string; body: string};

const CARDS: Card[] = [
  {
    title: 'Quick start',
    to: '/getting-started/quick-start',
    body: 'Create a client, call a typed service, and read back strongly-typed results in a few lines.',
  },
  {
    title: 'Build a frontend',
    to: '/getting-started/build-a-frontend',
    body: 'An end-to-end walkthrough: initialise the client, fetch products, render them, and handle errors.',
  },
  {
    title: 'Configuration',
    to: '/configuration/client-config',
    body: 'Every GraphQLClientConfig field, proxy mode, and authentication explained.',
  },
  {
    title: 'Using the SDK',
    to: '/guides/services',
    body: 'Services, operation variables, direct GraphQL, error handling, localized fields, and enums.',
  },
  {
    title: 'API Reference',
    to: '/api/',
    body: 'Generated reference for every client, service, type, and enum in the SDK.',
  },
  {
    title: 'Changelog',
    to: '/changelog',
    body: 'Release notes, including the v0.10.0 architectural overhaul.',
  },
];

function CardGrid() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className="row">
          {CARDS.map((c) => (
            <div key={c.to} className={clsx('col col--4', styles.cardCol)}>
              <Link to={c.to} className={styles.card}>
                <Heading as="h3" className={styles.cardTitle}>
                  {c.title}
                </Heading>
                <p className={styles.cardBody}>{c.body}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="TypeScript GraphQL SDK for the Propeller Commerce Platform">
      <HomepageHeader />
      <main>
        <CardGrid />
      </main>
    </Layout>
  );
}

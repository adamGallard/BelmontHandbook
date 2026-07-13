import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

const AGE_SECTIONS = [
    {
        name: 'Joey Scouts',
        ages: 'Ages 5-8',
        blurb: 'Fun, friendship, and first outdoor adventures.',
        logo: require('../../docs/img/Logos/Joey_logo.png').default,
    },
    {
        name: 'Cub Scouts',
        ages: 'Ages 8-11',
        blurb: 'Building teamwork, responsibility, and outdoor skills.',
        logo: require('../../docs/img/Logos/Cub_logo.png').default,
    },
    {
        name: 'Scouts',
        ages: 'Ages 11-14',
        blurb: 'Leadership, independence, and bigger adventures.',
        logo: require('../../docs/img/Logos/Scouts_logo.png').default,
    },
    {
        name: 'Venturer Scouts',
        ages: 'Ages 14-18',
        blurb: 'Advanced adventures, leadership, and community service.',
        logo: require('../../docs/img/Logos/Venturer_logo.png').default,
    },
];

const MEMBER_LINKS = [
    { label: 'Meeting Times & Location', to: '/docs/group-information/meeting-times-location' },
    { label: 'Calendar', to: '/docs/events-planning/calendar' },
    { label: 'Fees & Payment', to: '/docs/group-information/fees' },
    { label: 'Uniform Requirements', to: '/docs/scouting-life/uniform-requirements' },
    { label: 'Parent Involvement', to: '/docs/parent-resources/parent-involvement' },
    { label: 'FAQ', to: '/docs/faq' },
    { label: 'Contact Us', to: '/docs/group-information/contact-information' },
];

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Is Scouts Right for Your Child?</h1>
                <p className="hero__subtitle">
                    Belmont Scouts helps young people build confidence, leadership, and lifelong
                    friendships through hands-on adventure and community involvement.
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/introduction/membership-pathway">
                        How to Join
                    </Link>
                    <Link className={clsx('button button--outline button--lg', styles.outlineButton)} to="/docs/introduction/welcome-navigation">
                        Already a Member? Open the Handbook
                    </Link>
                </div>
            </div>
        </header>
    );
}

function AgeSections() {
    return (
        <section className={styles.ageSections}>
            <div className="container">
                <h2 className={styles.sectionHeading}>Find the Right Section for Your Child</h2>
                <p className={styles.sectionSubheading}>
                    Scouting is split into age-based sections, each with activities suited to that
                    stage of growing up.
                </p>
                <div className="row">
                    {AGE_SECTIONS.map((section) => (
                        <div className="col col--3" key={section.name}>
                            <Link to="/docs/introduction/what-is-scouts#age-sections-and-progression" className={styles.ageCard}>
                                <img src={section.logo} alt={`${section.name} logo`} className={styles.ageCardLogo} />
                                <h3>{section.name}</h3>
                                <p className={styles.ageCardAges}>{section.ages}</p>
                                <p>{section.blurb}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function JoinCta() {
    return (
        <section className={styles.joinCta}>
            <div className="container">
                <h2>Ready to Give It a Go?</h2>
                <p>
                    Come along to a "Have a Go" night, meet the leaders, and see what Scouting is
                    all about &mdash; no commitment required.
                </p>
                <Link className="button button--primary button--lg" to="/docs/introduction/membership-pathway">
                    See the Membership Pathway
                </Link>
            </div>
        </section>
    );
}

function CurrentMembers() {
    return (
        <section className={styles.currentMembers}>
            <div className="container">
                <h2 className={styles.sectionHeading}>Already a Belmont Scouts Family?</h2>
                <div className={styles.quickLinks}>
                    {MEMBER_LINKS.map((link) => (
                        <Link key={link.to} className={styles.quickLink} to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Belmont Scouts Parent Handbook">
            <HomepageHeader />
            <main>
                <AgeSections />
                <JoinCta />
                <CurrentMembers />
            </main>
        </Layout>
    );
}

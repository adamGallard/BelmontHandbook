import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import LatestEvents from './LatestEvents';


function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Welcome to Belmont Scouts Parent Handbook</h1>
                <p className="hero__subtitle">Your guide to everything you need to know about Belmont Scouts.</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/welcome-navigation">
                        Welcome & Navigation
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/introduction">
                        Introduction
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Belmont Scouts Parent Handbook">
            <HomepageHeader />
            <LatestEvents />
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <div className="col col--4">
                                <h3>Meeting Times & Location</h3>
                                <p>
                                <ul>
                                    <li><strong>Joey Scouts:</strong> Wednesdays, 6:15 PM - 7:30 PM</li>
                                    <li><strong>Cub Scouts:</strong> Wednesdays, 6:15 PM - 7:45 PM</li>
                                    <li><strong>Scouts:</strong> Fridays, 7:00 PM - 9:00 PM</li>
                                        <li><strong>Venturer Scouts:</strong> Fridays, 7:00 PM - 9:00 PM</li>
                                    <li><strong>Location:</strong> Belmont Scout Den, 84 Wright Street, Carindale, QLD, 4152</li>
                                    </ul></p>
                                <Link to="/docs/meeting-times-location">Learn More</Link>
                            </div>
                            <div className="col col--4">
                                <h3>Parent Involvement</h3>
                                <p>Parent involvement is a key part of the success of our Scout group. Your participation helps create a richer experience for all members, and there are many ways you can get involved:</p>
                                <ul>
                                    <li><strong>Assist at Meetings:</strong> Volunteer to help with activities, set up, or supervise during meetings. Your presence can make a big difference!</li>
                                    <li><strong>Join the Committee:</strong> Take on a leadership role by joining the group's committee. This is a great way to contribute to the long-term success of the Scout group.</li>
                                    <li><strong>Special Skills:</strong> Do you have a unique skill or profession? Share your expertise with the Scouts through workshops, talks, or demonstrations.</li>
                                    <li><strong>Event Support:</strong> Help organize and run special events, camps, or fundraisers. Extra hands make these events possible and enjoyable for everyone.</li>
                                    <li><strong>Transportation:</strong> Offer to carpool or transport Scouts to events and activities. This can be particularly helpful for families with limited transportation options.</li>
                                    <li><strong>Fundraising:</strong> Participate in or lead fundraising efforts. These activities are crucial for keeping our Scout group well-equipped and able to offer a wide range of activities.</li>
                                </ul>
                                <p>Whether you can contribute a little time or a lot, your involvement is highly valued. It's also a wonderful way to spend time with your child and see them grow in the Scouting community.</p>
                                <Link to="/docs/parent-involvement">Learn More</Link>

                            </div>
                            <div className="col col--4">
                                <h3>Contact Us</h3>
                                <p>Have questions? We're here to help.</p>
                                <Link to="/docs/contact-information">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

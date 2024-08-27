import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar'; // Import DocSidebar
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Welcome to Belmont Scouts Parent Handbook</h1>
                <p className="hero__subtitle">Your guide to everything you need to know about Belmont Scouts.</p>
            </div>
        </header>
    );
}

export default function Home() {

    return (
        <Layout
            title="Home"
            description="Belmont Scouts Parent Handbook">
            <div className="container margin-vert--lg">
                <div className="row">

                    {/* Main Content Column */}
                    <main className="col col--12">
                        <HomepageHeader />
                        <section className={styles.features}>
                            <div className="container">
                                <div className="row">
                                    <div className="col col--4">
                                        <h3>Meeting Times & Location</h3>
                                        <ul>
                                            <li><strong>Joey Scouts:</strong> Wednesdays, 6:15 PM - 7:30 PM</li>
                                            <li><strong>Cub Scouts:</strong> Wednesdays, 6:15 PM - 7:45 PM</li>
                                            <li><strong>Scouts:</strong> Fridays, 7:00 PM - 9:00 PM</li>
                                            <li><strong>Venturer Scouts:</strong> Fridays, 7:00 PM - 9:00 PM</li>
                                            <li><strong>Location:</strong> Belmont Scout Den, 84 Wright Street, Carindale, QLD, 4152</li>
                                        </ul>
                                    </div>
                                    <div className="col col--4">
                                        <h3>Parent Involvement</h3>
                                        <p>Parent involvement is a key part of the success of our Scout group. Your participation helps create a richer experience for all members, and there are many ways you can get involved:</p>
                                        <ul>
                                            <li><strong>Assist at Meetings:</strong> Volunteer to help with activities, set up, or supervise during meetings.</li>
                                            <li><strong>Join the Committee:</strong> Take on a leadership role by joining the group's committee.</li>
                                            <li><strong>Special Skills:</strong> Share your expertise with the Scouts through workshops, talks, or demonstrations.</li>
                                            <li><strong>Event Support:</strong> Help organize and run special events, camps, or fundraisers.</li>
                                            <li><strong>Transportation:</strong> Offer to carpool or transport Scouts to events and activities.</li>
                                            <li><strong>Fundraising:</strong> Participate in or lead fundraising efforts.</li>
                                        </ul>
                                    </div>
                                    <div className="col col--4">
                                        <h3>Contact Us</h3>
                                        <p>Have questions? We're here to help.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

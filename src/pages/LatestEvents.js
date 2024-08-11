import React from 'react';
import styles from './LatestEvents.module.css';

export default function LatestEvents() {
    return (
        <section className={styles.latestEvents}>
            <div className="container">
                <h2>Latest Events</h2>
                <p>Stay up to date with the latest happenings in our Scout group.</p>
                <ul>
                    <li><strong>Annual Camp:</strong> Join us for our annual camping trip on September 25th.</li>
                    <li><strong>Community Service Day:</strong> Participate in our neighborhood clean-up event on October 10th.</li>
                    <li><strong>Fundraising BBQ:</strong> Support our Scouts by attending the BBQ fundraiser on November 15th.</li>
                </ul>
            </div>
        </section>
    );
}

import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div  className="pl-[40px] pr-[40px]  mt-5 mb-5 ">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

            <p>
                Welcome to our Privacy Policy. Your privacy is important to us.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p>
                We collect information that you provide directly to us, such as your name, email address,
                and any other information you choose to provide.
            </p>
            <p>
                We may also automatically collect certain information when you visit our website, such as
                your IP address, browser type, operating system, and browsing behavior.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6">
                <li>Providing and maintaining our services.</li>
                <li>Improving, personalizing, and expanding our services.</li>
                <li>Communicating with you, including responding to your inquiries.</li>
                <li>Sending you updates, newsletters, and promotional materials.</li>
                <li>Complying with legal obligations.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6 mb-2">3. Cookies</h2>
            <p>
                We use cookies and similar tracking technologies to analyze trends, administer the website,
                track users' movements around the website, and gather demographic information about our user base.

                You can control the use of cookies at the individual browser level. If you reject cookies,
                you may still use our website, but your ability to use some features or areas of our website may be limited.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">4. Third-Party Links</h2>
            <p>
                Our website may contain links to third-party websites. We have no control over the content,
                privacy policies, or practices of these websites and encourage you to review their privacy policies
                before providing any information.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">5. Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page.
            </p>

            <p className="mt-6">
                If you have any questions about this Privacy Policy, please contact us.
            </p>
        </div>
    );
};

export default PrivacyPolicy;

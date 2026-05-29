import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Veloop',
  description:
    'Privacy Policy for Veloop, an AI-assisted content creation and social publishing platform.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#080a18] text-[#e9ebff]">
      <div className="mx-auto max-w-[860px] px-6 py-10 md:py-12">
        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-[22px] font-bold tracking-normal text-[#e9ebff]"
          >
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#23d2e5]" />
            Veloop
          </Link>
          <nav
            aria-label="Legal navigation"
            className="flex gap-5 text-sm text-[#87dbea]"
          >
            <Link
              href="/privacy-policy"
              aria-current="page"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
          </nav>
        </header>

        <section className="mb-6 rounded-lg border border-[#30385f] bg-[#12152b] px-6 py-9 md:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#23d2e5]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[#e9ebff] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#a8afcf]">
            This Privacy Policy explains how Veloop collects, uses, stores, and
            shares information when you use our AI-assisted content creation and
            social publishing services.
          </p>
          <p className="mt-4 text-sm text-[#a8afcf]">
            Effective date: May 27, 2026
          </p>
        </section>

        <article className="rounded-lg border border-[#30385f] bg-[#12152b] px-6 py-5 text-[#a8afcf] md:px-10 md:py-8 [&_a]:text-[#87dbea] [&_a:hover]:underline [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-[21px] [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-[#e9ebff] [&_li]:leading-7 [&_p]:leading-7 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
          <h2>1. Who We Are</h2>
          <p>
            Veloop is a platform that helps users create, manage, schedule, and
            publish content to connected social media and content platforms.
            References to &quot;Veloop,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot; in this policy mean the operator of{' '}
            <a href="https://veloop.aladdinai.me">veloop.aladdinai.me</a>.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              Account information, such as your name, email address,
              authentication details, and organization membership.
            </li>
            <li>
              Connected platform information, such as social account
              identifiers, channel names, access tokens, refresh tokens, and
              permissions granted through OAuth.
            </li>
            <li>
              Content information, such as text, images, videos, prompts,
              schedules, publishing settings, and generated output.
            </li>
            <li>
              Usage and technical information, such as IP address, device and
              browser data, logs, actions taken within the service, and error
              diagnostics.
            </li>
            <li>
              Billing information, where paid services are offered. Payment card
              processing may be handled by a third-party payment provider rather
              than stored directly by Veloop.
            </li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Provide, maintain, secure, and improve the service.</li>
            <li>
              Connect to your selected platforms and publish or schedule
              content according to your instructions.
            </li>
            <li>
              Generate, edit, or process text, images, audio, or video using AI
              and media-processing providers when you request those features.
            </li>
            <li>
              Authenticate users, prevent abuse, troubleshoot failures, and
              provide support.
            </li>
            <li>Process subscriptions, payments, and account administration.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <h2>4. Social Platform Access and OAuth Data</h2>
          <p>
            When you connect a third-party account, such as a YouTube channel or
            another social platform, you authorize Veloop to access information
            and perform actions permitted by the scopes shown during the
            authorization process. This may include identifying your channel,
            uploading media, publishing posts, or retrieving related publishing
            status.
          </p>
          <p>
            We use this access only to provide features you initiate or
            configure. You can revoke third-party authorization through the
            relevant platform&apos;s account settings or disconnect the
            integration in Veloop.
          </p>

          <h2>5. AI and Service Providers</h2>
          <p>
            When you use AI-assisted creation or media generation features, the
            prompts, media, or related instructions required to complete your
            request may be transmitted to third-party AI, hosting, storage,
            media-processing, analytics, or infrastructure providers. These
            providers process information on our behalf or under their own
            terms, as applicable.
          </p>

          <h2>6. How We Share Information</h2>
          <p>We may share information:</p>
          <ul>
            <li>
              With social media platforms when needed to publish, schedule, or
              manage content at your direction.
            </li>
            <li>
              With service providers that support hosting, database operations,
              AI processing, file storage, payments, email, monitoring, or
              security.
            </li>
            <li>
              With authorities or other parties when required by law, necessary
              to protect rights or safety, or needed to investigate fraud or
              abuse.
            </li>
            <li>
              In connection with a merger, acquisition, financing, or transfer
              of business assets, subject to applicable legal protections.
            </li>
          </ul>
          <p>We do not sell your personal information for monetary consideration.</p>

          <h2>7. Data Storage and Retention</h2>
          <p>
            We retain information for as long as necessary to provide the
            service, maintain your account, meet legal obligations, resolve
            disputes, and protect the integrity of the platform. Uploaded and
            generated media may remain stored while associated projects, posts,
            or accounts remain active, unless deleted or otherwise required by
            law.
          </p>

          <h2>8. Security</h2>
          <p>
            We use reasonable technical and organizational measures designed to
            protect information. However, no method of transmission or storage
            is completely secure. You are responsible for safeguarding your
            account credentials and promptly notifying us of suspected
            unauthorized use.
          </p>

          <h2>9. Your Choices and Rights</h2>
          <p>
            Depending on your location, you may have rights to request access,
            correction, deletion, portability, or restriction of certain
            personal information, or to object to certain processing. You may
            also disconnect integrations or revoke OAuth permissions directly
            with the connected platform.
          </p>

          <h2>10. Facebook / Meta Data Deletion Instructions</h2>
          <p>
            If you wish to delete your Veloop account or remove Facebook/Meta
            data associated with your Veloop account, you can request data
            deletion by contacting us at{' '}
            <a href="mailto:lankafenqi@gmail.com">lankafenqi@gmail.com</a>.
            We will process your request and permanently delete synced
            Facebook/Meta platform data associated with your account within a
            reasonable business period, unless retention is required by law,
            security, fraud prevention, or legitimate operational obligations.
          </p>

          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Veloop is not directed to children under the age required to consent
            to data processing in their jurisdiction, and we do not knowingly
            collect personal information from children without appropriate
            authorization.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we may provide notice through the service or by
            other reasonable means. Your continued use of the service after an
            updated policy becomes effective indicates your acknowledgment of
            the updated policy.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions or requests regarding this Privacy Policy or
            your information, contact us at{' '}
            <a href="mailto:lankafenqi@gmail.com">lankafenqi@gmail.com</a>.
          </p>
        </article>

        <footer className="pt-7 text-center text-sm text-[#a8afcf]">
          Copyright 2026 Veloop.{' '}
          <Link
            href="/terms-of-service"
            className="text-[#87dbea] hover:underline"
          >
            Terms of Service
          </Link>
        </footer>
      </div>
    </main>
  );
}

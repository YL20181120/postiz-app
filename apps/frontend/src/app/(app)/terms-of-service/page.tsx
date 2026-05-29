import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Veloop',
  description:
    'Terms of Service for Veloop, an AI-assisted content creation and social publishing platform.',
};

export default function TermsOfService() {
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
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              aria-current="page"
              className="hover:underline"
            >
              Terms of Service
            </Link>
          </nav>
        </header>

        <section className="mb-6 rounded-lg border border-[#30385f] bg-[#12152b] px-6 py-9 md:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#23d2e5]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[#e9ebff] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#a8afcf]">
            These Terms govern your access to and use of Veloop, including its
            AI-assisted creation, scheduling, and social publishing features.
          </p>
          <p className="mt-4 text-sm text-[#a8afcf]">
            Effective date: May 27, 2026
          </p>
        </section>

        <article className="rounded-lg border border-[#30385f] bg-[#12152b] px-6 py-5 text-[#a8afcf] md:px-10 md:py-8 [&_a]:text-[#87dbea] [&_a:hover]:underline [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-[21px] [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-[#e9ebff] [&_li]:leading-7 [&_p]:leading-7 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Veloop at{' '}
            <a href="https://veloop.aladdinai.me">veloop.aladdinai.me</a>, you
            agree to these Terms of Service and our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>. If you use the
            service on behalf of an organization, you represent that you have
            authority to bind that organization to these Terms.
          </p>

          <h2>2. The Service</h2>
          <p>
            Veloop enables users to create, generate, upload, edit, schedule,
            and publish content to supported third-party platforms. Features may
            include AI-generated text or media, content calendars, account
            integrations, publishing workflows, and related tools. We may add,
            change, or discontinue features from time to time.
          </p>

          <h2>3. Accounts and Security</h2>
          <p>
            You must provide accurate account information and keep your login
            credentials secure. You are responsible for all activity under your
            account and for the users you authorize within your organization.
            You must notify us promptly if you suspect unauthorized access.
          </p>

          <h2>4. Connected Platforms</h2>
          <p>
            You may connect third-party services, including social media
            channels, through authorization mechanisms such as OAuth. You
            authorize Veloop to access and perform the actions you request
            through those integrations, including uploading or publishing
            content.
          </p>
          <p>
            Your use of each connected platform remains subject to that
            platform&apos;s terms, policies, technical limitations, and
            enforcement decisions. Veloop is not responsible for a platform
            rejecting, removing, limiting, delaying, or otherwise acting on your
            content or account.
          </p>

          <h2>5. Your Content</h2>
          <p>
            You retain ownership of content you submit, upload, or direct Veloop
            to publish. You grant Veloop a non-exclusive, worldwide, limited
            license to host, process, copy, transform, transmit, and publish
            your content only as needed to provide, maintain, secure, and
            improve the service.
          </p>
          <p>
            You represent that you have all rights and permissions necessary to
            use, process, and publish your content, including music, images,
            videos, trademarks, personal data, and any third-party material.
          </p>

          <h2>6. AI-Generated Content</h2>
          <p>
            Veloop may allow you to generate or modify text, images, audio, or
            video using artificial intelligence. AI-generated output may be
            inaccurate, incomplete, offensive, similar to content generated for
            other users, or unsuitable for publication.
          </p>
          <p>
            You are responsible for reviewing AI-generated content before using
            or publishing it and for ensuring that it complies with applicable
            law, intellectual property rights, advertising requirements, and
            third-party platform policies.
          </p>

          <h2>7. Acceptable Use</h2>
          <p>You may not use Veloop to:</p>
          <ul>
            <li>Violate applicable law, third-party rights, or platform policies.</li>
            <li>
              Publish unlawful, fraudulent, defamatory, infringing, malicious,
              or deceptive content.
            </li>
            <li>
              Send spam, conduct unauthorized automation, manipulate engagement,
              or evade platform restrictions.
            </li>
            <li>
              Upload malware, attempt unauthorized access, disrupt the service,
              or compromise its security.
            </li>
            <li>
              Use another person&apos;s account, channel, likeness, or data
              without authorization.
            </li>
          </ul>

          <h2>8. Fees and Billing</h2>
          <p>
            Certain Veloop features may be offered on a paid basis. If you
            purchase a subscription or paid service, you agree to pay the stated
            charges, taxes, and applicable fees. Pricing, feature limits,
            renewal terms, and cancellation options will be disclosed at
            purchase or in the applicable plan description.
          </p>

          <h2>9. Availability and Publishing Results</h2>
          <p>
            We work to provide reliable scheduling and publishing services, but
            we do not guarantee uninterrupted operation or successful
            publication at a particular time. Publication can fail or be delayed
            due to outages, third-party API changes, expired permissions,
            content restrictions, network failures, or other factors outside our
            control.
          </p>

          <h2>10. Suspension and Termination</h2>
          <p>
            You may stop using the service or disconnect integrations at any
            time. We may suspend or terminate access if you violate these Terms,
            create risk to the service or others, fail to pay applicable fees,
            or where required by law. Upon termination, certain information may
            be deleted or retained as described in our Privacy Policy.
          </p>

          <h2>11. Intellectual Property</h2>
          <p>
            Excluding your content, Veloop and its software, interface,
            branding, documentation, and related materials are protected by
            intellectual property laws. These Terms do not grant you rights to
            copy, resell, reverse engineer, or exploit the service except as
            permitted by applicable law or a separate written agreement.
          </p>

          <h2>12. Disclaimer of Warranties</h2>
          <p>
            To the maximum extent permitted by law, the service is provided
            &quot;as is&quot; and &quot;as available,&quot; without warranties
            of any kind, whether express, implied, or statutory, including
            warranties of merchantability, fitness for a particular purpose,
            non-infringement, accuracy, or uninterrupted availability.
          </p>

          <h2>13. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Veloop and its operators,
            affiliates, and service providers will not be liable for indirect,
            incidental, special, consequential, exemplary, or punitive damages,
            or for loss of profits, revenue, data, goodwill, content, or
            business opportunity arising from or related to your use of the
            service.
          </p>
          <p>
            To the maximum extent permitted by law, our aggregate liability for
            claims arising out of the service will not exceed the amount you
            paid to Veloop for the service during the twelve months before the
            event giving rise to the claim, or USD 100 if you have not paid for
            the service.
          </p>

          <h2>14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes may be
            communicated through the service or by other reasonable means. By
            continuing to use the service after updated Terms take effect, you
            agree to the updated Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms may be sent to{' '}
            <a href="mailto:lankafenqi@gmail.com">lankafenqi@gmail.com</a>.
          </p>
        </article>

        <footer className="pt-7 text-center text-sm text-[#a8afcf]">
          Copyright 2026 Veloop.{' '}
          <Link href="/privacy-policy" className="text-[#87dbea] hover:underline">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </main>
  );
}

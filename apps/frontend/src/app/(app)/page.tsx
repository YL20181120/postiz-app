import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veloop | Social media scheduling and publishing platform',
  description:
    'Veloop helps teams plan, schedule, publish, and analyze social media posts across TikTok and other major channels.',
};

const supportedChannels = [
  'TikTok',
  'Instagram',
  'YouTube',
  'Facebook',
  'LinkedIn',
  'X',
  'Threads',
  'Pinterest',
  'Reddit',
  'Slack',
  'Discord',
  'Telegram',
];

const features = [
  {
    title: 'Plan campaigns in a shared calendar',
    description:
      'Organize upcoming posts by date, platform, status, and campaign so teams can review the full publishing schedule before anything goes live.',
  },
  {
    title: 'Publish video and social posts',
    description:
      'Create posts once, tailor copy and media for each channel, and send approved content through connected platform integrations.',
  },
  {
    title: 'Manage media and creative assets',
    description:
      'Keep images, videos, captions, drafts, and reusable campaign assets in one workspace for faster content production.',
  },
  {
    title: 'Review performance and workflow status',
    description:
      'Track publishing activity, channel health, and post analytics so teams can understand what shipped and what needs attention.',
  },
];

const workflow = [
  'Connect approved social accounts, including TikTok when your app permissions are active.',
  'Upload media, write captions, and adapt the content for each destination.',
  'Schedule the post in the calendar or add it to an approval workflow.',
  'Publish at the selected time and review performance from the dashboard.',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#111827]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/veloop-logo-with-name.png"
              width={132}
              height={66}
              alt="Veloop"
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-[#4b5563] md:flex"
            aria-label="Primary navigation"
          >
            <a href="#features" className="hover:text-[#111827]">
              Features
            </a>
            <a href="#workflow" className="hover:text-[#111827]">
              Workflow
            </a>
            <a href="#trust" className="hover:text-[#111827]">
              Trust
            </a>
            <a href="#contact" className="hover:text-[#111827]">
              Contact
            </a>
          </nav>
          <Link
            href="/auth/login"
            className="inline-flex h-10 items-center rounded-md bg-[#111827] px-4 text-sm font-semibold text-white transition hover:bg-[#374151]"
          >
            Sign in
          </Link>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pb-[72px] md:pt-16 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
              Social media operations for growing teams
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0f172a] md:text-5xl lg:text-6xl">
              Veloop
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
              Veloop is a fully developed social media scheduling platform for
              teams that need to create, approve, schedule, publish, and measure
              content across TikTok and other major channels from one secure
              workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/login"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#111827] px-6 text-sm font-semibold text-white transition hover:bg-[#374151]"
              >
                Open dashboard
              </Link>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#d1d5db] bg-white px-6 text-sm font-semibold text-[#111827] transition hover:bg-[#f3f4f6]"
              >
                View features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-[#e5e7eb] bg-[#101827] shadow-xl">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Publishing calendar
                    </p>
                    <p className="mt-1 text-xs text-[#a7b0c0]">
                      Weekly content plan
                    </p>
                  </div>
                  <div className="rounded-md bg-[#22c55e] px-3 py-1 text-xs font-semibold text-[#052e16]">
                    Ready
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
                {[
                  ['Mon', 'TikTok product demo', 'Video scheduled'],
                  ['Tue', 'LinkedIn thought post', 'Needs approval'],
                  ['Wed', 'Instagram reel', 'Media attached'],
                  ['Fri', 'YouTube short', 'Draft review'],
                ].map(([day, title, status]) => (
                  <div
                    key={title}
                    className="rounded-md border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#93c5fd]">
                      {day}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">
                      {title}
                    </p>
                    <p className="mt-2 text-xs text-[#a7b0c0]">{status}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-sm text-[#d1d5db]">
                  Teams can coordinate campaign calendars, creative assets,
                  publishing status, and analytics without exposing private
                  dashboard data on the public website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
            Core platform
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">
            Built for daily social media publishing workflows
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[#e5e7eb] bg-white p-6"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#eef2ff] text-sm font-semibold text-[#4338ca]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
            Connected channels
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">
            Publish across the channels your audience already uses
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {supportedChannels.map((channel) => (
              <span
                key={channel}
                className="rounded-md border border-[#d1d5db] bg-[#f9fafb] px-4 py-2 text-sm font-medium text-[#374151]"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">
            From idea to scheduled post
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563]">
            Veloop gives marketing and operations teams a repeatable process for
            preparing public content, checking it before publishing, and keeping
            a clear record of scheduled activity.
          </p>
        </div>
        <ol className="grid gap-4">
          {workflow.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-lg border border-[#e5e7eb] bg-white p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#111827] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="pt-1 text-sm leading-7 text-[#374151]">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="trust" className="bg-[#111827]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 text-white md:grid-cols-3 md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
              Privacy and reliability
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Designed for production teams
            </h2>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <h3 className="font-semibold">Controlled access</h3>
              <p className="mt-3 text-sm leading-7 text-[#d1d5db]">
                Team members use authenticated accounts, connected providers,
                and workspace permissions to manage publishing activity.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <h3 className="font-semibold">Public policies</h3>
              <p className="mt-3 text-sm leading-7 text-[#d1d5db]">
                Veloop provides clear terms, privacy information, and contact
                details for users and platform reviewers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <Image
              src="/veloop-logo-with-name.png"
              width={132}
              height={66}
              alt="Veloop"
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#4b5563]">
              Veloop is operated for teams that need reliable social media
              scheduling, publishing, and analytics tools. Contact:
              lankafenqi@gmail.com
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#374151]">
            <Link href="/terms-of-service" className="hover:text-[#111827]">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#111827]">
              Privacy Policy
            </Link>
            <Link href="/auth/login" className="hover:text-[#111827]">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Link from 'next/link'

// Use an array so we can include multiple entries with the same name
// and also mark items as external when they should open another site.
type NavItem = {
  href: string
  name: string
  external?: boolean
}

const navItems: NavItem[] = [
  { href: '/', name: 'home' },
  // internal blog route example
  { href: '/Projects', name: 'Project' },
  // external blog example (second "blog")
  { href: 'https://google.com', name: 'blog', external: true },
]

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map(({ href, name, external }) => {
              // External links should use a normal <a> tag with security attributes
              if (external) {
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </a>
                )
              }

              // Internal links use Next.js Link for client navigation
              return (
                <Link
                  key={href}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
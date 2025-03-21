import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavLink } from 'react-router-dom';
import { cn } from 'tailwind-preset';

import { isThreatMapper } from '@/utils/version';

const MenuItems: Array<{
  title: string;
  to: string;
}> = [
  {
    title: 'User Management',
    to: '/settings/user-management',
  },
  {
    title: 'Scan history & Threat intel',
    to: '/settings/scan-history-and-db-management',
  },
  {
    title: 'Scheduled jobs',
    to: '/settings/scheduled-jobs',
  },
  {
    title: 'Diagnostics logs',
    to: '/settings/diagnostic-logs',
  },
  {
    title: 'User audit logs',
    to: '/settings/user-audit-logs',
  },
  {
    title: 'Email configurations',
    to: '/settings/email-configuration',
  },
  {
    title: 'Global settings',
    to: '/settings/global-settings',
  },
  {
    title: 'Connection instructions',
    to: '/settings/connection-instructions',
  },
];

if (isThreatMapper) {
  MenuItems.push({
    title: 'License Details',
    to: '/settings/tm-license-details',
  });
}

const FeedMenuItems: Array<{
  title: string;
  to: string;
}> = [
  {
    title: 'Secret rules',
    to: '/settings/feeds/secret',
  },
  {
    title: 'Malware rules',
    to: '/settings/feeds/malware',
  },
];

const PostureControlMenuItems: Array<{
  title: string;
  to: string;
}> = [
  {
    title: 'AWS',
    to: '/settings/posture/controls/aws',
  },
  {
    title: 'GCP',
    to: '/settings/posture/controls/gcp',
  },
  {
    title: 'Azure',
    to: '/settings/posture/controls/azure',
  },
  {
    title: 'Linux',
    to: '/settings/posture/controls/linux',
  },
  {
    title: 'Kubernetes',
    to: '/settings/posture/controls/k8s',
  },
];

const linkClass = cn(
  'text-p5 text-text-text-and-icon py-3 px-6',
  'hover:bg-bg-breadcrumb-bar',
  'flex relative border-b border-bg-grid-border',
);

export const SettingNavigation = () => {
  return (
    <>
      <NavigationMenu.Root
        orientation="vertical"
        className={cn(
          'overflow-x-hidden overflow-y-auto',
          'border-r dark:border-bg-top-header border-bg-grid-border ml-4 h-screen w-[208px]',
        )}
      >
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <div
                className={cn(
                  `${linkClass}`,
                  'text-h6 dark:text-text-input-value',
                  'dark:border-bg-grid-border dark:hover:bg-transparent hover:bg-transparent bg-transparent',
                )}
              >
                Setting options
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {MenuItems.map((menuItem) => {
            return (
              <NavigationMenu.Item key={menuItem.title}>
                <NavigationMenu.Link asChild>
                  <div>
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) =>
                        isActive
                          ? cn(
                              linkClass,
                              'dark:bg-bg-active-selection bg-bg-breadcrumb-bar text-text-input-value',
                            )
                          : linkClass
                      }
                    >
                      {({ isActive }) => {
                        return (
                          <>
                            {isActive && (
                              <div className="absolute w-1 left-0 top-0 bottom-0 bg-accent-accent" />
                            )}
                            <div className="overflow-wrap">{menuItem.title}</div>
                          </>
                        );
                      }}
                    </NavLink>
                  </div>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}

          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <div
                className={cn(
                  `${linkClass} mt-6`,
                  'text-h6 dark:text-text-input-value',
                  'dark:border-bg-grid-border dark:hover:bg-transparent hover:bg-transparent bg-transparent',
                )}
              >
                Threat intel rules
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          {FeedMenuItems.map((menuItem) => {
            return (
              <NavigationMenu.Item key={menuItem.title}>
                <NavigationMenu.Link asChild>
                  <div>
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) =>
                        isActive
                          ? cn(
                              linkClass,
                              'dark:bg-bg-active-selection bg-bg-breadcrumb-bar text-text-input-value',
                            )
                          : linkClass
                      }
                    >
                      {({ isActive }) => {
                        return (
                          <>
                            {isActive && (
                              <div className="absolute w-1 left-0 top-0 bottom-0 bg-accent-accent" />
                            )}
                            <div className="overflow-wrap">{menuItem.title}</div>
                          </>
                        );
                      }}
                    </NavLink>
                  </div>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <div
                className={cn(
                  `${linkClass} mt-6`,
                  'text-h6 dark:text-text-input-value',
                  'dark:border-bg-grid-border dark:hover:bg-transparent hover:bg-transparent bg-transparent',
                )}
              >
                Posture controls
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {PostureControlMenuItems.map((menuItem) => {
            return (
              <NavigationMenu.Item key={menuItem.title}>
                <NavigationMenu.Link asChild>
                  <div>
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) =>
                        isActive
                          ? cn(
                              linkClass,
                              'dark:bg-bg-active-selection bg-bg-breadcrumb-bar text-text-input-value',
                            )
                          : linkClass
                      }
                    >
                      {({ isActive }) => {
                        return (
                          <>
                            {isActive && (
                              <div className="absolute w-1 left-0 top-0 bottom-0 bg-accent-accent" />
                            )}
                            <div className="overflow-wrap">{menuItem.title}</div>
                          </>
                        );
                      }}
                    </NavLink>
                  </div>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

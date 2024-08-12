import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/css/globals.css';
import './_assets/css/font.css';

export const metadata: Metadata = {
  title: 'GalaxyGame',
  description: 'GalaxyGame - product by A3 Global',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}

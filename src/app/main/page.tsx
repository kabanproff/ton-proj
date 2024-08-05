'use client';

import { Cell, Image, List, Section } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link/Link';

import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';
import tonSvg from '../_assets/ton.svg';
import { BackButton } from '@/components/BackButton/BackButton';

export default function Home() {
  return (
    <List>
      <Section footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'>
        <SectionHeader>
          Features
          <BackButton />
        </SectionHeader>
        <Link href='/ton-connect'>
          <Cell
            before={
              <Image
                src={tonSvg.src}
                style={{ backgroundColor: '#007AFF' }}
                alt='Logo Ton'
              />
            }
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link href='/init-data'>
          <Cell subtitle='User data, chat information, technical data'>
            Init Data
          </Cell>
        </Link>
        <Link href='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>
            Launch Parameters
          </Cell>
        </Link>
        <Link href='/theme-params'>
          <Cell subtitle='Telegram application palette information'>
            Theme Parameters
          </Cell>
        </Link>
      </Section>
    </List>
  );
}

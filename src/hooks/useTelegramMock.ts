import { useClientOnce } from '@/hooks/useClientOnce';
import { mockTelegramEnv, parseInitData, retrieveLaunchParams } from '@telegram-apps/sdk-react';

/**
 * Mocks Telegram environment in development mode.
 */
export function useTelegramMock(): void {
  useClientOnce(() => {
    // Важно, чтобы фиктивная среда использовалась только в целях разработки. При сборке
    // приложения import.meta.env.DEV станет ложным, а код внутри будет tree-shaken,
    // поэтому вы не увидите его в вашем окончательном пакете.

    let shouldMock: boolean;

    // Попытаемся извлечь параметры запуска, чтобы проверить, основана ли текущая среда на Telegram.
    try {
      // Если нам удалось извлечь параметры запуска, значит, мы уже в среде Telegram. Поэтому нет необходимости ее имитировать.
      retrieveLaunchParams();

      // Ранее мы могли имитировать среду. Если мы это сделали, нам следует сделать это снова. Причина
      // в том, что страница может быть перезагружена, и нам следует снова применить имитирование, поскольку имитирование также
      // позволяет изменять объект окна.
      shouldMock = !!sessionStorage.getItem('____mocked');
    } catch (e) {
      shouldMock = true;
    }

    if (shouldMock) {
      const initDataRaw = new URLSearchParams([
        ['user', JSON.stringify({
          id: 99281932,
          first_name: 'Kristina',
          last_name: 'Poluyanova',
          username: 'rogue',
          language_code: 'en',
          is_premium: true,
          allows_write_to_pm: true,
        })],
        ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
        ['auth_date', '1716922846'],
        ['start_param', 'debug'],
        ['chat_type', 'sender'],
        ['chat_instance', '8428209589180549439'],
      ]).toString();

      mockTelegramEnv({
        themeParams: {
          accentTextColor: '#6ab2f2',
          bgColor: '#17212b',
          buttonColor: '#5288c1',
          buttonTextColor: '#ffffff',
          destructiveTextColor: '#ec3942',
          headerBgColor: '#17212b',
          hintColor: '#708499',
          linkColor: '#6ab3f3',
          secondaryBgColor: '#232e3c',
          sectionBgColor: '#17212b',
          sectionHeaderTextColor: '#6ab3f3',
          subtitleTextColor: '#708499',
          textColor: '#f5f5f5',
        },
        initData: parseInitData(initDataRaw),
        initDataRaw,
        version: '7.2',
        platform: 'tdesktop',
      });
      sessionStorage.setItem('____mocked', '1');

      console.info(
        'Пока текущая среда не рассматривалась как среда на основе Telegram, она была имитирована. Обратите внимание, что вам не следует делать этого в производстве, а текущее поведение характерно только для процесса разработки. Имитация среды также применяется только в режиме разработки. Таким образом, после сборки приложения вы не увидите этого поведения и соответствующего предупреждения, приводящего к сбою приложения вне Telegram'
      );
    }
  });
}
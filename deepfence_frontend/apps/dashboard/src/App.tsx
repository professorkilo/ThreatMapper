import './index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import {
  GlobalModalStackContext,
  GlobalModalStackItem,
} from '@/components/detail-modal-stack';
import { queryClient } from '@/queries/client';
import { router } from '@/routes';
import { ThemeProvider, useThemeMode } from '@/theme/ThemeContext';
import { useDocumentTitle } from '@/utils/useDocumentTitle';

function App() {
  const { setMode, userSelectedMode, mode } = useThemeMode();
  const [globalModalStackItems, setGlobalModalStackItems] = useState<
    GlobalModalStackItem[]
  >([]);
  useDocumentTitle();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={{ setMode, mode, userSelectedMode }}>
        <GlobalModalStackContext.Provider
          value={{
            items: globalModalStackItems,
            setItems: setGlobalModalStackItems,
          }}
        >
          <Toaster
            theme={mode === 'dark' ? 'dark' : 'light'}
            toastOptions={{
              unstyled: true,
              classNames: {
                toast:
                  'rounded-sm flex items-center gap-2 w-full bg-bg-top-header text-white text-p1 px-4 py-2 shadow-md ',
                success: '!bg-status-success',
                error: '!bg-status-error',
                info: '!bg-status-info',
                warning: '!bg-status-warning',
                default: '!bg-bg-tooltip',
              },
            }}
          />
          <RouterProvider router={router} />
        </GlobalModalStackContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

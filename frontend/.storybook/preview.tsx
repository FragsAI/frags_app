/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
import 'tailwindcss/tailwind.css';


interface ImportMeta {
  readonly env: ImportMetaEnv;
}


import React from 'react'
import type { Preview } from "@storybook/react";
import { ClerkProvider } from "@clerk/clerk-react"
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {

      return (
        <MemoryRouter>
          <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <Story />
          </ClerkProvider>
        </MemoryRouter>
      )
    }
  ]
};

export default preview;

import { FC } from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        HEADER
      </header>
      <main>
        {children}
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  );
};

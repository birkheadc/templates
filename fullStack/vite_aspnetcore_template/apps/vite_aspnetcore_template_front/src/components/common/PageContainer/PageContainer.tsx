type PageContainerProps = {
  children?: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps): JSX.Element | null {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      <div className="max-w-6xl p-4 m-auto min-h-svh-nav">{children}</div>
    </div>
  );
}

export default PageContainer;

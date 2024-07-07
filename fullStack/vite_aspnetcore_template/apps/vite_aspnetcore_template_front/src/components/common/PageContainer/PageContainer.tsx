type PageContainerProps = {
  children?: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps): JSX.Element | null {
  return (
    <div className="bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-neutral-200">
      <div className="p-4 m-auto max-w-7xl min-h-svh-nav">{children}</div>
    </div>
  );
}

export default PageContainer;

type PageContainerProps = {
  children?: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps): JSX.Element | null {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <div className="max-w-6xl p-4 m-auto min-h-svh-nav">{children}</div>
    </div>
  );
}

export default PageContainer;

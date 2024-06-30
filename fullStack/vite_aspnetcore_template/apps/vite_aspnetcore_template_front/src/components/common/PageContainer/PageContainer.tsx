type PageContainerProps = {
  children?: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps): JSX.Element | null {
  return (
    <div className="bg-primary-200 ">
      <div className="p-4 m-auto max-w-7xl bg-neutral-50 min-h-svh-nav">
        {children}
      </div>
    </div>
  );
}

export default PageContainer;

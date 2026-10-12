type ContentListProps<T> = {
  title?: string;
  data?: T[];
  renderItem: (item: T) => React.ReactNode;
  listClassName?: string;
  isLoading?: boolean;
  skeleton?: React.ReactNode;
  emptyMessage?: React.ReactNode;
  rowKey?: (item: T, index: number) => string | number;
};

const SKELETON_ITEM_COUNT = 10;

export const ContentList = <T,>({
  data = [],
  renderItem,
  listClassName,
  isLoading,
  skeleton,
  emptyMessage,
  rowKey,
}: ContentListProps<T>) => {
  if (data.length === 0 && !isLoading && emptyMessage) {
    return <div>{emptyMessage}</div>;
  }

  return (
    <section>
      <ul className={listClassName}>
        {isLoading && skeleton
          ? Array.from({ length: SKELETON_ITEM_COUNT }).map((_, i) => (
              <li key={`skeleton-${i}`}>{skeleton}</li>
            ))
          : data.map((item, index) => {
              const key = rowKey ? rowKey(item, index) : index;
              return <li key={key}>{renderItem(item)}</li>;
            })}
      </ul>
    </section>
  );
};

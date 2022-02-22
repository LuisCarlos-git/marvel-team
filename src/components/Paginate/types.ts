export type PaginateProps = {
  limit: number;
  offset: number;
  total: number;
  updateOffset: (updatedOffset: number) => void;
};

import { useCallback } from 'react';
import * as Styled from './styles';
import { PaginateProps } from './types';

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Paginate = ({ limit, offset, total, updateOffset }: PaginateProps) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const totalPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  const updatedOffset = useCallback(
    (page: number) => {
      updateOffset((page - 1) * limit);
    },
    [limit, updateOffset]
  );

  return (
    <Styled.Wrapper>
      {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
        .map((_, index) => index + firstPage)
        .map(page => (
          <li key={page}>
            <Styled.PageItem
              active={page === currentPage}
              onClick={() => updatedOffset(page)}
            >
              {page}
            </Styled.PageItem>
          </li>
        ))}
    </Styled.Wrapper>
  );
};

export default Paginate;

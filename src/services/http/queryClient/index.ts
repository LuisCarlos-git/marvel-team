import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

// {
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       onError: err => console.log(err),
//     },
//   },
// }

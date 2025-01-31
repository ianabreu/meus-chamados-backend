interface PaginationResult<T> {
  results: T[];
  pagination: {
    total: number;
    last_page: number;
    current_page: number;
    has_next_page: boolean;
    has_previous_page: boolean;
  };
}

export function paginate<T>(
  results: T[],
  total: number,
  limit: number,
  page: number
): PaginationResult<T> {
  if (total === 0) {
    return {
      results,
      pagination: {
        total,
        last_page: 1,
        current_page: page,
        has_next_page: page < 1,
        has_previous_page: page > 1,
      },
    };
  }

  const last_page = Math.ceil(total / limit);
  if (page > last_page) {
    throw new Error("Página inválida");
  }
  return {
    results,
    pagination: {
      total,
      last_page,
      current_page: page,
      has_next_page: page < last_page,
      has_previous_page: page > 1,
    },
  };
}

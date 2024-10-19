interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface TBook {
  id: number;
  title: string;
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    [key: string]: string;
  };
  download_count: number;
}

export type TTopicState = {
  topic: string;
  subjects: string[];
  setTopic: React.Dispatch<React.SetStateAction<string>>;
}

export type TBookCard = {
  book: TBook;
  isWishlisted: boolean;
  toggleWishlist: (id: string) => void
}

export interface TPaginationProps {
  currentPage: number;
  nextPage: string | null;
  previousPage: string | null;
  setCurrentPage: (page: number) => void;
}
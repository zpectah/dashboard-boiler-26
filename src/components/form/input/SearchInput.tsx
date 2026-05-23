import { forwardRef } from 'react';
import { IconSearch } from '@tabler/icons-react';
import InputPlus from './InputPlus';
import type { SearchInputProps } from './types';

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const { adornment, ...rest } = props;

    return (
      <InputPlus
        ref={ref}
        startAdornment={<IconSearch />}
        endAdornment={adornment}
        {...rest}
      />
    );
  },
);

export default SearchInput;

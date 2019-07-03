import { MatPaginatorIntl } from '@angular/material';
export class MatPaginatorIntlSrb extends MatPaginatorIntl {
  itemsPerPageLabel = 'Ставка по страници';
  nextPageLabel = 'Следећа страница';
  previousPageLabel = 'Претходна страница';

  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 од ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' од ' + length;
  };
}
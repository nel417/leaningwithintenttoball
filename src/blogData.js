import smiths1 from '../public/smiths/thesmiths.jpg'
import crumb1 from '../public/crumbsuckers/IMG_2605.jpg'
import crumb2 from '../public/crumbsuckers/IMG_2606.jpg'
import { smithsCopy } from './copy/smithsCopy';
import { crumbsuckersCopy } from './copy/crumbsuckersCopy';

export const blogData = [
    {
      id: 1,
      itemIndex: '01',
      itemName: 'Crumbsuckers - "Life Of Dreams"',
      itemYear: '1986',
      itemImg: [crumb1, crumb2],
      itemCopy: crumbsuckersCopy
    },
    {
      id: 2,
      itemIndex: '02',
      itemName: 'The Smiths - "Rank"',
      itemYear: '1988',
      itemImg: [smiths1],
      itemCopy: smithsCopy
    },
  ];
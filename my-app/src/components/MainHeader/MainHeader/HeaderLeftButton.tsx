import React from 'react';
import { DropdownElementCommunity } from './DropdownElementCommunity';

export const HeaderLeftButton = () => (
  <div>
    <div>
      <a href="/">Main</a>
    </div>
    <DropdownElementCommunity />
    <div>
      <a href="/shop">Shop</a>
    </div>
  </div>
);

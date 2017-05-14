## Runtime

This looks great. Your CSS is very nice and your code is professional and of high quality.

Your front end is really good. Very satisfying. The tests were also good, with one minor error.

Main Issues:

- Your work is in the **CongressAddress** folder.
- Your code runs without errors or warnings.
- I can iterate through records, backward and forwards.
- I can go to first and last records. +2
- You display lots of records generated from **GetAddress**.
- I can switch between components with the menu. It is properly styled.
- In **SmallNumbers**, you provide a view of 1 numbers. You might have added a few more.

You have properly refactored your code into the following files or something similar:

- Address.js
- AddressShow.js
- AddressChanger
- AddressEdit
- ElfHeader
- ElfMenu
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **address-list.js** exists
- **index.js** is properly implemented
- You do a good job of formatting your code.

## Testing

You have 35 working tests and one failed test and they are refactored into 5 **modules**, at least approximately one per component.

You are using the Enzyme debug statements.

Your mistake was in **Header.test.js**. You were looking for the wrong string in the H2 element. It should have been like this:


```javascript
import React from 'react';
import Header from '../components/ElfHeader';
import {shallow} from 'enzyme';

import ElfEnzymeDebug from '../ElfEnzymeDebug.js';
const elfDebug = new ElfEnzymeDebug(true, 'AddressChanger.test.js');

describe('Header test', function () {

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to Congress Address List</h2>; <== HERE ==<
        elfDebug.getAll(wrapper, 'div');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});
```

## Get Address

Get Address is working fairly well but needs a few tweaks and is not fully integrated into **CongressAddress**.

## Commit Graded

Here is what I was looking at:


```
commit d3d54878bdf7b96fbcdfc3a5ded321f39af6e7e3
Author: exxius <mehdi.rahimi@bellevuecollege.edu>
Date:   Fri May 12 21:49:19 2017 -0700

    Week06_Midterm
```

If you feel this was the wrong commit, let me know.

## Scoring

My scoring is very subjective, but here are approximate criteria for some issues:

- No GetAddress -3
- Not enough tests -3
- Broken tests -3
- Errors or warnings at runtime -3

Extra Credit

- GetAddress works at RunTime +2
- Button goes first and last + 2

## Create Charlie Branch for Comments

Here is how I created the branch where I place your comments. First I find the commit you want me to grade. Then I:


```bash
git branch charlie-midterm
git checkout charlie-midterm
touch CharlieComments.md
```

## Push Comments

Here is how I push that branch.


```bash
git add CharlieComments.md
git commit -m "CharlieComments"
git push --set-upstream origin charlie-midterm
```

I provide a link to the comments, but if you can't find them, just go to your online repository, select the charlie-comment branch, and look for the file called **CharlieComments.md**.

============

My comments are here:



And also attached, but easier to read through the above link to your repository.

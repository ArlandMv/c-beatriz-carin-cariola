[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

# Modern Landing page for Seo specialist

This is a SPA thought for a SEO professional to display as a portfolio featuring its own Content Management System(CMS).

## Features

- Modern UI
- Cross platform
- Sanity.io CMS
- Contact form

## Lessons Learned

- Benefits of using a naming convention like BEM (Block-Element-Modifier)

**Problem**

If someone decides to contact the client through the form instead of the easy callme or emailme buttons

then, such person will have to wait until the client eventually manualy checks the CMS for new contacts

And even then, new entries are not distinguable from old ones.

**Solution**

Implement [formSubit](https://formsubmit.co/) to handle emails and also keep the CMS functionality as a way to keep track off the forms.

**Lesson to remember**

Even if something can be done with the same tool, it doesnt mean its the best way

Being more pecific:

The CMS has the functionality of retrieving the form information

## Tech Stack

**Client:** React, Sass(.scss)

**Server:** Sanity.io(CMS)

## Used By

This project is used by the following clients:

- Beatriz Marin Cariola: [netlify-page](https://beatriz-marin.netlify.app/)

## Installation & Integration

Prerequisites:

- Get a [Sanity.io](https://www.sanity.io/) account
- Have Node and Git installed.

1. Create a project and get its **ID** to substitude **REACT_APP_SANITY_PROJECT_ID** in your own .env file.
2. Get a **TOKEN** to substitude **REACT_APP_SANITY_TOKEN** in the same .env file.
3. Clone my repo and install dependencies
4. SetUp backend with your Sanity account
5. SetUp frontend by substituding viariables in .env file

<!-- ```bash
  git https://github.com/ArlandMv/c-beatriz-carin-cariola
  cd backend
  npm install
  cd ../frontend
```
     -->

## Deployment

To deploy this project:

- get a [Netlify](https://www.netlify.com/) account
- Build

```bash
  cd frontend
  npm run build
```

-Drag & Drop the **build** folder

## Optimizations

Optimizations I want to make to this project:

- Form to email
- Accessibility
- Performance (Easy Loading)
- Set up scripts to host in firebase
- Integrate Form to google calendar

## Profiles

- [Github](https://www.github.com/arlandmv)
- [Frontend Mentor](https://www.frontendmentor.io/profile/ArlandMv)

## License

[MIT](https://choosealicense.com/licenses/mit/)

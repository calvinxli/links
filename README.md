## Setting Up From Scratch
1. Install [`node.js`](https://nodejs.org/en/download/current).
2. Bootstrap the project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), choose typescipt and default options
```
# tl;dr
npx create-next-app@latest
```
3. Create/edit your `next.config.js` file (you can just copy mine but change `basePath` to match your repo's name - reference [`nextjs-github-pages`](https://github.com/gregrickaby/nextjs-github-pages#configure-nextjs)
4. Place a `.nojekyll` file in `/public` - reference [`nextjs-github-pages`]([https://github.com/gregrickaby/nextjs-github-pages](https://github.com/gregrickaby/nextjs-github-pages#configure-nextjs)
5. Remove `/` prefix from the `src` attribute of the `Image` elements in `page.tsx`
6. (Optional) Add a [`LICENSE`](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) and/or `README.md` to your repo
7. Install `git` following these [`instructions`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
8. Create your public GitHub repository and import your local code following [`this guide`](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
9. Navigate to your repository's `Settings -> Pages -> Build and deployment -> Source` and choose `GitHub Actions` from the dropdown
10. Click the `Configure` button under the `Next.js` card and commit the file it generates

Each push to `main` branch should trigger a deployment of the page which will be available at `https://your-github-name.github.io/your-repo-name`. The link should also be available at `Settings -> Pages` once the site is live.
Check the `Actions` tab on your repo for deployment status. 
___________________
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

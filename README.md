This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Functional requirements for the project

Create a next.js app to showcase a counter that has the ability to increment and decrement by 1.
Add another instance of this component, right next to the previous one. The second instance will have an additional input box which will take in a value with which the counter will increment and decrement.
For example, if I set this value to 4, the counter should increment by 4 when the increment button is pressed and decrement by 4 when the decrement button is pressed. Handle all edge cases for this scenario. 

Following are the constraints to be adhered to:

1. Create a useCounter hook to extract this functionality into a hook.
2. Use tailwind css and add a toggle button to the ui to toggle dark mode on and off. This functionality should also be extracted to a hook called useDarkMode.
3. Use an httpOnly cookie to store the counter values and darkmode flag. When the browser is refreshed, these values should be persisted. Also handle the case where the cookies are manually deleted.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

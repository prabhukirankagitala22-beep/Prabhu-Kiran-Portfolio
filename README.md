# Kagitala Prabhukiran — Portfolio

A responsive React + Vite + Tailwind CSS 4 + Framer Motion + Lucide React portfolio with dark/light mode, animated sections, project details, editable content, and an email-app contact form.

## Run in VS Code

1. Install Node.js 20.19+ or 22.12+ (recommended: current LTS).
2. Extract this ZIP and open the `prabhukiran-portfolio` folder in VS Code.
3. Open Terminal > New Terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Customize

- **Personal information, skills, projects, certificates, social links:** edit `src/data.js`.
- **Profile photo:** add your image at `public/profile.jpg`, then set `photo: '/profile.jpg'` in `src/data.js`.
- **Resume:** replace `public/resume.pdf` with your latest resume; the download button already points to it.
- **Social links:** fill in the URLs in `profile.social` in `src/data.js`. Missing links are shown as disabled icons, not fake destinations.
- **Project code and demos:** add your verified URLs to `github` and `demo` for each project in `src/data.js`.
- **Certificate previews:** put certificate images in `public/` and set each certification's `image` to a path such as `/genai-certificate.jpg`.
- **Frontend skills:** add technologies you actually studied to the `frontendSkills` array.
- **Theme/colors/layout:** edit `src/style.css`.

## Contact form

The form validates required fields and email format using native browser validation. Submitting opens the visitor's default email application with the subject and message prefilled. It does **not** silently send an email or require a backend. For direct sending from the website, integrate a verified service such as EmailJS or a serverless API endpoint and add spam protection.

## Deployment

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Set framework preset **Vite** (if not detected), build command `npm run build`, and output directory `dist`.
4. Deploy.

### Netlify

1. Push to GitHub, then import at https://app.netlify.com/.
2. Set build command `npm run build` and publish directory `dist`.
3. Deploy.

This is a single-page website using in-page anchor navigation; no routing redirects are required.

## Notes

The portfolio intentionally does not invent GitHub URLs, model scores, certificate issuers/dates, or frontend technologies that were not specified. The portrait uses a styled initials placeholder until you add a photo. The included resume is the PDF provided with the request.

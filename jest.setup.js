require("@testing-library/jest-dom");

// ESM-only Vercel tracking script: Jest can't load it, and it renders nothing visible.
jest.mock("@vercel/speed-insights/next", () => ({ SpeedInsights: () => null }));
